const toggleButton = document.querySelector('.toggle-button');
const ul= document.querySelector('ul');
const hero = document.querySelector('.hero_desc');


toggleButton.addEventListener('click', () => {

    ul.classList.toggle('active');
    hero.classList.toggle('hero_desc_active');


    
    }
);