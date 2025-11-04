// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle')
const navLinks = document.querySelector('.nav-links')

if (mobileMenuToggle && navLinks) {
	mobileMenuToggle.addEventListener('click', () => {
		mobileMenuToggle.classList.toggle('active')
		navLinks.classList.toggle('active')
	})

	// Close menu when clicking on a link
	document.querySelectorAll('.nav-links a').forEach(link => {
		link.addEventListener('click', () => {
			mobileMenuToggle.classList.remove('active')
			navLinks.classList.remove('active')
		})
	})

	// Close menu when clicking outside
	document.addEventListener('click', e => {
		if (!e.target.closest('nav') && navLinks.classList.contains('active')) {
			mobileMenuToggle.classList.remove('active')
			navLinks.classList.remove('active')
		}
	})
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const target = document.querySelector(this.getAttribute('href'))
		if (target) {
			target.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	})
})

// Add scroll effect to navigation
const nav = document.querySelector('nav')
if (nav) {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 100) {
			nav.style.background = 'rgba(15, 15, 35, 0.98)'
			nav.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)'
		} else {
			nav.style.background = 'rgba(15, 15, 35, 0.95)'
			nav.style.boxShadow = 'none'
		}
	})
}

/*
// Animate elements on scroll
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px',
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate-in')
		}
	})
}, observerOptions)

document.querySelectorAll('.project-card, .skill-category, .ai-bot-card, .resume-preview').forEach(el => {
	observer.observe(el)
})
*/
