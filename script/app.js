let email = {},
    password = {},
    signInButton;

//HELPERS
const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
    };

const isValidPassword = function(password){
    return password > 1;
}


function getDOMElements(){
    email.input = document.querySelector(".js-email-input");
    email.field = document.querySelector(".js-email-field");
    email.errorMessage = document.querySelector(".js-email-error-message");

    password.input = document.querySelector(".js-password-input");
    password.field = document.querySelector(".js-password-field");
    password.errorMessage = document.querySelector(".js-password-error-message");

    signInButton = document.querySelector(".js-sign-in-button");

    enableListeners();
    console.log("Dom elements loaded");
}
const doubleCheckEmailAddress = function(){

    if(!isEmpty(email.input.value) && isValidEmailAddress(email.input.value)){

        removeErrors(email.field, email.errorMessage);
        email.input.removeEventListener('input', doubleCheckEmailAddress);
    } else {
        addErrors(email.field, email.errorMessage, "Incorrect email");
    }
}

const doubleCheckPassword = function(){
    if(!isEmpty(password.input.value)){
        removeErrors(password.field, password.errorMessage);
        password.input.removeEventListener('input', doubleCheckPassword);
    }
}

const addErrors = function(formField, errorField, errorMessage){
    formField.classList.add('has-error');
    errorField.style.display = "block";
    errorField.innerHTML=  errorMessage;
}

const removeErrors = function(formField, errorField){
    formField.classList.remove('has-error');

    // TODO TOGGLEN MET EEN CLASS
    errorField.style.display = "none";
}

function enableListeners(){
    email.input.addEventListener("blur", function(){
        if(isEmpty(email.input.value)){
            addErrors(email.field, email.errorMessage, "This field is required");
            email.input.addEventListener('input', doubleCheckEmailAddress);
        } else if(!isValidEmailAddress(email.input.value)){
            addErrors(email.field, email.errorMessage, "Incorrect email")
            email.input.addEventListener('input', doubleCheckEmailAddress);
        }
        else{
            removeErrors(email.field, email.errorMessage);
            email.input.removeEventListener('input', doubleCheckEmailAddress);
        }
        

    })

    password.input.addEventListener("blur", function(){
        if(isEmpty(password.input.value)){
            addErrors(password.field, password.errorMessage, "This field is required");
            password.input.addEventListener('input', doubleCheckPassword);
        } else {
            removeErrors(password.field, password.errorMessage);
        }
    })

    signInButton.addEventListener("click", function(event){
        if(isEmpty(email.input.value)){
            addErrors(email.field, email.errorMessage, "This field is required");
            email.input.addEventListener('input', doubleCheckEmailAddress);
        } else if(!isValidEmailAddress(email.input.value)){
            addErrors(email.field, email.errorMessage, "Incorrect email")
            email.input.addEventListener('input', doubleCheckEmailAddress);
        } else if(isEmpty(password.input.value)){
            addErrors(password.field, password.errorMessage, "This field is required");
            password.input.addEventListener('input', doubleCheckPassword);
        } else {
            console.log(`Email: ${email.input.value}`);
            console.log(`Password: ${password.input.value}`)
        }

        event.preventDefault();
    })
}



// function handleFloatingLabel() {
   
// }

// function handlePasswordSwitcher() {
//     var input = document.querySelector(".js-password-input");
//     var toggle = document.querySelector(".js-password-toggle");
//     toggle.addEventListener("change", function(){
//         if(this.checked){
//             input.type = "text";
//         } else {
//             input.type = "password";
//         }
//     })
// }

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    getDOMElements();
    enableListeners();
});