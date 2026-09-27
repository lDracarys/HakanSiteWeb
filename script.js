// Message de bienvenue
console.log('Bienvenue sur mon site ! 🎮');

// Animation au chargement
document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    card.style.animation = 'slideIn 0.5s ease-out';
});

// Ajouter animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Logs quand tu cliques sur les liens
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', function() {
        console.log('Lien cliqué : ' + this.textContent);
    });
});