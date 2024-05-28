
//! **************** Scroll Top **************** //
const scrollBtn = document.querySelector('.scroll-top');
const secrOffsetHeight = document.querySelector('#about').offsetHeight;

window.addEventListener('scroll',function(){
    if (window.scrollY > secrOffsetHeight ) {
        scrollBtn.style.right = "10px";
    }
    else {
        scrollBtn.style.right = "-75px";
    }
})












//! **************** Navbar **************** //
const navbar = document.querySelector('.navbar'); // navbar
// const navbarAnchor = document.querySelectorAll('.navbar ul li a'); // anchor
const navbarOffsetHeight = document.querySelector('.navbar').offsetHeight; // navbar height
const homeOffsetTop = document.querySelector("#home .row").offsetTop;

//! Navbar Change
window.addEventListener('scroll',function(){
    if (window.scrollY > homeOffsetTop - navbarOffsetHeight) {
        navbar.style.cssText = `
        background: rgb(255 255 255 / 78%);
        backdrop-filter: blur(20px);`
    }
    else {
        navbar.style.cssText = `
        background: transparent;`
    }
});

//! **************** About Section **************** //
const watchBtn = document.querySelector(".watchBtn");
const video = document.querySelector(".layer-video");
const closeIcon = document.querySelector(".close-icon");

watchBtn.addEventListener("click", function () {
    video.classList.remove("d-none");
});

closeIcon.addEventListener("click", function () {
    video.classList.add("d-none");
});

//! **************** Menu Section **************** //
const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterImages = document.querySelectorAll('.menu-row .col-menu');

filterButtons.forEach(button => button.addEventListener('click',function(){
    document.querySelector('#menu .active').classList.remove('active');
    this.classList.add('active');

    filterImages.forEach(card => {
        card.classList.add('d-none');

        if (card.dataset.name === this.dataset.name || this.dataset.name === 'all') {
            card.classList.remove('d-none');
        }
    });
}));

//! **************** Gallery **************** //
    const swiper = new Swiper('.swiper', {
        loop: true,
        spaceBetween:20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShados: false,
        },
        loopAdditionSlides: true,

        pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 20
            },
            480: {
            slidesPerView: 1,
            spaceBetween: 30
            },
            640: {
            slidesPerView: 1,
            spaceBetween: 40
            }
        }
    });

//! ****************  Our Team **************** //
    const team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });