// script-motivacao.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('💝 Página de motivação carregada!');
    
    // Inicializar contadores
    atualizarContadores();
    
    // Carregar frase do dia
    carregarFraseDoDia();
    
    // Efeito de digitação nas mensagens
    iniciarEfeitosEspeciais();
});

// Frases motivacionais
const frasesMotivacionais = [
    "Hoje você está mais forte que ontem, e amanhã será ainda mais forte que hoje.",
    "Construa um corpo do qual você possa se orgulhar, mas que apenas um homem possa tocar.",
    "Treine para ser uma mulher diferente a cada treino, mas mantendo sua incrível personalidade e charme.",
    "Você não está apenas mudando seu corpo, está transformando sua vida.",
    "A disciplina hoje trará orgulho amanhã. Persista!",
    "Cada repetição te aproxima da melhor versão de você mesma.",
    "Prove para mim e para si mesma que cada elogio e cada voto de confiança que eu depositei em você tenham valido a pena.",
    "Você é mais forte do que qualquer desculpa que possa inventar.",
    "Construa um corpo que seja o seu charme e seu tesouro, mas dê a chave desse tesouro para a pessoa certa. Os tesouros mais valiosos são destinados às pessoas que vão saber cuidá-los.",
    "Treine como se sua vida dependesse disso, porque depende!",
    "A mulher que vence na academia é a mesma que vence na vida.",
    "Seu único limite é aquele que você coloca na sua mente."
];

function novaFrase() {
    const fraseElement = document.getElementById('fraseAtual');
    const fraseAtual = fraseElement.textContent;
    let novaFrase;
    
    // Garantir que a nova frase seja diferente da atual
    do {
        novaFrase = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];
    } while (novaFrase === fraseAtual && frasesMotivacionais.length > 1);
    
    // Efeito de transição
    fraseElement.style.opacity = '0';
    fraseElement.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        fraseElement.textContent = novaFrase;
        fraseElement.style.opacity = '1';
        fraseElement.style.transform = 'translateY(0)';
        
        // Salvar no localStorage
        localStorage.setItem('ultimaFraseMotivacional', novaFrase);
        localStorage.setItem('timestampFrase', new Date().getTime());
    }, 300);
}

function carregarFraseDoDia() {
    const ultimaFrase = localStorage.getItem('ultimaFraseMotivacional');
    const timestamp = localStorage.getItem('timestampFrase');
    const agora = new Date().getTime();
    const umDia = 24 * 60 * 60 * 1000; // 24 horas em milissegundos
    
    // Se não tem frase salva ou passou mais de um dia, pega uma nova
    if (!ultimaFrase || !timestamp || (agora - timestamp > umDia)) {
        novaFrase();
    } else {
        document.getElementById('fraseAtual').textContent = ultimaFrase;
    }
}

function atualizarContadores() {
    // Recuperar dados do localStorage
    const progresso = JSON.parse(localStorage.getItem('treinoBiaProgress') || '{}');
    
    // Calcular totais
    let totalExerciciosCompletos = 0;
    let diasComTreino = new Set();
    
    Object.keys(progresso).forEach(diaId => {
        const exerciciosCompletos = progresso[diaId];
        totalExerciciosCompletos += exerciciosCompletos.length;
        if (exerciciosCompletos.length > 0) {
            diasComTreino.add(diaId);
        }
    });
    
    // Calcular metas alcançadas (considerando 70% dos exercícios completos como meta)
    const totalExercicios = document.querySelectorAll('.exercicio').length;
    const metasAlcancadas = Math.floor((totalExerciciosCompletos / totalExercicios) * 10);
    
    // Atualizar display
    document.getElementById('diasTreino').textContent = diasComTreino.size;
    document.getElementById('exerciciosCompletos').textContent = totalExerciciosCompletos;
    document.getElementById('metasAlcancadas').textContent = Math.max(0, metasAlcancadas);
}

function iniciarEfeitosEspeciais() {
    // Efeito de aparecimento sequencial nos cards
    const cards = document.querySelectorAll('.motivacao-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Efeito de brilho nas rosas
    const rosas = document.querySelectorAll('.motivacao-rose');
    rosas.forEach((rosa, index) => {
        rosa.style.animationDelay = `${index * 0.5}s`;
    });
}

// Atualizar contadores periodicamente
setInterval(atualizarContadores, 5000);
