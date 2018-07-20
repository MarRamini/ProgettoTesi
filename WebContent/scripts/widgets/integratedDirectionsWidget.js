
function buildDirectionsWidget(directions){
	var container = document.createElement("div");
	container.className = "directionsContainer";
	
	var routingForm = document.getElementById("routingForm");
	routingForm.appendChild(container);	
	
	console.log("directions", directions)
	
	var features = directions.features;
	
	console.log("features", features)
	for(var i=0 ; i< features.length ; i++){
		console.log("test")
		var row = buildDirectionRow(features[i]);
		container.appendChild(row);
	}
}

function buildDirectionRow(feature){
	console.log("buildRow")
	var row = document.createElement("div");
	row.className = "directionRow";
	
	var directionText = document.createElement("span");
	directionText.className = "directionTextSpan";
	directionText.textContent = feature.attributes.text;
	row.appendChild(directionText);
	
	return row;
}