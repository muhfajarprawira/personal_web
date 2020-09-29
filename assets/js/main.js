// MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
  toggleMenu = document.getElementById('nav-toggle'),
  closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('show')
})

// REMOVE MENU
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
    }
  })
}

// Page loading animation
$(window).on("load", function () {
  if ($(".cover").length) {
    $(".cover").parallax({
      imageSrc: $(".cover").data("image"),
      zIndex: "1"
    });
  }

  $("#preloader").animate(
    {
      opacity: "0"
    },
    1000,
    function () {
      setTimeout(function () {
        $("#preloader")
          .css("visibility", "hidden")
          .fadeOut();
      }, 500);
    }
  );
})(window.jQuery);