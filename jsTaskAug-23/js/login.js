document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Check user in local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(user => user.emailValue === email && user.cnfpasswordValue === password);

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.open("dashboard.html"); // Open welcome page in a new window/tab
    } else {
        alert("Invalid credentials!");
    }
});
function upper(){
    loginEmail.value= loginEmail.value.toUpperCase()
  }