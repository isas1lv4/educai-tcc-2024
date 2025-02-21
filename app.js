
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

function verificar() {
    var n1 = document.getElementById("txtPratPrin").value; 
    if(n1==""){
      window.alert("Digite o número de pessoas para reserva"); 
      document.getElementById("txtPratPrin").focus();
      document.getElementById("txtPratPrin").style.backgroundColor="#ff0000";
      return false; 
}
    else if (isNaN(n1)){
        window.alert("Digite APENAS números para a reserva"); 
        document.getElementById("txtPratPrin").value=""; 
        document.getElementById("txtPratPrin").focus(); 
        document.getElementById("txtPratPrin").style.backgroundColor="#ff0000";
        return false; 
    }
    else{
      window.alert("Número OK")
      document.getElementById("txtPratPrin").style.backgroundColor="#0000ff"; 
    }
    var n2 = document.getElementById("txtResp").value; 
    if(n2==""){
      window.alert("Digite o nome do responsável pela reserva"); 
      document.getElementById("txtResp").focus();
      document.getElementById("txtResp").style.backgroundColor="#ff0000";
      return false
    }
    else{
        document.getElementById("txtResp").style.backgroundColor="#0000ff" ; 
        window.alert("Responsável OK"); 
        return true; 
    }
}
function carrega() {
    document.addEventListener("keydown", 
    function (e) {
    if (e.keyCode === 13) {
        e.preventDefault (); 
    }
    }); 
}

