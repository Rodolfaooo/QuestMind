const elements = document.querySelectorAll('.big-text');
const btn_letter = document.getElementById('letter-toggle');

btn_letter.addEventListener('click', () => {
    elements.forEach(element => {
        element.classList.toggle('text-2xl');
    });
});