"use strict"

const form = document.getElementById("formID");
let number = document.getElementById("input");
let message = document.getElementById("message_text");

form.addEventListener("submit", (e) => checkNumber(e));

function checkNumber(e){
    let numberVal = number.value;
    message.innerText = "";
    if(numberVal%2==0){
        message.innerText = "This number is even";
    }
    else{
        message.innerText = "This number is odd";
    }
    e.preventDefault();
}