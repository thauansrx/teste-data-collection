$(document).ready(function() {
    //Cria um array onde ficará armazenado os textos de cada botão
    let textos = [];
  
    //Seleciona todos os botões fazendo um loop
    $('button').each(function() {
      //Adiciona ao array o texto dentro do botão
      textos.push(this.innerText);
    });
  
    //mostra no console o array
    console.log(textos);
  });
  //Seleciona todos os botões e adiciona um ouviente de evento de click em cada
  $('button').on('click', function() {
    //Cria um alerta na tela com o texto do botão
    alert(this.innerText);
  });