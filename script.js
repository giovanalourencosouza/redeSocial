// --- 1. LÓGICA DE CURTIR ---
const botaoCurtir = document.getElementById('botao-curtir');
const iconeCoracao = document.getElementById('icone-coracao');
const contadorCurtidas = document.getElementById('contador-curtidas');
let curtido = false;
let numeroCurtidas = parseInt(contadorCurtidas.innerText);

botaoCurtir.addEventListener('click', function() {
    if (curtido) {
        iconeCoracao.style.fill = 'none';
        iconeCoracao.style.stroke = 'currentColor'; 
        numeroCurtidas--; 
        curtido = false;
    } else {
        iconeCoracao.style.fill = '#ed4956'; 
        iconeCoracao.style.stroke = '#ed4956'; 
        numeroCurtidas++; 
        curtido = true;
    }
    contadorCurtidas.innerText = numeroCurtidas;
});

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
