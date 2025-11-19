const startBtn = document.getElementById("start-btn");
const welcome = document.querySelector(".welcome");
const flowers = document.querySelector(".flowers");

startBtn.addEventListener("click", () => {
  // sembunyikan opening
  welcome.style.opacity = "0";
  welcome.style.transition = "1s";

  // tampilkan bunga
  setTimeout(() => {
    flowers.style.opacity = "1";
    flowers.style.pointerEvents = "auto";
  }, 1000);
});
