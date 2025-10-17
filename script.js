// Script para funcionalidades futuras
document.addEventListener('DOMContentLoaded', function() {
    console.log('Site do treino da Bia carregado!');
    
    // Adicionar funcionalidade de marcar exercícios completos
    const exercicios = document.querySelectorAll('.exercicio');
    
    exercicios.forEach(exercicio => {
        exercicio.addEventListener('click', function() {
            this.classList.toggle('completo');
        });
    });
    
    // Adicionar classe para exercícios completos no CSS
    const style = document.createElement('style');
    style.textContent = `
        .exercicio.completo {
            background-color: #f0fff0;
            text-decoration: line-through;
            opacity: 0.7;
        }
    `;
    document.head.appendChild(style);
});
