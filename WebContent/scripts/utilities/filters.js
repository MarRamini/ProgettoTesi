/**
 * 
 */

function applyFilters(filters, maxVenues){
	
	if(!backupPois){
		alert("sorry, no point of interest has been searched")
	}
	else{
		var revenues = []
		var newRevenues = [];		
		
		backupPois.forEach(function(item){
			revenues.push(item);
		});
				
		if(filters && filters.length > 0){ //se esistono filtri selezionati
			var limit;
			maxVenues ? limit = Math.min(maxVenues, revenues.length) : limit = revenues.length; //se presente limite lo applico
			for(var i=0 ; i<limit ; i++){				
				var filteringFlag = true;
				filters.forEach(function(filter){
					if(revenues[i].attributes.type == filter.type && filteringFlag){ //scorro filtri e revenues visualizzati, se trovo match copio
						filteringFlag = false;									//in una nuova collezione 
						newRevenues.push(revenues[i]);								
					}
				});
			}
		}
		else if(!filters || filters.length == 0){ //se non esistono filtri
			var limit;
			maxVenues ? limit = Math.min(maxVenues, revenues.length) : limit = revenues.length; //se presente limite lo applico
			for(var i=0 ; i<limit ; i++){				
				newRevenues.push(revenues[i]);
			}
		}		
		else{ //se non esistono ne limiti ne filtri
			revenues.forEach(function(revenue){
				newRevenues.push(revenue); //semplicemente copio tutto
			});
		}
		
		createFeatureLayer(newRevenues);
	}	
}
/*var edits = {
deleteFeatures: deleteFeatures
};

var promise = revenuesLayer.applyEdits(edits);
editResultsHandler(promise);*/

/*
function editResultsHandler(promise) {
	console.log(promise.toString())
    promise
    .then(function(editsResult) {
        var extractObjectId = function(result) {
        	console.log("result", result)
        	return result.objectId;
        };

        // get the objectId of the newly added feature
        if (editsResult.addFeatureResults.length > 0) {
          var adds = editsResult.addFeatureResults.map(
            extractObjectId);
          newIncidentId = adds[0];

          selectFeature(newIncidentId);
        }
      })
      .catch(function(error) {
        console.error("[ applyEdits ] FAILURE: ", error.code, error.name,
          error.message);
        console.log("error = ", error);
      });
  }*/