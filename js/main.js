$(document).ready(function(){

$( ".datepicker" ).datepicker();
	
$('.clear-btn-from').on('click', function(e){
	e.preventDefault();
	$('#date-from').val('');
})

$('.clear-btn-to').on('click', function(e){
	e.preventDefault();
	$('#date-to').val('');
})
							
});