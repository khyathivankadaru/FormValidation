document.getElementById('form').addEventListener('submit', function(event) {
    let valid = true;
    /* UserId Validation */
    const userId = document.getElementById('userId');
    const userIdError = document.getElementById('userIdError');
    /*   password Validation  */
    const password = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    /* Name Validation */
    const name=document.getElementById('name');
    const nameError=document.getElementById('nameError');
    /* Country Validation */
    const country=document.getElementById('country');
    const countryError=document.getElementById('countryError');
    /*Gender validation */
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const genderError=document.getElementById('genderError');

    /*Language Validation*/
    const languageInputs=document.querySelectorAll('input[name="language"]');
    const languageError=document.getElementById('languageError');

    /*ZipCode*/
    const zipCode=document.getElementById('zipCode');
    const zipCodeError=document.getElementById('zipCodeError');

    /*Email Validation*/
    const email=document.getElementById('email');
    const emailError=document.getElementById('emailError');


    // UserId  validation
     if( userId.value === '' ||  userId.value.length < 5 || userId.value.length > 12){
        userIdError.textContent = 'User ID is required and length should be between 5 and 12';
        valid = false;
    }
else {
  userIdError.textContent = '';
}
//Password Validation
 if(password.value === '' || password.value.length <7 || password.value.length>12) {
  passwordError.textContent = 'Password is required and length should be between 7 and 12';
 valid = false; 
}else{
  passwordError.textContent='';
}

//Name Validation
const nameRegex = /^[a-zA-Z]+$/; // Regular expression to match alphabetic characters
  if (!nameRegex.test(name.value)) {
    nameError.textContent = 'Name should contain only alphabetic characters';
    valid = false;
  } else {
    nameError.textContent = '';
  }

  //Country Validation
  if(country.value === ''){
    countryError.textContent = 'Must select a country';
    valid=false;
  }else{
    countryError.textContent='';
  }

  //Gender Validation
  let genderSelected = false;
  genderInputs.forEach(input => {
    if (input.checked) {
      genderSelected = true;
    }
  });

  if (!genderSelected) {
    genderError.textContent = 'Please select a gender';
    valid = false;
  } else {
    genderError.textContent = '';
  }


  // Language Validation
  let languageSelected= false;
  languageInputs.forEach(input => {
    if (input.checked) {
      languageSelected = true;
    }
  });

  if (!languageSelected) {
    languageError.textContent = 'Please select a Language';
    valid = false;
  } else {
    languageError.textContent = '';
  }

  const zipCodeRegex = /^[0-9]+$/; 
  if (!zipCodeRegex.test(zipCode.value)) {
    zipCodeError.textContent = 'Zip Code should only have Numeric values';
    valid = false;
  } else {
    zipCodeError.textContent = '';
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Please enter a valid email address';
    valid = false;
  } else {
    emailError.textContent = '';
  }

if (  valid) {
      // If all validations pass, change the form action
    
      document.getElementById('form').action = 'success.html';
    } else {
      event.preventDefault(); // Prevent form submission if validation failed
    }
  });
  