$(document).ready(function(){
	$(".circle").flip({
    	trigger: 'manual'
	});
	$("#startBtn").click(function(){
		console.log("whatip");		
		$(".circle").flip(true);
	});

	$("#nextBtn").click(function(){
	    if( $("#nameField").val().length > 0){
	    	Cookies.set('userName', $("#nameField").val());
	    	$(".front").empty();
	    	$(".circle").flip(false);
	    }
	    $(".front").append("<p id='textForm' style='position: absolute; margin-top:130px;'>Connect Your Fitbit</p><button id='nextBtn' style='margin-top:280px; margin-left: 150px; padding: 13px; font-size:large; font-weight:bold;'>Login</button>");
	});

	

});