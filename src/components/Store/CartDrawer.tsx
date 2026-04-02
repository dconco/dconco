import { Icon } from "@iconify/react";

import { BadgePill } from "../ui/BadgePill";
import { type LicenseType, useCart } from "../../contexts/CartContext";

type CartDrawerProps = {
	isOpen: boolean;
	onClose: () => void;
	onProceedToCheckout: () => void;
};

export function CartDrawer({ isOpen, onClose, onProceedToCheckout }: CartDrawerProps) {
	const { items, removeFromCart, clearCart } = useCart();

	const formatPrice = (amount: number) => {
		return new Intl.NumberFormat("en-NG", {
			style: "currency",
			currency: "NGN",
			minimumFractionDigits: 0,
		}).format(amount);
	};

	const licenseLabel: Record<LicenseType, string> = {
		frontend: "Frontend Only",
		backend: "Backend Only",
		full: "Full Package",
	};

	const total = items.reduce((sum, item) => {
		const price = item.product.price[item.license];
		return sum + (price || 0);
	}, 0);

	return (
		<div
			className={`fixed inset-0 z-50 transition-all duration-300 ${
				isOpen ? "pointer-events-auto" : "pointer-events-none"
			}`}
		>
			<div
				className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
					isOpen ? "opacity-100" : "opacity-0"
				}`}
				onClick={onClose}
			/>

			<div
				className={`absolute right-0 top-0 z-10 flex h-full w-full flex-col bg-surface-container-low shadow-2xl transition-transform duration-500 sm:w-[460px] ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between border-b border-outline-variant/20 px-6 py-5">
					<div className="flex items-center gap-3">
						<Icon icon="material-symbols:shopping-cart" className="text-2xl text-primary" />
						<h2 className="font-headline text-xl">Your Cart</h2>
						<BadgePill className="bg-primary-container text-on-primary-container">
							{items.length}
						</BadgePill>
					</div>
					<button
						onClick={onClose}
						className="rounded-full p-1 text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-on-surface"
					>
						<Icon icon="material-symbols:close-rounded" className="text-2xl" />
					</button>
				</div>

				<div className="flex-1 overflow-y-auto px-6 py-4">
					{items.length === 0 ? (
						<div className="flex h-full flex-col items-center justify-center gap-4 text-center">
							<Icon icon="material-symbols:shopping-cart-outline" className="text-6xl text-on-surface-variant/30" />
							<p className="font-body text-lg text-on-surface-variant">
								Your cart is empty.
							</p>
							<p className="text-sm text-on-surface-variant/60">
								Browse products to add them to your cart.
							</p>
							<button
								onClick={onClose}
								className="mt-4 rounded-full bg-primary px-8 py-3 font-bold text-on-primary transition-colors hover:bg-primary/80"
							>
								Browse Products
							</button>
						</div>
					) : (
						<ul className="space-y-4">
							{items.map((item) => (
								<li
									key={`${item.product.id}-${item.license}`}
									className="flex gap-4 rounded-xl border border-outline-variant/20 bg-surface-container p-4"
								>
									<div className="h-16 w-20 overflow-hidden rounded-lg bg-surface-container-lowest">
										{item.product.images[0] ? (
											<img
												src={item.product.images[0]}
												alt={item.product.name}
												className="h-full w-full object-cover"
											/>
										) : (
											<div className="flex h-full w-full items-center justify-center text-on-surface-variant/30">
												<Icon icon="material-symbols:image-outline" className="text-lg" />
											</div>
										)}
									</div>

									<div className="flex flex-1 flex-col justify-between gap-1">
										<div>
											<h3 className="font-headline text-sm text-on-surface">{item.product.name}</h3>
											<span className="font-nav-link text-xs uppercase tracking-widest text-on-surface-variant">
												{licenseLabel[item.license]}
											</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="font-bold text-primary">
												{formatPrice(item.product.price[item.license] || 0)}
											</span>
											<button
												onClick={() => removeFromCart(item.product.id, item.license)}
												className="rounded-full p-1 text-on-surface-variant transition-colors hover:bg-error-container hover:text-on-error"
											>
												<Icon icon="material-symbols:delete-outline" className="text-lg" />
											</button>
										</div>
									</div>
								</li>
							))}
						</ul>
					)}
				</div>

				{items.length > 0 && (
					<div className="border-t border-outline-variant/20 px-6 py-5 space-y-4">
						<div className="flex items-center justify-between">
							<span className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Total</span>
							<span className="font-headline text-2xl font-bold text-primary">
								{formatPrice(total)}
							</span>
						</div>

						<div className="flex gap-3">
							<button
								onClick={clearCart}
								className="rounded-full border border-outline-variant/40 px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:bg-surface-container-highest"
							>
								Clear
							</button>
							<button
								onClick={onProceedToCheckout}
								className="flex-1 rounded-full bg-primary px-8 py-3 text-sm font-bold uppercase tracking-widest text-on-primary shadow-lg shadow-primary/20 transition-all hover:bg-primary/80 active:scale-95"
							>
								Proceed to Checkout
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
