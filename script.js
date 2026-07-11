const botao = document.getElementById("revelar");
const inicio = document.getElementById("inicio");
const carregamento = document.getElementById("carregamento");
const surpresa = document.getElementById("surpresa");
const botaoPedido = document.getElementById("pedido");
const chamas = document.querySelectorAll(".chama");
const texto = document.getElementById("titulo-carregamento");
const barra = document.getElementById("barra");
const porcentagem = document.getElementById("porcentagem");
const mensagem = document.getElementById("mensagem");
const amigos = document.getElementById("amigos");
const botaoContinuar = document.getElementById("continuar-amigos");
const varalTela = document.getElementById("varal-tela");
const botaoVaral = document.getElementById("abrir-varal");
const botaoFinalizar = document.getElementById("finalizar");
const telaFinal = document.getElementById("final");
const musica = document.getElementById("musica");
const areaConfete = document.getElementById("confetes");
const botaoReiniciar = document.getElementById("reiniciar");

const etapas = [
{
    mensagem:"Escrevendo uma cartinha... 💌",
    progresso:20
},
{
    mensagem:"Separando algumas lembranças... 📷",
    progresso:40
},
{
    mensagem:"Preparando uma surpresa... 🎂",
    progresso:60
},
{
    mensagem:"Só mais um pouquinho... ✨",
    progresso:80
},
{
    mensagem:"Prontinho. ❤️",
    progresso:100
}
];

botao.addEventListener("click", () => {
    inicio.classList.add("escondido");
    carregamento.classList.remove("escondido");
    document.body.classList.add("carregando");
    iniciarCarregamento();
});

function iniciarCarregamento() {
    let etapaAtual = 0;
    function proximaEtapa() {
        if (etapaAtual < etapas.length) {
            texto.innerHTML = etapas[etapaAtual].mensagem;
            barra.style.width =
                etapas[etapaAtual].progresso + "%";
            porcentagem.innerHTML =
                etapas[etapaAtual].progresso + "%";
            etapaAtual++;
            setTimeout(proximaEtapa, 1000);
        } 
        
else {
    setTimeout(() => {
        carregamento.classList.add("escondido");
        surpresa.classList.remove("escondido");
        criarConfetes();

        musica.volume = 0.8;
        musica.play();

    }, 300);
}
    }
    proximaEtapa();
}

function criarConfetes() {
    for(let i = 0; i < 80; i++) {
        const confete = document.createElement("div");
        confete.classList.add("confete");
        confete.style.left = Math.random() * 100 + "%";
        confete.style.animationDelay = Math.random() * 3 + "s";
        confete.style.background = 
        ["#e8a0b8", "#b76e79", "#f2b5c4", "#c49a6c"]
        [Math.floor(Math.random() * 4)];
        areaConfete.appendChild(confete);
    }
}

function criarEstrelas(){
    const area = document.querySelector(".estrelas");
    for(let i = 0; i < 40; i++){
        const estrela = document.createElement("div");
        estrela.classList.add("estrela");
        estrela.style.left = Math.random()*100 + "%";
        estrela.style.top = Math.random()*100 + "%";
        estrela.style.animationDelay =
        Math.random()*3 + "s";
        area.appendChild(estrela);
    }
}

botaoPedido.addEventListener("click", () => {
    chamas.forEach(chama => {
        chama.classList.add("apagada");
    });
    botaoPedido.innerHTML = "✨ Pedido feito! ✨";
    setTimeout(() => {
        surpresa.classList.add("escondido");
        mensagem.classList.remove("escondido");
        criarEstrelas();
    }, 2000);
});

botaoContinuar.addEventListener("click", () => {
    mensagem.classList.add("escondido");
    amigos.classList.remove("escondido");
});

botaoVaral.addEventListener("click", () => {
    amigos.classList.add("escondido");
    varalTela.classList.remove("escondido");
});

botaoFinalizar.addEventListener("click", () => {
    varalTela.classList.add("escondido");
    telaFinal.classList.remove("escondido");
    setTimeout(() => {
        botaoReiniciar.classList.remove("escondido");
        botaoReiniciar.classList.add("mostrar");
    }, 3000);
});

botaoReiniciar.addEventListener("click", () => {
    location.reload();
});