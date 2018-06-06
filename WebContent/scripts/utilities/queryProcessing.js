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
 * @param position
 * @param filters
 * @returns void
 * creates a sparql query given position of the revenues to be searched and category filters to be applied
 */
function searchRevenues(position, filters, maxVenues){
	var maximumLatitude = addMetresToLatitude(position.latitude, 1000);
	var minimumLatitude = addMetresToLatitude(position.latitude, -1000);
	var maximumLongitude = addMetresToLongitude(position.longitude, 1000);
	var minimumLongitude = addMetresToLongitude(position.longitude, -1000);
	
	var query = "Prefix lgdr:<http://linkedgeodata.org/triplify/> " + //query per tutti gli oggetti di classe HistoricThing nei dintorni di Roma
				"Prefix lgdo:<http://linkedgeodata.org/ontology/> " +
				"PREFIX owl:<http://www.w3.org/2002/07/owl#> " +
				"Select distinct ?obj ?class ?type ?label ?lat ?long ?feature ?note ?cuisine ?source " +
				"where { " +
				"values(?class){" + defineClasses() + "} " +
				"?obj a ?class. " +
				"?obj rdf:type ?type. " +
				"?obj geo:lat ?lat. " +
				"?obj geo:long ?long. " +
				"?obj rdfs:label ?label. " +
				"OPTIONAL{?obj lgdo:featuresSport ?feature}. " +
				"OPTIONAL{?obj lgdo:note ?note}. " +
				"OPTIONAL{?obj lgdo:cuisine ?cuisine}. " +
				"OPTIONAL{?obj lgdo:source ?source}. " +
				"FILTER(?lat <= " + maximumLatitude + " && ?lat >= " + minimumLatitude + " && ?long <= " + maximumLongitude + " && ?long >= " + minimumLongitude + ") " +
				"FILTER(LANG(?label) = 'it' || LANG(?label) = '')" +
				"} " ;
	
	if(maxVenues){
		query = query.concat("LIMIT ", maxVenues);
	}		
				
	var url = createURL(query);	
	var routeFlag = false;
	queryRequest(url);
}


/**
 * @param startPoint: route's starting point
 * @oaram endPoint: route's ending point
 * @param filters
 * @returns void
 * creates a sparql query given routing startPoint and endPoint to be searched and category filters to be applied
 */
function searchRouteRevenues(startPoint, endPoint, filters){
	var maximumLatitude = Math.max(startPoint.geometry.latitude, endPoint.geometry.latitude);
	var minimumLatitude = Math.min(startPoint.geometry.latitude, endPoint.geometry.latitude);
	var maximumLongitude = Math.max(startPoint.geometry.longitude, endPoint.geometry.longitude);
	var minimumLongitude = Math.min(startPoint.geometry.longitude, endPoint.geometry.longitude);
	
	//var filtered = applyFilters(filters);
	//console.log("filtered ", filtered)
	
	var query = "Prefix lgdr:<http://linkedgeodata.org/triplify/> " + //query per tutti gli oggetti di classe HistoricThing nei dintorni di Roma
				"Prefix lgdo:<http://linkedgeodata.org/ontology/> " +
				"PREFIX owl:<http://www.w3.org/2002/07/owl#> " +
				"Select distinct ?obj ?class ?type ?label ?lat ?long ?feature ?note ?cuisine ?source " +
				"where { " +
				"values(?class){" + defineClasses() + "} " +
				"?obj a ?class. " +
				"?obj rdf:type ?type. " +
				"?obj geo:lat ?lat. " +
				"?obj geo:long ?long. " +
				"?obj rdfs:label ?label " +
				"OPTIONAL{?obj lgdo:featuresSport ?feature}. " +
				"OPTIONAL{?obj lgdo:note ?note}. " +
				"OPTIONAL{?obj lgdo:cuisine ?cuisine}. " +
				"OPTIONAL{?obj lgdo:source ?source}. " +
				"FILTER(?lat <= " + maximumLatitude + " && ?lat >= " + minimumLatitude + " && ?long <= " + maximumLongitude + " && ?long >= " + minimumLongitude + ") " +
				"FILTER(LANG(?label) = 'it' || LANG(?label) = '')" +
				"} " ;
				
	var url = createURL(query);
	var routeFlag = true;
	queryRequest(url, startPoint, endPoint, routeFlag);
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
function queryRequest(url, startPoint, endPoint, routeFlag){
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
	    	createPoiWidget(xmlHttpResponse, startPoint, endPoint, routeFlag);
	     }
	 };
	 
	 xmlHttp.open("GET", url, true); // true for asynchronous 
	 xmlHttp.send();
}
