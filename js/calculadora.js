var display=$('#txtDisplay'), resultado=0, operador='';
$(document).ready(function(){
	$('.btn-numero').click(function(){
		if(operador=='+' || operador=='-' || operador=='*' || operador=='/' || operador=='='){
			display.val('');
			//operador='';	
		}
		display.val(display.val()+$(this).text());
	});
	$('#btn-suma').click(function(){
		operador='+';
		resultado+=parseInt(display.val());
		display.val(resultado);
	});
	$('#btn-resta').click(function(){
		operador='-';
		if(resultado==0){
			resultado=parseInt(display.val());
		}else{
			resultado-=parseInt(display.val());
		}
		display.val(resultado);
	});
	$('#btn-multiplicar').click(function(){
		operador='*';
		resultado=1;
		resultado*=parseInt(display.val());
		display.val(resultado);
	});
	$('#btn-division').click(function(){
		operador='/';
		resultado/=parseInt(display.val());
		display.val(resultado);
	});
	$('#btn-igual').click(function(){
		if(operador=='+'){
			resultado+=parseInt(display.val());	
		}else if(operador=='-'){
			resultado-=parseInt(display.val());
		}else if(operador=='*'){
			resultado*=parseInt(display.val());
		}else if(operador=='/'){
			resultado/=parseInt(display.val());
		}		
		display.val(resultado);
		resultado=0;
		operador='=';
	});
});