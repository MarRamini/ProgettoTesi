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
    		  var startPoint = searchWidget.resultGraphic;
    		  console.log(startPoint)
    	  })
      });
  }
);  