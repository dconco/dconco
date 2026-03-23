import { useEffect, useState } from 'react'

export function useLoadingProgress(): number {
	const [progress, setProgress] = useState<number>(1)

	useEffect(() => {
		let isCancelled = false
		let loadingTimer: ReturnType<typeof setTimeout> | undefined
		let currentProgress = 1

		setProgress(currentProgress)

		const updateLoader = () => {
			if (isCancelled) {
				return
			}

			currentProgress = currentProgress < 98 ? currentProgress + 1 : 100
			setProgress(currentProgress)

			if (currentProgress < 100) {
				const delay = 2 + currentProgress * currentProgress * 0.03
				loadingTimer = setTimeout(updateLoader, delay)
				return
			}

			loadingTimer = setTimeout(() => {
				if (!isCancelled) {
					setProgress(0)
				}
			}, 120)
		}

		updateLoader()

		return () => {
			isCancelled = true
			if (loadingTimer) {
				clearTimeout(loadingTimer)
			}
			setProgress(0)
		}
	}, [])

	return progress
}
