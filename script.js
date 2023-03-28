// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); //line 28 in html is the id generate

// add my variables required for the password
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+","?"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumbers;
var confirmLowerCase;
var confirmUpperCase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // the insides of the () are empty so we need to create a function for generating the password when clicking on it
  var passwordText = document.querySelector("#password"); //the id of password from the html

  passwordText.value = password;

}

// Creating the function of generating password
function generatePassword(){

   // when they click on the button this question will come up first
  var confirmLength = (prompt("Welcome to your random password generator. How many characters would you like it to contain?"));

  // Using while because if I use "if" then the loop will close and keep going to the variables.. if I use while then I'll make sure that if they don't fill into the amount of characters, prompt will appear again until they do choose the correct length of the password to be between 8 and 128
  while(confirmLength <= 7 || confirmLength >= 129) {
      //if they don't meet the requirements for the amount of characters of the password then this alert will appear
      alert("Your password must be between 8 to 128 characters long. Please try again.");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 
      var confirmSpecialCharacter = confirm("Click 'OK' to confirm if you would like to include special characters in your password.");
      var confirmNumbers = confirm("Click 'OK' to confirm if you would like to include numbers in your password.");    
      var confirmLowerCase = confirm("Click 'OK' to confirm if you would like to include lowercase letters in your password.");
      var confirmUpperCase = confirm("Click 'OK' to confirm if you would like to include uppercase letters in your password.");


      // Loop if they cancel on everything they need to innclude in the password, using triple = to make sure that the exact value and data type comes back only if it is equal to in this case a false response
        while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumbers === false) {
        alert("Error. You must choose at least one condition for your password.");
           // make all the variables appear again in the boxes
          var confirmSpecialCharacter = confirm("Click 'OK' to confirm if you would like to include special characters in your password.");
          var confirmNumbers = confirm("Click 'OK' to confirm if you would like to include numbers in your password.");    
          var confirmLowerCase = confirm("Click 'OK' to confirm if you would like to include lowercase letters in your password.");
          var confirmUpperCase = confirm("Click 'OK' to confirm if you would like to include uppercase letters in your password.");   
        }

        // Create the loop for the password that will be generated using ifs and concatening 
      var passwordCreated = []
      
      if (confirmSpecialCharacter) {
        passwordCreated = passwordCreated.concat(specialchar)
      }
      if (confirmNumbers) {
        passwordCreated = passwordCreated.concat(number)
      }
      if (confirmLowerCase) {
        passwordCreated = passwordCreated.concat(lowercase)
      }
      if (confirmUpperCase) {
        passwordCreated = passwordCreated.concat(uppercase)
      }
        console.log(passwordCreated)
  
        // Assigning an empty random password "" in order for randomPassword to be filled inside of it
        var randomPassword = ""

        // math floor works for returning the number inside my conditions
        for (var i = 0; i < confirmLength; i++) {
          randomPassword = randomPassword + passwordCreated[Math.floor(Math.random() * passwordCreated.length)];
          console.log(randomPassword)
        }
        return randomPassword; //this right here will be filled out in the line 74 on the variable
}

// This applies for making sure that whenever I click on the button then the writePassword function from line 20 will be implemented
generateBtn.addEventListener("click", writePassword);


