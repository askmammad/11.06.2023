"use strict"

const form = document.getElementById("formID");
let age = document.getElementById("input");
let message = document.getElementById("message_text");

form.addEventListener("submit", (e) => checkAge(e));

function checkAge(e) {
  let ageVal = age.value;
  message.innerText = "";
  if(ageVal<0){
    message.innerText = "You haven't been born yet. Go and be born!!!";
  }
  else if (ageVal > 20) {
    message.innerText = "You are over 20 years old. Give him whiskey!!!";
  } else {
    message.innerText = "You are under 20 years old. Give him milk!!!";
  }
  e.preventDefault();
}
