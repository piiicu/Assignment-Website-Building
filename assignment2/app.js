const form = document.querySelector("#login-container");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  if (usernameInput.value.trim() == "") {
    setError(usernameInput, "please enter username");
  } else if (usernameInput.value.trim() !== "new_user") {
    setError(usernameInput, "*please enter a valid username");
  } else {
    setSuccess(usernameInput);
  }
  if (passwordInput.value.trim() == ''){
      setError(passwordInput, 'please enter password')
  } else if (passwordInput.value.trim() !== '123456789'){
      setError(passwordInput, 'please enter a valid password' )
  } else {
      setSuccess(passwordInput)
  }

}


function setError(element, errorMessage) {
  const parent = element.parentElement;
  if (parent.classList.contains("success")) {
    parent.classList.remove("success");
  }
  parent.classList.add("error");
  const paragraph = parent.querySelector("p");
  paragraph.textContent = errorMessage;
}

function setSuccess(element) {
  const parent = element.parentElement;
  if (parent.classList.contains("error")) {
    parent.classList.remove("error");
  }
  parent.classList.add("success");
}
