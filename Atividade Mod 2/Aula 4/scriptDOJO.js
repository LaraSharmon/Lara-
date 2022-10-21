var nomes = ["Max", "Mel", "Sol"];
var peso = [35.2, 18.6, 2.5];
var raca = ["Labrador", "Vira latas", "Chiuaua"];
var idcao = prompt(" Qual o id do canil");

var canil = {
    nome: nome[idcao],
    peso: peso[idcao],
    raça: raça[idcao],
    latido: function latido() {
        alert(nome[idcao] + ": auau");
    },
    rosnado: function rosnado() {
        alert(nome[idcao] + ": grrr");
    },
    dados: function () {
        var tag = document.querySelector("nav");
        tag.innerHTML =
            <div>
                <h1>nome do cão: $(this.nome)</h1>
                <h1>peso: $(this.peso)</h1>
                <h1>raça: $(this.raça)</h1>
                <BUtton onclick="latido()"> Chamar $(this.nome)</BUtton>
                <BUtton onclick="rosnado()"> Fazer carinho em $(this.nome)</BUtton>
            </div>
    }
}
canil.dados();
function latido() {
    canil.latido();
}
