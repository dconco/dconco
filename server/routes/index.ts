import { Router, Request, Response } from 'express'
import { parseTime } from '../utils/time'
import productsRouter from './products'
import wakatimeRouter from './wakatime'
import gamesRouter from './games'

const router = Router()
const start_time = Date.now()

router.get('/health', (_req: Request, res: Response) =>
	res.json({ status: 'ok', uptime: parseTime(start_time) })
)

router.use('/products', productsRouter)
router.use('/wakatime', wakatimeRouter)
router.use('/games', gamesRouter)

export default router
