const navbar = document.querySelector(".navbar__collection__item")

function toggleShow (){
    navbar.classList.add("navbar__show")
}

function closeBtn() {
    navbar.classList.remove("navbar__show") 
}


document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');
    const testimonials = document.querySelectorAll('.testimonial');
    
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100; // assuming each testimonial is 100% width
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${offset}%)`;
        });
    }

    prevButton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : testimonials.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        index = (index < testimonials.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    updateCarousel(); // Initialize the carousel
});
