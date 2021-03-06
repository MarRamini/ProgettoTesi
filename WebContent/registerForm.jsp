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
	<form data-dojo-type="dijit/form/Form" method="post" id="registerForm" class="registerForm" action="Register" enctype="multipart/form-data">
		<script type="dojo/method" event="onSubmit">
			if(!this.validate()){
				var error = "One or more mandatory fields are empty";
				document.getElementById("validationFailure").innerHTML = error;
				<%request.setAttribute("error", null);%>
				return false;
			}
			return true;
		</script>
		<div class="errorContainer">
			<span class="validationError" id="validationFailure"></span>
			<script>
				var error = "<%= request.getAttribute("error") %>";
				console.log(error)
				if(error != "null"){
					document.getElementById("validationFailure").innerHTML = error;
				}
			</script>
		</div>
		<div class="registerContainer">
			<div class="registerRow">
				<span valign="top">Username:</span><%--obbligatorio--%>
				<input type="text" required="true" name="txtUsername" id="usernameInput" placeholder="Insert username"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Username is required" class="textBox"/>
				<% if (request.getAttribute("error") != null) { %>
					<script>
						var input = document.getElementById("usernameInput")
						input.className += "dijitTextBoxError";
						input.placeholder = <%=request.getAttribute("error")%>
					</script>
				<% } %>
			</div>
			<div class="registerRow">
				<span valign="top">Password:</span><%--obbligatorio--%>
				<input type="text" required="true" name="txtPassword" id="passwordInput" placeholder="Insert Password"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Password is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Name:</span><%--obbligatorio--%>
				<input type="text" required="true" name="txtName" id="nameInput" placeholder="Insert your Name"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Name is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Surname:</span>
				<input type="text" required="false" name="txtSurname" id="surnameInput" placeholder="Insert your Surname"
					   data-dojo-type="dijit/form/ValidationTextBox" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Gender:</span>
				<select name="txtGender" id="genderInput" class="selection textBox">
					<option class="selectionOption" value="male">male</option>
					<option class="selectionOption" value="female">female</option>
				</select>
			</div>
			<div class="registerRow">
				<span valign="top">Nationality:</span>
				<input type="text" required="false" name="txtNationality" id="nationalityInput" placeholder="Insert your Nationality"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Nationality is required" class="textBox"/>
			</div>
			<div class="registerRow">
				<span valign="top">Age:</span>
				<input type="text" required="false" name="txtAge" id="ageInput" placeholder="Insert your Age"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Age is required" class="textBox"/>
				 <% if (request.getAttribute("ageInputError") != null) { %>
					<script>
						var input = document.getElementById("ageInput")
						input.className += " dijitTextBoxError";
						input.placeholder = "<%=request.getAttribute("ageInputError")%>";
					</script>
				<% } %>
			</div>
			<div class="registerRow">
				<span valign="top">Education:</span>
				<select name="txtEducation" id="educationInput" class="selection textBox">
					<option class="selectionOption" value="noDegree">No Degree</option>
					<option class="selectionOption" value="highSchoolDegree">High School Degree</option>
					<option class="selectionOption" value="bachelorDegree">Bachelor's Degree</option>
					<option class="selectionOption" value="masterDegree">Master's Degree</option>
					<option class="selectionOption" value="phd">Phd</option>
				</select>
			</div>
				<div class="registerRow">
				<span valign="top">Profession:</span>
				<select name="txtProfession" id="professionInput" class="selection textBox">
					<option class="selectionOption" value="unemployed">Unemployed</option>
					<option class="selectionOption" value="student">Student</option>
					<option class="selectionOption" value="employee">Employee</option>
					<option class="selectionOption" value="selfEmployed">Self Employed</option>
					<option class="selectionOption" value="homemaker">Homemaker</option>
					<option class="selectionOption" value="retired">Retired</option>
				</select>
			</div>
			<div class="registerRow">
				<span valign="top">e-mail:</span><%--obbligatorio--%>
				<input type="text" required="true" name="txtEmail" id="emailInput" placeholder="Insert your e-mail"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="e-mail is required" class="textBox"/>
			</div>			
			<div class="registerRow">
				<span valign="top">Avatar:</span>
				<input type="file" required="false" name="avatar" id="avatarInput" placeholder="Insert your avatar"
					   data-dojo-type="dijit/form/ValidationTextBox" class="textBox"/>
			</div>
			<div class="submitButtons">
				<span type="submit" value="Sign up" name="btnLogin" label="Sign up" id="submitButton" data-dojo-type="dijit/form/Button"></span>
			
		</div>
	</form>
</div>