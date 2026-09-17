// --- 1. LÓGICA DE CURTIR (Botão + Duplo clique na Imagem) ---
const botaoCurtir = document.getElementById('botao-curtir');
const iconeCoracao = document.getElementById('icone-coracao');
const contadorCurtidas = document.getElementById('contador-curtidas');
const imagemPrincipal = document.querySelector('.main-img');

let numeroCurtidas = parseInt(contadorCurtidas.innerText);

// Função para incrementar e animar a curtida
function curtirPost() {
    numeroCurtidas++;
    contadorCurtidas.innerText = numeroCurtidas;

    iconeCoracao.style.fill = '#ed4956';
    iconeCoracao.style.stroke = '#ed4956';

    // Efeito visual de pulso no coração
    iconeCoracao.style.transform = 'scale(1.3)';
    iconeCoracao.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
        iconeCoracao.style.transform = 'scale(1)';
    }, 100);
}

// Executa ao clicar no botão de coração
botaoCurtir.addEventListener('click', curtirPost);

// Executa ao dar duplo clique na foto principal
imagemPrincipal.addEventListener('dblclick', curtirPost);


// --- 2. LÓGICA DE COMENTAR ---
const botaoComentar = document.getElementById('botao-comentar');
const iconeComentar = document.getElementById('icone-comentar');

botaoComentar.addEventListener('click', function() {
    iconeComentar.style.stroke = '#0095f6'; 
    setTimeout(() => {
        iconeComentar.style.stroke = 'currentColor'; 
    }, 300);
});

// --- 3. LÓGICA DE COMPARTILHAR ---
const botaoCompartilhar = document.getElementById('botao-compartilhar');
const iconeCompartilhar = document.getElementById('icone-compartilhar');
const contadorCompartilhamentos = document.getElementById('contador-compartilhamentos');
let compartilhado = false;
let numeroCompartilhamentos = parseInt(contadorCompartilhamentos.innerText);

botaoCompartilhar.addEventListener('click', function() {
    if (!compartilhado) {
        iconeCompartilhar.style.stroke = '#0095f6'; 
        numeroCompartilhamentos++;
        contadorCompartilhamentos.innerText = numeroCompartilhamentos;
        compartilhado = true;
    } else {
        iconeCompartilhar.style.stroke = 'currentColor'; 
        numeroCompartilhamentos--;
        contadorCompartilhamentos.innerText = numeroCompartilhamentos;
        compartilhado = false;
    }
});

// --- 4. LÓGICA DE SALVAR ---
const botaoSalvar = document.getElementById('botao-salvar');
const iconeSalvar = document.getElementById('icone-salvar');
let salvo = false;

botaoSalvar.addEventListener('click', function() {
    if (salvo) {
        iconeSalvar.style.fill = 'none';
        salvo = false;
    } else {
        iconeSalvar.style.fill = 'currentColor';
        salvo = true;
    }
});