<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<div id="routingForm" class="routingForm" style="display: none;">
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
				      
				      view.then(function(){
				    	  searchWidget.on("select-result", function(){						    		  
				    		  startPoint = searchWidget.resultGraphic;
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
				      
				      view.then(function(){
				    	  searchWidget.on("select-result", function(){	
				    		  stopPoint = searchWidget.resultGraphic;	
				    	  });						    	  
				      });
				 });  
			</script>
		</div>
	</div>
	<input type="button" id="btnSearch" onclick="searchRouteRevenues(startPoint, stopPoint, filters)" value="Calculate Route">
</div>