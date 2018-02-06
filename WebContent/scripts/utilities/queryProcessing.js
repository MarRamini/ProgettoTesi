function addMetresToLatitude(latitude, metres){
	var radiusOfEarth = 6378 * 1000 //in metri
	var delta = (metres/radiusOfEarth) * (180/Math.PI);
	var newLatitude = latitude + delta;
	return newLatitude;
}

function addMetresToLongitude(longitude, metres){
	var radiusOfEarth = 6378 * 1000 //in metri
	var delta = (metres/radiusOfEarth) * (180/Math.PI) / Math.cos(longitude * Math.PI /180);
	var newLongitude = longitude + delta;
	return newLongitude;
}

function searchRevenues(position, filters){
	//compone la query in base ai filtri e alla posizione
	var maximumLatitude = addMetresToLatitude(position.latitude, 1000);
	var minimumLatitude = addMetresToLatitude(position.latitude, -1000);
	var maximumLongitude = addMetresToLongitude(position.longitude, 1000);
	var minimumLongitude = addMetresToLongitude(position.longitude, -1000);
	
	//filter è un oggetto di tipo {museum: true/false, historic: true/false, church: true/false...}
	
	
	var query = "Prefix lgdr:<http://linkedgeodata.org/triplify/> " + //query per tutti gli oggetti di classe HistoricThing nei dintorni di Roma
				"Prefix lgdo:<http://linkedgeodata.org/ontology/> " +
				"PREFIX owl:<http://www.w3.org/2002/07/owl#> " +
				"Select distinct ?obj ?class ?label ?lat ?long " +
				"where { " +
				"values(?class){(<http://linkedgeodata.org/ontology/HistoricThing>) (<http://linkedgeodata.org/ontology/Museum> )} " +
				"?obj a ?class. " +
				"?obj geo:lat ?lat. " +
				"?obj geo:long ?long. " +
				"?obj rdfs:label ?label " +
				"FILTER(?lat <= " + maximumLatitude + " && ?lat >= " + minimumLatitude + " && ?long <= " + maximumLongitude + " && ?long >= " + minimumLongitude + ") " +
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
	
	require([
		"esri/Graphic",
		"esri/geometry/Geometry",
		"esri/geometry/Point"
	], function(Graphic, Geometry, Point){
		
		for(var i= 0 ; i< nodes.length ; i++){
					
			var node = nodes[i];
			var attributes = {class: node.class.value, obj: node.obj.value, label: node.label.value};			
			var point = new Point({
				latitude: parseFloat(node.lat.value),
				longitude: parseFloat(node.long.value)
			});
			var poiClass;
			var color;
			switch(attributes.class){
				case "http://linkedgeodata.org/ontology/HistoricThing" :
					poiClass = "HistoricThing";
					color = "#3498db";
					break;
				case "http://linkedgeodata.org/ontology/Museum" :
					poiClass = "Museum";
					color = "#16a085";
					break;
				case "sport" :
					poiClass = "Sport";
					color = "#d35400";
					break;
				case "nightlife" :
					poiClass = "NightLife";
					color = "#9b59b6";
					break;
				case "restaurant" :
					poiClass = "Restaurant";
					color = "#669999";
					break;
				case "shopping" :
					poiClass = "shopping";
					color = "#996633";
					break;
				case "arts" :
					poiClass = "arts";
					color = "#e74c3c";
					break;
				case "entertainement" :
					poiClass = "Entertainement";
					color = "#009999";
					break;
				case "church" :
					poiClass = "Church";
					color = "#6600ff";
					break;
				case "Outdoors" :
					poiClass = "Outdoors";
					color = "#008000";
					break;
				default : 
					poiClass = "GeneralThing";
					color = "white"  //aggiungere casi per ogni poi trovato
			}			
			
			var markerSymbol = getUniqueValueSymbol(poiClass, color);		//a seconda del tipo di poi costruisce il marker con l'icona adatta ed un colore per il pin	
			
			var poi = new Graphic({
				attributes: attributes,
				geometry: point,
				symbol: markerSymbol
			});
			
			pois.push(poi);			
		   }
		}
	);
		
	
	createFeatureLayer(pois);
}

//temporanea
function getUniqueValueSymbol(poiClass, color) {
	// The point symbol is visualized with an icon symbol. To clearly see the location of the point
	// we displace the icon vertically and add a callout line. The line connects the offseted symbol with the location
	// of the point feature.
	return {
		type: "point-3d", // autocasts as new PointSymbol3D()
		symbolLayers: [{
			type: "icon", // autocasts as new IconSymbol3DLayer()
			resource: {
				href: "styles/icons/poi/" + poiClass + ".png"
			},
			size: 20,
			outline: {
				color: color,
				size: 2
			}
		}],
		
		verticalOffset: {
			screenLength: 40,
	        maxWorldLength: 200,
	        minWorldLength: 35
		},

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
		"esri/PopupTemplate",
		"esri/layers/FeatureLayer",
		"esri/layers/support/Field"	
	], function(PopupTemplate, FeatureLayer, Field){
		 
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
		 
		 var popupTemplate = new PopupTemplate({ // autocasts as new PopupTemplate()
			title: "{label}",
			//definire le informazioni da visualizzare nel content.
			content: [{
				type: "fields",
				fieldInfos: [{
                    fieldName: "class"
                }, {
                    fieldName: "obj"
                }]
			}]
		});
		 
		 var layer = new FeatureLayer({
			 id: "revenuesLayer",
			 source: revenues,
			 fields: fields,
			 objectIdField: "obj",
			 geometryType: "point",
			 spatialReference: {wkid: 3857},
			 //renderer: pointsRenderer
			 elevationInfo: {
				 mode: "relative-to-scene"
			 },
			 popupTemplate: popupTemplate
		 });
		
		 map.add(layer);		
	   }
	);
}

