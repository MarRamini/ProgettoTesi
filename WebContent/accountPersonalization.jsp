<%@page import="model.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Insert title here</title>
		<link rel="stylesheet" type="text/css" href="styles/css/pages/login.css"/>
		<link rel="stylesheet" type="text/css" href="styles/css/pages/index.css"/>
		<link rel="stylesheet" type="text/css" href="styles/css/pages/accountPersonalization.css"/>
		<script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.4/dojo/dojo.js" data-dojo-config="async: false, parseOnLoad: true"></script>
		<script type="text/javascript" src="scripts/utilities/passwordVisibilityToggle.js"></script>
	</head>
	<body class="claro">
		<div class="formContainer">
			<%User user = (User) session.getAttribute("user");%>
			<form id="accountPersonalizationForm" class="personalizationForm" action="UpdateAccount" method="post" enctype="multipart/form-data">
				<div id="usernamePersonalization" class="personalizationRow">
					<span>Username</span>
					<script type="text/javascript" src="scripts/widgets/editableTextBox.js" barType="text" name="txtUsername" rootId="usernamePersonalization" labelMargin="100px" ></script>
					<script>					
						var elem = document.getElementById("usernamePersonalization");
						elem.childNodes[4].firstChild.value = "<%=user.getUsername()%>";				
					</script>
				</div>	
				<div id="passwordPersonalization" class="personalizationRow">
					<span>Password</span>
					<script type="text/javascript" src="scripts/widgets/editableTextBox.js" barType="text" name="txtPassword" rootId="passwordPersonalization" labelMargin="100px" isPassword="true"></script>
					<script>
						var elem = document.getElementById("passwordPersonalization");
						elem.childNodes[4].firstChild.value = "<%=user.getPassword()%>";				
					</script>
				</div>
				<div id="genderPersonalization" class="personalizationRow">
					<span>Gender</span>
					<select name="txtGender" id="genderInput" class="selection editableSelection">
						<option class="selectionOption" value="male">male</option>
						<option class="selectionOption" value="female">female</option>
					</select>
					<script>
						var gender = "<%=user.getGender()%>";
						var options = document.getElementsByTagName("option");
						for(var i=0 ; i<options.length ; i++){
							if(options[i].value == gender){
								options[i].setAttribute("selected", "true");
							}
						}					
					</script>
				</div>
				<div id="educationPersonalization" class="personalizationRow">
					<span>Education</span>
					<select name="txtEducation" id="educationInput" class="selection editableSelection">
						<option class="selectionOption" value="noDegree">No Degree</option>
						<option class="selectionOption" value="highSchoolDegree">High School Degree</option>
						<option class="selectionOption" value="bachelorDegree">Bachelor's Degree</option>
						<option class="selectionOption" value="masterDegree">Master's Degree</option>
						<option class="selectionOption" value="phd">Phd</option>
					</select>
					<script>
						var education = "<%=user.getEducation()%>";
						var options = document.getElementsByTagName("option");
						for(var i=0 ; i<options.length ; i++){
							if(options[i].value == education){
								options[i].setAttribute("selected", "true");
							}
						}					
					</script>
				</div>
				<div id="professionPersonalization" class="personalizationRow">
					<span>Profession</span>
					<select name="txtProfession" id="professionInput" class="selection editableSelection">
						<option class="selectionOption" value="unemployed">Unemployed</option>
						<option class="selectionOption" value="student">Student</option>
						<option class="selectionOption" value="employee">Employee</option>
						<option class="selectionOption" value="selfEmployed">Self Employed</option>
						<option class="selectionOption" value="homemaker">Homemaker</option>
						<option class="selectionOption" value="retired">Retired</option>
					</select>
					<script>
						var profession = "<%=user.getProfession()%>";
						var options = document.getElementsByTagName("option");
						for(var i=0 ; i<options.length ; i++){
							if(options[i].value == profession){
								options[i].setAttribute("selected", "true");
							}
						}					
					</script>
				</div>
				<div id="agePersonalization" class="personalizationRow">
					<span>Age</span>
					<script type="text/javascript" src="scripts/widgets/editableTextBox.js" barType="text" name="txtAge" rootId="agePersonalization" labelMargin="100px"></script>
					<script>
						var elem = document.getElementById("agePersonalization");
						elem.childNodes[4].firstChild.value = "<%=user.getAge()%>";
					</script>
				</div>
				<%-- <div id="rolePersonalization" class="personalizationRow">
					<span>role</span>
					<script type="text/javascript" src="scripts/widgets/editableTextBox.js" barType="text" name="txtRole" rootId="rolePersonalization" labelMargin="100px"></script>
					<script>
						var elem = document.getElementById("rolePersonalization");
						elem.childNodes[4].firstChild.value = "<%=user.getRole()%>";
					</script>
				</div>--%>
				<div id="nationalityPersonalization" class="personalizationRow">
					<span>Nationality</span>
					<script type="text/javascript" src="scripts/widgets/editableTextBox.js" barType="text" name="txtNationality" rootId="nationalityPersonalization" labelMargin="100px"></script>
					<script>
						<%user = (User) session.getAttribute("user");%>
						var elem = document.getElementById("nationalityPersonalization");
						elem.childNodes[4].firstChild.value = "<%=user.getNationality()%>";
					</script>
				</div>
				<div id="namePersonalization" class="personalizationRow">
					<span>Name</span>
					<script type="text/javascript" src="scripts/widgets/editableTextBox.js" barType="text" name="txtName" rootId="namePersonalization" labelMargin="100px"></script>
					<script>
						var elem = document.getElementById("namePersonalization");
						elem.childNodes[4].firstChild.value = "<%=user.getName()%>";
					</script>
				</div>
				<div id="surnamePersonalization" class="personalizationRow">
					<span>Surname</span>
					<script type="text/javascript" src="scripts/widgets/editableTextBox.js" barType="text" name="txtSurname" rootId="surnamePersonalization" labelMargin="100px"></script>
					<script>
						var elem = document.getElementById("surnamePersonalization");
						elem.childNodes[4].firstChild.value = "<%=user.getSurname()%>";
					</script>
				</div>
				<div id="emailPersonalization" class="personalizationRow">
					<span>e-mail</span>
					<script type="text/javascript" src="scripts/widgets/editableTextBox.js" barType="text" name="txtEmail" rootId="emailPersonalization" labelMargin="100px"></script>
					<script>
						var elem = document.getElementById("emailPersonalization");
						elem.childNodes[4].firstChild.value = "<%=user.getEmail()%>";
					</script>
				</div>
				<div class="personalizationRow" style="position: relative;">
					<span>Avatar</span>
					<div class="avatar" id="personalizationAvatar">
						<script type="text/javascript" src="scripts/utilities/retrieveAvatarImage.js"></script>
						<script>
							document.getElementById("personalizationAvatar").style.backgroundImage = getAvatar();
						</script>
					</div>
					<input type="file" name="avatarFile" class="textBox" onchange="previewAvatar(this)"/> 
					<script event="onchange">
						function previewAvatar(input){
							var avatarContainer = document.getElementById("personalizationAvatar");
							previewImage(input, avatarContainer);
						}
					</script>
				</div>	
				<div class="submitButtons">
					<button type="submit" value="Update" name="btnUpdate" label="Update" id="submitButton" data-dojo-type="dijit/form/Button"/>
					<button type="submit" value="Back" name="btnUpdate" label="Back" id="backButton" data-dojo-type="dijit/form/Button"/>
				</div>	
			</form>	
		</div>
	</body>
</html>