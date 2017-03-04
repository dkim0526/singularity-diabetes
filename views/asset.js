


console.log("12345");

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
	});
});