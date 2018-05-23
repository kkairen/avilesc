function ValidateForm(){
  var validFirstname = false;
  var letters = /^[^a-zA-Z]*$/;
  var validLastname = false;
  var validEmail = false;
  var validPhone = false;
  var validUsername = false;
  var validPassword = false;
  var validAddress = false;
  var validCity = false;
  var validCountry = false;
  var validZipcode = false;
  var errorMessages ="";  
  
  
  // FIRST NAME
  //Required Characters, No More than 20
  var firstname = document.getElementById("firstname").value;
    console.log(letters.test(firstname))
  if (firstname===null || firstname == "" || firstname > 20 || letters.test(firstname) )
    errorMessages = "<p>The first name must be entered or must be under 20 characters</p>";
  else
    validFirstname = true;
  
  // LAST NAME
  // Required Characters, No more than 50
  var lastname = document.getElementById("lastname").value;
  if(lastname === null || lastname == "" || lastname > 50 || letters.test(firstname))
    errorMessages += "<p>The last name must be entered or must be under 50 characters</p>";
  else
    validLastname = true;
  
  // EMAIL
  // Required Characters, has @ and .
  var email = document.getElementById("email").value;
  var atpos = email.indexOf("@");
  var dotpost = email.indexOf(".");
  
  if(atpos<1 || dotpost < atpos + 2 || dotpost + 2 > email.length)
    errorMessages += "<p>Not a valid email address</p>";
  else
    validEmail = true;
  
  // PHONE NUMBER
  // Only # no more than 15
  var phonenumber = document.getElementById("phone").value;
  var number = parseInt(phonenumber);
  var numtest = Number.isInteger(number);
  if(numtest === false || number.length > 15)
    errorMessages += "<p>Not a valid Phone Number"
  else
    validPhone = true;
  
  // USERNAME
  // Require Characters, No more than 12
  var username = document.getElementById("username").value;
  if(username===null || username == "" || username > 12)
    errorMessages += "<p>Invalid username entered</p>"
  else
    validUsername = true;
  
  // PASSWORD 
  // Require Character, No more than 7
  var password = document.getElementById("password").value;
  if(password===null || password == "" || password > 7)
    errorMessages += "<p>Invalid password entered</p>";
  else
    validPassword = true;
  
  // ADDRESS
  // Needs to Be Entered
  var address = document.getElementById("address").value;
  if(address===null || address == "")
    errorMessages += "<p>Must enter an address"
  else
    validAddress = true;
  
  // CITY
  // Needs to be Entered
  var city = document.getElementById("city").value;
  if(city === null || city == "")
    errorMessages += "<p>Must enter a city";
  else
    validCity = true;
  
  // COUNTRY
  // Required
  var countries = document.getElementById("countries").value;
  if(countries === null || countries == "none")
    errorMessages += "<p>Must choose a country";
  else
    validCountry = true;
  
  console.log(countries);
  
  // ZIP CODE
  // If United States then Required
  var zipcode = document.getElementById("zipcode").value;
  if(countries === "USA")
    {
      if(zipcode === null || zipcode == "" || zipcode > 5)
        errorMessages += "<p>Invalid Zipcode Entered</p>";
      else
        validZipcode = true;
    }
  
  document.getElementById("errorMessages").innerHTML = errorMessages;
  // Make sure you return all the boolean variables that are checking each field
  return (validFirstname && validLastname && validEmail && validPhone && validPassword && validUsername && validAddress && validCity && validCountry && validZipcode);
}
