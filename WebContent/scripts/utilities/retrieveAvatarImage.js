function getAvatar(){
	return "url('ImageHandler')"; //chiamo la servlet che trasforma l'immagine InputStream dell'utente in immagine
}

function modifyAvatar(){
	return "url('ImageChangeHandler')";
}

function previewImage(input, imageContainer){
	if (input.files) {
        var filesAmount = input.files.length;

        for (i = 0; i < filesAmount; i++) {
            var reader = new FileReader();

            reader.onload = function(event) {
            	var url = event.target.result;
            	imageContainer.style.backgroundImage= "url('" + url + "')";
            }

            reader.readAsDataURL(input.files[i]);
        }
    }
}