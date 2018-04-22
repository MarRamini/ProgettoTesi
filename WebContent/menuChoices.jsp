<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<script type="text/javascript" src="scripts/utilities/route.js"></script>
<div id="menuChoices" class="menuContent">
	<script>
		var container = getContentContainer();
		container.appendChild(document.getElementById("menuChoices"));
	</script>
	<div class="menuVoice">
		<span onclick="showRoutingForm()">Routing</span>
		<jsp:include page="routingForm.jsp"/>
		<script>
			function showRoutingForm(){
				var form = document.getElementById("routingForm");
				form.style.display == "none"? form.style.display = "block" : form.style.display = "none";
			}
		</script>
	</div>
	<div class="menuVoice">
		<span onclick="showFiltersForm()">Set Filters</span>
		<jsp:include page="filtersOptions.jsp"/>
		<script>
			function showFiltersForm(){
				var form = document.getElementById("filtersForm");
				form.style.display == "none"? form.style.display = "block" : form.style.display = "none";
			}
		</script>
	</div>
	<div class="menuVoice">
		<span>Personalization</span>
	</div>
	<div class="menuVoice">
		<span>Options</span>
	</div>
	
	
			<%-- <table>
	
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
	</table>--%>
</div>