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
const musicaEaster = document.getElementById("musicaEaster");
const areaConfete = document.getElementById("confetes");
const botaoReiniciar = document.getElementById("reiniciar");

const coracao = document.getElementById("coracao-secreto");
const easter = document.getElementById("easter-egg");
const barraEaster = document.getElementById("barra-easter");
const textoEaster = document.getElementById("texto-easter");
const porcentagemEaster = document.getElementById("porcentagem-easter");
const fotosSecretas = document.getElementById("fotos-secretas");
const botaoVoltarEaster = document.getElementById("voltar-easter");


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

        musica.volume = 1;
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

function iniciarEaster(){
    let progresso = 0;
    const intervalo = setInterval(()=>{
        progresso++;
        if(progresso == 67){
            textoEaster.innerHTML = "67?!?!?!";
            barraEaster.style.width = "67%";
            porcentagemEaster.innerHTML = "67%";
            clearInterval(intervalo);
            setTimeout(()=>{
             textoEaster.innerHTML = "Hmm... estranho...";
            },900);

            setTimeout(()=>{
                textoEaster.innerHTML = "Acessando arquivos secretos...";
                continuar();
            },1700);
        }
        else{
            barraEaster.style.width = progresso + "%";
            porcentagemEaster.innerHTML = progresso + "%";
        }
    },30);
}

function continuar(){
    let progresso = 67;
    const intervalo = setInterval(()=>{
        progresso++;
        barraEaster.style.width = progresso + "%";
        porcentagemEaster.innerHTML = progresso + "%";
        if(progresso >= 100){
            clearInterval(intervalo);
            setTimeout(()=>{
                mostrarFotosSecretas();
            },600);
        }
    },25);
}

function revelarArquivos(){
    const fotos = document.querySelectorAll(".galeria-secreta img");
    const texto = document.getElementById("texto-arquivo");
    let atual = 0;
    const mensagens = [
    "Arquivo #001 encontrado... 👀",
    "Arquivo #002 encontrado... 🤨",
    "Arquivo #003 encontrado... 🤨",
    "Arquivo #004 encontrado... 💀",
    "Arquivo #005 encontrado... SOCORRO KAKAKAKAKAKAK",
    "Arquivo #006 encontrado... Isso ainda existe?! 😭",
    "Arquivo #007 encontrado... Apagaram essa foto da galeria por um motivo.",
    "Arquivo #008 encontrado... OK, chega. Esse arquivo nunca deveria ter sido recuperado. 💀"
];
    function proxima(){
        if(atual < fotos.length){
            texto.innerHTML = mensagens[atual];
            fotos[atual].classList.add("aparecer");
            atual++;
            setTimeout(proxima, 1500);
        }
        else{
            texto.innerHTML =
            "Todos os arquivos foram recuperados. ❤️";
            setTimeout(()=>{
                texto.innerHTML =
                "⚠️ Encerrando acesso...";
            }, 1500);
            setTimeout(()=>{
                texto.innerHTML =
                "⚠️ Limpando rastros...";
            }, 3000);setTimeout(()=>{
                texto.innerHTML =
                "❌ Falha ao apagar as memórias.";
            }, 4500);setTimeout(()=>{
                texto.innerHTML =
                "❤️ Algumas coisas simplesmente merecem ser lembradas.";
            }, 6500);
        }
    }
    proxima();
}

botaoVoltarEaster.addEventListener("click", () => {
    fotosSecretas.classList.add("escondido");
    telaFinal.classList.remove("escondido");
});

let encontrouEaster = false;

function mostrarFotosSecretas(){
    encontrouEaster = true;
    easter.classList.add("escondido");
    fotosSecretas.classList.remove("escondido");
    revelarArquivos();
}

function fadeOutMusica(){
    const intervalo = setInterval(()=>{
        if(musica.volume > 0.02){
            musica.volume -= 0.02;
        }else{
            musica.pause();
            musica.currentTime = 0;
            musicaEaster.volume = 0.8;
            musicaEaster.play();
            clearInterval(intervalo);
        }
    },50);
}

botaoVoltarEaster.addEventListener("click", () => {
    musicaEaster.pause();
    musicaEaster.currentTime = 0;
    musica.volume = 0.8;
    musica.play();
    fotosSecretas.classList.add("escondido");
    telaFinal.classList.remove("escondido");
    if(encontrouEaster){
        document.querySelector(".assinatura").innerHTML =
        "👀 Você realmente clicou no coração. Confesso que achei que ninguém fosse descobrir isso. Obrigado por explorar até o final. ❤️";
    }
});

coracao.addEventListener("click", () => {
    coracao.classList.add("ativado");
    setTimeout(() => {
        telaFinal.classList.add("escondido");
        easter.classList.remove("escondido");
        iniciarEaster();
        fadeOutMusica();
    },700);
});