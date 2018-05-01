<!-- load dojo and provide config via data attribute -->
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
	<form data-dojo-type="dijit/form/Form" method="post" id="loginForm" class="loginForm" action="Login">
		<script type="dojo/method" event="onSubmit">
			console.log(this)
			if(!this.validate() && !this.attribute("skipvalidation")){
				alert('dati non validi, correggere i campi evidenziati');
				return false;
			}
			return true;
		</script>
		<div class="loginContainer">
			<div class="loginRow">
				<span valign="top">Username:</span>
				<input type="text" required="true" name="txtUsername" id="username" placeholder="Insert username"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Inserisci un nome utente" class="textBox"/>
			</div>
			<div class="loginRow">
				<span valign="top">Password:</span>
				<input type="password" required="true" name="txtPassword" id="password" placeholder="Insert Password"
					   data-dojo-type="dijit/form/ValidationTextBox" missingMessage="Inserire una password valida" class="textBox"/>
			</div>			
		</div>
		
		<!-- submit buttons -->
		<div class="submitButtons">
			<input type="submit" value="Sign in" name="btnLogin" label="Sign in" id="submitButton" data-dojo-type="dijit/form/Button"/>
			<input type="submit" value="Sign up" name="btnLogin" label="Sign up" id="registerButton" data-dojo-type="dijit/form/Button">
				<script event="onclick">
					document.getElementsByTagName("form").loginForm.setAttribute("skipValidation", true)
				</script>
			</input>
			<input type="submit" value="Sign in as a guest" name="btnLogin" id="busyButton" data-dojo-type="dojox/form/BusyButton"
			   label="Sign in as a Guest" busyLabel="Loggin in..." timeout="2000">
				<script event="onClick">
					document.getElementsByTagName("form").loginForm.setAttribute("skipValidation", true)
				</script>
			</input>
	    </div>
	</form>	
	<%-- 
	<span class="registerSuccededMessage">
		    <%if (request.getAttribute("registerSucceded") != null){ 
			 	 if (request.getAttribute("registerSucceded").equals("true")) { %>
			   		 your registration is complete, please sign in with your data
			<%    } 
		 	 }%>
	    </span>--%>	    
</div>


