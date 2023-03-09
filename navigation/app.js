const hamburger = document.querySelector('.nav__hamburger');
const sidenav = document.querySelector('.sidenav');
const sidenav_exit = document.querySelector('.sidenav__exit')
const body = document.querySelector('body')
const menu__header = document.getElementById('sidenav__header')

hamburger.addEventListener('click', () => {
    sidenav.style.left = '0'
    sidenav.style.opacity = '1'
    sidenav.setAttribute('aria-hidden', 'false')   
})

sidenav_exit.addEventListener('click', () => {
    sidenav.style.left = '-100%'
    sidenav.style.opacity = '0'
    sidenav.setAttribute('aria-hidden', 'true') 
})

const nav_buttons = Array.from(document.querySelectorAll('.nav__button'))
nav_buttons.forEach(btn => btn.addEventListener('click', () => {
    
    if(btn.textContent === 'Men') {
        const aside = createAside(men)
        aside.style.left = '0'
        aside.style.opacity = '1'
        sidenav.style.left = '-100%'
        sidenav.style.opacity = '0'
    }
    if (btn.textContent === 'Women') {
        const aside = createAside(women)
        aside.style.left = '0'
        aside.style.opacity = '1'
        sidenav.style.left = '-100%'
        sidenav.style.opacity = '0'
    }

    if (btn.textContent === 'Kids') {
        const aside = createAside(kids)
        aside.style.left = '0'
        aside.style.opacity = '1'
        sidenav.style.left = '-100%'
        sidenav.style.opacity = '0'
    }
}))
    

function createAside(obj) {
    // create aside
    const aside = document.createElement('aside')
    aside.classList.add('sidenav')
    body.prepend(aside)

    // create header
    const header = createHeader(aside, obj);
    aside.appendChild(header)

    // create menu items
    const nav = createNavLinks(obj)
    aside.appendChild(nav)
    
    return aside;
}

function createHeader(aside, obj) {
    const header = menu__header.cloneNode(true)
    header.children[0].remove()
    const backLink = document.createElement('button')
    backLink.classList.add('nav__button')
    backLink.classList.add('bold')
    backLink.classList.add('backLink')

    const sibling = aside.nextElementSibling;
    backLink.addEventListener('click', () => {
        sibling.style.left = '0'
        sibling.style.opacity = '1'
        setTimeout(() => {
            aside.remove()

        }, 500)
    })
    backLink.textContent = obj[0].backLink
    header.prepend(backLink)

    const exit = header.children[1]
    exit.addEventListener('click', () => {
        const slides = document.querySelectorAll('.sidenav')
        slides.forEach((slide) => {
            if (slide.id === 'genesis') {
                return;
            }
            slide.style.opacity = '0'
            setTimeout(() => {
                slide.remove()
    
            }, 500)
        })
    })

    const i = document.createElement('i')
    i.classList.add('fa-solid')
    i.classList.add('fa-chevron-left')
    backLink.prepend(i)

    return header;
}

function createNavLinks(obj) {
    const nav = document.createElement('nav')
    nav.classList.add('nav__parents')
    const ul = document.createElement('ul')
    nav.appendChild(ul)
    obj.forEach((link) => {
        const li = document.createElement('li')
        let nextLink;
        if(link.isLink) {
            nextLink = document.createElement('a')
            nextLink.href = '/'
        } else {
            nextLink = document.createElement('button')
            nextLink.addEventListener('click', () => {
                const aside = createAside(link.links)
                const sibling = aside.nextElementSibling
                aside.style.left = '0'
                aside.style.opacity = '1'
                sibling.style.left = '-100%'
                sibling.style.opacity = '0'
            })
        }
        const i = document.createElement('i')
        const txt = document.createTextNode(link.value)
        ul.appendChild(li)
        li.appendChild(nextLink)
        nextLink.appendChild(txt)
        nextLink.appendChild(i)
        nextLink.classList.add('nav__button')
        i.classList.add('fa-solid')
        i.classList.add('fa-chevron-right')
    })

    return nav
        
}

// possible to remove all the exit handlers to just one ? 
// aria hidden true / false for asides