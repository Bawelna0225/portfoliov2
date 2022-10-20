export const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			entry.target.classList.toggle('shown', entry.isIntersecting)
			if (entry.isIntersecting) observer.unobserve(entry.target)
		})
	},
	{
		rootMargin: '0%',
		threshold: 0.6,
	}
)
