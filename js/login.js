// login Logic
let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");

// FUNCTION TO MATCH USER WITH DEFAULTS
function check_(){
    if(username.value == "admin"){
        return location = "./admin";
    } if (username.value == "user") {
        return location = "./home.html";
    } else {
        alert("User not available");
    }
}
// Check if tis admin or user logining and redirect to a specific page
login.addEventListener("click", ()=>{
    if(username.value.length > 0 && password.value.length > 0){
        check_();
    } else {
        alert("A field is missing");
    }
});