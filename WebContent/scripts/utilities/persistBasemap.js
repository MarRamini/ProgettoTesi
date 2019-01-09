function persistBasemap(basemapSelected){
	var xmlHttpRequest = new XMLHttpRequest();
	xmlHttpRequest.open("POST", "http://193.204.161.250:8080/ProgettoTesi/PersistBasemap");
	xmlHttpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttpRequest.send("txtBasemap=" + encodeURIComponent(basemapSelected));
		
	if(typeof map != "undefined"){
		map.basemap = basemapSelected;
	}	
}