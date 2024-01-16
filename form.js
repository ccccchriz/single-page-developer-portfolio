const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const message = document.getElementById("message");
const messageError = document.getElementById("message-error");
const arialive = document.getElementById("aria-live");

const handleSubmit = (event) => {
  event.preventDefault();
  let isValid = true;
  nameError.innerText = "";
  emailError.innerText = "";
  messageError.innerText = "";
  arialive.innerText = "";

  if (nameInput.value == "") {
    isValid = false;
    nameError.innerText = "Name can't be empty!";
  }

  if (email.value == "") {
    isValid = false;
    emailError.innerText = "Email can't be empty!";
  }

  if (message.value == "") {
    isValid = false;
    messageError.innerText = "Message can't be empty!";
  }

  if (!isValid) {
    arialive.innerText = "The form contains errors!";
    return;
  } else {
    if (!/.+\@.+\..+/.test(email.value)) {
      emailError.innerText = "Email isn't valid!";
      arialive.innerText = "Email isn't valid!";
      return;
    }
  }
};

form.addEventListener("submit", handleSubmit);
