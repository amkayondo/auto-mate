// login Logic
let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");


// Check if username and pasword to match 
function check_(){ 
    if(username.value === "user" && password.value === "user"){
        location = "./home.html";
    } if (username.value === "admin" && password.value === "admin") {
        location = "./admin";
    } else {
        alert("Check your creditionals")
    }
}

// Check if tis admin or user logining and redirect to a specific page
login.addEventListener("click", ()=>{
        check_();
});