const burgerBtn = document.querySelector('.hamburger')
const navMobile = document.querySelector('.nav__mobile')
const navItem = document.querySelectorAll('.nav__item')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	burgerBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile--active')

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	navItem.forEach(item => {
		item.addEventListener(`click`, () => {
			navMobile.classList.remove(`nav__mobile--active`)
			burgerBtn.classList.toggle(`is-active`)
		})
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime++
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

burgerBtn.addEventListener('click', handleNav)
handleCurrentYear()
