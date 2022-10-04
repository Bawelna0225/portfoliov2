const root = document.documentElement

root.style.setProperty('--navbar-color', localStorage.getItem('currentTheme-navbarColor'))
root.style.setProperty('--primary-color', localStorage.getItem('currentTheme-primaryColor'))
root.style.setProperty('--text-color', localStorage.getItem('currentTheme-textColor'))
root.style.setProperty('--shadow-color', localStorage.getItem('currentTheme-shadowColor'))
root.style.setProperty('--accent-color', localStorage.getItem('currentTheme-firstAccentColor'))
root.style.setProperty('--accent-color2', localStorage.getItem('currentTheme-secondAccentColor'))
