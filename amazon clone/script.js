document.addEventListener("DOMContentLoaded", () => {
  // Add to Cart Alert for "See More" links
  const seeMoreLinks = document.querySelectorAll(".box-content a");
  seeMoreLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("This product has been added to your cart!");
    });
  });

  // Automatic Hero Image Slider
  const heroSection = document.querySelector(".hero");
  const images = [
    "hero-section-image1.jpg",
    "hero-section-image2.jpg",
    "hero-section-image3.jpg",
  ];
  let currentImageIndex = 0;

  function changeHeroImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
  }
  setInterval(changeHeroImage, 5000);

  // Smooth Scroll to Top
  const backToTopButton = document.querySelector(".top a");
  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Language Selector Alert
  const languageSelect = document.querySelector(".box4-select");
  languageSelect.addEventListener("change", () => {
    alert(`Language changed to: ${languageSelect.value}`);
  });
});
