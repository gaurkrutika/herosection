document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-container");
  const backgroundText = document.querySelector(".background-text");

  images.forEach((image) => {
    const img = image.querySelector("img");
    const overlayText = image.querySelector(".overlay-text");

    // Hover effect: Make selected image fully visible and vectorize others
    image.addEventListener("mouseenter", () => {
      backgroundText.style.color = "rgba(255, 255, 255, 0.3)"; // Dim background text
      images.forEach((otherImage) => {
        if (otherImage !== image) {
          otherImage.querySelector("img").style.filter = "grayscale(100%) opacity(0.3)";
        }
      });
      overlayText.style.opacity = "1";
    });

    // Mouse movement effect for subtle following
    image.addEventListener("mousemove", (e) => {
      const rect = image.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      img.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
    });

    // Reset on mouse leave
    image.addEventListener("mouseleave", () => {
      backgroundText.style.color = "#ffffff"; // Reset background text color
      images.forEach((otherImage) => {
        otherImage.querySelector("img").style.filter = "none";
      });
      overlayText.style.opacity = "0";
      img.style.transform = "scale(1) translate(0, 0)";
    });
  });
});
