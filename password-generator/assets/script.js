var generateBtn = document.querySelector("#generate");
var upperCased=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowerCased=["abcdefghijklmopqrstuvwxyz"]
var numbers =["0123456789"]
var uniqueChar=[ '!"#$%&()*+,-./:;<=>?@/^_`{|}' ]
var passwordGenerated="";
var charWanted="";

function generatePassword(){

  let wordLength=prompt("how many characters would you like to have in you password, must be between 8-128")
  
  if(wordLength >7 && wordLength <129){
  }

  else{
    alert("your password has to be from 8-128 characters")
    return "";
  }
   var wantsUpper = confirm("press okay if youd like upper cased letters");
   var wantsLower = confirm("press okay if youd like lower cased letters");
   var wantsNumbers = confirm("press okay if youd like numbers");
   var wantsSpecial = confirm("press okay if youd like special characters");  
  
   if (wantsUpper){
     charWanted+= upperCased
   }
   if (wantsLower){
    charWanted+= lowerCased
   }
   if (wantsNumbers){
    charWanted+= numbers
   }
   if (wantsSpecial){
    charWanted+= uniqueChar
   }
   if(!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial 
   ) {
     return alert("please select a criteria");
   }
 for (let i = 0; i < wordLength; i++) {
   passwordGenerated+= charWanted[Math.floor(Math.random() * charWanted.length)];  
 }
 return passwordGenerated;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);