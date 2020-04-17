// defines a generate button variable for when the generate password button is clicked
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// declare variables for each character type
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
// special characters used below was referenced from: https://www.owasp.org/index.php/Password_special_characters
var symbol = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
    // when the "generate password" button is clicked, the writePassword function will begin by asking the user to enter the desired valid length amount of the password
    var length = prompt("How many characters do you want the password to be? \nMust enter a valid number between 8 and 128");
  // console.log(length);
  
  // if the user enters an invalid number (i.e., a number less than 8 or more than 128), alert the user to enter a valid entry
  if(length < 8 || length > 128){
    alert("Must enter a valid number.");
    return " ";
    } 
    // if the user enters a valid number, then proceed with the generatePassword function
    else{
        // the password value is generated through the function generatePassword with a parameter of the length amount (length is the number of characters for the password)
        var password = generatePassword(length);
        // defines where the text of the password would go in the HTML
        var passwordText = document.querySelector("#password");
        // takes the value of the text of the password and defines it as our final password that's populated on the HTML textbox
        passwordText.value = password;
    }
}

// generates the password function by first declaring which character types should be included in the password
function generatePassword(length){

    // checks to see if the user wants lowercase letters as a character type in the password
    var lowercaseChecked = confirm("Do you want the password to include lowercase letters?");
    // console.log(lowercaseChecked);

    // checks to see if the user wants uppercase letters as a character type in the password
    var uppercaseChecked = confirm("Do you want the password to include uppercase letters?");
    // console.log(uppercaseChecked);
    
    // checks to see if the user wants numbers as a character type in the password
    var numberChecked = confirm("Do you want the password to include numbers?");
    // console.log(numberChecked);

    // checks to see if the user wants symbols as a character type in the password
    var symbolChecked = confirm("Do you want the password to include special characters?");
    // console.log(symbolChecked);

    // does a validity check to see if at least one character type was selected for the password
    if(!lowercaseChecked && !uppercaseChecked && !numberChecked && !symbolChecked){
        alert("Must choose at least one character type.");
        return " ";
        }
    else {
    // initializes the password by starting off as blank
    password= "";
    // for the character length amount that the user inputted, generate random characters based on the selected character types
    for(var i = 0; i < length ; i++){
        // if a lowercase character type was selected, generate a random lowercase letter        
        if(lowercaseChecked){
        // generates a rounded down random number based on the length of the string
        var lowercaseChar = Math.floor(Math.random()*lowercase.length);
        //defines the character value at its respective index number and adds the generated random lowercase letter into the password string
        password += lowercase.charAt(lowercaseChar);
        }
        // if an uppercase character type was selected, generate a random uppercase letter 
        if(uppercaseChecked){
        // generates a rounded down random number based on the length of the string
        var uppercaseChar = Math.floor(Math.random()*uppercase.length);
        //defines the character value at its respective index number and adds the generated random uppercase letter into the password string 
        password += uppercase.charAt(uppercaseChar);
        }
        // if a number character type was selected, generate a random number
        if(numberChecked){
        // generates a rounded down random number based on the length of the string
        var numberChar = Math.floor(Math.random()*number.length);
        //defines the character value at its respective index number and adds the generated random number into the password string 
        password += number.charAt(numberChar);
        }

        // if a symbol character type was selected, generate a random symbol
        if(symbolChecked){
        // generates a rounded down random number based on the length of the string
        var symbolChar = Math.floor(Math.random()*symbol.length);
        //defines the character value at its respective index number and adds the generated random number into the password string 
        password += symbol.charAt(symbolChar);
        }
    }  
    // console.log(password);

    // slices the password that was generated to meet the exact character count the user input
    var finalPassword= password.slice(0,length);
    //return the final generated password 
    return finalPassword;
    }
}

