const cards = document.querySelectorAll(".card")
let overlay = document.querySelector("#template")

function cardAnimation(e) {
  let selectedCard = e.target.closest(".card").cloneNode(true)

  overlay.appendChild(selectedCard)
  overlay.style.display = "flex"

  selectedCard.addEventListener("blur", (event) => closeOverlay(event))
  function closeOverlay(event) {
    console.log(event)
    let isClickInsideElement = selectedCard.contains(event.target)

    if (!isClickInsideElement) {
      console.log(event == e)
      overlay.removeChild(selectedCard)
      overlay.style.display = "none"
    }
  }
}

cards.forEach((element) => {
  element.addEventListener("click", (e) => cardAnimation(e))
})
