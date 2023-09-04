const welcomeContainer = document.querySelector(".main-upper");
const goodDayMsg = "Have a Good Time!";

welcomeContainer.addEventListener("click", () => {
  welcomeContainer.innerHTML = `<h1>${goodDayMsg}</h1>`;
});
const callToActionBtn = document.querySelector(".call-to-action");
const hiddenContainer = document.querySelector(".hidden-container");
callToActionBtn.addEventListener("click", () => {
  if (hiddenContainer.style.display === "flex") {
    hiddenContainer.style.display = "none";
  } else {
    hiddenContainer.style.display = "flex";
  }
});
