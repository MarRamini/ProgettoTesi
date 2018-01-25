function searchRevenues(position, filters){
	//compone la query in base ai filtri e alla posizione
	//valuta il json risultate con eval() e torna l'oggetto.
	
	var query = "Prefix lgdr:<http://linkedgeodata.org/triplify/> " + //query per tutti gli oggetti di classe HistoricThing nei dintorni di Roma
				"Prefix lgdo:<http://linkedgeodata.org/ontology/> " +
				"PREFIX owl:<http://www.w3.org/2002/07/owl#> " +
				"Select distinct ?obj ?class ?label ?lat ?long " +
				"where { " +
				"values(?class){(<http://linkedgeodata.org/ontology/HistoricThing>)} " +
				"?obj a ?class. " +
				"?obj geo:lat ?lat. " +
				"?obj geo:long ?long. " +
				"?obj rdfs:label ?label " +
				"FILTER(?lat <= 42 && ?lat >= 40 && ?long <= 13 && ?long >= 10) " +
				"} " 
	
	var url = createURL(query);	
	queryRequest(url);	
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
	    	var xmlHttpResponse = JSON.parse(this.responseText);
	    	createPoiWidget(xmlHttpResponse);
	     }
	 };
	 
	 xmlHttp.open("GET", url, true); // true for asynchronous 
	 xmlHttp.send();
}

function createPoiWidget(object){
	//costruisce gli oggetti graphic, mettendoci i dati restituiti dalla query
	var nodes = object.results.bindings;
	var pois = [];
	
	for(var i= 0 ; i< nodes.length ; i++){
		require([
			"esri/Graphic",
			"esri/geometry/Geometry",
			"esri/geometry/Point"
		], function(Graphic, Geometry, Point){
			
			var node = nodes[i];
			var attributes = {class: node.class.value, obj: node.obj.value, label: node.label.value};			
			var point = new Point({
				latitude: parseFloat(node.lat.value),
				longitude: parseFloat(node.long.value)
			});
			
			var markerSymbol = {
			    type: "simple-marker",
			    color: "green"
			}
			
			var poi = new Graphic({
				attributes: attributes,
				geometry: point,
				symbol: markerSymbol
			});

			pois.push(poi);			
		   }
		);
	}	
	
	createFeatureLayer(pois);
}

//temporanea
function getUniqueValueSymbol(name, color) {
	// The point symbol is visualized with an icon symbol. To clearly see the location of the point
	// we displace the icon vertically and add a callout line. The line connects the offseted symbol with the location
	// of the point feature.
	return {
		type: "point-3d", // autocasts as new PointSymbol3D()
		symbolLayers: [{
			type: "icon", // autocasts as new IconSymbol3DLayer()
			resource: {
				primitive: "circle"
			},
			size: 20,
			outline: {
				color: "white",
				size: 2
			}
		}],

		callout: {
			type: "line", // autocasts as new LineCallout3D()
			color: "white",
			size: 2,
			border: {
				color: color
			}
		}
    };
}

/*
var simpleRenderer = {
	type: "simple",  // autocasts as new SimpleRenderer()
	symbol: {
	    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
		size: 6,
		color: "black",
		outline: {  // autocasts as new SimpleLineSymbol()
		  width: 0.5,
		  color: "white"
	    }
	}
};*/

//temporanea
/*
var pointsRenderer = {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "Type",
    symbol: {
	    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
	    size: 6,
	    color: "white",
	    outline: {  // autocasts as new SimpleLineSymbol()
	      width: 0.5,
	      color: "white"
	    }
    },
    uniqueValueInfos: [{
      value: "HistoricThing",
      symbol: getUniqueValueSymbol("../styles/icons/Museum.png", "#D13470")
    }]
};*/

function createFeatureLayer(revenues){
	//crea il layer e ci appende i graphic dei revenues
	require([
		"esri/layers/FeatureLayer",
		"esri/layers/support/Field"	
	], function(FeatureLayer, Field){
		 
		 const fields = [
			 new Field({
				 name: "obj",
				 alias: "obj",
				 type: "oid"
			 }),
			 new Field({
				 name: "class",
				 alias: "class",
				 type: "string"
			 }),
			 new Field({
				 name: "label",
				 alias: "label",
				 type: "string"
			 })
		 ];
		 
		 var layer = new FeatureLayer({
			 id: "revenuesLayer",
			 source: revenues,
			 fields: fields,
			 objectIdField: "obj",
			 geometryType: "point",
			 spatialReference: {wkid: 3857},
			 //renderer: pointsRenderer
		 });
		 map.add(layer);
	   }
	);
}

