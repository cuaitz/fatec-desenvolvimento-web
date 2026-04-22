let products = [
    {nome: 'Notebook', preco: 2500.00, categoria: 'Eletrônicos'},
    {nome: 'Camiseta', preco: 50.00, categoria: 'Roupas'},
    {nome: 'Smartphone', preco: 1500.00, categoria: 'Eletrônicos'},
    {nome: 'Calça Jeans', preco: 120.00, categoria: 'Roupas'},
    {nome: 'Tênis', preco: 200.00, categoria: 'Calçados'},
];

const container = document.querySelector('#container');
let electronicsOnly = false;

function showProducts(products) {
    for (const product of products) {
        const item = document.createElement('div');
        item.innerHTML = `Nome: ${product.nome} | Preço: R$ ${product.preco.toFixed(2)} | Categoria: ${product.categoria}`;
        container.appendChild(item);
    }
}

function clearProducts() {
    container.innerHTML = '';
}

function toggleElectronicsOnly() {
    if (container.innerHTML === '') {
        electronicsOnly = true;
    } else {
        electronicsOnly = !electronicsOnly;
    }
    clearProducts();
    showProducts(electronicsOnly ? products.filter((p) => p.categoria === 'Eletrônicos') : products);
}

showProducts(products);
