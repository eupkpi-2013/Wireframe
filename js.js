
$(document).ready(function(){
	$(".active").parent().show();
	$(".accordion h3").click(function(){
		$(this).parent().find($("ul")).slideToggle("slow");
	});
	// $(".addrowbutton").click(function(){
		// $(".kpitable").add(
		// "<tr><td>hello</td><td></td></tr>"
		// );
		// $(this).add("<p>addd</p>");
	// });
	$(".addrowbutton").click(function(){
		$(".kpitable").append('<tr><td><input></input></td><td><select><option>Text</option>option>Integer</option><option>Boolean</option><option>Time Range</option></select></td></tr>');
	});
	
	$("#signup-button").click(function(){
		$("#signup").slideToggle();
	});
	
	//for popup divs
	$(function() {

	var popup = false;

	$("#verifybutton").click(function(){
		if(popup == false){
			$("#overlayEffect").fadeIn();
			$(".popup").fadeIn();
			$("#close").fadeIn();
			center();
			popup = true;
		}
		});

		$("#close").click(function(){
			hidePopup();
		});
		
		$(".close").click(function(){
			hidePopup();
		});

	function center(){
		var windowWidth = document.documentElement.clientWidth;
		var windowHeight = document.documentElement.clientHeight;
		var popupHeight = $("#popupContainer").height();
		var popupWidth = $("#popupContainer").width();
		$("#popupContainer").css({
			"position": "absolute",
			"top": windowHeight/2-popupHeight/2,
			"left": windowWidth/2-popupWidth/2
		});

		}
	function hidePopup(){
		if(popup==true){
			$("#overlayEffect").fadeOut("slow");
			$("#popupContainer").fadeOut("slow");
			$("#close").fadeOut("slow");
			popup = false;
		}
	}

	} ,jQuery);
});