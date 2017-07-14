$(function(){
	
	
	$('.place').each(function(){
		<!-- Colocando o valor Do Place Dentro do Title para realizar o PlaceHolder De Maneira Interativa -->
		
		
    var place = $(this).attr('title');	
var input = $(this);


input
.val(place)	
.css('color','#ccc')
<!-- Colocando o input escondido quando for selecionado -->

.focusin(function(){
	input.css('color','#000');
	if(input.val() == place){
	input.val('');
	}
	
}).focusout(function(){
	if(input.val() == ''){
		input.css('color','#ccc');
		input.val(place);
		
	}
});
		
	});
	var ex = $('.ex1');
		
		<!-- Inicializando Eventos de Formulario -->
		
		 /* $('.ev1').focus(function(){
			
			ex.text($(this).attr('title'));			
			
		}).keyup(function(){
			if($(this).val() == 'pontocom'){
			$('.ev2').focus();}			
		});
		
		$('.ev1').blur(function(){
			ex.text("Você saiu do campo " +$(this).attr('name'));
			
		}); */
		
		$('.ev1').change(function(){
			
			ex.text("Campo Alterado " +$(this).val());
			
		});
	
	$('.selecionar').click(function(){
		$('.ev3').select();
		$('form').submit(function(){
			return false;
			
			
		});
	});
	
		
		
	
});