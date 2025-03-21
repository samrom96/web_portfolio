/*global document: false */
// Attend que le DOM soit complètement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {
    "use strict";// Active le mode strict pour éviter les erreurs communes
    const button = document.querySelector(".btn");// Sélectionne le premier élément avec la classe "btn"
    
    // Change la couleur d'arrière-plan du bouton lorsque la souris passe dessus
    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#009999";
    });

    // Rétablit la couleur d'arrière-plan d'origine lorsque la souris quitte le bouton
    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#00d1d1";// Couleur turquoise clair
    });
});

// Un deuxième bloc qui s'exécute également au chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
    const cvButton = document.querySelector(".about .btn");// Sélectionne le bouton dans la section "about"

     // Agrandit le bouton CV lorsque la souris passe dessus
    cvButton.addEventListener("mouseover", function () {
        cvButton.style.transform = "scale(1.1)";// Agrandit le bouton de 10%
        cvButton.style.transition = "0.3s";// Ajoute une transition de 0.3 seconde pour un effet fluide
    });

    // Rétablit la taille normale du bouton lorsque la souris le quitte
    cvButton.addEventListener("mouseout", function () {
        cvButton.style.transform = "scale(1)";// Revient à la taille d'origine
    });
});

// Un troisième bloc qui s'exécute au chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".project-card .btn");// Sélectionne tous les boutons dans les cartes de projet

    // Applique les mêmes effets d'agrandissement à chaque bouton de projet
    buttons.forEach(button => {
        // Agrandit le bouton au survol
        button.addEventListener("mouseover", function () {
            button.style.transform = "scale(1.1)";// Agrandit de 10%
            button.style.transition = "0.3s";// Transition fluide
        });

        // Rétablit la taille normale
        button.addEventListener("mouseout", function () {
            button.style.transform = "scale(1)";// Revient à la taille d'origine
        });
    });
});


// Fonction pour animer les barres de progression en fonction de leur valeur data-value
function animateProgressBars() {
    // Sélectionne toutes les barres de progression
    const progressBars = document.querySelectorAll('.progress');
    
    // Pour chaque barre, applique l'animation
    progressBars.forEach(bar => {
        // Récupère la valeur du pourcentage depuis l'attribut data-value
        const value = bar.getAttribute('data-value');
        // Petit délai pour permettre un effet visuel plus agréable
        setTimeout(() => {
            // Applique la largeur correspondant au pourcentage
            bar.style.width = value + '%';
        }, 300);
    });
}

// Fonction pour vérifier si un élément est visible dans la fenêtre du navigateur
function isElementInViewport(el) {
    // Récupère les coordonnées de l'élément par rapport à la fenêtre
    const rect = el.getBoundingClientRect();
    // Vérifie si l'élément est entièrement visible
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour vérifier la visibilité et déclencher l'animation au bon moment
function checkVisibility() {
    // Récupère le conteneur principal
    const container = document.querySelector('.container');
    // Si le conteneur est visible dans la fenêtre
    if (isElementInViewport(container)) {
        // Déclenche l'animation des barres
        animateProgressBars();
        // Retire l'écouteur d'événement pour ne pas répéter l'animation
        window.removeEventListener('scroll', checkVisibility);
    }
}

// Au chargement complet du DOM, initialise les fonctionnalités
document.addEventListener('DOMContentLoaded', function() {
    // Vérifie immédiatement si les barres sont visibles
    checkVisibility();
    // Ajoute un écouteur d'événement pour vérifier lors du défilement
    window.addEventListener('scroll', checkVisibility);
});


// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le formulaire
    const form = document.getElementById('contact-form');
    
    // Ajouter un écouteur d'événement sur la soumission du formulaire
    form.addEventListener('submit', function(event) {
        // Empêcher le comportement par défaut (rechargement de la page)
        event.preventDefault();
        
        // Récupérer les valeurs des champs
        const prenom = document.getElementById('prenom').value;
        const nom = document.getElementById('nom').value;
        const sujet = document.getElementById('sujet').value;
        const message = document.getElementById('message').value;
        
        // Validation des champs (facultatif, le HTML fait déjà une validation de base)
        if (!prenom || !nom || !sujet || !message) {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        
        // Simuler l'envoi du formulaire (dans un projet réel, ces données sont envoyées à un serveur)
        console.log('Formulaire soumis avec succès !');
        console.log({
            prenom: prenom,
            nom: nom,
            sujet: sujet,
            message: message
        });
        
        // Réinitialiser le formulaire après soumission
        form.reset();
        
        // Afficher un message de confirmation (facultatif)
        alert('Votre message a été envoyé avec succès !');
    });
    
    // Ajouter des effets visuels pour améliorer l'expérience utilisateur
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Ajouter une classe lorsqu'un champ est actif
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('active');
        });
        
        // Retirer la classe lorsqu'un champ n'est plus actif
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('active');
            }
        });
    });
});