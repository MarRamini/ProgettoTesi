<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<link rel="stylesheet" type="text/css" href="styles/css/widgets/preferredSearchesWidget.css">
<script type="text/javascript" src="scripts/widgets/preferredSearchesWidget.js"></script>
<div class="quickSearch" id="quickSearchBar">
	<div class="menuToggle" onclick="toggleMenu()">
		<script type="text/javascript" src="scripts/utilities/toggleMenu.js"></script>
		<div class="menuIcon"></div>			
	</div>
	<div class="searchBox" id="searchBox">
		<script type="text/javascript" src="scripts/widgets/quickSearchWidget.js"></script>
	</div>
	<div class="preferredSearches" onclick="togglePreferred(this)">
		<script type="text/javascript" src="scripts/utilities/togglePreferred.js"></script>
		<div class="preferredIcon"></div>			
	</div>
</div>
