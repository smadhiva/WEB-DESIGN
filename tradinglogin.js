function checkdata(event){
    event.preventDefault();
    let email,password;
  
    email=document.getElementById("username").value;
    password=document.getElementById("password").value;

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
        alert("Please enter a valid email");
        return;
    }
    let accounts = new Array();
    accounts=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }
    
    if(accounts.some((v)=>{
        return v.email == email && v.password==password
    })){
        alert("Login succesfull");
        localStorage.setItem('currentEmail', email);
        window.location.href = "tradingpage.html";
    }
    else{
       alert("Please enter correct email or password");
    }
}

document.getElementById("loginForm").addEventListener("submit", checkdata);
