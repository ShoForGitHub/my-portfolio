import translations from './translations.js'

const buttonGroup = document.querySelector(".button-group")
const refuseMeButton = document.querySelector(".refuse-me")
const hireMeButton = document.querySelector(".hire-me")
const englishButton = document.getElementById("english-btn")
const japaneseButton = document.getElementById("japanese-btn")
const navbarCollapse = document.getElementById("navbarCollapse")
const navbarLinks = navbarCollapse.querySelectorAll('li')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarButtons = document.getElementById("navbar-buttons")

let selectedLanguage = 'en'

updateTranslations()
controlNavbar()

window.addEventListener("resize", controlNavbar)
refuseMeButton.addEventListener("mouseover", reverseButtons)
refuseMeButton.addEventListener("touchstart", reverseButtons)

hireMeButton.addEventListener("click", () => {
  alert("Thanks!😘")
})

refuseMeButton.addEventListener("click", () => {
  alert("Are you using the developer tool?🧐")
})

englishButton.addEventListener("click", () => {
  selectedLanguage = 'en'
  updateTranslations()
  changeButtonStyle(englishButton, japaneseButton)
})

japaneseButton.addEventListener("click", () => {
  selectedLanguage = 'ja'
  updateTranslations()
  changeButtonStyle(japaneseButton, englishButton)
})

navbarToggler.addEventListener("click", () => {
  navbarButtons.classList.toggle("mx-auto")
})

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 576) {
      navbarCollapse.classList.remove("show")
      navbarButtons.classList.remove("mx-auto")
    }
  })
})

function reverseButtons() {
  buttonGroup.classList.toggle("flex-row-reverse")
}

function updateTranslations() {
  Object.keys(translations).forEach(id => {
    const element = document.getElementById(id)
    if (element) {
      element.textContent = translations[id][selectedLanguage]
    }
  })
}

function changeButtonStyle(primaryButton, secondaryButton) {
  primaryButton.classList.add("btn-light")
  primaryButton.classList.remove("btn-outline-light")
  secondaryButton.classList.add("btn-outline-light")
  secondaryButton.classList.remove("btn-light")
}

function controlNavbar() {
  navbarButtons.classList.remove("mx-auto")
  if (window.innerWidth >= 576) {
    navbarCollapse.classList.add("show")
    navbarCollapse.classList.remove("navbar-collapse")
    
  } else {
    navbarCollapse.classList.remove("show")
    navbarCollapse.classList.add("navbar-collapse")
  }
}