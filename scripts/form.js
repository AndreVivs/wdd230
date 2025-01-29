const password = document.querySelector("#password");
const passwordConf = document.querySelector("#passwordConf");
const message = document.querySelector("#formmessage");

passwordConf.addEventListener("focusout", checkSame);

function checkSame() {
  if (password.value !== passwordConf.value) {
    message.textContent = "❗Password Confirmation DO NOT MATCH!";
    message.style.display = "flex";
    message.style.justifyContent = "center";
    message.style.color = "rgb(202, 60, 13)";
    passwordConf.style.backgroundColor = "#fff0f3";
    passwordConf.value = "";
    passwordConf.focus();
  } else {
    message.style.display = "none";
    passwordConf.style.backgroundColor = "#fff";
    passwordConf.style.color = "#000";
  }
}

// RANGE FUNCTION

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}
