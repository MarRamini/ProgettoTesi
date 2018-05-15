require([
  "esri/widgets/Search",					 
  "esri/views/SceneView",
  "esri/Map",
  "dojo/domReady!",
], 
  function(Search, SceneView, Map){			
      var searchWidget = new Search({
          view: this.view,
          container: "searchBox"
      });
      
      view.then(function(){
    	  searchWidget.on("select-result", function(){						    		  
    		  var location = searchWidget.resultGraphic.geometry;
    		  
    		  var objectSearched = {
    			  address: searchWidget.resultGraphic.attributes.Match_addr,
    			  latitude: location.latitude,
    			  longitude: location.longitude
    		  };

    		  persistSearch(objectSearched);
    		  
    		  view.goTo({
    	          center: location,
    	          tilt: 60,
    	          scale: 2500,
    	          zoom: 18
    	      });
    		  
    		  var position = {
				  latitude: location.latitude, 
				  longitude: location.longitude
    		  };
    		  
    		  lastPositionSearched = position;
  	          var filters = [];
  	      
  	          searchRevenues(position, filters);
    	  })
      });
  }
);  

function persistSearch(searchObj){
	var jsonObj = JSON.stringify(searchObj);
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.open("POST", "http://localhost:8080/ProgettoTesi/PersistSearch");
	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttpRequest.send("search=" + encodeURIComponent(jsonObj));
}