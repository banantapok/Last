// Список рабочих паролей
const validPasswords = ["74807480", "secretPass", "12345678"];

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const password = document.getElementById("password").value;
    const successMessage = document.getElementById("success-message");
    const errorMessage = document.getElementById("error-message");

    // Скрываем оба сообщения (если они видимы)
    successMessage.style.display = "none";
    errorMessage.style.display = "none";

    // Проверка пароля
    if (validPasswords.includes(password)) {
        // Перенаправление по ссылке при успешном входе
        window.location.href = "https://banantapok.github.io/Last/sff/QQ.html"; // Замените на свою ссылку
    } else {
        errorMessage.style.display = "block";
    }

    // Отобразить сообщение (всплывающий квадратик)
    successMessage.style.display = "block";
    
    // Автоматически скрыть сообщение через 2 секунды
    setTimeout(function () {
        successMessage.style.display = "none";
        errorMessage.style.display = "none";
    }, 2000); // 2 секунды (2000 миллисекунд)
});