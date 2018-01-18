<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<div class="quickSearch">
	<div class="menuToggle" onclick="toggleMenu()">
		<script type="text/javascript" src="scripts/toggleMenu.js"></script>
		<div class="menuIcon"></div>			
	</div>
	<div class="searchBox" id="searchBox">
		<script>
		/* SEARCH WIDGET*/
			require([
			  "esri/widgets/Search",					 
			  "esri/views/SceneView",
			  "esri/Map",
			  "dojo/domReady!",
			 ], 
			  function(Search, SceneView, Map){		      
					
			      var searchWidget = new Search({
			          view: this.view,
			          container: "searchBox"
			      });
			 });  
		</script>
	</div>
</div>
