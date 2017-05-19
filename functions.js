function slideLeft()
		{
			setCookie("active", "yes", 100);
			document.getElementById("overlay").style.opacity = "0"
			document.getElementById("overlay").style.transform = "translate(-2000px)";
			document.getElementById("meny").style.display = "block"					
	return false;
		}	