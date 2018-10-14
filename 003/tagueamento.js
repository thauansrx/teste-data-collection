$('button').on('click', function () {


    var x = document.createElement("A");
    var t = document.createTextNode(this.innerText);
    x.appendChild(t);
    document.body.appendChild(x);

});
