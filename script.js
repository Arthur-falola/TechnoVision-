// Animation d'apparition des articles
document.addEventListener("DOMContentLoaded", function() {
  const articles = document.querySelectorAll('.article');
  articles.forEach((article, index) => {
    article.style.opacity = 0;
    article.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
      article.style.opacity = 1;
    }, index * 300); // Différer l'animation de chaque article
  });
});
// Liste des articles avec leurs titres et liens
const articles = [
  { title: "Les dernières tendances en IA", link: "article1.html" },
  { title: "L'impact de la 5G sur les technologies", link: "article4.html" },
  { title: "Les gadgets technologiques incontournables", link: "article2.html" },
  { title: "Comment protéger ses données personnelles", link: "article3.html" },
  { title: "Top 5 des smartphones les plus innovants", link: "article5.html" },
  { title: "Introduction aux cryptomonnaies", link: "article6.html" },
  { title: "Les meilleures applications de productivité", link: "article7.html" },
  { title: "Les startups technologiques africaines", link: "article8.html" },
  { title: "La réalité augmentée en 2024", link: "article9.html" },
  { title: "L'énergie renouvelable et la technologie", link: "article10.html" },
  { title:  "Les meilleurs languages de programmation en 2024", link: "langage-progammation.html" }, 
];

// Fonction de recherche
document.getElementById("searchButton").addEventListener("click", function () {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const result = articles.find(article =>
    article.title.toLowerCase().includes(query)
  );

  if (result) {
    window.location.href = result.link; // Redirige vers l'article trouvé
  } else {
    alert("Aucun article correspondant trouvé.");
  }
});
// Fonction pour charger les "J’aime" depuis LocalStorage
function loadLikes() {
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((button) => {
    const articleId = button.getAttribute("data-article-id");
    const likeCount = localStorage.getItem(`like-${articleId}`) || 0;

    // Met à jour le compteur affiché
    const likeCountElement = button.querySelector(".like-count");
    likeCountElement.textContent = likeCount;

    // Désactiver le bouton si l'utilisateur a déjà aimé
    if (localStorage.getItem(`liked-${articleId}`)) {
      button.disabled = true;
      button.textContent = "❤️ Aimé";
    }
  });
}

// Fonction pour gérer les clics sur les boutons "J’aime"
function handleLikeButtons() {
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const articleId = button.getAttribute("data-article-id");
      const likeCountElement = this.querySelector(".like-count");
      let likeCount = parseInt(likeCountElement.textContent);

      // Augmente le compteur de "J’aime"
      likeCount += 1;
      likeCountElement.textContent = likeCount;

      // Sauvegarde le compteur et l'état du bouton dans LocalStorage
      localStorage.setItem(`like-${articleId}`, likeCount);
      localStorage.setItem(`liked-${articleId}`, true);

      // Désactive le bouton
      this.disabled = true;
      this.textContent = "❤️ Aimé";
    });
  });
}

// Charger les données et activer les boutons
document.addEventListener("DOMContentLoaded", function () {
  loadLikes();
  handleLikeButtons();
});

//Les actions du menu

/*document.getElementById("menu-button").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Fermer le menu si l'utilisateur clique en dehors
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var button = document.getElementById("menu-button");
    if (event.target !== menu && event.target !== button) {
        menu.style.display = "none";
    }
});/*

