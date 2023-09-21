async function postAndFetchJson(inputFromUser, urlToPostTo) {
  try {
    const response = await fetch(urlToPostTo, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputFromUser),
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error("Error:", error);
  }
}

const registrationAPI = "../auth/register";
const loginAPI = "../auth/login";

const registerForm = document.querySelector(".register");
const loginForm = document.querySelector(".login");
const messageBoard = document.querySelector(".message-container");

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission
  const email = registerForm.elements.email.value;
  const password = registerForm.elements.password.value;
  const confirmation = registerForm.elements.confirmation.value;
  if (!email || !password) {
    messageBoard.textContent = "Please fill out you email and password!";
  }
  const registrationResult = await postAndFetchJson(
    { email, password, confirmation },
    registrationAPI
  );
  messageBoard.textContent = registrationResult.message;
  if (registrationResult.success) {
    messageBoard.style.backgroundColor = "lightgreen";
    setTimeout(() => {
      window.location.href = "../member";
    }, 500);
  } else {
    messageBoard.style.backgroundColor = "pink";
  }
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  const loginResult = await postAndFetchJson({ email, password }, loginAPI);

  messageBoard.textContent = loginResult.message;
  if (loginResult.success) {
    messageBoard.style.backgroundColor = "lightgreen";
    setTimeout(() => {
      window.location.href = "../member";
    }, 300);
  } else {
    messageBoard.style.backgroundColor = "pink";
  }
});
