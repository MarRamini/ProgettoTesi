<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<div id="menuChoices" class="menuContent">
	<script>
		var container = getContentContainer();
		container.appendChild(document.getElementById("menuChoices"));
	</script>
	<script>
		require([
			"esri/Map",
		    "esri/views/SceneView",
		    "esri/tasks/RouteTask",
		    "esri/tasks/support/RouteParameters",
		    "esri/tasks/support/FeatureSet",
		    "esri/core/urlUtils",
		    "dojo/on",
		    "dojo/domReady!"
		], function(Map, SceneView, RouteTask, RouteParameters, FeatureSet, urlUtils, on){
			  //Point the URL to a valid route service
	  	      routeTask = new RouteTask({
	  	        url: "https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World"
	  	      });
	  		  
	  	   	  // Setup the route parameters
	  	      routePoints = new RouteParameters({
	  	        stops: new FeatureSet(),
	  	        outSpatialReference: { // autocasts as new SpatialReference()
	  	          wkid: 3857
	  	        }
	  	      });
	  	   	  
	  	      routeSymbol = {
	  	        type: "simple-line", // autocasts as SimpleLineSymbol()
	  	        color: [0, 0, 255, 0.5],
	  	        width: 5
	  	      };
		});
	</script>
	<table>
		<tr>
			<td>Start: </td>
			<td>
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
						    		  var startPoint = searchWidget.resultGraphic;
						    		  routePoints.stops.features.push(startPoint);
						    	  })
						      });
						 });  
					</script>
				</div>	
				<%-- <input id="txtStart" name="txtStart" placeholder="Enter your address" size="18" onFocus="enableDisableInput(true)" type="text">--%>
			</td>
		</tr>
		<tr>
			<td>Destination: </td>
			<td>
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
						    		  var stopPoint = searchWidget.resultGraphic;
						    		  routePoints.stops.features.push(stopPoint);
						    		  console.log("routePoints ", routePoints);
							    	  if (routePoints.stops.features.length >= 2) {
							            routeTask.solve(routePoints).then(function(data){
							            	var routeResult = data.routeResults[0].route;
							                routeResult.symbol = routeSymbol;
							                map.layers.items[0].add(routeResult);
							            });
							    		
							          }
						    	  });						    	  
						      });
						 });  
					</script>
				</div>			
				<%-- <input id="txtEnd" name="txtEnd" placeholder="Enter your address" size="18" type="text">
				--%>
			</td>
		</tr>
		<tr>
			<td>Mode: </td>
			<td><select name="ddlMode">
							<option value="driving">Driving</option>
							<option value="walking">Walking</option>  							
		  		</select>
		  	</td>
		</tr>
		<tr>
			<td>Max N° of Venues: </td>
			<td><input id="txtMaxWayPoints" name="txtMaxWayPoints" type="text" size="3"></td>
		</tr>
		<tr>
			<td>Available Time</td>
			<td>
				<select name="ddlHours">
							<option value="0"> 0 </option>
							<option value="1"> 1 </option>
							<option value="2"> 2 </option>
							<option value="3"> 3 </option>
							<option value="4"> 4 </option>
							<option value="5"> 5 </option>
							<option value="6"> 6 </option>
		  		</select>
		  		h
		  		&nbsp;
		  		<select name="ddlMinutes" onFocus="enableDisableInput(false)">
							<option value="0"> 00 </option>
					<option value="1"> 01 </option>
					<option value="2"> 02 </option>
					<option value="3"> 03 </option>
					<option value="4"> 04 </option>
					<option value="5"> 05 </option>
					<option value="6"> 06 </option>
					<option value="7"> 07 </option>
					<option value="8"> 08 </option>
					<option value="9"> 09 </option>
					<option value="10"> 10 </option>
					<option value="11"> 11 </option>
					<option value="12"> 12 </option>
					<option value="13"> 13 </option>
					<option value="14"> 14 </option>
					<option value="15"> 15 </option>
					<option value="16"> 16 </option>
					<option value="17"> 17 </option>
					<option value="18"> 18 </option>
					<option value="19"> 19 </option>
					<option value="20"> 20 </option>
					<option value="21"> 21 </option>
					<option value="22"> 22 </option>
					<option value="23"> 23 </option>
					<option value="24"> 24 </option>
					<option value="25"> 25 </option>
					<option value="26"> 26 </option>
					<option value="27"> 27 </option>
					<option value="28"> 28 </option>
					<option value="29"> 29 </option>
					<option value="30"> 30 </option>
					<option value="31"> 31 </option>
					<option value="32"> 32 </option>
					<option value="33"> 33 </option>
					<option value="34"> 34 </option>
					<option value="35"> 35 </option>
					<option value="36"> 36 </option>
					<option value="37"> 37 </option>
					<option value="38"> 38 </option>
					<option value="39"> 39 </option>
					<option value="40"> 40 </option>
					<option value="41"> 41 </option>
					<option value="42"> 42 </option>
					<option value="43"> 43 </option>
					<option value="44"> 44 </option>
					<option value="45"> 45 </option>
					<option value="46"> 46 </option>
					<option value="47"> 47 </option>
					<option value="48"> 48 </option>
					<option value="49"> 49 </option>
					<option value="50"> 50 </option>
					<option value="51"> 51 </option>
					<option value="52"> 52 </option>
					<option value="53"> 53 </option>
					<option value="54"> 54 </option>
					<option value="55"> 55 </option>
					<option value="56"> 56 </option>
					<option value="57"> 57 </option>
					<option value="58"> 58 </option>
					<option value="59"> 59 </option>
		  		</select>
		  	</td>
		</tr>
		<tr>
			<script>
				filters = [];
				
				function removeElement(element){
					filters.forEach(function(item, index){
						if(item.type === element.type)
							filters.splice(index, 1);
					})
				}
				
				function filterPois(checkBoxElem){
					//console.log(checkBoxElem.value);
					switch(checkBoxElem.value){
						case "1" :
							var filter = {type: "museum"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);							
							break;
						case "2" :
							var filter = {type: "historic"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
						case "3" :
							var filter = {type: "church"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
						case "4" :
							var filter = {type: "arts"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
						case "5" :
							var filter = {type: "entertainment"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
						case "6" :
							var filter = {type: "outdoors"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
						case "7" :
							var filter = {type: "food"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
						case "8" :
							var filter = {type: "nightlife"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
						case "9" :
							var filter = {type: "shop"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
						case "10" :
							var filter = {type: "sport"};
							checkBoxElem.checked ? filters.push(filter) : removeElement(filter);
							break;
					    default : console.log("error");
					}
				}
			</script>
			<td colspan="2">
				<br>
				<div>What categories are you interested in?</div>
				<input type="checkbox" name="cbCategories" value="1" onchange="filterPois(this)"/> Museum <br>
				<input type="checkbox" name="cbCategories" value="2" onchange="filterPois(this)"/> History &amp; Monuments <br>
				<input type="checkbox" name="cbCategories" value="3" onchange="filterPois(this)"/> Church <br>
				<input type="checkbox" name="cbCategories" value="4" onchange="filterPois(this)"/> Arts <br>
				<input type="checkbox" name="cbCategories" value="5" onchange="filterPois(this)"/> Entertainment <br>
				<input type="checkbox" name="cbCategories" value="6" onchange="filterPois(this)"/> Outdoors &amp; Recreation <br>				
				<input type="checkbox" name="cbCategories" value="7" onchange="filterPois(this)"/> Food <br>
				<input type="checkbox" name="cbCategories" value="8" onchange="filterPois(this)"/> Nightlife Spot <br>
				<input type="checkbox" name="cbCategories" value="9" onchange="filterPois(this)"/> Shop &amp; Service <br>
				<input type="checkbox" name="cbCategories" value="10" onchange="filterPois(this)"/> Athletics &amp; Sports <br>
				<!-- <input type="checkbox" name="cbCategories" value="11"/> Others -->
				<!-- <input type="checkbox" name="cbCategories" value="12"/> Event <br> -->				
			</td>
		</tr>
		<tr>
			<td colspan="2">&nbsp;</td>
		</tr>
		<tr>
			<td colspan="2"><input type="button" id="btnSearch" onclick="searchRevenues(lastPositionSearched, filters)" value="Filtra Risultati"></td>							
			</tr>
	</table>
</div>