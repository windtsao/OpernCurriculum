

function checkEmail(){
	var x=document.getElementById("email");
	var atpos=x.value.indexOf("@");
	var dotpos=x.value.lastIndexOf(".");
	if (x.value == ''){
		document.getElementById('emailError').innerHTML = 'Please fill in your Email address.';
		return false;
	}
	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		document.getElementById('emailError').innerHTML ='Invalid Email address.';
		return false;
	}else{
		document.getElementById('emailError').innerHTML = '';
		return true;
	}
}



function checkConfirmedEmail(){
	var x=document.getElementById("confirmedEmail");
	var y=document.getElementById("email");
	var atpos=x.value.indexOf("@");
	var dotpos=x.value.lastIndexOf(".");
	if (x.value == ''){
		document.getElementById('confirmedEmailError').innerHTML = 'Please fill in your confirmed Email address.';
		return false;
	}
	else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
		document.getElementById('confirmedEmailError').innerHTML ='Invalid Email address.';
		return false;
	}
	else if(x.value != y.value){
		document.getElementById('confirmedEmailError').innerHTML ='The two Email addresses do not match.';
		return false;
	}else{
		document.getElementById('confirmedEmailError').innerHTML = '';
		return true;
	}
}

function checkFirstName() {
	var x=document.getElementById("fname");
	if (x.value == '') {
		document.getElementById('fNameError').innerHTML = 'Please fill  in your first name.';
		return false;
	}else{
		document.getElementById('fNameError').innerHTML='';
		return true;
	}
}

function checkLastName() {
	var x=document.getElementById("lname");
	if (x.value == '') {
		document.getElementById('lNameError').innerHTML = 'Please fill  in your last name.';
		return false;
	}else{
		document.getElementById('lNameError').innerHTML='';
		return true;
	}
}

function checkPassword() {
	var x=document.getElementById("password");
	if (x.value == '') {
		document.getElementById('passwordError').innerHTML = 'Please fill  in your password.';
		return false;
	}else{
		document.getElementById('passwordError').innerHTML='';
		return true;
	}
	
}

function checkConfirmedPassword() {
	var x=document.getElementById("confirmedPassword");
	var y=document.getElementById("password");
	if (x.value == '') {
		document.getElementById('confirmedPasswordError').innerHTML = 'Please fill  in your confirmed password.';
		return false;
	}
	else if(x.value != y.value) {
		document.getElementById('confirmedPasswordError').innerHTML = 'The two passwords do not match (watch out for capital letters).';
		return false;
	}
	else{
		document.getElementById('confirmedPasswordError').innerHTML='';
		return true;
	}	
}

function checkSecurityQuestionAns() {
	var x=document.getElementById("securityAns");
	if (x.value == '') {
		document.getElementById('securityAnsError').innerHTML = 'Please give your security answer.';
		return false;
	}else{
		document.getElementById('securityAnsError').innerHTML='';
		return true;
	}
}

function checkTermOfUse() {
	var x=document.getElementById("termOfUse");
	if (x.checked == false) {
		document.getElementById('termError').innerHTML = 'Cannot create account if you do not accept term of use.';
		return false;
	}else {
		document.getElementById('termError').innerHTML='';
		return true;
	}
}

function resetForm() {
	document.getElementById('emailError').innerHTML = '';
	document.getElementById('confirmedEmailError').innerHTML = '';
	document.getElementById('fNameError').innerHTML='';
	document.getElementById('lNameError').innerHTML='';
	document.getElementById('passwordError').innerHTML='';
	document.getElementById('confirmedPasswordError').innerHTML='';
	document.getElementById('securityAnsError').innerHTML='';
	document.getElementById('termError').innerHTML='';
}

function checkAllFieldsInRegisterPage(){
	checkEmail();
	checkConfirmedEmail();
	checkFirstName();
	checkLastName();
	checkPassword();
	checkConfirmedPassword();
	checkSecurityQuestionAns();
	checkTermOfUse();
	var zeroError = false;
	if(checkEmail() && checkConfirmedEmail() && checkFirstName() && checkLastName() && checkPassword() && checkConfirmedPassword() && checkSecurityQuestionAns() && checkTermOfUse()){
		zeroError = true;
	}
	return zeroError;
}

function checkFieldsInSigninPage() {
	checkEmail();
	checkPassword();
	var zeroError = false;
	if(checkEmail() && checkPassword()) {
		zeroError = true;
	}
	return zeroError;
}



function itemPlus() {
	window.a += 1;
}

if(window.a == null) 
   window.a = 0;

function itemPlusQuantity () {
	var b = parseInt(document.getElementById('quantity').value);
	    window.a += b;
	    document.getElementById('item').innerHTML ='['+ window.a +']' ;
}

function load() {
	document.getElementById('item').innerHTML = window.a;
}