<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <script type="text/javascript" src="scripts/utilities/filters.js"></script>
<div id="filtersForm" class="searchParameters" style="display: none;">
	<div class="paramRow">
		<div onclick="showMaxVenuesFilter(this)"> Filter number of venues
			<div class="accordionArrow"></div>
		</div>
		<div id="maxVenuesFilter" class="menuVoice" style="display: none">
			<span>N° of Venues:</span>
			<input id="txtMaxWayPoints" name="txtMaxWayPoints" type="text" size="3" oninput="setMaxVenues()">
			<script>
				var maxVenues;
				function setMaxVenues(){				
					maxVenues = document.getElementById("txtMaxWayPoints").value;
					applyFilters(filters, maxVenues);
					console.log("oninput fired")
				}		
				
				function showMaxVenuesFilter(elem){
					var maxVenuesFilter = document.getElementById("maxVenuesFilter");
					maxVenuesFilter.style.display == "none" ? maxVenuesFilter.style.display = "block" : maxVenuesFilter.style.display = "none";
					elem.classList.contains("focused") ? elem.classList.remove("focused") : elem.classList.add("focused");
				}
			</script>
		</div>
	</div>
	<div class="paramRow">
		<script>
			filters = [];
			
			function removeElement(element){
				filters.forEach(function(item, index){
					if(item.type === element.type)
						filters.splice(index, 1);
				})
			}
			
			function filterPois(checkBoxElem){
				switch(checkBoxElem.value){
					case "1" :
						var filter = {type: "museum"};
						checkBoxElem.checked ? filters.push(filter) : removeElement(filter);							
						break;
					case "2" :
						var filter = {type: "historicThing"};
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
				applyFilters(filters, maxVenues);
			}
		</script>
		<div onclick="showCategoryFilter(this)"> Filter category
			<div class="accordionArrow"></div>
		</div>
		<script>
			function showCategoryFilter(elem){
				var categoryFilter = document.getElementById("categoryFilter");
				categoryFilter.style.display == "none" ? categoryFilter.style.display = "block" : categoryFilter.style.display = "none";
				elem.classList.contains("focused") ? elem.classList.remove("focused") : elem.classList.add("focused");
			}
		</script>
		<div id="categoryFilter" class="filters menuVoice" style="display: none">
			<span>What categories are you interested in?</span>
			<br>
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
		</div>
		<%-- 
		<input type="button" id="btnSearch" onclick="applyFilters(filters, maxVenues)" value="Filter Results">
		--%>
	</div>
</div>