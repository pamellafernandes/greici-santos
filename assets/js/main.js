const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
     
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
   
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(item);

        if(openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content');

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }

}

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// const sections = document.querySelectorAll('section[id], footer[id]');


function scrollActive() {
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Primeiro desativa todos os links
    document.querySelectorAll('.nav__menu a').forEach(link => {
        link.classList.remove('active-link');
    });
    
    // Verifica se está no final da página (footer)
    if (scrollY + windowHeight >= documentHeight - 200) {
        const contactLink = document.querySelector('.nav__menu a[href="#contato"]');
        if (contactLink) contactLink.classList.add('active-link');
        return;
    }
    
    // Lógica para outras seções
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);
        
        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        }
    });
}

// Inicializa as seções
const sections = document.querySelectorAll('section[id], footer[id]');
window.addEventListener('scroll', scrollActive);

// Configura os cliques nos links do menu
document.querySelectorAll('.nav__menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Ativa o link clicado
            document.querySelectorAll('.nav__menu a').forEach(l => l.classList.remove('active-link'));
            this.classList.add('active-link');
            
            // Scroll suave
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', scrollActive);

const footer = document.querySelectorAll('a[href="#contato"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove todas as classes ativas
        document.querySelectorAll('.nav__menu a').forEach(el => {
            el.classList.remove('active-link');
        });
        
        // Adiciona a classe ativa ao link clicado
        this.classList.add('active-link');
        
        // Rola suavemente para o footer
        document.querySelector('#contato').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, {delay: 500});
sr.reveal(`.home__social`, {delay: 600});
sr.reveal(`.home__social`, {delay: 600});
sr.reveal(`.about__img, .contact__box`, {origin: `left`});
sr.reveal(`.about__data, .contact__form`, {origin: `right`});
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, {interval: 100});

document.querySelectorAll('a[href="#contato"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('#contato').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  