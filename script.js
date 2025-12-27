document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('memberSearch');
    const cards = document.querySelectorAll('.org-box, .member');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();

        cards.forEach(card => {
            // On récupère tout le texte à l'intérieur de la carte (nom, grade, mission)
            const content = card.textContent.toLowerCase();
            
            if (content.includes(term)) {
                card.style.display = "block";
                card.style.animation = "fadeIn 0.5s";
                // Optionnel : surbrillance si recherche active
                card.style.opacity = "1";
            } else {
                // Au lieu de cacher brutalement, on réduit l'opacité pour garder la structure
                card.style.opacity = "0.1";
                // Si tu préfères cacher complètement, utilise : card.style.display = "none";
            }
        });
    });
});

// Petite animation CSS via JS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
