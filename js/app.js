document.addEventListener('DOMContentLoaded', function () {
    const hamburguesa = document.querySelector('.menu');
    const nav = document.querySelector('nav');

    hamburguesa.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
