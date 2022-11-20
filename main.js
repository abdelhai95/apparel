import "./style.css";
// const parent = document.getElementById("parent");
// const parentAfter = window.getComputedStyle(parent, "::after");
const btn = document.querySelector("#btn");
const alertMessage = document.querySelector("#alertMessage");
const respImage = document.querySelector(".mobile");
const input = document.querySelector("#input");

// const parent = document.querySelector("#parent");
const validateEmail = function (mail) {
  const re =
    /(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  return re.test(mail);
};

// input.addEventListener("change", function (e) {});
window.addEventListener("resize", function (e) {
  const size = window.innerWidth;

  if (size >= 1000) {
    respImage.setAttribute("src", "./images/hero-desktop.jpg");
  }
});
btn.addEventListener("click", function (e) {
  const status = validateEmail(e.target.value);
  if (!status) {
    btn.classList.add("hidden");
    alertMessage.classList.remove("hidden");
    input.value = "";
    setTimeout(() => {
      alertMessage.classList.add("hidden");
      btn.classList.remove("hidden");
    }, 2000);
  }

  //
  // console.log(email);
});
