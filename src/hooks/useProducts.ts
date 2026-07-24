import { useEffect, useState } from 'react'
import type { Product } from '../contexts/CartContext'

type State = { products: Product[]; loading: boolean; error: string | null }

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''

export function useProducts(): State {
	const [state, setState] = useState<State>({ products: [], loading: true, error: null })

	useEffect(() => {
		fetch(`${API_BASE}/api/products`)
			.then((r) => r.json())
			.then((json) => setState({ products: json.data, loading: false, error: null }))
			.catch((e) => setState({ products: [], loading: false, error: e.message }))
	}, [])

	return state
}
