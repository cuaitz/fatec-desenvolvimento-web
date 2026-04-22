let precoProduto = 300;
let percentualDesconto = .25;
let nome = "Augusto";

let valorDesconto = precoProduto * percentualDesconto;
let precoFinal = precoProduto - valorDesconto;

console.log(`Olá ${nome}! O produto custa R$${precoProduto.toFixed(2)}`);
console.log(`Você tem desconto de ${percentualDesconto * 100}%: R$${valorDesconto.toFixed(2)}`);
console.log(`Preço final: R$${precoFinal.toFixed(2)}`);
console.log(`Preço acima de R$100? ${precoFinal > 100 ? 'Sim' : 'Não'}`)
console.log(`Desconto válido? ${percentualDesconto >= 0 && percentualDesconto <= 1 ? 'Sim' : 'Não'}`);
