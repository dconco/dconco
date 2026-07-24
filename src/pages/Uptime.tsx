import type React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

interface Monitor {
   id: number
   friendly_name: string
   url: string
   status: number // 0=paused, 1=not checked, 2=up, 8=seems down, 9=down
   uptime_ratio: string
   uptime_ratio_30?: string
   uptime_ratio_90?: string
   average_response_time: string
   logs?: MonitorLog[]
}

interface MonitorLog {
   type: number
   datetime: number
   duration?: number
   reason?: string
}

interface ServerHealth {
   status: string
   uptime: string
}

const statusMap: Record<number, { label: string; color: string; icon: string; dot: string }> = {
   2: { label: 'Operational', color: 'text-primary', icon: 'material-symbols:check-circle-outline-rounded', dot: 'bg-primary' },
   8: { label: 'Degraded', color: 'text-secondary', icon: 'material-symbols:warning-outline-rounded', dot: 'bg-secondary' },
   9: { label: 'Down', color: 'text-tertiary', icon: 'material-symbols:cancel-outline-rounded', dot: 'bg-tertiary' },
   0: { label: 'Paused', color: 'text-on-surface-variant', icon: 'material-symbols:pause-circle-outline-rounded', dot: 'bg-on-surface-variant' },
   1: { label: 'Checking', color: 'text-on-surface-variant', icon: 'material-symbols:pending-outline-rounded', dot: 'bg-on-surface-variant' },
}

const logStatus = (type: number) => type === 1
   ? { label: 'Failed', color: 'text-tertiary', dot: 'bg-tertiary' }
   : type === 2
      ? { label: 'Operational', color: 'text-primary', dot: 'bg-primary' }
      : { label: 'Status change', color: 'text-secondary', dot: 'bg-secondary' }

const formatLogDate = (timestamp: number) => new Date(timestamp * 1000).toLocaleString([], {
   month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit',
})

const averageUptime = (monitors: Monitor[], period: '30' | '90') => {
   const values = monitors
      .map(monitor => Number.parseFloat(period === '30' ? (monitor.uptime_ratio_30 ?? monitor.uptime_ratio) : (monitor.uptime_ratio_90 ?? '')))
      .filter(value => Number.isFinite(value))
   return values.length ? `${(values.reduce((total, value) => total + value, 0) / values.length).toFixed(2)}%` : '—'
}


