
var generateBtn = document.querySelector("#generate") ;

function generatePassword() {
var passwordlength = window.prompt ("please choose length of the password, enter any number from 8 to 128? ?");
console.log (passwordlength)
if (passwordlength < 8) {alert ("please choose number  greater than 8!") 
return}
else if (passwordlength > 128) {alert ("Please choose number less than 128") 
 return };
console.log (passwordlength)
var inputchartUpper= prompt ("please choose criteria of the password, Do you want upper case  letters to be included? Y for Yes or N for no?");
if (inputchartUpper !== "Y" && inputchartUpper !== "N" ) {alert ("Please choose Y or N")
return  }
console.log (inputchartUpper)
var inputcharLower= prompt ("please choose criteria of the password, Do you want lower case  letters to be included? Y for Yes or N for no?");
if (inputcharLower !== "Y" && inputcharLower !== "N" ) {alert ("Please choose Y or N")
return }
console.log (inputcharLower)
var inputnumbers = prompt("Do you want to include numbers in password? Y for Yes or N for no.");
if (inputnumbers !== "Y" && inputnumbers !== "N" ) {alert ("Please choose Y or N")
return }
console.log (inputnumbers)
var inspcharacter = prompt ("Do you want to include special characters to the password? Y for Yes or N for no");
if (inspcharacter !== "Y" && inspcharacter !== "N" ) {alert ("Please choose Y or N")
return }
console.log (inspcharacter);
if (inputchartUpper === "N" && inputcharLower ==="N" && numbers === "N" && inspcharacter  === "N") { alert ("You have to choose at least one type of symbols")
return};
var aprooval = window.confirm("Please confirm your choice!");
if (aprooval === false){window.alert ("start over")
return};


var letterLc ="asdfghjklzxcvbnmqwertyuio";
var letterUc ="QWERTYUIOPASDFGHJKLZXCVBNM";
var numbers ="0123456789123456789";
var spcharacters ="@!#$%^&*()?><:;";

var  finalUserChoice = [];
 if (inputchartUpper === "Y") {
finalUserChoice+=letterUc;
 } 
  if (inputcharLower === "Y") { 
  finalUserChoice+=letterLc};
if (inputnumbers === "Y") { 
  finalUserChoice +=numbers};
if (inspcharacter === "Y") {
  finalUserChoice +=spcharacters}
 console.log (finalUserChoice);
 let newPW = []
  for (var i = 0; i < passwordlength; i++) {
  var randomNumber = Math.floor(Math.random() * finalUserChoice.length);
  console.log(newPW)
   newPW.push(finalUserChoice[randomNumber])
   
 }
var generatePassword = newPW.join('');
   console.log(generatePassword);
   return generatePassword
}



function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;
}

 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
