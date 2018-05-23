<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
		<title>Choose your basemap</title>
		<link rel="stylesheet" href="styles/css/pages/basemapChoice.css">
	</head>
	<body class="claro">
		<div class="contentContainer">
			<form class="formContainer">
				<div class="messageContainer">
					<span class="message">Please choose your preferred basemap type. This choice will affect the initial visualization of the map, but you can always change it later.</span>
				</div>
				<div class="basemapChoices">
					<script>
						function previewImage(option){
							document.getElementById("basemapImage").style.backgroundImage = "url('styles/images/" + option.value + ".jpg')";
						}
					</script>
					<div class="basemapRow">
						<select class="basemapSelection" onchange="previewImage(this)">
							<option value="streets" selected="true">streets</option>
							<option value="satellite">satellite</option>
							<option value="hybrid">hybrid</option>
							<option value="topo">topo</option>
							<option value="osm">osm</option>
							<option value="streets-vector">streets-vector</option>
							<option value="topo-vector">topo-vector</option>
							<option value="streets-relief-vector">streets-relief-vector</option>
							<option value="streets-navigation-vector">streets-navigation-vector</option>
						</select>						
						<div class="basemapPreview" id="basemapImage"></div>
						<script>
							var options = document.getElementsByTagName("option");
							for(var i=0 ; i<options.length ; i++){
								if(options[i].getAttribute("selected") == "true"){
								
									previewImage(options[i]);
								}
							}
						</script>
					</div>
				</div>
				<div class="submitButtons">Save Basemap</div>
			</form>
		</div>
	</body>
</html>