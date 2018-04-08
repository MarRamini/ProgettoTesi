/**
 * This script calculate a route passing by points of interest found in a square area of 2km from start point to destination point
 */

/**
 * @param routePoints: a collection of points to be visited by the route
 * @param routeTask: esri/tasks/RouteTask route solver
 * @returns void
 */
function calculateRoute(routePoints, routeTask){
	var startPoint = routePoints[0];
	var endPoint = routePoints[1]; //la ricerca implica sempre un punto di partenza e di arrivo
	var revenues = queryRouteRevenues(startPoint, endPoint, filters); //creo una collezione di punti che devono essere visitati dalla rotta. 
	//to do: qui dovrà entrare il passo di suggerimento, una volta capito come deve procedere
	
	var routeStops = new RouteParameters({
	        stops: new FeatureSet(),
	        outSpatialReference: { 
	          wkid: 3857
	        }
	      });
	routeStops.push(startPoint);
	revenues.forEach(function(){
		//appendo un punto con le coordinate del revenue dentro routeStops (vedere come è fatto)
	});
	routeStops.push(endPoint);
	routeTask.solve(routeStops).then(function(data){
    	var routeResult = data.routeResults[0].route;
        routeResult.symbol = routeSymbol;
        map.layers.items[0].add(routeResult);
	});
}
	
/**
 * @param routeStartPoint
 * @param routeEndPoint
 * @param filters: filters to be applied to the query
 * @returns
 */
function queryRouteRevenues(routeStartPoint, routeEndPoint, filters){
	var startLatitude; 
	var endLatitude;
	var startLongitude;
	var endLongitude;
	//to do: rilocare su queryProcessing.js
	
	var filtered = applyFilters(filters);
	
	var query; 
	/*copiare query aggiornata, modificando 
	FILTER(?lat <= max(startLatitude, endLatitude) && lat >= min(startLatitude, endLatitude) && 
		   ?long <= max(startLongitude, endLongitude) && ?long >= min(startLongitude, endLongitude))
	*/
	
	/*se tutto fila liscio dovrei avere (ripetendo il processo di visualizzazione dei poi) i punti di interesse in un area rettangolare tra i punti di partenza e arrivo
	  ho bisogno di ritornarmi questa lista a calculateRoute
	 */
	var revenues; //query url che ritorna i revenues
	return revenues; //deve ritornare la lista dei revenues
}