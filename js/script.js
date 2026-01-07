// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		const target = document.querySelector(this.getAttribute('href'));
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
			// Close mobile menu after clicking a link
			const navLinks = document.querySelector('.nav-links');
			const menuToggle = document.querySelector('.mobile-menu-toggle');
			const menuOverlay = document.querySelector('.mobile-menu-overlay');
			if (navLinks && menuToggle && menuOverlay) {
				navLinks.classList.remove('active');
				menuToggle.classList.remove('active');
				menuOverlay.classList.remove('active');
				document.body.style.overflow = 'auto';
			}
		}
	});
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.querySelector('.mobile-menu-overlay');

if (mobileMenuToggle && navLinks && menuOverlay) {
	mobileMenuToggle.addEventListener('click', () => {
		mobileMenuToggle.classList.toggle('active');
		navLinks.classList.toggle('active');
		menuOverlay.classList.toggle('active');
		
		// Prevent body scroll when menu is open
		if (navLinks.classList.contains('active')) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	// Close menu when clicking overlay
	menuOverlay.addEventListener('click', () => {
		navLinks.classList.remove('active');
		mobileMenuToggle.classList.remove('active');
		menuOverlay.classList.remove('active');
		document.body.style.overflow = 'auto';
	});
}

// Navigation scroll effect
window.addEventListener('scroll', () => {
	const nav = document.querySelector('nav');
	const currentScroll = window.pageYOffset;

	if (currentScroll > 100) {
		nav.style.background = 'rgba(10, 10, 26, 0.98)';
		nav.style.boxShadow = '0 4px 20px rgba(124, 58, 237, 0.1)';
	} else {
		nav.style.background = 'rgba(10, 10, 26, 0.95)';
		nav.style.boxShadow = 'none';
	}
});

// Intersection Observer for scroll animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate-in');
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .contact-card').forEach(el => {
	observer.observe(el);
});

// Page ready indicator
window.addEventListener('load', () => {
	document.body.classList.add('page-loaded');
});
