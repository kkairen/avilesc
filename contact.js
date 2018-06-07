function ValidateForm(){
  var validFirstname = false;
  var letters = /^[^a-zA-Z]*$/;
  var validLastname = false;
  var validEmail = false;
  var validComment = false;
  var errorMessages ="";  


  // FIRST NAME
  //Required Characters, No More than 20
  var firstname = document.getElementById("firstname").value;
  console.log(letters.test(firstname))
  if (firstname===null || firstname == "" || firstname > 20 || letters.test(firstname))
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
  
  // COMMENT BOX
  // Required 
  var comment = document.getElementById("commentbox").value;

  if(lastname === null || lastname == "")
    errorMessages += "<p>The comments must be entered</p>";
  else
    validComment = true;


  document.getElementById("errorMessages").innerHTML = errorMessages;
  // Make sure you return all the boolean variables that are checking each field
  return (validFirstname && validLastname && validEmail && validComment);
}
