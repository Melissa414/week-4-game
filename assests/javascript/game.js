
$(document).ready(function(){

var bobaFett= [name='Boba Fet', attack='6', counter='8'];
var darthSidious= [name='Darth Sidious', attack='6', counter='10'];
var lukeSkywalker= [name='Luke Skywaker', attack='6', counter='7'];		
var darthVader= [name='Darth Vader', attack='6', counter='10'];
var playerHealth=115;
var computerHealth=110;


//music playing
var audio = new Audio('assests/music/starwars.mp3');
audio.play();



	//picking boba fight
	$('.bobafett').click(function(){
		$("h3").append();
		$("h2").hide();
		$(".darthsidious").appendTo("p");
		$(".lukeskywalker").appendTo("p");
		$(".darthvader").appendTo("p");
		


		// alert('it works!');

	});
	//picking emperor poopatine fight
	$('.darthsidious').click(function(){
		$("h3").append();
		$("h2").hide();
		$(".bobafett").appendTo("p");
		$(".lukeskywalker").appendTo("p");
		$(".darthvader").appendTo("p");



		// alert('yes!');

	});
	//picking uke fight
	$('.lukeskywalker').click(function(){
		$("h3").append();
		$("h2").hide();
		$(".bobafett").appendTo("p");
		$(".darthsidious").appendTo("p");
		$(".darthvader").appendTo("p");



		// alert('thank you!');

	});
	//picking vader fight
	$('.darthvader').click(function(){
		$("h3").append();
		$("h2").hide();
		$(".bobafett").appendTo("p");
		$(".darthsidious").appendTo("p");
		$(".lukeskywalker").appendTo("p");



		// alert('alright!');

	});

	$('.btn-group').click(function() {
			$('.players').restart();
		});

	
});

