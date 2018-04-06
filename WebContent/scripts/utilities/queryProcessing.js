/**
 * this script creates a sparql query with given user position and filters to be applied
 * then queries linkedgeodata.org for revenues
 * then calls RevenueWidgetGenerator.js to create graphic widgets
 */

/**
 * @param latitude
 * @param metres
 * @returns newLatitude
 * add given metres to given latitude
 */
function addMetresToLatitude(latitude, metres){
	var radiusOfEarth = 6378 * 1000 //in metri
	var delta = (metres/radiusOfEarth) * (180/Math.PI);
	var newLatitude = latitude + delta;
	return newLatitude;
}

/**
 * @param longitude
 * @param metres
 * @returns newLongitude
 * add given metres to given longitude
 */
function addMetresToLongitude(longitude, metres){
	var radiusOfEarth = 6378 * 1000 //in metri
	var delta = (metres/radiusOfEarth) * (180/Math.PI) / Math.cos(longitude * Math.PI /180);
	var newLongitude = longitude + delta;
	return newLongitude;
}

/**
 * @param filters
 * @returns filteredClasses
 * apply filters in order to have linkedgeodata classes to be queried in a string of chosen classes
 */
function applyFilters(filters){
	var filteredClasses = "";
	console.log("defining base classes...")
	var museumClass = defineMuseumClasses();
	var historicClass = defineHistoricClasses();
	var churchClass = defineChurchClasses();
	var artsClass = defineArtsClasses();
	var entertainmentClass = defineEntertainmentClasses();
	var outdoorsClass = defineOutdoorsClasses();
	var foodClass = ""//defineFoodClasses();
	var nightlifeClass = defineNightlifeClasses();
	var shopClass = defineShopClasses();
	var sportClass = defineSportClasses();
	
	console.log("filtering classes")
	if(filters.length == 0){
		filteredClasses = filteredClasses + museumClass + historicClass + churchClass + artsClass + entertainmentClass + outdoorsClass + foodClass + nightlifeClass 
			+ shopClass + sportClass;
	}
	else{
		filters.forEach(function(item){
			switch(item.type){
				case "museum" :
					filteredClasses = filteredClasses + museumClass;
					break;
				case "historic" :
					filteredClasses = filteredClasses + historicClass;
					break;
				case "church" :
					filteredClasses = filteredClasses + churchClass;
					break;
				case "arts" :
					filteredClasses = filteredClasses + artsClass;
					break;
				case "entertainment" :
					filteredClasses = filteredClasses + entertainmentClass;
					break;
				case "outdoors" :
					filteredClasses = filteredClasses + outdoorsClass;
					break;
				case "food" :
					filteredClasses = filteredClasses + foodClass;
					break;
				case "nightlife" :
					filteredClasses = filteredClasses + nightlifeClass;
					break;
				case "shop" :
					filteredClasses = filteredClasses + shopClass;
					break;
				case "sport" :			
					filteredClasses = filteredClasses + sportClass;
					break;
				default: 
					filteredClasses = filteredClasses + "";
			}
		})
	}
	
	return filteredClasses;
}

/**
 * @param position
 * @param filters
 * @returns void
 * creates a sparql query given position of the revenues to be searched and category filters to be applied
 */
function searchRevenues(position, filters){
	//compone la query in base ai filtri e alla posizione
	var maximumLatitude = addMetresToLatitude(position.latitude, 1000);
	var minimumLatitude = addMetresToLatitude(position.latitude, -1000);
	var maximumLongitude = addMetresToLongitude(position.longitude, 1000);
	var minimumLongitude = addMetresToLongitude(position.longitude, -1000);
	
	//var maximumLatitude = 45;
	//var minimumLatitude = 40;
	//var maximumLongitude = 15;
	//var minimumLongitude = 10;
	console.log("begin searching...")
	//var filtered = applyFilters(filters);
	//console.log("filtered ", filtered)
	
	var query = "Prefix lgdr:<http://linkedgeodata.org/triplify/> " + //query per tutti gli oggetti di classe HistoricThing nei dintorni di Roma
				"Prefix lgdo:<http://linkedgeodata.org/ontology/> " +
				"PREFIX owl:<http://www.w3.org/2002/07/owl#> " +
				"Select distinct ?obj ?class ?label ?lat ?long " +
				"where { " +
				"values(?class){" + defineClasses() + "} " +
				"?obj a ?class. " +
				"?obj geo:lat ?lat. " +
				"?obj geo:long ?long. " +
				"?obj rdfs:label ?label " +
				"FILTER(?lat <= " + maximumLatitude + " && ?lat >= " + minimumLatitude + " && ?long <= " + maximumLongitude + " && ?long >= " + minimumLongitude + ") " +
				"} " 
	
	var url = createURL(query);	
	queryRequest(url);	
}

/**
 * @param query
 * @returns queryURL
 * creates a URL from given query to which direct a http request
 */
function createURL(query){
	//preprocessa la query, torna l'url a linkedgeodata	
	var baseURL = "http://linkedgeodata.org/sparql";
	var format="application/json";
	var params={
		"default-graph": "", "should-sponge": "soft", "query": query,
		"debug": "on", "timeout": "", "format": format,
		"save": "display", "fname": ""
	};
	
	var querypart = "";
	for(var param in params) {
		querypart += param + "=" + encodeURIComponent(params[param]) + "&";
	}
	var queryURL = baseURL + '?' + querypart;
	return queryURL;
}

/**
 * @param url
 * @returns void
 * send a XMLHttpRequest to given url
 */
function queryRequest(url){
	//get query preprocessata
	if (window.XMLHttpRequest) {
	  	var xmlHttp = new XMLHttpRequest();
	  }
	 else {
	  	var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	 }
	
	 xmlHttp.onreadystatechange = function() { 
	     if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    	var xmlHttpResponse = JSON.parse(this.responseText);
	    	createPoiWidget(xmlHttpResponse);
	     }
	 };
	 
	 xmlHttp.open("GET", url, true); // true for asynchronous 
	 xmlHttp.send();
}
