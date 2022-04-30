// Mobile Navigation buttons:

const navList = document.getElementById("nav-lists-mobile")
function Show() {
  navList.classList.add("_Menus-show")
}

function Hide() {
  navList.classList.remove("_Menus-show")
}

// Image gallery buttons:

// const slideLoop = () => {
//   const slides = document.querySelector("[data-slides]")
//   if (slides != null) {
//     const activeSlide = slides.querySelector("[data-active]")
//     let newIndex = [...slides.children].indexOf(activeSlide) + 1
//     if (newIndex < 0) newIndex = slides.children.length - 1
//     if (newIndex >= slides.children.length) newIndex = 0

//     slides.children[newIndex].dataset.active = true
//     delete activeSlide.dataset.active
//   }
// }

setInterval(slideLoop, [5000])

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
