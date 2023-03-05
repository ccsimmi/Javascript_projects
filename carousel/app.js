let slides = document.querySelectorAll('[data-slide]')
slides = Array.from(slides)

let dots = document.querySelectorAll('[data-dot]')
dots = Array.from(dots)

const observer = new IntersectionObserver(onSlideIntersection, {
    root: document.querySelector('.container'),
    threshold: 0.5,
})

function onSlideIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            turnAllDotsOff()

            const slideNumber = entry.target.dataset.slide
            const currentSlideDot = dots[slideNumber - 1]
            currentSlideDot.classList.add('active');
        }
    })
}

function turnAllDotsOff() {
    dots.forEach(dot => {
        if (dot.classList.contains('active')) {
            dot.classList.remove('active')
        }
    })
}

slides.forEach(slide => observer.observe(slide))


