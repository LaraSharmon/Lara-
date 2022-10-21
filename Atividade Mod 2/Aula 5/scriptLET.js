function parOuImpar(num) {
    num = prompt("Digite um numero");
    var message = document.querySelector("h1");
    try {
        if (isNaN(num)) throw "Nao e um numero";
        num = Number(num);
    } catch (err) {
        alert("Nao e um numero");
    }
    if (num % 2 == 0) {
        alert("Seu numero e par");
    }
    if (num % 2 == 1) {
        alert("Seu numero e impar");
    }
}