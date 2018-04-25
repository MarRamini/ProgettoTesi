/**
 * toggle primary menu visibility
 */
function toggleMenu(){
	var menu = document.getElementById("primaryMenu");
	var classList = menu.classList;
	if(classList.contains("opened")){
		menu.classList.remove("opened");
	}
	else{
		menu.classList.add("opened");
	}
	
}