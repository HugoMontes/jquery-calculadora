var display=$('#txtDisplay'), resultado;
$(document).ready(function(){
	$('#txtDisplay').on('input',function(){
		console.log("cambio...");
	});
	$('.btn-numero').click(function(){
		display.val(display.val()+$(this).text());
	});
	$('#btn-suma').click(function(){
		resultado=display;
	});
});