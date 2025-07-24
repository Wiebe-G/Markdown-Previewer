const input = document.getElementById('input');
const result = document.getElementById('output')

input.addEventListener('input', () => {
    result.innerHTML = marked.parse(input.value);
});

window.addEventListener('load', () => {
    input.value = '';
    result.textContent = '';
});