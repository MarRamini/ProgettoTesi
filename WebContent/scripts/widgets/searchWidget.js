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
  }
);  