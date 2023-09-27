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

var passwordsEnabled = true;

function togglePasswords() {
    passwordsEnabled = !passwordsEnabled;
    var checkBox = document.getElementById("passwordToggle");
    checkBox.checked = !passwordsEnabled;
    applyState();
}

function applyState() {
    var savedState = localStorage.getItem("passwordsEnabled");
    if (savedState !== null) {
        passwordsEnabled = savedState === "true";
    }

    if (passwordsEnabled) {
        alert("Пароли включены.");
    } else {
        alert("Пароли отключены.");
    }
}

function PassCheck() {
    if (passwordsEnabled) {
        var a = document.getElementById("pass").value;
        if (passwords.indexOf(a) !== -1) {
            alert("Пароль верный. Вход разрешен.");
            // Добавьте здесь любое другое действие, которое вы хотите выполнить после успешного входа.
        } else {
            alert("Неверный пароль. Вход запрещен.");
            // Добавьте здесь любое другое действие, которое вы хотите выполнить после неуспешной попытки входа.
        }
    } else {
        alert("Регистрация отключена.");
    }
}

applyState();
