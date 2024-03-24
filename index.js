const buttonGroup = document.querySelector(".button-group")

const refuseMeButton = document.querySelector(".refuse-me")

const hireMeButton = document.querySelector(".hire-me")

refuseMeButton.addEventListener("mouseover", () => {
  buttonGroup.classList.toggle("reverse")
})

refuseMeButton.addEventListener("touchstart", () => {
  buttonGroup.classList.toggle("reverse")
})

hireMeButton.addEventListener("click", () => {
  alert("Thanks!😘")
})

refuseMeButton.addEventListener("click", () => {
  alert("Are you using developer tool?🧐")
})