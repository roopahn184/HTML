function validateForm() {
 let name  = document.getElementById('username').value
 let password = document.getElementById('password').value 
 console.log(password);
 if(name == ""){
    document.getElementById('userMessage').innerHTML = "please enter user Name" 
 }
 if(password == ""){
   document.getElementById('passwordMessage').innerHTML = "please enter user Password"
 }
 return false
}

