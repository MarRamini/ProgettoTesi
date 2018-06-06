/**
 * this script creates a esri/Graphic widget to represent revenues
 * then creates a esri/layer/FeatureLayer to which append widgets
 * then appends the layer to the map
 */

var backupPois = []; //backup variable that stores all pois found in order to backtrace when filtering


/**
 * @param XMLHttpResponse
 * @returns void
 * create esri/Graphic widgets from Json formatted revenues in the XMLHttpResponse
 */
function createPoiWidget(XMLHttpResponse, startPoint, endPoint, routeFlag){
	//costruisce gli oggetti graphic, mettendoci i dati restituiti dalla query
	var nodes = XMLHttpResponse.results.bindings;
	var pois = [];
	if(backupPois.length > 0){
		backupPois.splice(0, backupPois.length);
	}
	
	require([
		"esri/Graphic",
		"esri/geometry/Geometry",
		"esri/geometry/Point"
	], function(Graphic, Geometry, Point){
		
		for(var i= 0 ; i<nodes.length ; i++){
					
			var node = nodes[i];
			console.log(node)
			var attributes = {
				class: node.class.value, 
				obj: node.obj.value, 
				label: node.label.value, 
				type: class2flag(node.type.value), 
				note: node.note != undefined? node.note.value : null, 
				feature: node.feature != undefined? node.feature.value : null, 
				cuisine: node.cuisine != undefined? node.cuisine.value : null,
				source: node.source != undefined? node.source.value : null
			};			
		
			var point = new Point({
				latitude: parseFloat(node.lat.value),
				longitude: parseFloat(node.long.value)
			});
			var poiClass;
			var color;
			switch(attributes.type){
				case "historicThing" :
					poiClass = "HistoricThing";
					color = "#3498db";
					break;
				case "museum" :
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
				case "food" :
					poiClass = "Restaurant";
					color = "#669999";
					break;
				case "shopping" :
					poiClass = "shopping";
					color = "#996633";
					break;
				case "arts" :
					poiClass = "Arts";
					color = "#e74c3c";
					break;
				case "entertainment" :
					poiClass = "Entertainment";
					color = "#009999";
					break;
				case "church" :
					poiClass = "Church";
					color = "#6600ff";
					break;
				case "outdoors" :
					poiClass = "Outdoors";
					color = "#008000";
					break;
				default : 
					poiClass = "GeneralThing";
					color = "white";
			}			
			
			var markerSymbol = getUniqueValueSymbol(poiClass, color);		//a seconda del tipo di poi costruisce il marker con l'icona adatta ed un colore per il pin	
			
			if(poiClass != "GeneralThing"){
				var poi = new Graphic({
					attributes: attributes,
					geometry: point,
					symbol: markerSymbol
				});
				
				pois.push(poi);
				backupPois.push(poi);
			}				
		  }
		}
	);
	createFeatureLayer(pois);
	if(routeFlag){
		calculateRoute(startPoint, endPoint, pois)
	}
}

/**
 * @param poiClass
 * @param color
 * @returns void
 * associates a symbol and given color to a given class of revenue
 */
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

/**
 * @param revenues
 * @returns void
 * create a esri/layers/FeatureLayer and appends given revenues
 */
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
			 }),
			 new Field({
				 name: "type",
				 alias: "type",
				 type: "string"
			 }),
			 new Field({
				 name: "feature",
				 alias: "feature",
				 type: "string"
			 }),
			 new Field({
				 name: "note",
				 alias: "note",
				 type: "string"
			 }),
			 new Field({
				 name: "cuisine",
				 alias: "cuisine",
				 type: "string"
			 }),
			 new Field({
				 name: "source",
				 alias: "source",
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
                },{
                    fieldName: "obj"
                },{
                    fieldName: "type"
                },{
                	fieldName: "feature"
                },{
                	fieldName: "note"
                },{
                	fieldName: "cuisine"
                },{
                	fieldName: "source"
                }]
			}],
			actions: []
		 });
		 
		 var thumbUpAction = {
			 title: "Mantain revenue",
			 id: "thumb_up",
			 className: "popupActionThumbUp"
		 };
		 popupTemplate.actions.push(thumbUpAction);
		 
		 var thumbDownAction = {
				 title: "Remove revenue",
				 id: "thumb_down",
				 className: "popupActionThumbDown"
		 };
		 popupTemplate.actions.push(thumbDownAction);
		
		 view.popup.on("trigger-action", function(event){
			  // If the thumb_down action is clicked, the following code executes
			  if(event.action.id === "thumb_down"){
				  filterSingleRevenue(event.target.content.graphic, revenues);
				  if(typeof routeCalculated != "undefined" && routeCalculated){
					calculateRoute(startPoint, stopPoint, revenues)
			      }
			  }
			  persistLikeAction(event);
		 });
		 
		 
		 var olderRevenuesLayer = map.findLayerById("revenuesLayer");
		 map.remove(olderRevenuesLayer);
		 
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

function persistLikeAction(actionEvent){
	var obj = actionEvent.target.features[0];
	var likeFlag;
	if(actionEvent.action.id == "thumb_up"){
		likeFlag = true; //user has liked the revenue
	}
	else if(actionEvent.action.id == "thumb_down"){
		likeFlag = false;
	}
	
	if(likeFlag != undefined){
		var revenueObj = {
				obj: obj.attributes.obj,
				label: obj.attributes.label,
				latitude: obj.geometry.latitude,
				longitude: obj.geometry.longitude,
				likeFlag: likeFlag
		};
		var jsonObj = JSON.stringify(revenueObj);
		var xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.open("POST", "http://localhost:8080/ProgettoTesi/PersistRevenue");
		xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlHttpRequest.send("venue=" + encodeURIComponent(jsonObj));
		
	}
}

