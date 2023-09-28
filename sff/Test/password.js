// password.js

var allowedPasswords = [
  "EGBAK_Eg7619",
  "7480",
  // Другие разрешенные пароли
];

var loginEnabled = true; // По умолчанию вход разрешен

function PassCheck() {
  if (loginEnabled) {
    var a = document.getElementById("pass").value;
    
    if (allowedPasswords.includes(a)) {
      var image = document.getElementById("imgggg");
      image.src = "https://banantapok.github.io/premium/autch/check.png";
      window.location.href = "https://banantapok.github.io/Last/sff/QQ.html";
    } else {
      var image = document.getElementById("imgggg");
      image.src = "https://banantapok.github.io/premium/autch/remove.png";
      document.write(" ");
    }
  } else {
    alert("Вход временно приостановлен. Подождите.");
  }
}

function enableLogin() {
  loginEnabled = true; // Установить вход разрешенным
  alert("Вход включен.");
}

function disableLogin() {
  loginEnabled = false; // Установить вход временно приостановленным
  alert("Вход отключен. Подождите.");
}
