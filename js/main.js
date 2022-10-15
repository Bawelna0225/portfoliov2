const loadingFunFactContainer = document.querySelector('.fun-fact')
const funFacts = [
	`<span>Did You Know?</span><br> First ever computer mouse was made out of wood!`,
	`<span>Did You Know?</span><br> 86% of people try to plug in their USB devices upside down.`,
	`<span>Did You Know?</span><br> The first product scanned was a packet of chewing gum in 1974.`,
	`<span>Did You Know?</span><br> “Phantom Vibration Syndrome” is the name for when someone thinks their phone is vibrating, but it isn't.`,
	`<span>Did You Know?</span><br> There is special Braille technology and accessories for blind people to use cell phones.`,
	`<span>Did You Know?</span><br> Over 6,000 new computer viruses are created and released every month.`,
	`<span>Did You Know?</span><br> Comic Sans is the most hated font in the world.`,
	`<span>Did You Know?</span><br> More people have cell phones than toilets.`,
	`<span>Did You Know?</span><br> Facebook pays $500 for reporting any vulnerability in their security.`,
	`<span>Did You Know?</span><br> The first webpage is still running.`,
	`<span>Did You Know?</span><br> Most of today's successful companies started in garages.`,
	`<span>Did You Know?</span><br> About 51% of internet traffic is non-human. Over 30% is from hacking programs, spammers, and phishing.`,
	`<span>Did You Know?</span><br> The first computer virus was harmless.`,
]
// Displaying random fun fact

loadingFunFactContainer.innerHTML = funFacts[Math.floor(Math.random() * funFacts.length)]

// Removing Preloader and animating home section in
window.addEventListener('load', () => {
	setTimeout(() => {
		document.querySelector('.preloader').classList.add('loaded')
		setTimeout(() => {
			document.querySelector('#home').classList.add('active')
		}, 800)
	}, 3000)
})
// Showing back to to button
const backToTop = document.querySelector('.back-to-top')
backToTop.addEventListener('click', () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
})
window.addEventListener('scroll', () => {
	if (scrollY > 300) {
		backToTop.classList.add('active')
	} else {
		backToTop.classList.remove('active')
	}
})
// Themes
const themesBtn = document.querySelector('.themes-btn')
const themesBox = document.querySelector('#dropdown')

// Opening themes box
themesBtn.addEventListener('click', (e) => {
	themesBox.classList.toggle('open')
	const allThemes = [...document.querySelectorAll('.dropdown-item')]
	allThemes.filter((theme) => {
		if (theme.dataset.themeId === localStorage.getItem('currentTheme-id')) {
			theme.classList.add('active')
		}
	})
})
// Side menu icon
const toggleSideMenuBtn = document.querySelector('.wrapper-menu'),
	sideMenu = document.querySelector('.side-menu')

toggleSideMenuBtn.addEventListener('click', () => {
	toggleSideMenuBtn.classList.toggle('open')
	sideMenu.classList.toggle('open')
})
window.addEventListener('click', (e) => {
	if (!document.getElementById('dropdown').contains(e.target) && !document.querySelector('.themes-btn').contains(e.target)) {
		// if user clicks outside theme-box content close theme-box
		document.getElementById('dropdown').classList.remove('open')
	}
	if (!toggleSideMenuBtn.contains(e.target) && !sideMenu.contains(e.target)) {
		// if user clicks outside theme-box content close theme-box
		sideMenu.classList.remove('open')
		toggleSideMenuBtn.classList.remove('open')
	}
})
window.addEventListener('keydown', (e) => {
	if (document.getElementById('dropdown').classList.contains('open') && e.key === 'Escape') {
		// if user clicks on esc while themes-box is open, close theme-box
		document.getElementById('dropdown').classList.remove('open')
	}
	if (sideMenu.classList.contains('open') && e.key === 'Escape') {
		// if user clicks on esc while side menu is open, close it
		sideMenu.classList.remove('open')
		toggleSideMenuBtn.classList.remove('open')
	}
})
// Theme switcher

