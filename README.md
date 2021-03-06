# Climber Systems Website Overview.

### Hosted on: [www.climberengineers.com](http://www.climberengineers.com/)

## Website Header:

Clicking on `Contact Us` button makes the window scroll to the contact section of the page:

<p align="center">
<img src="readme-src/main-contact-button.gif" width="830px">
</p>

### Mobile Hamburger Menu:

When viewed on mobile, header collapses to an elegant hamburger menu. Although top left corner contains the X button, clicking anywhere outside the menu area also closes the popup:

<p align="center">
<img src="readme-src/mobile-dropdown.gif" width="830px">
</p>

## Main Page Gallery:

Slides of the gallery update every 4 seconds. Each slide contains a picture, 3 buttons at the a bottom, as well as it’s corresponding quote. On a desktop view, slides can be transitioned between using the buttons:

<p align="center">
<img src="readme-src/main-gallery.gif" width="830px">
</p>

Mobile users can scroll between slides using swipe:

```Javascript
let touchstartX = 0;
let touchendX = 0;

function handleGesture() {
  if (touchendX < touchstartX) {
    direction = 1;
  }

  if (touchendX > touchstartX) {
    direction = -1;
  }
  setTimeout(slideLoop, 1);

  loopRestart();
}

slides.addEventListener('touchstart', (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

slides.addEventListener('touchend', (e) => {
  touchendX = e.changedTouches[0].screenX;
  if (!e.path[0].matches('.dot')) {
    handleGesture();
  }
});
```

<p align="center">
<img src="readme-src\mobile-gallery.gif" width="830px">
</p>

## Flexbox cards:

Most of the website is built around `Flexbox`. Main area is centered and a universally defined card component is used for multiple purposes throught the website:

```css
.cards-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 32px;
}

.card {
  width: 320px;
  max-width: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
}
```

On the main page, users are presented with a 3-in-a-row style flexbox-arranged `cards`. Using this layout ensures readability across all screen sizes.

<p align="center">
<img src="readme-src\mobile-flex.gif" width="830px">
</p>

Despite the button being shown at the bottom of the card, entire card highlights on `hover` and is clickable:

<p align="center">
<img src="readme-src\main-card-hover.gif" width="830px">
</p>

### Contact section:

Phone numbers and email addresses are linked. On mobile view, these would bring the user directly to the default Phone or email app:

<p align="center">
<img src="readme-src\mobile-phone.gif" width="300px">
</p>

<div id='here'></div>

The contact form is enabled via formsubmit.io service. Message example flow is constructed using the `local storage`. Browser’s local storage keeps track of the last viewed product.

#### Inside each individual product html:

```HTML
<script>
    localStorage.setItem('lastViewedProduct', 'Rice de-husking machine');
</script>
```

#### Message constructed within the form's textarea:

```Javascript
const json = {
  part1: 'Message example: &#10;&#10;Hello, &#10;&#10;',
  template: {
    'Rice de-husking machine': "I'd like to request more information about the Rice de-husking machine.",
    'Welding Platform': "I'd like to request more information about the Welding Platform.",
    'Modular Toilet': "I'd like to request more information about the Modular Toilet Superstructures.",
    'Plastic Reactor': "I'd like to request more information about the 900 Degree Plastic to Diesel Reactor.",
  },
  part2:
    '&#10;&#10;My phone number: &#10;My preferred method of contact is phone/email.&#10;&#10;Looking forward to hearing from you!',
};
```

```Javascript
let message = json['part1'] + json['template'][lastViewedProduct] + json['part2'];
```

<p align="center">
<img src="readme-src\temaplate-constructor.gif" width="830px">
</p>

## About us page:

The logo section contains an animated image that flies in from the left side of the screen:

<p align="center">
<img src="readme-src\logo.gif" width="830px">
</p>

Timeline elements are revealed `onScroll`:

<p align="center">
<img src="readme-src\scroll-timeline.gif" width="830px">
</p>

For the desktop view the timeline is centered. But on mobile the elements are aligned to the right:

```CSS
.date {
  width: clamp(40%, 350px, 60%);
  margin: 0 auto;
  transform: translate(-58%, -9px);
  font-size: 16px;
  text-align: right;
}

.entry:nth-child(odd) .date {
  text-align: left;
  transform: translate(60%, -9px);
}
```

<p align="center">
<img src="readme-src\mobile-timeline.gif" width="300px">
</p>

User can click on the founders photo to download the CV:

<p align="center">
<img src="readme-src\founders-hover.gif" width="830px">
</p>

## Products:

Product `cards` are animated on scroll to grab the users attention:

<p align="center">
<img src="readme-src\product-cards-anim.gif" width="830px">
</p>

Rice de-husking product page has interactive cards in the download section. Horizontal slide functionality is enabled on mobile:

<p align="center">
<img src="readme-src\mobile-slider.gif" width="300px">
</p>

Request button brings the user to the contact section on the main page with the message template pre-constructed. (<a href="#here">Described above</a>)

Product pages, such as welding platform, have more than one picture in the image gallery, so the image-sliding functionality is implemented the same way as with the `gallery` on the main page: pictures are changing every four seconds:

<p align="center">
<img src="readme-src\product-pics.gif" width="830px">
</p>

Awards and gallery page is a collection of cards, each containing an image that user might want to view full-screen. Clicking on the card shows the full-sized image.
Users can also click anywhere outside of the card to close the full screen preview:

<p align="center">
<img src="readme-src\awards-cards.gif" width="830px">
</p>

This is achived by JavaScript coping the `card` element, creating a new one and displaying it right in the center of the screen:

```Javascript
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

```
