// password.js

function PassCheck() {
  var a = document.getElementById("pass").value;
  if (
    a == "EGBAK_Eg7619" ||
    a == "Hao729_LIPA" ||
    a == "aji9u7_LIPA" ||
    a == "87YIon_LIPA" ||
    a == "Lopi8o_LIPA" ||
    a == "7480" ||
    a == "768Iub_LIPA" ||
    a == "87NJUQ_LIPA" ||
    a == "Li47Yi_LIPA" ||
    a == "Lio4Iy_LIPA" ||
    a == "Lk67Ui_LIPA"
  ) {
    var image = document.getElementById("imgggg");
    image.src = "https://banantapok.github.io/premium/autch/check.png";
    window.location.href = "https://banantapok.github.io/Last/sff/QQ.html";
  } else {
    var image = document.getElementById("imgggg");
    image.src = "https://banantapok.github.io/premium/autch/remove.png";
    document.write(" ");
  }
}
