<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<link rel="stylesheet" href="styles/css/pages/basemapPersonalization.css">
<div class="basemapPersonalization" id="basemapChoice" style="display: none">
	Basemap
	<script>
		function previewImage(option){
			document.getElementById("basemapImagePreview").style.backgroundImage = "url('styles/images/" + option.value + ".jpg')";
			basemapSelected = option.value;
		}
	</script>
	<select name="txtBasemap" class="basemapSelection" onchange="previewImage(this)">
		<option value="streets" selected="true">streets</option>
		<option value="satellite">satellite</option>
		<option value="hybrid">hybrid</option>
		<option value="topo">topo</option>
		<option value="osm">osm</option>
		<option value="streets-vector">streets-vector</option>
		<option value="topo-vector">topo-vector</option>
		<option value="streets-relief-vector">streets-relief-vector</option>
		<option value="streets-navigation-vector">streets-navigation-vector</option>
	</select>						
	<div class="basemapPreview" id="basemapImagePreview"></div>
	<script>
		var options = document.getElementsByTagName("option");
		for(var i=0 ; i<options.length ; i++){
			if(options[i].getAttribute("selected") == "true"){
				previewImage(options[i]);
			}
		}
	</script>
	<div class="submitButtons">
		<input type="submit" value="Save Basemap" name="btnSaveMap" label="Save Basemap" id="saveButton" data-dojo-type="dijit/form/Button" onclick="persistBasemap()"/>
		<script type="text/javascript" src="scripts/utilities/persistBasemap.js"></script>
	</div>
</div>