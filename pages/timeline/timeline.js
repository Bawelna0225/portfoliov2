window.addEventListener("load", () => {
  setTimeout(() => {
    // remove preload after 1 second
    document.querySelector(".transition").classList.remove("is-active");
  }, 1800);
});
const root = document.documentElement

root.style.setProperty('--navbar-color', localStorage.getItem('currentTheme-navbarColor'))
root.style.setProperty('--primary-color', localStorage.getItem('currentTheme-primaryColor'))
root.style.setProperty('--text-color', localStorage.getItem('currentTheme-textColor'))
root.style.setProperty('--shadow-color', localStorage.getItem('currentTheme-shadowColor'))
root.style.setProperty('--accent-color', localStorage.getItem('currentTheme-firstAccentColor'))
root.style.setProperty('--accent-color2', localStorage.getItem('currentTheme-secondAccentColor'))