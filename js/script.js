// Mobile Navigation buttons:

const navList = document.getElementById("nav-lists-mobile")
function Show() {
  navList.classList.add("_Menus-show")
}

function Hide() {
  navList.classList.remove("_Menus-show")
}

// Image gallery buttons:

const buttons = document.querySelectorAll("[data-carousel-button]")

const slideLoop = () => {
  const slides = document.querySelector("[data-slides]")
  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + 1
  if (newIndex < 0) newIndex = slides.children.length - 1
  if (newIndex >= slides.children.length) newIndex = 0

  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active
}

setInterval(slideLoop, [5000])
