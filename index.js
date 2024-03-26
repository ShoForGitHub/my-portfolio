const buttonGroup = document.querySelector(".button-group")
const refuseMeButton = document.querySelector(".refuse-me")
const hireMeButton = document.querySelector(".hire-me")

refuseMeButton.addEventListener("mouseover", reverseButtons)
refuseMeButton.addEventListener("touchstart", reverseButtons)

hireMeButton.addEventListener("click", () => {
  alert("Thanks!😘")
})

refuseMeButton.addEventListener("click", () => {
  alert("Are you using the developer tool?🧐")
})

function reverseButtons() {
  buttonGroup.classList.toggle("flex-row-reverse")
}