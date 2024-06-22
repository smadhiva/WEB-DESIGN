function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}





var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}


document.getElementById('video-background').playbackRate = 0.5; 
const video = document.getElementById('video-background');
const startTime = 0.2; 
const endTime = 1.8; 

video.currentTime = startTime;

video.addEventListener('timeupdate', () => {
    if (video.currentTime >= endTime) {
        video.currentTime = startTime;
    }
});


function savedata() {
    let name, lastname, email, password;
    name = document.getElementById("fname").value;
    lastname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    password = document.getElementById("pass").value;

    if (!name ) {
        alert("Please fill your NAME");
        return;
    }
    if (!lastname) {
        alert("Please fill your LAST NAME");
        return;
    }
    if (!email) {
        alert("Please fill your EMAIL");
        return;
    }
    if (!password) {
        alert("Please enter your PASSWORD ");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return;
    }

    let accounts = JSON.parse(localStorage.getItem("users")) || [];

    if (!email.includes('@.')) {
        alert("Please enter a valid email");
        return;
    }

    if (accounts.some((v) => v.email === email)) {
        alert("Already registered with the same email");
    } else {
        accounts.push({
            "name": name,
            "lastname": lastname,
            "email": email,
            "password": password
        });
        alert("Registered Successfully");
        localStorage.setItem("users", JSON.stringify(accounts));
    }
}


function checkdata() {
    let email = document.getElementById("email1").value;
    let password = document.getElementById("pass1").value;

    if (!email) {
        alert("Please fill your EMAIL");
        return;
    }
    if (!password) {
        alert("Please enter your PASSWORD ");
        return;
    }   

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
        alert("Please enter a valid email");
        return;
    }

    let accounts = JSON.parse(localStorage.getItem("users")) || [];

    if (accounts.some((v) => v.email === email && v.password === password)) {
        alert("Login successful");
        window.location.href = "index.html";
    } else {
        alert("Please enter correct email or password");
    }
}
