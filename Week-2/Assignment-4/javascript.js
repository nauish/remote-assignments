const goodDayMsg = "Have a Good Time!";

const welcomeContainer = document.querySelector(".main-upper");

welcomeContainer.addEventListener("click", () => {
  welcomeContainer.innerHTML = `<h1>${goodDayMsg}</h1>`;
});
