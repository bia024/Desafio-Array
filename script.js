//1- Crie um array que receba 5 itens e exiba no console.
let compras = ['Banana', 'Maçã', 'Pêra', 'Uva', 'Brócolis'];
console.log(compras);

// 2- Utilize um método para adicionar um nome ao inicio do array.

let adicionar = compras.unshift('Feijão'); // Adicionei "Feijão" ao início do array

// Utilize um método para remover o último nome do array.

let remover = compras.pop(); // Removi "Bócolis"

// Utilize um método para adicionar dois nomes ao fim do array.
let somar = compras.push('Laranja', 'Batata'); // Adicionei 2 Itens, respectivamente: Laranja e Batata

// Utilize um método para remover o primeiro nome do array.
let primeiro = compras.shift(); // Removi "Feijão" do início

// Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7, 5, 6, 3, 8, 55, 9, 30, 2, 1, 29, 4];
numbers.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0
})
console.log(numbers);
