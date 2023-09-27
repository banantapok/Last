// password.js

var passwords = [
    "EGBAK_Eg7619",
    "Hao729_LIPA",
    "aji9u7_LIPA",
    "87YIon_LIPA",
    "Lopi8o_LIPA",
    "7480",
    "768Iub_LIPA",
    "87NJUQ_LIPA",
    "Li47Yi_LIPA",
    "Lio4Iy_LIPA",
    "Lk67Ui_LIPA"
];

// Получаем состояние флага из localStorage при загрузке страницы
var savedState = localStorage.getItem("passwordsEnabled");
var passwordsEnabled = savedState === null ? true : savedState === "true";

function togglePasswords() {
    passwordsEnabled = !passwordsEnabled;
    applyState();
}

function applyState() {
    localStorage.setItem("passwordsEnabled", passwordsEnabled);
}

function PassCheck() {
    var a = document.getElementById("pass").value;
    if (passwordsEnabled) {
        if (passwords.indexOf(a) !== -1) {
            var image = document.getElementById("imgggg");
            image.src = "https://banantapok.github.io/premium/autch/check.png";
            window.location.href = "https://banantapok.github.io/Last/sff/QQ.html";
        } else {
            var image = document.getElementById("imgggg");
            image.src = "https://banantapok.github.io/premium/autch/remove.png";
            document.write(" ");
        }
    } else {
        alert("Пароли отключены.");
    }
}
