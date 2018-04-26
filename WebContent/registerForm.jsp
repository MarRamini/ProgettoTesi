<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js" data-dojo-config="async: false, parseOnLoad: true"></script>
<script>
	require(["dojo/parser",
		/* dojox/ validate resources */
		"dojox/validate/us", "dojox/validate/web",
		/* basic dijit classes */
		"dijit/form/CheckBox", "dijit/form/Textarea", "dijit/form/FilteringSelect", "dijit/form/TextBox", "dijit/form/ValidationTextBox", "dijit/form/DateTextBox", "dijit/form/TimeTextBox", "dijit/form/Button", "dijit/form/RadioButton", "dijit/form/Form", "dijit/form/DateTextBox",
		/* basic dojox classes */
		"dojox/form/BusyButton", "dojox/form/CheckedMultiSelect",
		"dojo/domReady!",
		"dojo/dom"]);
</script>
<div class="formContainer">
	<form data-dojo-type="dijit/form/Form" method="post" id="registerForm" class="registerForm" action="">
		<script type="dojo/method" event="onSubmit">
			if(!this.validate()){
				alert('dati non validi, correggere i campi evidenziati');
				return false;
			}
			return true;
		</script>
		<div class="registerContainer">
			<div class="registerRow">
				<span valign="top">Username:</span>
				<input type="text" required="true" name="txtUsername" id="usernameInput" placeholder="Insert username"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Username is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Password:</span>
				<input type="text" required="true" name="txtPassword" id="passwordInput" placeholder="Insert Password"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Password is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Name:</span>
				<input type="text" required="true" name="txtName" id="nameInput" placeholder="Insert your Name"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Name is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Surname:</span>
				<input type="text" required="true" name="txtSurname" id="surnameInput" placeholder="Insert your Surname"
					   data-dojo-type="dijit/form/ValidationTextBox" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Gender:</span>
				<input type="text" required="true" name="txtGender" id="genderInput" placeholder="Insert your Gender"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Gender is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Nationality:</span>
				<input type="text" required="true" name="txtNationality" id="nationalityInput" placeholder="Insert your Nationality"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Nationality is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Age:</span>
				<input type="text" required="true" name="txtAge" id="ageInput" placeholder="Insert your Age"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Age is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">e-mail:</span>
				<input type="text" required="true" name="txtEmail" id="emailInput" placeholder="Insert your e-mail"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="e-mail is required" class="textBox"/>
			</div>
			<div class="submitButtons">
				<input type="submit" value="Sign up" name="btnLogin" label="Sign up" id="submitButton" data-dojo-type="dijit/form/Button"/>
			
		</div>
	</form>
</div>