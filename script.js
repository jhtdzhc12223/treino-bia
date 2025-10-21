/* style.css - Tema Academia Rosa e Preta */
:root {
    --rosa-escuro: #ff1493;
    --rosa-medio: #ff69b4;
    --rosa-claro: #ffb6c1;
    --rosa-suave: #fff0f5;
    --preto: #000000;
    --preto-cinza: #1a1a1a;
    --preto-claro: #2d2d2d;
    --cinza-escuro: #404040;
    --cinza: #666666;
    --cinza-claro: #cccccc;
    --branco: #ffffff;
    --sombra-rosa: rgba(255, 20, 147, 0.3);
    --sombra-preta: rgba(0, 0, 0, 0.5);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background: linear-gradient(135deg, var(--preto-cinza) 0%, var(--preto) 100%);
    color: var(--branco);
    line-height: 1.6;
    padding-bottom: 60px;
    min-height: 100vh;
}

/* Tela de carregamento */
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--preto);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loading-content {
    text-align: center;
    max-width: 400px;
    padding: 20px;
}

.loading-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.loading-bar {
    width: 100%;
    height: 6px;
    background-color: var(--preto-claro);
    border-radius: 3px;
    margin-top: 20px;
    overflow: hidden;
}

.loading-progress {
    height: 100%;
    width: 0%;
    background: linear-gradient(to right, var(--rosa-escuro), var(--rosa-medio));
    animation: loading 2s ease-in-out forwards;
}

@keyframes loading {
    0% { width: 0%; }
    100% { width: 100%; }
}

header {
    position: relative;
    margin-bottom: 20px;
}

.header-bg {
    height: 200px;
    overflow: hidden;
    background: linear-gradient(135deg, var(--preto) 0%, var(--rosa-escuro) 100%);
    position: relative;
}

.header-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="gym" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%23ff1493" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23gym)"/></svg>');
}

h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2.5rem;
    text-align: center;
    color: var(--branco);
    text-shadow: 2px 2px 8px var(--sombra-preta);
    width: 100%;
    padding: 0 20px;
    font-weight: 800;
}

.subtitulo {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.1rem;
    text-align: center;
    color: var(--rosa-claro);
    width: 100%;
    padding: 0 20px;
    font-weight: 500;
}

.main-nav {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    padding: 0 15px;
    gap: 15px;
}

.nav-link {
    background: var(--preto-claro);
    color: var(--branco);
    padding: 12px 25px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    border: 2px solid var(--rosa-escuro);
    box-shadow: 0 4px 15px var(--sombra-preta);
    position: relative;
    overflow: hidden;
}

.nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--rosa-escuro), transparent);
    transition: left 0.5s;
}

.nav-link:hover::before {
    left: 100%;
}

.nav-link.active {
    background: linear-gradient(135deg, var(--rosa-escuro), var(--rosa-medio));
    color: var(--branco);
    border-color: transparent;
    box-shadow: 0 6px 20px var(--sombra-rosa);
}

.nav-link:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px var(--sombra-rosa);
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 15px;
}

.dia-treino {
    margin-bottom: 25px;
    animation: fadeInUp 0.6s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card-header {
    background: linear-gradient(135deg, var(--rosa-escuro), var(--preto-claro));
    color: var(--branco);
    padding: 18px;
    border-radius: 15px 15px 0 0;
    margin-bottom: 0;
    box-shadow: 0 6px 20px var(--sombra-preta);
    border-bottom: 3px solid var(--rosa-medio);
    position: relative;
    overflow: hidden;
}

.card-header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--rosa-escuro), var(--rosa-medio), var(--rosa-escuro));
}

.card-header h2 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 700;
    text-shadow: 1px 1px 3px var(--sombra-preta);
}

.exercicios {
    background: var(--preto-claro);
    border-radius: 0 0 15px 15px;
    padding: 20px;
    box-shadow: 0 8px 25px var(--sombra-preta);
    border: 2px solid var(--cinza-escuro);
    border-top: none;
    position: relative;
}

