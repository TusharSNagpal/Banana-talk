var btnTrans = document.querySelector("#btn-trans");
var txtArea = document.querySelector("#txt-area");
var outputDisp = document.querySelector("#output");


/*var userName = prompt("Hey! What is your name?");
alert("Welcome, " +  userName + ".");*/

//var serverLink = "https://test.tusharnagpal.repl.co/translate/yoda.json";
var serverLink = "https://api.funtranslations.com/translate/ferb-latin.json";

function constructURL(i)
{
    return serverLink + "?" + "text=" + i
}

function errorHandler(error){
    console.log("Error Occurred",error)
}

function whatOnClick() {
    /*outputDisp.innerText = "This text is translated " + txtArea.value + ".";
    
    console.log("Clicked!");
    console.log(txtArea.value);*/
    var input = txtArea.value;
    fetch(constructURL(input))
    .then(response => response.json())
    .then(json => outputDisp.innerText=json.contents.translated)
    .catch(errorHandler)
}

btnTrans.addEventListener("click", whatOnClick)