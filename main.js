// Navigation function
function navigate(location, isExternal = false) {
	if(isExternal) {
		window.open(location, '_blank');
	} else {
		window.location.href = './index.html#' + location;
	}
}

// Your other JavaScript code...
