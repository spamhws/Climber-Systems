// Mobile Navigation buttons:

const navList = document.getElementById("nav-lists-mobile")
function Show() {
  navList.classList.add("_Menus-show")
  console.log("Open")
}

function Hide() {
  navList.classList.remove("_Menus-show")
  console.log("close")
}

// Image gallery buttons:

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
