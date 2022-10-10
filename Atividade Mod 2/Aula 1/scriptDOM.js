function abrir() {

    var botaoAbrir = document.querySelector('b1');
    var botaoFechar = document.querySelector('b2');
    botaoAbrir.style.color = 'green';
    botaoFechar.style.color = 'black';

    var elemento = document.querySelector('p');
    elemento.innerText ='Estamos abertos!';
}
function fechar() {
    var botaoAbrir = document.querySelector('b1');
    var botaoFechar = document.querySelector('b2');
    botaoFechar.style.color = 'red';
    botaoAbrir.style.color = ' black'

   
    var elemento = document.querySelector('p');
    elemento.innerText ='Estamos fechados!';
    


}