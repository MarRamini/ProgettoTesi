require([
  "esri/widgets/Track",					 
  "esri/views/SceneView",
  "esri/Map",
  "dojo/domReady!",
],
  function(Track, SceneView, Map){				      
	  var track = new Track({
	    view: this.view,
	    goToLocationEnabled: true
	  });
 
	  view.ui.add(track, "top-left");
  
	  // The sample will start tracking your location
	  // once the view becomes ready
	  view.then(function() {
		track.on("track", function(){
			var location = track.graphic.geometry;
	
	        view.goTo({
	          center: location,
	          tilt: 60,
	          scale: 2500,
	          zoom: 18
	        });
	        
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
	       
	        var uri = encodeURIComponent(query);
	        urlPrefix = "http://linkedgeodata.org/sparql?default-graph-uri=http%3A%2F%2Flinkedgeodata.org&";
	        urlSuffix = "&format=json%2Fhtml&timeout=0&debug=on";
	        var urlQuery = "query=" + uri;
	        var url = urlPrefix + urlQuery + urlSuffix;
	        var queryResponse = httpRequest(url);
	        var jsonResult = postProcess(queryResponse);
	    });
    	
        track.start();
      });
   }
);