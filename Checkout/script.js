document.querySelectorAll(".accordion").forEach((accordion) => {
  accordion.addEventListener("click", () => {
    // Close all other accordions
    document.querySelectorAll(".accordion").forEach((otherAccordion) => {
      if (
        otherAccordion !== accordion &&
        otherAccordion.classList.contains("active")
      ) {
        otherAccordion.classList.remove("active");
        const otherPanel = otherAccordion.nextElementSibling;
        otherPanel.style.display = "none";
      }
    });

    // Toggle the clicked accordion
    accordion.classList.toggle("active");
    const panel = accordion.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// slider
let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }
  const sliderContent = document.querySelector(".slider-content");
  sliderContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentIndex);
});


// rotate
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach(function (accordion) {
    accordion.addEventListener("click", function () {
      const panel = this.nextElementSibling;
      const img = this.querySelector(".accordion-img");

      // Toggle panel display
      panel.classList.toggle("show");

      // Toggle image rotation
      img.classList.toggle("rotate");
    });
  });
});
