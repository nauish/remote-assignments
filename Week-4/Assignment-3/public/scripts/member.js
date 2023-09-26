async function postAndFetchJson(inputFromUser, urlToPostTo) {
  try {
    const response = await fetch(urlToPostTo, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputFromUser),
    });
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
  }
}

function handleResult(result) {
  messageBoard.textContent = result.message;
  messageBoard.style.backgroundColor = result.success ? "lightgreen" : "pink"; // Ternary condition

  if (result.success) {
    setTimeout(() => {
      window.location.href = "../member";
    }, 500);
  }
}

const memberAPI = "../member/newArticle";
const submitForm = document.querySelector(".new-article");
const messageBoard = document.querySelector(".message-container");
submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { title, content } = submitForm.elements;
  const data = {
    title: title.value,
    content: content.value,
  };
  const result = await postAndFetchJson(data, memberAPI);

  handleResult(result);
});

document.querySelector("#new-article").addEventListener("click", () => {
  if (submitForm.style.display === "none" || submitForm.style.display === "") {
    submitForm.style.display = "block";
  } else {
    submitForm.style.display = "none";
  }
});
