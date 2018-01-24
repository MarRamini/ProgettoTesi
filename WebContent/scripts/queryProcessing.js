function searchRevenues(position, filters){
	//compone la query in base ai filtri e alla posizione
	//valuta il json risultate con eval() e torna l'oggetto.
	
	var query = "Prefix lgdr:<http://linkedgeodata.org/triplify/> " +
	"Prefix lgdo:<http://linkedgeodata.org/ontology/> " +
	"PREFIX owl:<http://www.w3.org/2002/07/owl#> " + 
	"Select distinct ?obj ?class ?lat ?long\n " + 
	"where { " +
	"?obj a ?class. " +
	"?obj geo:lat ?lat. " +
	"?obj geo:long ?long. " +
	"} " +
	"limit 10 ";
	
	var url = createURL(query);
	
	var response = queryRequest(url);
	console.log("response: " + response);
	
}

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
	    	console.log("readyStateChange", xmlHttp)
	     }
	 };
	 
	 xmlHttp.open("GET", url, true); // true for asynchronous 
	 console.log("request opened")
	 // console.log(response1)
	 xmlHttp.send();
	 console.log("request sended")
	 return JSON.parse(xmlHttp.responseText);
}

