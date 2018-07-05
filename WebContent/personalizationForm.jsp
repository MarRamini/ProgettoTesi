<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<div class="personalizationContainer" id="personalizationForm" style="display: none;">
	 <div class="menuVoice" id="accountPersonalization">
	 	<span>
	 		<a class="link" href="accountPersonalization.jsp">Account</a>
	 	</span>
	 </div>
	 <div class="menuVoice" id="uiPersonalization">
	 	<div onclick="showBasemapPersonalization(this)">Interface
	 		<div class="accordionArrow"></div>
	 	</div>
	 	<jsp:include page="basemapPersonalization.jsp"/>
	 	<script>
	 		function showBasemapPersonalization(elem){
	 			var basemapChoiceDiv = document.getElementById("basemapChoice");
	 			basemapChoiceDiv.style.display == "none" ? basemapChoiceDiv.style.display = "block" : basemapChoiceDiv.style.display = "none";
	 			elem.classList.contains("focused") ? elem.classList.remove("focused") : elem.classList.add("focused");
	 		}
	 	</script>
	 </div>
	 <%-- 
	 <div class="menuVoice" id="revenuesPersonalization">
	 	<span>Revenues</span>
	 </div>
	 --%>
 </div>
    <%-- 
		voci di personalizzazione:
			-account
			-interfaccia
			-punti di interesse
 --%>