const themesContainer = document.querySelector('.dropdown-items')

const createTheme = (id, name) => {
	const dropdownItem = document.createElement('button')
	dropdownItem.classList.add('dropdown-item')
	dropdownItem.setAttribute('data-theme-id', id)

	const themeDescription = document.createElement('div')
	themeDescription.classList.add('theme-description')
	themeDescription.innerHTML = `Theme: <br/> ${name}`

	dropdownItem.appendChild(themeDescription)

	dropdownItem.addEventListener('click', (e) => {
		changeTheme(id, e)
	})
	return dropdownItem
}

fetch('../js/themes.json')
	.then((response) => response.json())
	.then((data) => {
		data.forEach((element) => {
			const {
				name,
				id,
				colors: { primaryColor, firstAccentColor, secondAccentColor },
			} = element
			// Generating Themes
			const theme = createTheme(id, name)
			theme.style.backgroundImage = `linear-gradient(45deg, ${primaryColor} 0%, ${primaryColor} 33%, ${firstAccentColor} 33%, ${firstAccentColor} 66%, ${secondAccentColor} 66%, ${secondAccentColor} 100%)`
			themesContainer.appendChild(theme)
		})
	})

const snackBar = document.querySelector('.snackbar')
let snackBarInterval
// Changing theme
const changeTheme = (theme, e) => {
	;[...document.querySelectorAll('.dropdown-item')].filter((theme) => {
		theme.classList.remove('active')
	})
	fetch('../js/themes.json')
		.then((response) => response.json())
		.then((data) => {
			data.filter((data) => {
				const {
					name,
					id,
					colors: { navbarColor, primaryColor, textColor, shadowColor, firstAccentColor, secondAccentColor },
				} = data
				if (id === theme) {
					root.style.setProperty('--navbar-color', navbarColor)
					root.style.setProperty('--primary-color', primaryColor)
					root.style.setProperty('--text-color', textColor)
					root.style.setProperty('--shadow-color', shadowColor)
					root.style.setProperty('--accent-color', firstAccentColor)
					root.style.setProperty('--accent-color2', secondAccentColor)

					localStorage.setItem('currentTheme-id', id)
					localStorage.setItem('currentTheme-navbarColor', navbarColor)
					localStorage.setItem('currentTheme-primaryColor', primaryColor)
					localStorage.setItem('currentTheme-textColor', textColor)
					localStorage.setItem('currentTheme-shadowColor', shadowColor)
					localStorage.setItem('currentTheme-firstAccentColor', firstAccentColor)
					localStorage.setItem('currentTheme-secondAccentColor', secondAccentColor)

					clearInterval(snackBarInterval)
					snackBar.querySelector('span').textContent = `${name}`
					snackBar.classList.add('active')
					snackBarInterval = setInterval(() => {
						snackBar.classList.remove('active')
					}, 3000)
				}
				e.target.classList.add('active')
			})
		})
		.catch((error) => console.log(`%cERROR! ${error}`, 'color: red; font-size: 18px'))
}
// My Work Section Slider
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const projects = [...document.querySelectorAll('.project')]
let currentShownProjectIndex = 0

const setPrevProject = () => {
	if (currentShownProjectIndex === 0) {
		currentShownProjectIndex = projects.length - 1
	} else {
		currentShownProjectIndex--
	}
	showCurrentProject()
}

const setNextProject = () => {
	if (currentShownProjectIndex === projects.length - 1) {
		currentShownProjectIndex = 0
	} else {
		currentShownProjectIndex++
	}
	showCurrentProject()
}
const showCurrentProject = () => {
	projects.forEach((project) => {
		project.classList.remove('active')
	})
	projects[currentShownProjectIndex].classList.add('active')
}

prevBtn.addEventListener('click', () => {
	setPrevProject()
})
nextBtn.addEventListener('click', () => {
	setNextProject()
})
// Skill Swiper
const swiper = new Swiper('.swiper', {
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
