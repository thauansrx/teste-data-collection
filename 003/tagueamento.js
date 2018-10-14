$('button').on('click', function () {

    var texto = this.innerText.split('-');

    console.log(texto[2]);

    console.log(document.createTextNode(this.innerText));

    //uma vez que todos os botoes foram clicados; criar uma string na ordem que os botoes foram clicados
}); 