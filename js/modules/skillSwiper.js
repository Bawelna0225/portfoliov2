export const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: false,
	centeredSlides: false,
	slidesPerView: 1.1,
	spaceBetween: 20,
	pagination: {
		el: '.swiper-pagination',
		dynamicBullets: false,
	},
	breakpoints: {
		520: {
			slidesPerView: 1.4,
		},
		640: {
			slidesPerView: 2.4,
		},
		968: {
			slidesPerView: 3.4,
		},
		1300: {
			slidesPerView: 4.4,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})