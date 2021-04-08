var btnTrans = document.querySelector("#btn-trans");
var txtArea = document.querySelector("#txt-area");

var userName = prompt("Hey! What is your name?");
alert("Welcome, " +  userName + ".");

function whatOnClick() {  
    console.log("Clicked!");
    console.log(txtArea.value);
};

btnTrans.addEventListener("click", whatOnClick);