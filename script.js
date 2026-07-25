// ===============================
// CONFIGURAÇÕES DA VAQUINHA
// ===============================

// Configuração da Vaquinha para a OBAFOG
// Altere aqui o valor arrecadado quando entrar mais PIX!
const meta = 10000;
let arrecadado = 655;

function atualizarVaquinha(){

    const porcentagem = Math.min((arrecadado/meta)*100,100);

    document.getElementById("progress-bar").style.width = porcentagem + "%";

    document.getElementById("valor-atual").textContent =
        arrecadado.toLocaleString("pt-BR",{minimumFractionDigits:2});

    document.getElementById("meta").textContent =
        meta.toLocaleString("pt-BR",{minimumFractionDigits:2});

}

atualizarVaquinha();

// ===============================
// CONTAGEM REGRESSIVA
// ===============================

// Data limite: 17 de Agosto de 2026 às 23:59:59
const dataLimite = new Date("2026-08-17T23:59:59").getTime();

function atualizarContador() {
  const agora = new Date().getTime();
  const diferenca = dataLimite - agora;

  if (diferenca > 0) {
    // Cálculos de dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    // Atualiza na tela (com o '0' na frente se for menor que 10)
    document.getElementById("dias").textContent = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").textContent = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").textContent = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").textContent = segundos < 10 ? "0" + segundos : segundos;
  } else {
    // Quando a data chegar
    document.getElementById("contador").innerHTML = "Vaquinha Encerrada!";
  }
}

// Atualiza o contador a cada 1 segundo (1000ms)
setInterval(atualizarContador, 1000);

// Executa assim que abre a página
atualizarContador();

setInterval(atualizarContador,1000);

atualizarContador();


// ===============================
// COPIAR PIX
// ===============================

function copiarPix(){

    const pix = document.getElementById("pix");

    pix.select();

    pix.setSelectionRange(0,99999);

    navigator.clipboard.writeText(pix.value);

    alert("Chave Pix copiada com sucesso! ❤️");

}


// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

const secoes = document.querySelectorAll("section");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity = "1";

            entrada.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

secoes.forEach(secao=>{

    secao.style.opacity="0";

    secao.style.transform="translateY(50px)";

    secao.style.transition="all .8s ease";

    observador.observe(secao);

});


// ===============================
// LIGHTBOX DAS IMAGENS
// ===============================

const imagens = document.querySelectorAll(".galeria img");

const lightbox = document.createElement("div");

lightbox.style.position = "fixed";
lightbox.style.top = "0";
lightbox.style.left = "0";
lightbox.style.width = "100%";
lightbox.style.height = "100%";
lightbox.style.background = "rgba(0,0,0,.95)";
lightbox.style.display = "none";
lightbox.style.alignItems = "center";
lightbox.style.justifyContent = "center";
lightbox.style.zIndex = "99999";

const imagem = document.createElement("img");

imagem.style.maxWidth = "90%";
imagem.style.maxHeight = "90%";
imagem.style.borderRadius = "15px";

lightbox.appendChild(imagem);

document.body.appendChild(lightbox);

imagens.forEach(img=>{

    img.addEventListener("click",()=>{

        imagem.src = img.src;

        lightbox.style.display="flex";

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.style.display="none";

});
