import { Router, Request, Response } from 'express'
import { parseTime } from '../utils/time'
import productsRouter from './products'

const router = Router()
const start_time = Date.now()

router.get('/health', (_req: Request, res: Response) =>
	res.json({ status: 'ok', uptime: parseTime(start_time) })
)

router.use('/products', productsRouter)

export default router
