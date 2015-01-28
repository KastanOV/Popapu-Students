function init(){
    if(typeof(Storage) !== "undefined") {
        checkForCredentials();
    } else {
        window.location.href = "errorpage.html";
    }
}

function checkForCredentials(){
    var login = localStorage.getItem("Login");
    var password = localStorage.getItem("Password");
    var role = localStorage.getItem("Role");
    if(login === null || password === null || role === null){
        window.location.href = "loginpage.html";
    } 
}

