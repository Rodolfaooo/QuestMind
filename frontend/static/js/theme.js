const btn_theme = document.getElementById("theme-toggle");
const html = document.documentElement;

// Aplica o tema salvo ao carregar a página
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
    }

btn_theme.addEventListener('click', () => {
    html.classList.toggle('dark');

    if (html.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
});