function persistBasemap(basemapSelected){
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.open("POST", "http://localhost:8080/ProgettoTesi/PersistBasemap");
	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttpRequest.send("txtBasemap=" + encodeURIComponent(basemapSelected));
		
	map.basemap = basemapSelected;
}