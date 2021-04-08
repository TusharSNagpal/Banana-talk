var btnTrans = document.querySelector("#btn-trans");
var txtArea = document.querySelector("#txt-area");
var outputDisp = document.querySelector("#output");

/*var userName = prompt("Hey! What is your name?");
alert("Welcome, " +  userName + ".");*/

function whatOnClick() {
    outputDisp.innerText = "This text is translated " + txtArea.value + ".";
    
    console.log("Clicked!");
    console.log(txtArea.value);
};

btnTrans.addEventListener("click", whatOnClick);