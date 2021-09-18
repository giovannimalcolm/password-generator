// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passW;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//creating password parameters
var passW = "";
var upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCases = 'abcdefghijklmnopqrstuvwxyz'
var numbers = "1234567890"

//collecting all printable special characters in an array 
const specials = [];
x = 0;
for (i = 33; i < 48; i++) {
  specials[x] = String.fromCharCode(i);
  x++;
}
x = 0;
const specials2 = [];
for (i = 58; i < 65; i++) {
  specials2[x] = String.fromCharCode(i);
  x++;
}
x = 0;
const specials3 = [];
for (i = 91; i < 97; i++) {
  specials3[x] = String.fromCharCode(i);
  x++;
}
x = 0;
const specials4 = [];
for (i = 123; i < 127; i++) {
  specials4[x] = String.fromCharCode(i);
  x++;
}

const allSpecials = specials.concat(specials2, specials3, specials4);


//function for password creation
function generatePassword() {
  var passLength = prompt("Please provide a password length between 8 and 128 characters.");


  // cancel the application if invalid length is chosen
  if (passLength === null | passLength < 8 | passLength > 128 | isNaN(passLength)) {
    var noLength = alert("Please input a number between 8 and 128 to proceed.");
    return;
  }

  // Gets boolean values for password conditions
  var lowercase = confirm("Would you like the password to have lowercase characters?");
  var uppercase = confirm("Would you like the password to have uppercase characters?");
  var special = confirm("Would you like the password to have special characters?");
  var number = confirm("Would you like the password to contain numbers?");

  //creating password - getting all user chosen characters 
  passW = ''
  z = 0;

  while (z < passLength) {

    if (lowercase == true && z < passLength) {
      passW = passW + lowerCases.charAt(Math.floor(Math.random() * lowerCases.length));
      z++;
    }
    if (uppercase == true && z < passLength) {
      passW = passW + upperCases.charAt(Math.floor(Math.random() * upperCases.length));
      z++;
    }
    if (special == true && z < passLength) {
      passW = passW + allSpecials[Math.floor(Math.random() * allSpecials.length)];
      z++;
    }
    if (number == true && z < passLength) {
      passW = passW + numbers.charAt(Math.floor(Math.random() * numbers.length));
      z++;
    }

  }

  // got characters, now to randomize them for an extra layer of security since this process is kind of linear
  function RandomInt(n) {
    return Math.floor(Math.random() * n);
  }
  function jumble(passW) {
    var arr = passW.split('');
    var n = arr.length;

    for (var i = 0; i < n - 1; ++i) {
      var j = getRandomInt(n);

      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    passW = arr.join('');

  }


}



