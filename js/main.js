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
const loadingFunFacts = funFacts[Math.floor(Math.random() * funFacts.length)]
loadingFunFactContainer.innerHTML = loadingFunFacts

// Removing Preloader and animating home section in
window.addEventListener('load', () => {
	setTimeout(() => {
		document.querySelector('.preloader').classList.add('loaded')
		setTimeout(() => {
			document.querySelector('#home').classList.add('active')
		}, 800)
	}, 3000)
})

// Opening themes box
const themesBtn = document.querySelector('.themes-btn')
const themesBox = document.querySelector('#dropdown')

themesBtn.addEventListener('click', (e) => {
	themesBox.classList.toggle('open')
})

// Theme switcher
const root = document.documentElement

const themesContainer = document.querySelector('.dropdown-items')

const createTheme = (id, name) => {
	const dropdownItem = document.createElement('button')
	dropdownItem.classList.add('dropdown-item')

	const themeDescription = document.createElement('div')
	themeDescription.classList.add('theme-description')
	themeDescription.innerHTML = `Theme: <br/> ${name}`

	dropdownItem.appendChild(themeDescription)

	dropdownItem.addEventListener('click', () => {
		changeTheme(id)
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
			const theme = createTheme(id, name)
			theme.style.backgroundImage = `linear-gradient(45deg, ${primaryColor} 0%, ${primaryColor} 33%, ${firstAccentColor} 33%, ${firstAccentColor} 66%, ${secondAccentColor} 66%, ${secondAccentColor} 100%)`
			themesContainer.appendChild(theme)
		})
	})
const changeTheme = (theme) => {
	fetch('../js/themes.json')
		.then((response) => response.json())
		.then((data) => {
			data.filter((data) => {
				const {
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
				}
			})
		})
		.catch((error) => console.log(`%cERROR! ${error}`, 'color: red; font-size: 18px'))
}
