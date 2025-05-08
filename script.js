let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    const checkFormValidity = () => {
        submitBtn.disabled = !form.checkValidity();
    };

    form.addEventListener('input', checkFormValidity);
    form.addEventListener('change', checkFormValidity);
});
