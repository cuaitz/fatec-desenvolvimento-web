const lista = document.querySelector("#tarefas");
const input = document.querySelector("#input");
const busca = document.querySelector("#busca");

// o nome disso é template literal; talvez js não seja tão ruim assim...
const tarefaTemplate = (texto) => {
    return `<li>${texto}
        <button>X</button>
    </li>`;
}

document.querySelector("#tarefaForm").addEventListener('submit', (e) => {
    e.preventDefault();
    lista.innerHTML += (tarefaTemplate(input.value));
    input.value = '';
});

lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') { // caps lock por algum motivo
        e.target.parentElement.remove();
    }
});

busca.addEventListener('input', (e) => {
    let termo = e.target.value.toLowerCase();
    let elementos = lista.querySelectorAll('li');

    for (const item of elementos) {
        item.style.display = item.textContent.includes(termo) ? '' : 'none';
    }
});
