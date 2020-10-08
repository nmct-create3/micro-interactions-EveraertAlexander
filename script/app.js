let email = {},
    password = {},
    signInButton;


function getDOMElements(){
    email.field = document.querySelector(".js-email-input");
    password.field = document.querySelector(".js-password-input");
    signInButton = document.querySelector(".js-sign-in-button");

    enableListeners();
    console.log("Dom elements loaded")
}

function enableListeners(){
    email.field.addEventListener("blur", function(){
        if(isValidEmailAddress(email.field.value)){
            
        } else{
            if(isEmpty(email.field.value)) {
                email.errorMessage = "This field is required";
            } else{
                email.errorMessage=  "Invald emailaddress";
            }
        }
    })

    password.field.addEventListener("blur", function(){

    })

    signInButton.addEventListener("click", function(){

    })
}

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

 const isValidPassword = function(password){
     return password > 0;
 }

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    var input = document.querySelector(".js-password-input");
    var toggle = document.querySelector(".js-password-toggle");
    toggle.addEventListener("change", function(){
        if(this.checked){
            input.type = "text";
        } else {
            input.type = "password";
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
    getDOMElements();
});