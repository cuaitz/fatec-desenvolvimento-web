const lista = document.querySelector("#tarefas");
const input = document.querySelector("#input");

// o nome disso é template literal; talvez js não seja tão ruim assim...
const tarefaTemplate = (texto) => {
    return `<li>${texto}</li>`;
}

document.querySelector("#tarefaForm").addEventListener('submit', (e) => {
    e.preventDefault();
    lista.innerHTML += (tarefaTemplate(input.value));
    input.value = '';
});
