document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".no-btn");
    const yesButton = document.querySelector(".yes-btn");
    const img = document.querySelector(".popup-img");
  
    function moveButtonRandomly() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
  
      // Generate random positions within the screen boundaries
      const randomX = Math.random() * (windowWidth - noButton.offsetWidth);
      const randomY = Math.random() * (windowHeight - noButton.offsetHeight);
  
      // Apply the random positions
      noButton.style.position = "absolute";
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    }
  
    noButton.addEventListener("mouseover", moveButtonRandomly);
    yesButton.addEventListener("click", () => {
        img.style.display = "block";
    });
});  