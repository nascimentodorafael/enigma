// Descubra o número
let numero = parseInt(prompt('Digite um número: '));

document.write('Você informou o número '+ numero + '<br>');

if(numero >= 100) {
    document.write('Número maior que 100' + '</br>');
    document.write('<img src="images/palhaço.webp" alt="Sumiu"');
}
else if (numero >=50){
    document.write('Número maior que 50' + '</br>');
    document.write('<img src="images/bingo.png" alt="Sumiu"');
}
else if (numero >=25){
    document.write('Número maior que 25' + '</br>');
    document.write('<img src="images/fofao.png" alt="Sumiu"');
}
else if(numero >=0){
    document.write('Número maior que 0' + '</br>');
    document.write('<img src="images/patatipatata.png" alt="Sumiu"');
}
else if(numero >=150){
    document.write('Número menor que 10' + '<br>');
    document.write('<img src="images/bozo.jpeg" alt="Não está aqui">');
}