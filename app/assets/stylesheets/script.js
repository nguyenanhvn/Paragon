$(document).ready(function() {
	$(window).scroll(function(){
		effectHeader();
	});

  	$(".submenu").click(function(){
    	$(".menu").slideToggle();
  	}); 
});

function effectHeader() {
	$('#menu').removeClass('active');
		if($(this).scrollTop() > 20)
			$('#menu').addClass('active');
}
	