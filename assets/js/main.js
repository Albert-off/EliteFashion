/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*=============== SWIPER PRODUCTS ===============*/
let centeredFlag = window.innerWidth < 900 ? true : false;

let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: centeredFlag,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')
    
// const scrollActive = () =>{
//   	const scrollDown = window.scrollY;

// 	sections.forEach(current =>{
// 		const sectionHeight = current.offsetHeight,
// 			  sectionTop = current.offsetTop - 58,
// 			  sectionId = current.getAttribute('id'),
// 			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

// 		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
// 			sectionsClass.classList.add('active-link');
// 		}else{
// 			sectionsClass.classList.remove('active-link');
// 		}                                                    
// 	})
// }
// window.addEventListener('scroll', scrollActive);


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp); 


/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home__data, .featured__filters, .products__container, .footer__container, .footer__info`);
sr.reveal(`.join`, {origin: 'bottom'});
sr.reveal(`.home__images`, {delay: 600, origin: 'bottom'});
sr.reveal(`.new__card, .brand__img`, {interval: 100});
sr.reveal(`.collection__explore:nth-child(1)`, {origin: 'right'});
sr.reveal(`.collection__explore:nth-child(2)`, {origin: 'left'});
sr.reveal(`.featured__card`, {interval: 100});


/*=============== JOIN FORM POPUP ===============*/
const receiveForm = document.getElementById('receive-form');

receiveForm.addEventListener('submit', e => {
    e.preventDefault();
    showPopup();
});

document.querySelector('.popup__close').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('show');
    document.querySelector('.popup-overlay').classList.remove('show');
});

// show popup and overlay if we receive the form
function showPopup() {
    document.querySelector('.popup').classList.add('show');
    document.querySelector('.popup-overlay').classList.add('show');
    document.querySelector('.join__input').value = '';
}


/*=============== CONTACT FORM ===============*/
const contactForm = document.getElementById('contact-form');

receiveForm.addEventListener('submit', e => {
    e.preventDefault();
    sendContactMessage();

    // document.getElementById('contactFirstname').value = '';
    // document.getElementById('contactEmail').value = '';
    // document.getElementById('contactPhone').value = '';
    // document.getElementById('contactSubject').value = '';
    // document.getElementById('contactMessage').value = '';
});

// function sendContactMessage() {
//     window.location.href = 'https://www.yoursite.com';
// }


/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */
const linkFeatured = document.querySelectorAll('.featured__item');

function activeFeatured(){
    linkFeatured.forEach(l => l.classList.remove('active-featured'));
    this.classList.add('active-featured');
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured));