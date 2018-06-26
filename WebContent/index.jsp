<!DOCTYPE html>
<%@ page import="model.User" %>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Home</title>
		<link rel="stylesheet" type="text/css" href="styles/css/pages/index.css"/>
		<link rel="stylesheet" href="https://js.arcgis.com/4.5/esri/css/main.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<script src="https://js.arcgis.com/4.5/"></script>
		<script type="text/javascript" src="scripts/utilities/revenueWidgetGenerator.js"></script>
		<script type="text/javascript" src="scripts/utilities/categoriesDefinition.js"></script>
		<script type="text/javascript" src="scripts/utilities/categoryFlagger.js"></script>
		<script type="text/javascript" src="scripts/utilities/queryProcessing.js"></script>
	</head>
	<body class="claro">
		<div id="mapPlaceHolder" class="mapContainer">
			<%if(session.getAttribute("user") == null){ %>			   
				<script type="text/javascript" src="scripts/widgets/mapWidget.js"></script>
			<%}else{ %>
				<script type="text/javascript" src="scripts/widgets/mapWidget.js" basemap="<%=((User)session.getAttribute("user")).getBasemap() %>"></script>	
			<%} %>
			<script type="text/javascript" src="scripts/widgets/basemapToggleWidget.js"></script>
			<script type="text/javascript" src="scripts/widgets/trackWidget.js"></script>			
		</div>
		<div id="primaryMenu" class="menuBar opened">
			<script type="text/javascript" src="scripts/widgets/menuWidget.js" rootId="primaryMenu" userPanel="true"></script>
			<script type="text/javascript" src="scripts/utilities/retrieveAvatarImage.js"></script>
			<script>
				var userSpan = document.getElementById("userType");
				userSpan.textContent = "Welcome " + "<%= ((User)session.getAttribute("user")).getUsername() %>";
				
				var isAvatarSaved = false;
				<% byte[] avatar = ((User)session.getAttribute("user")).getAvatar();
				   if(avatar != null && avatar.length > 0){
				%>
						isAvatarSaved = true;
				<%}%>
				if(isAvatarSaved){
					document.getElementById("userAvatar").style.backgroundImage = getAvatar();
				}
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