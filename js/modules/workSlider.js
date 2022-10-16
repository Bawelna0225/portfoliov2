const projects = [...document.querySelectorAll('.project')]

export const showPrevProject = () => {
	const currentShownProject = document.querySelector('.project.active')
	currentShownProject.classList.remove('active')
	if (currentShownProject.previousElementSibling) {
		currentShownProject.previousElementSibling.classList.add('active')
	} else {
		projects[projects.length - 1].classList.add('active')
	}
}

export const showNextProject = () => {
	const currentShownProject = document.querySelector('.project.active')
	currentShownProject.classList.remove('active')
	if (currentShownProject.nextElementSibling) {
		currentShownProject.nextElementSibling.classList.add('active')
	} else {
		projects[0].classList.add('active')
	}
}
