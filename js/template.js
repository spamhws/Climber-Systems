let lastViewedProduct = localStorage.getItem("lastViewedProduct")
console.log(lastViewedProduct)

let textArea = document.querySelector("#form-message")

function templateConstructor(json) {
  if (json["template"][lastViewedProduct] == undefined) return

  let message =
    json["part1"] + json["template"][lastViewedProduct] + json["part2"]

  textArea.innerHTML = message
}

fetch("../../js/template.json")
  .then((response) => response.json())
  .then((json) => templateConstructor(json))
