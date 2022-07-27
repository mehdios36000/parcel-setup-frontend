const toggleButton = document.querySelector('.toggle-button');
const ul= document.querySelector('ul');
const button= document.getElementsByClassName('button')[1];


toggleButton.addEventListener('click', () => {

    ul.classList.toggle('active');
    button.classList.toggle('button_active');


    
    }
);