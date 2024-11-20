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