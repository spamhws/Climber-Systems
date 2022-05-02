const cards = document.querySelectorAll(".grab")
let overlay = document.querySelector("#template")

function cardAnimation(e) {
  let selectedCard = e.target.closest(".card").cloneNode(true)

  overlay.appendChild(selectedCard)
  overlay.style.display = "flex"
  overlay.classList.add("reveal")

  overlay.addEventListener("click", (event) => closeOverlay(event), {
    once: true,
  })
  function closeOverlay(event) {
    const isClickInsideElement = selectedCard.contains(event.target)

    if (!isClickInsideElement) {
      overlay.innerHTML = ""
      overlay.style.display = "none"
    } else {
      overlay.addEventListener("click", (event) => closeOverlay(event), {
        once: true,
      })
    }
  }
}

cards.forEach((element) => {
  element.addEventListener("click", (e) => cardAnimation(e))
})