export default function Uptime(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   const [monitors, setMonitors] = useState<Monitor[]>([])
   const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false)
   const [lastChecked, setLastChecked] = useState<Date | null>(null)
   const [serverHealth, setServerHealth] = useState<ServerHealth | null>(null)
   const [serverError, setServerError] = useState(false)

   const fetchMonitors = () => {
      setLoading(true)
      setError(false)

      // Fetch server health
      fetch(`${import.meta.env.VITE_API_BASE_URL}/api/health`)
         .then(r => r.json())
         .then(d => setServerHealth(d))
         .catch(() => setServerError(true))

      fetch('https://api.uptimerobot.com/v2/getMonitors', {
         method: 'POST',
         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         body: new URLSearchParams({
            api_key: import.meta.env.VITE_UPTIMEROBOT_API_KEY ?? '',
            format: 'json',
            custom_uptime_ratios: '30-90',
            response_times: '1',
            response_times_limit: '1',
            logs: '1',
            logs_limit: '8',
         }),
      })
         .then(r => r.json())
         .then(d => {
            if (d.stat === 'ok') {
               setMonitors(d.monitors ?? [])
               setLastChecked(new Date())
            } else {
               setError(true)
            }
         })
         .catch(() => setError(true))
         .finally(() => setLoading(false))
   }

   useEffect(() => { fetchMonitors() }, [])

   const allUp = monitors.length > 0 && monitors.every(m => m.status === 2)
   const anyDown = monitors.some(m => m.status === 9)

   return (
      <main className="mx-auto max-w-5xl space-y-12 px-5 pb-24 pt-28 sm:px-8 md:pt-32 lg:px-12">

         {/* Header */}
         <section className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               System Status
            </div>
            <div className="flex items-start justify-between gap-4">
               <h1 className="font-headline text-5xl font-bold text-on-surface">Uptime</h1>
               <button
                  onClick={fetchMonitors}
                  disabled={loading}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-outline-variant/20 px-4 py-2 text-xs text-on-surface-variant transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
               >
                  <Icon icon="material-symbols:refresh-rounded" className={loading ? 'animate-spin' : ''} />
                  Refresh
               </button>
            </div>

            {!loading && !error && (
               <div className={`inline-flex items-center gap-3 rounded-full border px-5 py-3 ${allUp ? 'border-primary/30 bg-primary/10' : anyDown ? 'border-tertiary/30 bg-tertiary/10' : 'border-secondary/30 bg-secondary/10'}`}>
                  <span className={`h-2.5 w-2.5 animate-pulse rounded-full ${allUp ? 'bg-primary' : anyDown ? 'bg-tertiary' : 'bg-secondary'}`} />
                  <span className={`text-sm font-bold ${allUp ? 'text-primary' : anyDown ? 'text-tertiary' : 'text-secondary'}`}>
                     {allUp ? 'All systems operational' : anyDown ? 'Service disruption detected' : 'Partial degradation'}
                  </span>
               </div>
            )}
         </section>

         {/* Uptime overview */}
         <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container px-4 py-5 sm:px-6">
               <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">30 day uptime</p>
               <p className="mt-2 font-headline text-2xl font-bold text-primary">{loading ? '—' : averageUptime(monitors, '30')}</p>
               <p className="mt-1 text-[11px] text-on-surface-variant">Rolling average</p>
            </div>
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container px-4 py-5 sm:px-6">
               <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">90 day uptime</p>
               <p className="mt-2 font-headline text-2xl font-bold text-secondary">{loading ? '—' : averageUptime(monitors, '90')}</p>
               <p className="mt-1 text-[11px] text-on-surface-variant">Rolling average</p>
            </div>
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container px-4 py-5 sm:px-6">
               <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Services monitored</p>
               <p className="mt-2 font-headline text-2xl font-bold text-on-surface">{loading ? '—' : monitors.length}</p>
               <p className="mt-1 text-[11px] text-on-surface-variant">Live checks</p>
            </div>
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container px-4 py-5 sm:px-6">
               <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Current state</p>
               <p className={`mt-2 font-headline text-2xl font-bold ${allUp ? 'text-primary' : anyDown ? 'text-tertiary' : 'text-secondary'}`}>{loading ? '—' : allUp ? 'Stable' : anyDown ? 'Issues' : 'Watch'}</p>
               <p className="mt-1 text-[11px] text-on-surface-variant">Right now</p>
            </div>
         </section>

         <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-outline-variant/20 bg-surface-container px-6 py-5 space-y-1">
               <p className="text-xs uppercase tracking-widest text-on-surface-variant">Server process uptime</p>
               {serverHealth ? (
                  <>
                     <p className="font-headline text-3xl font-bold text-secondary">{serverHealth.uptime}</p>
                     <p className="text-xs text-on-surface-variant flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                        {serverHealth.status}
                     </p>
                  </>
               ) : serverError ? (
                  <p className="text-sm text-tertiary">Server unreachable</p>
               ) : (
                  <div className="h-8 w-32 animate-pulse rounded bg-surface-container-high" />
               )}
            </div>
         </section>

         {/* Monitors */}
         <section className="space-y-3">
            {loading && (
               <div className="space-y-3">
                  {[1, 2, 3].map(n => (
                     <div key={n} className="h-20 animate-pulse rounded-xl bg-surface-container" />
                  ))}
               </div>
            )}

            {error && (
               <div className="rounded-xl border border-outline-variant/20 bg-surface-container p-8 text-center text-on-surface-variant">
                  <Icon icon="material-symbols:cloud-off-outline-rounded" className="mx-auto mb-3 text-3xl" />
                  <p className="text-sm">Couldn't load monitor data. Check your API key or try again.</p>
               </div>
            )}

            {!loading && !error && monitors.map(monitor => {
               const s = statusMap[monitor.status] ?? statusMap[1]
               return (
                  <div key={monitor.id} className="rounded-xl border border-outline-variant/20 bg-surface-container px-5 py-5 sm:px-6">
                     <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex min-w-0 items-center gap-4">
                           <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.dot}`} />
                           <div className="min-w-0"><p className="truncate font-bold text-on-surface">{monitor.friendly_name}</p><p className="truncate text-xs text-on-surface-variant">{monitor.url}</p></div>
                        </div>
                        <div className={`inline-flex items-center gap-1.5 text-sm font-bold ${s.color}`}><Icon icon={s.icon} />{s.label}</div>
                     </div>
                     <div className="mt-5 grid grid-cols-2 gap-3 border-t border-outline-variant/15 pt-4 sm:grid-cols-3">
                        <div><p className="text-[10px] uppercase tracking-widest text-on-surface-variant">30 days</p><p className="mt-1 font-bold text-on-surface">{monitor.uptime_ratio_30 ? `${Number.parseFloat(monitor.uptime_ratio_30).toFixed(2)}%` : monitor.uptime_ratio ? `${Number.parseFloat(monitor.uptime_ratio).toFixed(2)}%` : '—'}</p></div>
                        <div><p className="text-[10px] uppercase tracking-widest text-on-surface-variant">90 days</p><p className="mt-1 font-bold text-on-surface">{monitor.uptime_ratio_90 ? `${Number.parseFloat(monitor.uptime_ratio_90).toFixed(2)}%` : '—'}</p></div>
                        <div><p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Response</p><p className="mt-1 font-bold text-on-surface">{monitor.average_response_time ? `${monitor.average_response_time}ms` : '—'}</p></div>
                     </div>
                     {monitor.logs && monitor.logs.length > 0 && (
                        <div className="mt-5 border-t border-outline-variant/15 pt-4">
                           <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Recent activity</p>
                           <div className="space-y-2">
                              {monitor.logs.slice(0, 5).map((log, index) => { const event = logStatus(log.type); return <div key={`${monitor.id}-${log.datetime}-${index}`} className="flex items-center gap-3 text-xs"><span className={`h-1.5 w-1.5 rounded-full ${event.dot}`} /><span className={`font-medium ${event.color}`}>{event.label}</span><span className="text-on-surface-variant">{formatLogDate(log.datetime)}</span>{log.duration ? <span className="ml-auto text-on-surface-variant/70">{log.duration}s</span> : null}<span className="hidden truncate text-on-surface-variant/60 sm:block">{log.reason ?? ''}</span></div> })}
                           </div>
                        </div>
                     )}
                  </div>
               )
            })}
         </section>

         {lastChecked && (
            <p className="text-center text-xs text-on-surface-variant">
               Last checked {lastChecked.toLocaleTimeString()}
            </p>
         )}

      </main>
   )
}
