let form = document.getElementById("form")
let password1 = document.getElementById("password")
let passval= document.getElementById("pass-val")

form.addEventListener("submit", function(e) {
    if(password1.value.length < 8 || password1.value.length > 20){
      passval.textContent="Password length must be between 8 and 20!"
    passval.style.color = "red"
    password1.style.border = "5px solid red"
    e.preventDefault()
    }
})