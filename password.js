let password = "ILo2Code!"
let hasNumber = false
let hasLetter = false

if (password.length <= 10){
    console.log("Failure")
}
for (i = 0; i < password.length; i++){
  if(typeof(password[i])=== "string") {
    hasLetter = true
}
if (typeof(password[i])=== "integer") {
   hasNumber = true
   console.log(hasNumber)
}
