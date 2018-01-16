<!DOCTYPE html>
<%@ page import="model.User" %>
<html>
	<head>
		<meta charset="ISO-8859-1">
		<title>Home</title>
		<link rel="stylesheet" type="text/css" href="styles/css/pages/index.css"/>
		<link rel="stylesheet" href="https://js.arcgis.com/4.5/esri/css/main.css">
	</head>
	<body class="claro">		
		<div id="primaryMenu" class="menuBar">
			<script type="text/javascript" src="scripts/widgets/menuWidget.js" rootId="primaryMenu" userPanel="true"></script>
			<span class="userType">
				Benvenuto  <%= ((User)session.getAttribute("user")).getUsername() %>
			</span>
			<jsp:include page="menuChoices.jsp"/>
		</div>	
		<div id="mapPlaceHolder" class="mapContainer">			
			<script src="https://js.arcgis.com/4.5/"></script>
			<script>
			/* TRACK WIDGET */
				/*require([
				  "esri/widgets/Track",					 
				  "esri/views/SceneView",
				  "esri/Map",
				  "dojo/domReady!",
				 ], 
				  function(Track, SceneView, Map){
				      var map = new Map({
				        basemap: "topo"
				   	  });
				      
				      var view = new SceneView({
				        map: map,
				        container: "mapPlaceHolder"
				      });
				      
					  // Create an instance of the Track widget
				      // and add it to the view's UI
				      var track = new Track({
				        view: view,
				        goToLocationEnabled: true
				      });
					  
				      view.ui.add(track, "top-left");
					  						
				      // The sample will start tracking your location
				      // once the view becomes ready
				      view.then(function() {
				    	track.on("track", function(){
				    		var location = track.graphic.geometry;
	
				            view.goTo({
				              center: location,
				              tilt: 60,
				              scale: 2500,
				              zoom: 18
				            });
				    	});
				    	
				        track.start();
				      });
				     });
			*/
			/* SEARCH WIDGET */
				require([
				  "esri/widgets/Track",					 
				  "esri/views/SceneView",
				  "esri/Map",
				  "dojo/domReady!",
				 ], 
				  function(Search, SceneView, Map){
				      var map = new Map({
				        basemap: "topo"
				   	  });
				      
				      var view = new SceneView({
				        map: map,
				        container: "mapPlaceHolder"
				      });
				      
				      var searchWidget = new Search({
				          view: view
				      });
		
				      // Add the search widget to the top right corner of the view
				      view.ui.add(searchWidget, {
				        position: "top-right"
				      });
				 }); 
			</script>
			<div class="quickSearchContainer">
				<jsp:include page="quickSearchBar.jsp"/>
			</div>
		</div>
	</body>
</html>