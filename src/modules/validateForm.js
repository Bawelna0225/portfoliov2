const formInput = document.querySelectorAll('.form-input')
const firstNameInput = document.getElementById('firstName')
const lastNameInput = document.getElementById('lastName')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const contactForm = document.querySelector('form')

export const validateForm = () => {
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
