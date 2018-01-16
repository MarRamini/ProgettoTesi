<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

	<!-- script for Google Maps API -->
	<!-- sensor=true for using gps sensor on PC -->
	<script src="https://maps.google.com/maps/api/js?libraries=places&sensor=true&language=en"></script>
	
	<!-- script for map construction -->
	<script type="text/javascript">
	
		var map;
		var initialLocation;
		var rome = new google.maps.LatLng(41.9100711, 12.5359979);
		var browserSupportFlag =  new Boolean();
		
		
		function initialize() {
			
			// Map visualization options
			var mapOptions = {
				zoom: 11,
				mapTypeId: google.maps.MapTypeId.ROADMAP	//displays a normal street map (senn� c'� HYBRID, SATELLITE, o TERRAIN')
			};
			
			// THE MAP
			map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
			
			
			// Try HTML5 geolocation
			if(navigator.geolocation) {
				browserSupportFlag = true;
				navigator.geolocation.getCurrentPosition(function(position) {
					initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);				
					
					var infoWindow = new google.maps.InfoWindow({
						//map: map,
						position: initialLocation,
						content: 'You are here'
					});
					infoWindow.open(map);
					
					map.setCenter(initialLocation);
				}, function() {
					handleNoGeolocation(browserSupportFlag);	//true
				});
			} else {
				// Browser doesn't support Geolocation
				browserSupportFlag = false;
				handleNoGeolocation(browserSupportFlag);		//false
			}			
			
		}
		
		
		
		function handleNoGeolocation(errorFlag) {
			if (errorFlag == true) {
				alert("Geolocation service failed.");
				initialLocation = rome;
			} else {
				alert("Your browser doesn't support geolocation. We've placed you in Rome.");
				initialLocation = rome;
		    }
		    map.setCenter(initialLocation);
		}			
		
			
		google.maps.event.addDomListener(window, 'load', initialize);	// equivale a scrivere <body onload="initialize()">
		
	</script>

</head>
<body>
	
	<jsp:include page="menu.jsp" />
	

	<form action="FindPOIsByDistance" method="get">
		<br/>
		<table>
			<tr>
				<td>
					<div id="googleMap" style="width:700px; height:500px; position:relative; top:0; overflow:hidden;"></div>				 
				</td>
				<td>				
					<br/>
					Indirizzo: <input id="txtAddress" name="txtAddress" type="text">
					<br/>				
					Raggio (in Km): <input id="txtKm" name="txtKm" type="text" value="5">
					<br/>
					<input id="btnSearch" type="submit" value="Search">
					<br/>
					<% if (request.getAttribute("error") != null) { %>
					<div><%= request.getAttribute("error") %></div>
					<% } %>
				</td>
			</tr>	
		</table>

	</form>

</body>
</html>