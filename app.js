var btnTrans = document.querySelector("#btn-trans");
var txtArea = document.querySelector("#txt-area");
var outputDisp = document.querySelector("#output");

/*var userName = prompt("Hey! What is your name?");
alert("Welcome, " +  userName + ".");*/

var serverLink = "https://test.tusharnagpal.repl.co/translate/yoda.json";
function constructURL(i)
{
    return serverLink + "?" + "text=" + i
}
function whatOnClick() {
    /*outputDisp.innerText = "This text is translated " + txtArea.value + ".";
    
    console.log("Clicked!");
    console.log(txtArea.value);*/
    var input = txtArea.value;
    fetch(constructURL(input))
    .then(response => response.json())
    .then(json => console.log(json))
};

btnTrans.addEventListener("click", whatOnClick);