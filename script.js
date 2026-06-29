let aura = Number(localStorage.getItem("aura")) || 0;
let auraPorClique = Number(localStorage.getItem("auraPorClique")) || 1;

const auraTexto = document.getElementById("aura");
const rankTexto = document.getElementById("rank");
const botaoFarm = document.getElementById("farmButton");

function atualizarRank() {
    let rank = "Sem aura alguma";

    if (aura >= 100) rank = "Beta";
    if (aura >= 500) rank = "Mogado";
    if (aura >= 2000) rank = "Aprendiz de Aura Farmer";
    if (aura >= 10000) rank = "Moggador Iniciante";
    if (aura >= 50000) rank = "Farmador de Aura";
    if (aura >= 250000) rank = "Moggador de Betas";
    if (aura >= 1000000) rank = "Aura Galáctica";
    if (aura >= 10000000) rank = "Aura Cósmica";
    if (aura >= 100000000) rank = "Moggador Supremo";
    if (aura >= 1000000000) rank = "Transcendental ☠️";

    rankTexto.innerText = rank;
}

function atualizarTela() {
    auraTexto.innerText = aura.toLocaleString("pt-BR");
    atualizarRank();

    localStorage.setItem("aura", aura);
    localStorage.setItem("auraPorClique", auraPorClique);
}

function mostrarMaisAura() {
    const texto = document.createElement("div");

    texto.innerText = "+" + auraPorClique;
    texto.style.position = "fixed";
    texto.style.left = (window.innerWidth / 2) + "px";
    texto.style.top = "300px";
    texto.style.color = "#00ff99";
    texto.style.fontSize = "35px";
    texto.style.fontWeight = "bold";
    texto.style.pointerEvents = "none";
    texto.style.transition = "1s";

    document.body.appendChild(texto);

    setTimeout(() => {
        texto.style.top = "200px";
        texto.style.opacity = "0";
    }, 20);

    setTimeout(() => {
        texto.remove();
    }, 1000);
}

botaoFarm.addEventListener("click", () => {

    aura += auraPorClique;

    atualizarTela();

    mostrarMaisAura();

});

atualizarTela();
