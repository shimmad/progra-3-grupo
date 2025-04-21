const images = ["imgn/bxxx.png", "imgn/fiesta.png", "imgn/losti.png", "imgn/rich.png"];
let index = 0;

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slide").src = images[index];
});