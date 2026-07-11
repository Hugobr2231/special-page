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
const etapas = [
    {
        mensagem: "Preparando surpresa... 🎁",
        progresso: 20
    },
    {
        mensagem: "Preparando bolo... 🎂",
        progresso: 40
    },
    {
        mensagem: "Enchendo balões... 🎈",
        progresso: 60
    },
    {
        mensagem: "Acendendo velinhas... 🕯️",
        progresso: 80
    },
    {
        mensagem: "Quase tudo pronto... ❤️",
        progresso: 100
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
            }, 300);
        }
    }
    proximaEtapa();
}

botaoPedido.addEventListener("click", () => {
    chamas.forEach(chama => {
        chama.classList.add("apagada");
    });
    botaoPedido.innerHTML = "✨ Pedido feito! ✨";
    setTimeout(() => {
        surpresa.classList.add("escondido");
        mensagem.classList.remove("escondido");
    }, 2000);
});

botaoContinuar.addEventListener("click", () => {
    mensagem.classList.add("escondido");
    amigos.classList.remove("escondido");
});

botaoVaral.addEventListener("click", () => {
    botaoVaral.classList.add("escondido");
    varal.classList.remove("escondido");
});

botaoVaral.addEventListener("click", () => {
    amigos.classList.add("escondido");
    varalTela.classList.remove("escondido");
});