// Mobile Navigation buttons:

const navList = document.getElementById('nav-lists-mobile');
const mobileBG = document.querySelector('.mobile-menu-bg');

function Show() {
  mobileBG.style.display = 'block';
  mobileBG.classList.add('show-bg');
  navList.classList.add('_Menus-show');

  mobileBG.addEventListener('click', () => {
    Hide();
  });
}

function Hide() {
  mobileBG.removeEventListener('click', () => {
    Hide();
  });
  navList.classList.remove('_Menus-show');
  mobileBG.classList.remove('show-bg');
  setTimeout(() => {
    mobileBG.style.display = 'none';
  }, 200);
}

function reveal() {
  let reveals = document.querySelectorAll('.animated');
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// To check the scroll position on page load
reveal();
