document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  const existingErrorMessage = form.querySelector(".error-message");
  if (existingErrorMessage) {
    existingErrorMessage.remove();
  }

  const existingErrorIcon = form.querySelector(".error-icon");
  if (existingErrorIcon) {
    existingErrorIcon.remove();
  }

  const email = document.getElementById("email");
  if (email.classList.contains("error")) {
    email.classList.remove("error");
  }

  const emailInput = document.getElementById("email").value.trim();
  if (emailInput === "") {
    isValid = false;
    email.classList.add("error");

    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = "input is empty";
    form.appendChild(errorMessage);

    const errorIcon = document.createElement("img");
    errorIcon.src = "./images/icon-error.svg";
    errorIcon.classList.add("error-icon");
    form.appendChild(errorIcon);

    return;
  }
  if (!re.test(emailInput)) {
    isValid = false;
    email.classList.add("error");

    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = "not valid email";
    form.appendChild(errorMessage);

    const errorIcon = document.createElement("img");
    errorIcon.src = "./images/icon-error.svg";
    errorIcon.classList.add("error-icon");
    form.appendChild(errorIcon);
  }

  if (isValid) {
    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("loop", true);
    video.style.width = "100%";

    const source = document.createElement("source");
    source.src = "./images/bonus.mp4";
    source.type = "video/mp4";

    video.appendChild(source);
    document.body.innerHTML = "";
    document.body.appendChild(video);
  }
});
