let form = document.getElementById("form")
let name1 = document.getElementById("name")
let nameval= document.getElementById("name-val")
let password1 = document.getElementById("password")
let passval = document.getElementById("pass-val")
let cpassword = document.getElementById("cpassword")
let cpassval = document.getElementById("cpass-val")

form.addEventListener("submit", function(e){
    if(name1.value.length >= 30 ) {
        nameval.textContent="Name can't be more than 30 charaters"
        e.preventDefault()
        nameval.style.color = "red"
        name1.style.border = "5px solid red"
    }
    if(password1.value.length < 8 || password1.value.length >20){
        passval.textContent="Password length must be between 8 and 20!"
        passval.style.color = "red"
        password1.style.border = "5px solid red"
        e.preventDefault()
    }
     if (password1.value.length != cpassword.value.length){
        cpassval.textContent="Password don't match"
        cpassval.style.color="red"
        cpassword.style.border="5px solid red"
        e.preventDefault()
     }
     
})