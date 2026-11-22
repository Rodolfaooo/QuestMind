const aside_sidebar = document.getElementById("sidebar");
const div_sidebar_elements = document.getElementById("sidebar-elements");
const span_sidebar_texts = document.querySelectorAll(".sidebar-text");

aside_sidebar.addEventListener('click', () => {
    if (event.target.closest('a, button')) {
        return;
    }

    aside_sidebar.classList.remove('w-10');
    aside_sidebar.classList.add('w-48');

    span_sidebar_texts.forEach(text => {
        text.classList.remove('opacity-0');
        text.classList.add('opacity-100');
    });
});

document.addEventListener('click', (event) => {
    const clicouFora = !aside_sidebar.contains(event.target);
    const estaAberta = aside_sidebar.classList.contains('w-48');

    if (clicouFora && estaAberta) {
        aside_sidebar.classList.remove('w-48');
        aside_sidebar.classList.add('w-10');

        span_sidebar_texts.forEach(text => {
            text.classList.remove('opacity-100');
            text.classList.add('opacity-0');
        });
    }
});