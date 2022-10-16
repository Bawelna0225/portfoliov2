export const createTheme = (id, name) => {
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