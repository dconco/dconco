import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";

import type { Product, LicenseType } from "../../contexts/CartContext";
import { BadgePill } from "../ui/BadgePill";

type ProductPreviewDialogProps = {
	product?: Product | null;
	isOpen: boolean;
	onClose: () => void;
	onAddToCart: (product: Product, license: LicenseType) => void;
	isInCart: (productId: string, license: LicenseType) => boolean;
};

export function ProductPreviewDialog({
	product,
	isOpen,
	onClose,
	onAddToCart,
	isInCart,
}: ProductPreviewDialogProps) {
	const [selectedLicense, setSelectedLicense] = useState<LicenseType>("full");
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

	const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

	useEffect(() => {
		if (isOpen && product) {
			setSelectedLicense("full");
		}
	}, [isOpen, product]);

	if (!product) return null;

	const formatPrice = (amount: number) => {
		return new Intl.NumberFormat("en-NG", {
			style: "currency",
			currency: "NGN",
			minimumFractionDigits: 0,
		}).format(amount);
	};

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
				isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
			}`}
		>
			<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

			<div
				className={`relative z-10 max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-surface-container-low shadow-2xl transition-all duration-500 ${
					isOpen ? "translate-y-0 scale-100" : "translate-y-8 scale-95"
				}`}
			>
				<div className="flex h-14 items-center justify-between border-b border-outline-variant/20 px-6">
					<span className="font-nav-link text-xs uppercase tracking-widest text-on-surface-variant">
						Product Preview
					</span>
					<button
						onClick={onClose}
						className="rounded-full p-1 text-on-surface-variant transition-colors hover:bg-surface-container-highest hover:text-on-surface"
					>
						<Icon icon="material-symbols:close-rounded" className="text-2xl" />
					</button>
				</div>

				<div className="overflow-y-auto" style={{ maxHeight: "calc(90vh - 3.5rem)" }}>
					{product.images.length > 0 && (
						<div className="relative bg-black">
							<div className="overflow-hidden" ref={emblaRef}>
								<div className="flex">
									{product.images.map((img, index) => (
										<div key={index} className="flex-[0_0_100%] min-w-0">
											<img
												src={img}
												alt={`${product.name} screenshot ${index + 1}`}
												className="h-[250px] w-full object-contain md:h-[350px] lg:h-[420px]"
											/>
										</div>
									))}
								</div>
							</div>

							{product.images.length > 1 && (
								<>
									<button
										onClick={scrollPrev}
										className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
									>
										<Icon icon="material-symbols:chevron-left" className="text-2xl" />
									</button>
									<button
										onClick={scrollNext}
										className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
									>
										<Icon icon="material-symbols:chevron-right" className="text-2xl" />
									</button>
								</>
							)}

							{product.images.length > 1 && (
								<div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
									{product.images.map((_, index) => (
										<div
											key={index}
											className="h-2 w-2 rounded-full bg-white/40 transition-colors"
											data-active={index}
										/>
									))}
								</div>
							)}
						</div>
					)}

					<div className="space-y-8 p-6 md:p-10">
						<div className="space-y-4">
							<div className="flex flex-wrap gap-2">
								{product.tags.map((tag) => (
									<span
										key={tag}
										className="rounded-full bg-surface-container-highest/50 px-3 py-1 text-xs text-on-surface-variant"
									>
										{tag}
									</span>
								))}
							</div>

							<h2 className="font-headline text-3xl text-on-surface md:text-5xl">
								{product.name}
							</h2>

							<p className="text-xl leading-relaxed text-on-surface-variant">
								{product.tagline}
							</p>
						</div>

						{product.demoUrl && (
							<a
								href={product.demoUrl}
								target="_blank"
								rel="noreferrer"
								className="group inline-flex items-center gap-2 font-bold text-primary"
							>
								View Live Demo
								<Icon
									icon="material-symbols:open-in-new-rounded"
									className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
								/>
							</a>
						)}

						<div className="space-y-4">
							<h3 className="font-headline text-2xl text-on-surface">Full Description</h3>
							<p className="leading-relaxed text-on-surface-variant">{product.description}</p>
						</div>

						<div className="space-y-6">
							<h3 className="font-headline text-2xl text-on-surface">Purchase Options</h3>

							<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
								{(["frontend", "backend", "full"] as LicenseType[]).map((license) => {
									const licensePrice = product.price[license];
									if (licensePrice === 0) return null;

									const isInCartStatus = isInCart(product.id, license);
									const isSelected = selectedLicense === license;

									return (
										<button
											key={license}
											disabled={isInCartStatus}
											onClick={() => setSelectedLicense(license)}
											className={`relative flex flex-col gap-3 rounded-xl border p-6 text-left transition-all ${
												isInCartStatus
													? "cursor-not-allowed border-primary bg-primary/10"
													: isSelected
													? "border-primary bg-primary/5"
													: "border-outline-variant/30 bg-surface-container hover:border-primary/50"
											}`}
										>
											{isInCartStatus && (
												<div className="absolute right-3 top-3">
													<BadgePill className="bg-primary text-on-primary">
														<Icon icon="material-symbols:check-rounded" className="text-sm" />
														IN CART
													</BadgePill>
												</div>
											)}

											<span className="font-nav-link text-xs uppercase tracking-widest text-on-surface-variant">
												{license === "frontend"
													? "Frontend Only"
													: license === "backend"
													? "Backend Only"
													: "Full Package"}
											</span>

											<span className="font-headline text-2xl font-bold text-on-surface">
												{formatPrice(licensePrice)}
											</span>
										</button>
									);
								})}
							</div>

							<div className="flex flex-col gap-4 pt-6 sm:flex-row">
								<button
									onClick={() => onAddToCart(product, selectedLicense)}
									disabled={isInCart(product.id, selectedLicense)}
									className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-8 py-4 font-bold transition-all ${
										isInCart(product.id, selectedLicense)
											? "bg-surface-container-high text-on-surface-variant"
											: "bg-primary text-on-primary hover:bg-primary/80"
									}`}
								>
									<Icon
										icon={
											isInCart(product.id, selectedLicense)
												? "material-symbols:check-rounded"
												: "material-symbols:add-shopping-cart"
										}
										className="text-xl"
									/>
									{isInCart(product.id, selectedLicense)
										? "Added to Cart"
										: `Add ${selectedLicense === "frontend" ? "Frontend" : selectedLicense === "backend" ? "Backend" : "Full"} to Cart`}
								</button>

								<button
									onClick={onClose}
									className="rounded-full border border-outline-variant/40 px-8 py-4 font-bold text-on-surface-variant transition-colors hover:bg-surface-container"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
