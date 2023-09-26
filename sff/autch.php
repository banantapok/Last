<?php
// Ваши пароли для аутентификации
$validPasswords = ["EGBAK_Eg7619", "Hao729_LIPA", "aji9u7_LIPA", "87YIon_LIPA", "Lopi8o_LIPA", "7480", "768Iub_LIPA", "87NJUQ_LIPA", "Li47Yi_LIPA", "Lio4Iy_LIPA", "Lk67Ui_LIPA"];

// Получите пароль, отправленный из HTML-страницы
$enteredPassword = $_POST["password"];

// Проверьте, есть ли введенный пароль в списке допустимых паролей
if (in_array($enteredPassword, $validPasswords)) {
    // Аутентификация успешна
    echo json_encode(["authenticated" => true]);
} else {
    // Аутентификация не удалась
    echo json_encode(["authenticated" => false]);
}
?>