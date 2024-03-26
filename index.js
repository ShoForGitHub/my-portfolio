import translations from './translations.js'

const buttonGroup = document.querySelector(".button-group")
const refuseMeButton = document.querySelector(".refuse-me")
const hireMeButton = document.querySelector(".hire-me")
const englishButton = document.getElementById("english-btn")
const japaneseButton = document.getElementById("japanese-btn")
let selectedLanguage = 'en'
updateTranslations()

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
})

japaneseButton.addEventListener("click", () => {
  selectedLanguage = 'ja'
  updateTranslations()
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