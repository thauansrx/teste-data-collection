$(document).ready(function () {

    let texto = [];

    //Seleciona todos os atributos fazendo um loop
    $('a').each(function () {
        //Adiciona ao array o texto dentro do atributo
        texto.push(this.innerText);
    });

    //mostra no console o array
    console.log(texto + '\n');
});

$('a').on('click', function () {


    var Produto = { descricao: this.innerText };

    console.log("Produto: " + Produto.descricao);
});