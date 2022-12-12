const snackBar = document.querySelector('.snackbar')

let snackBarInterval

export const changeTheme = (theme, e) => {
	;[...document.querySelectorAll('.dropdown-item')].filter((theme) => {
		theme.classList.remove('active')
	})
	// fetching to change page colors
	fetch('../js/themes.json')
		.then((response) => response.json())
		.then((data) => {
			data.filter((data) => {
				const {
					name,
					id,
					colors: { navbarColor, primaryColor, textColor, shadowColor, firstAccentColor, secondAccentColor, cardBorderColor, lightColor, hoverBorderColor},
				} = data
				if (id === theme) {
					root.style.setProperty('--navbar-color', navbarColor)
					root.style.setProperty('--primary-color', primaryColor)
					root.style.setProperty('--text-color', textColor)
					root.style.setProperty('--shadow-color', shadowColor)
					root.style.setProperty('--accent-color', firstAccentColor)
					root.style.setProperty('--accent-color2', secondAccentColor)
					root.style.setProperty('--card-border-color', cardBorderColor)
					root.style.setProperty('--light-color', lightColor)
					root.style.setProperty('--hover-border-color', hoverBorderColor)

					localStorage.setItem('currentTheme-id', id)
					localStorage.setItem('currentTheme-navbarColor', navbarColor)
					localStorage.setItem('currentTheme-primaryColor', primaryColor)
					localStorage.setItem('currentTheme-textColor', textColor)
					localStorage.setItem('currentTheme-shadowColor', shadowColor)
					localStorage.setItem('currentTheme-firstAccentColor', firstAccentColor)
					localStorage.setItem('currentTheme-secondAccentColor', secondAccentColor)
					localStorage.setItem('currentTheme-cardBorderColor', cardBorderColor)
					localStorage.setItem('currentTheme-lightColor', lightColor)
					localStorage.setItem('currentTheme-hoverBorderColor', hoverBorderColor)

					clearInterval(snackBarInterval)
					snackBar.textContent = `Theme Changed to: ${name}`
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