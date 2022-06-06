const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}


/*Testimonials swiper */

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    }, 
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

/* ScrollReveal */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#Home .image, #Home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    #footer .text, #footer .links
`, { interval: 100 })

/* Botão voltar para o topo */

const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function(){
    if(this.window.scrollY >= 560){
        backToTopButton.classList.add('show')
    } else{
        backToTopButton.classList.remove('show')
    }
})
