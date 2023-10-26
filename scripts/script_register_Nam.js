
var myInputPass = document.getElementById("regPass");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var myInputUsername = document.getElementById("regUsername");
var specialChar = document.getElementById("specialChar");
var userLength = document.getElementById("userLength");
var exist = document.getElementById("exist");
var myInputSecretKey = document.getElementById("regSecretKey");

//condition check variables

let passLowerCase;
let passUpperCase;
let passNum;
let passLength;

let isExist;
let usernameLength;
let usernameSpecialChar;

let secretKey;



// When the user clicks on the password field, show the message box
myInputUsername.onfocus = function () {
  document.getElementById("usernameValidCheck").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInputUsername.onblur = function () {
  document.getElementById("usernameValidCheck").style.display = "none";
}

// When the user clicks on the password field, show the message box
myInputPass.onfocus = function () {
  document.getElementById("passwordValidCheck").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInputPass.onblur = function () {
  document.getElementById("passwordValidCheck").style.display = "none";
}

// When the user starts to type something inside the password field
myInputPass.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInputPass.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    passLowerCase = true;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    passLowerCase = false;
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInputPass.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    passUpperCase = true;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    passUpperCase = false;
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInputPass.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    passNum = true;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    passNum = false;
  }

  // Validate length
  if (myInputPass.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    passLength = true;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    passLength = false;
  }
}

myInputUsername.onkeyup = function () {
  // Validate special letters
  var specialChars = /\W|_/g;
  
  if (myInputUsername.value.match(specialChars)) {
    specialChar.classList.remove("valid");
    specialChar.classList.add("invalid");
    usernameSpecialChar = true;
  } else {
    specialChar.classList.remove("invalid");
    specialChar.classList.add("valid");
    usernameSpecialChar = false
  }

  if (myInputUsername.value.length > 12 || myInputUsername.value.length < 6) {
    userLength.classList.remove("valid");
    userLength.classList.add("invalid");
    usernameLength = false;
  }
  else {
    userLength.classList.remove("invalid");
    userLength.classList.add("valid");
    usernameLength = true;
  }
  // Fetch the user_data.txt file using fetch API
  fetch('user_data.txt')
    .then(response => response.text())
    .then(text => {
      const lines = text.split('\n');
      lines.forEach(line => {

        try {
          const jsonObject = JSON.parse(line);
          
          if (jsonObject.username == myInputUsername.value) {
            isExist = true;
          }
        } catch (error) {
        }
      });
      if (isExist) {
        //alert("true");
        exist.classList.remove("valid");
        exist.classList.add("invalid");
      }
      else {
        //alert("false");
        exist.classList.remove("invalid");
        exist.classList.add("valid");
      }
      ;
    })
    .catch(error => {
      alert('Error reading user_data.txt:', error);
      //outputElement.textContent = 'An error occurred. Please check the console.';
    });
}

//secret key must be filled



//register button
const btnRegister = document.getElementById("btnRegister");

btnRegister.addEventListener("click",function(event){
  
  if(myInputSecretKey.value =="" ||myInputSecretKey.value==null)
{
  secretKey = false;
}
else
{
  secretKey = true;
}

  //alert(myInputSecretKey.value);

  //alert(secretKey);


  if(passLength && passLowerCase && passUpperCase && passNum
    && usernameLength && !usernameSpecialChar && !isExist
    && secretKey)
    {
      alert(`Successfully registered! Welcome ${myInputUsername.value}!`);

      myInputUsername.value = "";
      myInputPass.value ="";
      myInputSecretKey.value ="";
    }
    else
    {
      alert(`You does not meet all requirements!`);
    }

})














