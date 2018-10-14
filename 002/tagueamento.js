$(document).ready(function () {
    //Cria um array onde ficará armazenado os textos de cada botão
    let texto = [];

    //Seleciona todos os botões fazendo um loop
    $('span').each(function () {
        //Adiciona ao array o texto dentro do botão
        texto.push(this.innerText);
    });

    //mostra no console o array
    console.log(texto);
});
//Seleciona todos os botões e adiciona um ouviente de evento de click em cada
$('a').on('click', function () {
    //Cria uma msg acima do botão clicado com o texto do botão

    document.getElementById('botoes').innerHTML = this.innerText;
});

//corrigir o retorno