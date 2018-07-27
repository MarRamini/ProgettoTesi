<%@page import="model.User"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<script type="text/javascript" src="scripts/utilities/route.js"></script>
<script type="text/javascript" src="scripts/widgets/routeRatingWidget.js"></script>
<script type="text/javascript" src="scripts/widgets/integratedDirectionsWidget.js"></script>

<div id="routingForm" class="routingForm" style="display: none;">
	<%User user = (User) session.getAttribute("user"); %>
	<script>
		username = "<%=user.getUsername()%>";
	</script>
	<script type="text/javascript" src="scripts/widgets/directionsWidget.js"></script>
	<%-- 
	<div class="routingRow">
		<span>Start:</span>
		<div id="startAddress" class="addressBar">		
			<script>
				/* SEARCH WIDGET */
				require([
				  "esri/widgets/Search",					 
				  "esri/views/SceneView",
				  "esri/Map",
				  "dojo/domReady!",
				 ], 
				  function(Search, SceneView, Map){	
					 
				      var searchWidget = new Search({
				          view: this.view,
				          container: "startAddress"
				      });
				      
				      searchWidget.on("search-clear", function(){
				    	  if(typeof startPoint != "undefined"){
				    		  startPoint = null;
				    	  }
				      });
				      
				      view.then(function(){
				    	  searchWidget.on("select-result", function(){						    		  
				    		  startPoint = searchWidget.resultGraphic;
				    		  var parentNode = dojo.byId("startAddress");
				    		  if(parentNode.classList.contains("missingAddress")){
				    			  parentNode.classList.remove("missingAddress");
				    			  if(typeof stopPoint != "undefined" && stopPoint != null){
				    				  searchRouteRevenues(startPoint, stopPoint, filters);
				    			  }
				    		  }
				    	  })
				      });
				 });  
			</script>
		</div>
	</div>
	<div class="routingRow">
		<span>Destination:</span>
		<div id="destinationAddress" class="addressBar">
			<script>
			/* SEARCH WIDGET */
				require([
				  "esri/widgets/Search",					 
				  "esri/views/SceneView",
				  "esri/Map",
				  "dojo/domReady!",
				 ], 
				  function(Search, SceneView, Map){		      
					  
				      var searchWidget = new Search({
				          view: view,
				          container: "destinationAddress"
				      });
				      
				      searchWidget.on("search-clear", function(){
				    	  if(typeof stopPoint != "undefined"){
				    		  stopPoint = null;
				    	  }
				      });
				      
				      view.then(function(){
				    	  searchWidget.on("select-result", function(){	
				    		  stopPoint = searchWidget.resultGraphic;
				    		  if(typeof startPoint != "undefined" && startPoint != null){
				    			  searchRouteRevenues(startPoint, stopPoint, filters);
				    		  }
				    		  else{
				    			 dojo.byId("startAddress").classList.add("missingAddress");
				    		  }
				    	  });						    	  
				      });
				 });  
			</script>
		</div>
	</div>
	<div id="travelModeVoice" class="menuVoice routingRow" onclick="showTravelMode(this)">
		<span>Travel Mode:</span>
		<div class="accordionArrow"></div>
		<script>
			function showTravelMode(elem){
				var travelModeRow = document.getElementById("travelModeRow");
				if(travelModeRow){
					travelModeRow.style.display == "none" ? travelModeRow.style.display = "block": travelModeRow.style.display = "none";
					elem.classList.contains("focused") ? elem.classList.remove("focused") : elem.classList.add("focused");
				}
				else{
					travelModeRow = document.createElement("div");
					travelModeRow.id = "travelModeRow";
					travelModeRow.className = "travelModeRow";
					elem.appendChild(travelModeRow);
				}
			}
		</script>	
	</div>
	<div id="directionsVoice" class="menuVoice routingRow" onclick="showDirections(this)">
		<span>Directions:</span>
		<div class="accordionArrow"></div>
		<script>
			function showDirections(elem){
				var container = document.getElementById("directionsWidgetContainer");
				if(container){
					container.style.display == "none"? container.style.display = "block" : container.style.display = "none";
					elem.classList.contains("focused") ? elem.classList.remove("focused") : elem.classList.add("focused");
				}
				else{
					container = document.getElementById("dummyDiv");
					if(container){
						container.style.display == "none"? container.style.display = "block" : container.style.display = "none";
					}
					else{
						container = document.createElement("div");
						container.id = "dummyDiv"
						container.className = "dummyDiv";
						elem.appendChild(container);
					}
					elem.classList.contains("focused") ? elem.classList.remove("focused") : elem.classList.add("focused");
				}
			}
		</script>	
	</div>--%>
	<%-- 
	<input type="button" id="btnSearch" onclick="searchRouteRevenues(startPoint, stopPoint, filters)" value="Calculate Route">
	--%>
</div>