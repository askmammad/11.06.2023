"use strict"

const form = document.getElementById("formID");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let myEmail = "askmammad@gmail.com";
let myPassword = "123456789";
console.log("Hello");

form.addEventListener("submit", (e) => checkValue(e));

function checkValue(e){
    let emailVal = email.value;
    let passwordVal = password.value;
    if(emailVal==myEmail && passwordVal==myPassword){
        alert("Email and password are correct");
        form.reset();
    }
    else{
        alert("Email and password are incorrect. Please try again");
        form.reset();
    }
    e.preventDefault();
}