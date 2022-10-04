//references to inputfields
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

//references to warning fields
const usernameWarning = document.getElementById('username-warning');
const passwordWarning = document.getElementById('password-warning')

//add eventlistners to inputfield refs
usernameInput.addEventListener("keyup", checkUsername);
passwordInput.addEventListener("keyup", checkPassword);

//function to check username, called by eventlistener
function checkUsername (e){
    if(e.target.value.includes('@')){
        usernameWarning.textContent = "Username cannot contain the character '@'";
    }else {
        usernameWarning.textContent ="";
    }

}

function checkPassword (e){
    if(e.target.length === "" || e.target.length>6){
        passwordWarning.textContent = "";
    } else {
        passwordWarning.textContent = "password must contain at least 6 characters"
    }
}
