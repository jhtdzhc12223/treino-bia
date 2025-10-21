// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log('💖 Site do treino da Bia carregado!');
    
    // Remover tela de carregamento
    setTimeout(function() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
    
    // Adicionar funcionalidade de marcar exercícios completos
    const exercicios = document.querySelectorAll('.exercicio');
    
    exercicios.forEach(exercicio => {
        exercicio.addEventListener('click', function() {
            this.classList.toggle('completo');
            salvarProgresso();
            
            // Feedback visual
            if (this.classList.contains('completo')) {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 300);
            }
        });
    });
    
    // Modal para dicas
    const modal = document.getElementById('dicaModal');
    const dicaTexto = document.getElementById('dicaTexto');
    const closeBtn = document.querySelector('.close');
    
    if (modal && dicaTexto && closeBtn) {
        document.querySelectorAll('.dica-icon').forEach(icon => {
            icon.addEventListener('click', function(e) {
                e.stopPropagation();
                const dica = this.getAttribute('data-dica');
                dicaTexto.textContent = dica;
                modal.style.display = 'block';
            });
        });
        
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(e) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
        });
        
        // Fechar modal com ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
    
    // Salvar progresso no localStorage
    function salvarProgresso() {
        const progresso = {};
        document.querySelectorAll('.dia-treino').forEach(dia => {
            const diaId = dia.id;
            const exerciciosCompletos = [];
            dia.querySelectorAll('.exercicio.completo').forEach(ex => {
                exerciciosCompletos.push(ex.querySelector('.nome').textContent);
            });
            progresso[diaId] = exerciciosCompletos;
        });
        localStorage.setItem('treinoBiaProgress', JSON.stringify(progresso));
        
        // Atualizar contador
        atualizarContadorProgresso();
    }
    
    // Carregar progresso do localStorage
    function carregarProgresso() {
        const progresso = JSON.parse(localStorage.getItem('treinoBiaProgress') || '{}');
        
        Object.keys(progresso).forEach(diaId => {
            const exerciciosCompletos = progresso[diaId];
            const dia = document.getElementById(diaId);
            if (dia) {
                dia.querySelectorAll('.exercicio').forEach(ex => {
                    const nomeExercicio = ex.querySelector('.nome').textContent;
                    if (exerciciosCompletos.includes(nomeExercicio)) {
                        ex.classList.add('completo');
                    }
                });
            }
        });
        
        atualizarContadorProgresso();
    }
    
    // Atualizar contador de progresso
    function atualizarContadorProgresso() {
        const totalExercicios = document.querySelectorAll('.exercicio').length;
        const completos = document.querySelectorAll('.exercicio.completo').length;
        const porcentagem = totalExercicios > 0 ? Math.round((completos / totalExercicios) * 100) : 0;
        
        // Adicionar contador no footer se não existir
        let contador = document.getElementById('progresso-contador');
        if (!contador) {
            contador = document.createElement('div');
            contador.id = 'progresso-contador';
            document.querySelector('footer').prepend(contador);
        }
        
        contador.innerHTML = `
            <div style="text-align: center; margin-bottom: 10px; padding: 10px; background: var(--preto); border-radius: 10px; border: 1px solid var(--rosa-escuro);">
                <strong>📊 Progresso Semanal: ${completos}/${totalExercicios} (${porcentagem}%)</strong>
            </div>
        `;
    }
    
    // Carregar progresso ao iniciar
    carregarProgresso();
    
    // Efeito de digitação no título
    const titulo = document.querySelector('h1');
    if (titulo) {
        const textoOriginal = titulo.textContent;
        titulo.textContent = '';
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < textoOriginal.length) {
                titulo.textContent += textoOriginal.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }
});
