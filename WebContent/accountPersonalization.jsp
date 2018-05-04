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
				console.log(elem.childNodes[4].firstChild)
				
			</script>
		</div>
		<div class="personalizationRow">
			<span>password</span>
		</div>
		<div class="personalizationRow">
			<span>gender</span>
		</div>
		<div class="personalizationRow">
			<span>age</span>
		</div>
		<div class="personalizationRow">
			<span>role</span>
		</div>
		<div class="personalizationRow">
			<span>nationality</span>
		</div>
		<div class="personalizationRow">
			<span>name</span>
		</div>
		<div class="personalizationRow">
			<span>surname</span>
		</div>
		<div class="personalizationRow">
			<span>e-mail</span>
		</div>
		<div class="personalizationRow">
			<span>avatar</span>
		</div>
	</div>
	</body>
</html>