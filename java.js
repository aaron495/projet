// Sélectionne tous les éléments de menu
var menuItems = document.querySelectorAll("#menu li");

// Parcours de chaque élément de menu
menuItems.forEach(function(item) {
  // Ajoute un gestionnaire d'événement pour le survol
  item.addEventListener("mouseover", function() {
    // Ajoute une classe CSS pour appliquer un effet supplémentaire
    this.classList.add("hovered");
  });

  // Ajoute un gestionnaire d'événement pour le survol
  item.addEventListener("mouseout", function() {
    // Supprime la classe CSS lorsqu'il n'y a plus de survol
    this.classList.remove("hovered");
  });
});

// Fonction pour gérer l'événement de soumission du formulaire
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche l'envoi du formulaire

  // Récupère les valeurs des champs du formulaire
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Faites quelque chose avec les valeurs (envoi du formulaire, etc.)
  console.log('Nom : ' + name);
  console.log('Email : ' + email);
  console.log('Message : ' + message);

  // Réinitialise le formulaire
  document.getElementById('contactForm').reset();
});






