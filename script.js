window.addEventListener("load", function(){
	var tabs = document.getElementsByClassName("tabtop");
	var content = document.getElementsByClassName("tab");

	for(i=0; i<tabs.length; i++){
		
		tabs[i].addEventListener("click", function(){
			var id = this.getAttribute("id");
			
			for(i=0; i<content.length;i++){
				content[i].style.display = "none";
			}
			
			document.getElementById("tab_"+id).style.display = "block";
			
			for(i=0; i<tabs.length;i++){
				tabs[i].style.background = "#C9C9C9";
			}
			
			this.style.background = "white";
		});
	}

});