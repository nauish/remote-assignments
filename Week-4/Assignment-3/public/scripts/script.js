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

function listenForFormSubmit(form, api) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { email, password, confirmation } = form.elements;
    const data = {
      email: email.value,
      password: password.value,
      confirmation: confirmation?.value, // ? = Optional chaining prevents errors when undefined
    };
    const result = await postAndFetchJson(data, api);

    handleResult(result);
  });
}

const registrationAPI = "../auth/register";
const loginAPI = "../auth/login";

const registerForm = document.querySelector(".register");
const loginForm = document.querySelector(".login");
const messageBoard = document.querySelector(".message-container");

listenForFormSubmit(registerForm, registrationAPI);
listenForFormSubmit(loginForm, loginAPI);
