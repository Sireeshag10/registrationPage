document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
     
    //Get the input values
    let userName = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let mobile = document.getElementById("mobile");
    let pancard = document.getElementById("pancard");
    let aadhaar = document.getElementById("aadhaar");


   /* let userNamePattern = /^[A-Z][a-z]{5,8}$/
    
    if (userNamePattern.test(userName))    {
        alert(`userName "${userName}" is successfully logined`)
        return true
    } else {
        alert(`userName "${userName}" is Invalid`)
        return flase
    }*/



    // Validate username length
    if (userName.value.length === 5 || username.value.length === 8) {
        userName.classList.remove("error");
        userName.classList.add("success");
    } else {
        userName.classList.add("error");
        alert("UserName must be 5 or 8 characters long.");
        return;
    }

    // Validate email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add("error");
        alert("Please enter a valid email address.");
        return;
   } else {
        email.classList.remove("error");
        email.classList.add("success");
    }  

     
    alert("Registration successful!");
});
