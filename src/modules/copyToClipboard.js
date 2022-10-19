const snackBar = document.querySelector('.snackbar')

let snackBarInterval

export const copyToClipboard = () => {
	navigator.clipboard.writeText('pawelczarnecki0225@gmail.com').then(function () {
		clearInterval(snackBarInterval)
		snackBar.textContent = `Copied To Clipboard!`
		snackBar.classList.add('active')
		snackBarInterval = setInterval(() => {
			snackBar.classList.remove('active')
		}, 3000)
	})
}