.exercicios::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    right: 20px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--rosa-medio), transparent);
}

.exercicio {
    display: flex;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid var(--cinza-escuro);
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 10px;
    margin-bottom: 8px;
    background: var(--preto-cinza);
}

.exercicio:hover {
    background: var(--cinza-escuro);
    transform: translateX(5px);
    border-left: 3px solid var(--rosa-medio);
}

.exercicio:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.ordem {
    background: linear-gradient(135deg, var(--rosa-escuro), var(--rosa-medio));
    color: var(--branco);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-right: 15px;
    flex-shrink: 0;
    font-size: 0.9rem;
    box-shadow: 0 3px 10px var(--sombra-rosa);
}

.nome {
    flex: 1;
    font-weight: 600;
    font-size: 1rem;
}

.nome small {
    color: var(--cinza-claro);
    font-size: 0.85rem;
    display: block;
    margin-top: 5px;
    font-weight: 400;
}

.dica-icon {
    background: var(--rosa-escuro);
    color: var(--branco);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    flex-shrink: 0;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    box-shadow: 0 3px 10px var(--sombra-rosa);
}

.dica-icon:hover {
    background: var(--rosa-medio);
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 5px 15px var(--sombra-rosa);
}

footer {
    text-align: center;
    padding: 25px;
    margin-top: 40px;
    color: var(--cinza-claro);
    font-weight: 500;
    border-top: 2px solid var(--cinza-escuro);
    background: var(--preto-cinza);
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -5px 20px var(--sombra-preta);
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
}

.modal-content {
    background: linear-gradient(135deg, var(--preto-claro), var(--preto-cinza));
    margin: 15% auto;
    padding: 25px;
    border: 2px solid var(--rosa-escuro);
    border-radius: 20px;
    width: 80%;
    max-width: 500px;
    position: relative;
    box-shadow: 0 10px 30px var(--sombra-preta);
    animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.close {
    color: var(--cinza-claro);
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
    transition: color 0.3s ease;
    position: absolute;
    top: 15px;
    right: 20px;
}

.close:hover {
    color: var(--rosa-medio);
}

#dicaTexto {
    margin-top: 15px;
    line-height: 1.6;
    color: var(--branco);
    font-size: 1rem;
    padding: 10px;
    background: var(--preto);
    border-radius: 10px;
    border-left: 3px solid var(--rosa-medio);
}

/* Estilos para exercícios completos */
.exercicio.completo {
    background: linear-gradient(135deg, var(--preto-cinza), var(--cinza-escuro));
    opacity: 0.8;
    border-left: 3px solid var(--rosa-claro);
}
.exercicio.completo .ordem {
    background: linear-gradient(135deg, var(--rosa-claro), var(--rosa-medio));
}

/* Responsividade */
@media (max-width: 768px) {
    .header-bg {
        height: 160px;
    }
    
    h1 {
        font-size: 2rem;
    }
    
    .subtitulo {
        font-size: 1rem;
    }
    
    .main-nav {
        flex-direction: column;
        align-items: center;
    }
    
    .nav-link {
        width: 90%;
        margin-bottom: 10px;
        text-align: center;
    }
    
    .exercicio {
        flex-direction: column;
        align-items: flex-start;
        padding: 12px;
    }
    
    .ordem {
        margin-bottom: 10px;
    }
    
    .dica-icon {
        align-self: flex-end;
        margin-top: 10px;
    }
    
    .modal-content {
        width: 90%;
        margin: 20% auto;
    }
}

@media (max-width: 480px) {
    .header-bg {
        height: 140px;
    }
    
    h1 {
        font-size: 1.7rem;
    }
    
    .card-header h2 {
        font-size: 1.1rem;
    }
    
    .nome {
        font-size: 0.9rem;
    }
    
    .nome small {
        font-size: 0.8rem;
    }
    
    .exercicio {
        padding: 10px;
    }
}
