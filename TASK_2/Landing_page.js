function scrollToBooking() {
    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
}

function cardZoomIn(card) {
    card.style.transform = 'scale(1.04)';
}
function cardZoomOut(card) {
    card.style.transform = 'scale(1)';
}


document.addEventListener("DOMContentLoaded", () => {
  const loadingBar = document.getElementById("loading-bar");
  let width = 0;
  const interval = setInterval(() => {
    width += 20;
    loadingBar.style.width = width + "%";

    if (width >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingBar.style.display = "none";
      }, 300);
    }
  }, 100);
});