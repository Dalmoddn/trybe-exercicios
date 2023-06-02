const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contagem = 0;
let media = 0;
let mensagem = '';
let comparativo = 0;
let impares = 0;
for (let index = 0; index < numbers.length; index += 1) {
    const element = numbers[index];
    contagem += element;
    if (element > comparativo) {
        comparativo = element
    } if (element % 2 !== 0) {
        impares += 1
    }    
    }

media = contagem / numbers.length
if (media > 20) {
    mensagem = 'A média aritmética é maior que 20.'
}   
else{
    mensagem = 'O valor da média aritmética é menor que 20.'
}
if (impares === 0) {
    impares = 'Nenhum valor ímpar encontrado.'
}
console.log(contagem)
console.log(media)
console.log(mensagem)
console.log(comparativo)
console.log(impares)