<!DOCTYPE html>
<%@ page import="model.User" %>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Home</title>
		<link rel="stylesheet" type="text/css" href="styles/css/pages/index.css"/>
		<link rel="stylesheet" href="https://js.arcgis.com/4.5/esri/css/main.css">
		<script src="https://js.arcgis.com/4.5/"></script>
		<script type="text/javascript" src="scripts/queryProcessing.js"></script>
	</head>
	<body class="claro">
		<div id="mapPlaceHolder" class="mapContainer">			   
			<script type="text/javascript" src="scripts/widgets/mapWidget.js"></script>
			<script type="text/javascript" src="scripts/widgets/trackWidget.js"></script>			
		</div>
		<div id="primaryMenu" class="menuBar">
			<script type="text/javascript" src="scripts/widgets/menuWidget.js" rootId="primaryMenu" userPanel="true"></script>
			<script>
				var userSpan = document.getElementById("userType");
				userSpan.textContent = "Benvenuto <%= ((User)session.getAttribute("user")).getUsername() %>";
			</script>
			<%--<span class="userType">
				Benvenuto  <%= ((User)session.getAttribute("user")).getUsername() %>
			</span>--%>
			<jsp:include page="menuChoices.jsp"/>
		</div>	
		<div class="quickSearchContainer">
			<jsp:include page="quickSearchBar.jsp"/>
		</div>
	</body>
</html>