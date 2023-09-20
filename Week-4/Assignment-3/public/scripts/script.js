async function postAndFetchJson(inputFromUser, urlToPostTo) {
  try {
    const response = await fetch(`${urlToPostTo}`, {
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

const registerBtn = document.getElementById("register-now");
const loginBtn = document.getElementById("login-now");

const messageBoard = document.querySelector(".message-container");
const registrationAPI = "http://localhost:3000/register";
const loginAPI = "http://localhost:3000/login";

registerBtn.addEventListener("click", async () => {
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  const confirmation = document.getElementById("confirmation").value;
  const registrationResult = await postAndFetchJson(
    { email, password, confirmation },
    registrationAPI
  );
  if (registrationResult.success) {
    window.location.href = "http://localhost:3000/member";
  } else {
    messageBoard.textContent = registrationResult.message;
  }
});

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const loginResult = await postAndFetchJson({ email, password }, loginAPI);

  if (loginResult.success) {
    window.location.href = "http://localhost:3000/member";
  } else {
    messageBoard.textContent = loginResult.message;
  }
});
