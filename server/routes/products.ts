import { Router, Request, Response } from 'express'
import products from '../data/products.json'

const router = Router()

router.get('/', (_req: Request, res: Response) => {
	res.json({ data: products })
})

router.get('/:id', (req: Request, res: Response) => {
	const product = products.find((p: { id: string }) => p.id === req.params.id)
	if (!product) return res.status(404).json({ error: 'Product not found' })
	res.json({ data: product })
})

export default router
