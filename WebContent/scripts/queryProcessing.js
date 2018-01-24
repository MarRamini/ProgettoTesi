function searchRevenues(position, filters){
	//compone la query in base ai filtri e alla posizione
	//valuta il json risultate con eval() e torna l'oggetto.
}

function preProcess(query){
	//preprocessa la query, torna l'url a linkedgeodata
}

function httpRequest(url){
	//get query preprocessata
	 console.log("ok")
	 var xmlHttp = new XMLHttpRequest();
	 xmlHttp.onreadystatechange = function() { 
	     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	         callback(xmlHttp.responseText);
	 }
	 xmlHttp.open("GET", url, true); // true for asynchronous 
	 xmlHttp.send(null);
	 return xmlHttp.responseText;
}

function postProcess(response){
	//postprocessa i risultati, ritornando un json pulito
	console.log(response);
}