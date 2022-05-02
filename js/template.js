const json = {
  part1: "Message example: &#10;&#10;Hello, &#10;&#10;",
  template: {
    "Rice de-husking machine":
      "I'd like to request more information about your Rice de-husking machine.",
  },
  part2:
    "&#10;&#10;My phone number: &#10;My preferred method of contact is phone/email.&#10;&#10;Looking forward to hearing from you!",
}

let lastViewedProduct = localStorage.getItem("lastViewedProduct")

let textArea = document.querySelector("#form-message")

function templateConstructor(json) {
  if (json["template"][lastViewedProduct] == undefined) return

  let message =
    json["part1"] + json["template"][lastViewedProduct] + json["part2"]

  textArea.innerHTML = message
}

templateConstructor(json)

// fetch("../../js/template.json")
//   .then((response) => response.json())
//   .then((json) => templateConstructor(json))
