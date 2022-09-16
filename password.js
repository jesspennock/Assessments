let password = "ILove2Code!"
let hasNumber = false
let hasLetter = false

if (password.length < 10){
    console.log("Failure")
}
 if (password.length > 20) {
    console.log("Failure")
}
if (password === "password"){
    console.log("Failure")
}
for (i = 0; i < password.length; i++){
  if(typeof(password[i])=== "string") {
    hasLetter = true
  }
}
for (i = 0; i < password.length; i++){
(typeof(password[i]) === "integer") {
   hasNumber = true
   
}
}
if (hasLetter = true && hasNumber = true) {
    console.log ("Success!")
}

//This code isn't working, but hohpefully you can understand my thought process and logic. The first step checks for length, if it's less than ten, the password validator automatically fails and the "Failure" message is returned. Same for the next two checks validating password length is not too long and the word "password" is not used.
//I then attemped to run a for loop to check there was an alphabet character in any of the positions of the password, if so, it would change the has nasNumber var to true. Another for loop would check to see if any position in the password contained and integer, if so hasNumber would equal true.
//At this point, if both hasNumber and hasLetter have returned a value of true and initial variables were not triggered, the code would spit out "Success!"