import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const out = resolve(__dirname, '../public/start-time.json')
writeFileSync(out, JSON.stringify({ startedAt: Date.now() }))
console.log('start-time.json updated:', new Date().toISOString())
