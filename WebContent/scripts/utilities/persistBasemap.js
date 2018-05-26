function persistBasemap(){
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.open("GET", "http://localhost:8080/ProgettoTesi/PersistBasemap");
	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttpRequest.send("txtBasemap=" + encodeURIComponent(basemapSelected));
	
	map.basemap = basemapSelected;
}