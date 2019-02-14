
function submitForm(){
	let submitButton = document.getElementById('submitButton');
	submitButton.addEventListener('click', (event) => {
		event.preventDefault();

		let fullName = document.getElementById('userName');
		let email = document.getElementById('userEmail');

		let password = document.getElementById('userPassword');
		let passwordConfirmation = document.getElementById('userPasswordConfirmation');	

		let country = document.getElementById('country');
		let gender = document.getElementsByName("gender");


		if (validateInput(fullName.value, "Please type your name.") && validateInput(email.value, "Please type your email.") &&
			validatePasswords(password.value, passwordConfirmation.value) &&
			validateInput(country.value, "Please select a country.") && validateRadioButtons(gender, "Please select a gender.")){
			let information = {
				fullName : fullName.value,
				email : email.value,
				password : password.value,
				passwordConfirmation : passwordConfirmation.value,
				country : country.value,
				gender : retrieveGender(gender)
			};

			console.log(information);
		}

	});
}

function validatePasswords(pass, passConf){
	let errorMessage = document.getElementById('errorLog');

	if (pass == passConf){
		let pattern = new RegExp("(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)");

		if (pattern.exec(pass) != null){
			errorMessage.innerText = "";
			return true;
		}
		else{
			errorMessage.innerText = "Passwords must contain at least a letter and a number.";
			return false;
		}
	}
	else{

		errorMessage.innerText = "Passwords do not match.";
		return false;
	}
}

function validateInput(currentInput, message){
	let errorMessage = document.getElementById('errorLog');

	if (currentInput != null && currentInput != "0" && currentInput != ""){
		errorMessage.innerText = "";
		return true;
	}
	else{
		errorMessage.innerText = message;
		return false;
	}
}

function validateRadioButtons(radios, message){
	let errorMessage = document.getElementById('errorLog');

	for (let i = 0; i < radios.length; i++) {
	  if (radios[i].checked) {
	  	errorMessage.innerText = "";
	    return true;
	  }
	}

	errorMessage.innerText = message;
	return false;
}

function retrieveGender(radios){
	for (let i = 0; i < radios.length; i++) {
	  if (radios[i].checked) {
	    return radios[i].value;
	  }
	}

	return "";
}

function resetForm(){
	let resetButton = document.getElementById('resetButton');
	resetButton.addEventListener('click', (event) => {
		event.preventDefault();
		let currentForm = document.getElementById('registryForm');
		currentForm.reset();
	});
}


function init(){
	submitForm();
	resetForm();
}


init();