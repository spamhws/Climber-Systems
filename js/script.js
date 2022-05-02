// Mobile Navigation buttons:

const navList = document.getElementById("nav-lists-mobile")
function Show() {
  navList.classList.add("_Menus-show")
}

function Hide() {
  navList.classList.remove("_Menus-show")
}

// Image gallery Loop:
const slides = document.querySelector("[data-slides]")
let direction = 1

const slideLoop = () => {
  if (slides != null) {
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + direction
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  }
}

myInterval = setInterval(slideLoop, [3000])

// Touch scroll for gallery:
let touchstartX = 0
let touchendX = 0

function handleGesture() {
  if (touchendX < touchstartX) {
    direction = 1
  }

  if (touchendX > touchstartX) {
    direction = -1
  }
  setTimeout(slideLoop, 1)

  clearInterval(myInterval)

  setTimeout(() => {
    direction = 1
  }, 3000)
  myInterval = setInterval(slideLoop, [5000])
}

slides.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX
})

slides.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX
  handleGesture()
})

function reveal() {
  let reveals = document.querySelectorAll(".animated")
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight
    let elementTop = reveals[i].getBoundingClientRect().top
    let elementVisible = 50
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    } else {
      reveals[i].classList.remove("active")
    }
  }
}

window.addEventListener("scroll", reveal)

// To check the scroll position on page load
reveal()
