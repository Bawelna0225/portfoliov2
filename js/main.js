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
		// if user clicks outside side menu content, close it
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

import { createTheme } from './modules/createTheme.js'
// initial fetch to create themes
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
// My Work Section Slider
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')

import { showNextProject } from '../js/modules/workSlider.js'
import { showPrevProject } from '../js/modules/workSlider.js'

prevBtn.addEventListener('click', () => {
	showPrevProject()
})
nextBtn.addEventListener('click', () => {
	showNextProject()
})
// Skill Swiper
import { swiper } from './modules/skillSwiper.js'

//////////////////////////////////////////// Contact Me Form ////////////////////////////////////////////////
const formInput = document.querySelectorAll('.form-input')
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const submit = document.getElementById('submit')
const contactForm = document.querySelector('form')

contactForm.onsubmit = (e) => {
	e.preventDefault()
	validateForm()
}

const validateForm = () => {
	let errorFlag = false
	if (firstNameInput.value.length < 1 || firstNameInput.value.split(' ').join('') == '') {
		// if name is blank or flied with only spaces throw error
		formInput[0].classList.add('error')
		errorFlag = true
	}
	if (lastNameInput.value.length < 1 || lastNameInput.value.split(' ').join('') == '') {
		formInput[1].classList.add('error')
		errorFlag = true
	}
	if (!emailIsValid(emailInput.value)) {
		formInput[2].classList.add('error')
		errorFlag = true
	}
	if (subjectInput.value.length < 1 || subjectInput.value.split(' ').join('') == '') {
		formInput[3].classList.add('error')
		errorFlag = true
	}
	if (messageInput.value.length < 1 || messageInput.value.split(' ').join('') == '') {
		formInput[4].classList.add('error')
		errorFlag = true
	}

	firstNameInput.addEventListener('input', () => {
		formInput[0].classList.remove('error')
	})
	lastNameInput.addEventListener('input', () => {
		formInput[1].classList.remove('error')
	})
	emailInput.addEventListener('input', () => {
		formInput[2].classList.remove('error')
	})
	subjectInput.addEventListener('input', () => {
		formInput[3].classList.remove('error')
	})
	messageInput.addEventListener('input', () => {
		formInput[4].classList.remove('error')
	})

	if (!errorFlag) {
		var data = new FormData(document.querySelector('form'))
		var xhr = new XMLHttpRequest()
		xhr.open('POST', 'sendmail.php')
		xhr.onload = function () {
			console.log(this.response)
		}
		xhr.send(data)

		contactForm.classList.add('pending')
		document.querySelector('form').submit.click()
		setTimeout(() => {
			contactForm.classList.remove('pending')
			contactForm.classList.add('success')

			setTimeout(() => {
				contactForm.classList.remove('success')
				contactForm.reset()
			}, 2000)
		}, 2000)
	}
}

// email validation
const emailIsValid = (emailInput) => {
	let pattern = /\S+@\S+\.\S+/
	return pattern.test(emailInput)
}
// copy-to-clipboard

const copyToClipboard = document.querySelector('.copy-to-clipboard')

copyToClipboard.addEventListener('click', () => {
	navigator.clipboard.writeText('pawelczarnecki0225@gmail.com').then(function () {
		const snackBar = document.querySelector('.snackbar')

		let snackBarInterval
		clearInterval(snackBarInterval)
		snackBar.textContent = `Copied To Clipboard!`
		snackBar.classList.add('active')
		snackBarInterval = setInterval(() => {
			snackBar.classList.remove('active')
		}, 3000)
	})
})
