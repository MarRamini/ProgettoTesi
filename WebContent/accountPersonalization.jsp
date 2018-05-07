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
	</head>
	<body class="claro">
		<div id="accountPersonalizationForm" class="formContainer">
		<div id="usernamePersonalization" class="personalizationRow">
			<span>username</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="usernamePersonalization" labelMargin="100px"></script>
			<script>
				<%User user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("usernamePersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getUsername()%>";				
			</script>
		</div>
		<div id="passwordPersonalization" class="personalizationRow">
			<span>password</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="passwordPersonalization" labelMargin="100px" isPassword="true"></script>
			<script>
				<%user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("passwordPersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getPassword()%>";				
			</script>
		</div>
		<div id="genderPersonalization" class="personalizationRow">
			<span>gender</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="genderPersonalization" labelMargin="100px"></script>
			<script>
				<%user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("genderPersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getGender()%>";
			</script>
		</div>
		<div id="agePersonalization" class="personalizationRow">
			<span>age</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="agePersonalization" labelMargin="100px"></script>
			<script>
				<%user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("agePersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getAge()%>";
			</script>
		</div>
		<div id="rolePersonalization" class="personalizationRow">
			<span>role</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="rolePersonalization" labelMargin="100px"></script>
			<script>
				<%user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("rolePersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getRole()%>";
			</script>
		</div>
		<div id="nationalityPersonalization" class="personalizationRow">
			<span>nationality</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="nationalityPersonalization" labelMargin="100px"></script>
			<script>
				<%user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("nationalityPersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getNationality()%>";
			</script>
		</div>
		<div id="namePersonalization" class="personalizationRow">
			<span>name</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="namePersonalization" labelMargin="100px"></script>
			<script>
				<%user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("namePersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getName()%>";
			</script>
		</div>
		<div id="surnamePersonalization" class="personalizationRow">
			<span>surname</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="surnamePersonalization" labelMargin="100px"></script>
			<script>
				<%user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("surnamePersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getSurname()%>";
			</script>
		</div>
		<div id="emailPersonalization" class="personalizationRow">
			<span>e-mail</span>
			<script type="text/javascript" src="scripts/widgets/editableTextBox.js" rootId="emailPersonalization" labelMargin="100px"></script>
			<script>
				<%user = (User) session.getAttribute("user");%>
				var elem = document.getElementById("emailPersonalization");
				elem.childNodes[4].firstChild.innerHTML = "<%=user.getEmail()%>";
			</script>
		</div>
		<div class="personalizationRow">
			<span>avatar</span>
		</div>
		<div class="submitButtons">
			<button data-dojo-type="dijit/form/Button" action="Update">Save Changes</button>
		</div>	
	</div>
	
	</body>
</html>