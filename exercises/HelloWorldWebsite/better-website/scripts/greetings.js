"use strict";

function showGreeting(){
    const messageDiv = document.getElementById("messageDiv");
    //put double quotes around getElementById's
    // console.log(messageDiv);
    messageDiv.innerHTML = "Hi There!";
}

showGreeting()