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
        alert("Регистрация отключена.");
    }
}

var passwordsEnabled = true; // Флаг для включения/отключения паролей

function togglePasswords() {
    var passwordToggle = document.getElementById("passwordToggle");
    passwordsEnabled = !passwordToggle.checked;
    if (passwordsEnabled) {
        alert("Пароли включены.");
    } else {
        alert("Пароли отключены.");
    }
}
