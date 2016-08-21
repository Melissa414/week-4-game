
$(document).ready(function(){

var bobaFett= [name='Boba Fet', attack='6', counter='8'];
var darthSidious= [name='Darth Sidious', attack='6', counter='10'];
var lukeSkywalker= [name='Luke Skywaker', attack='6', counter='7'];		
var darthVader= [name='Darth Vader', attack='6', counter='10'];
var playerHealth=115;
var computerHealth=110;

	// for (var i = players.length * 6; i >= 0; i--) {
	// 	players[i]
	// }

	//picking boba fight
	$('.bobafett').click(function(){
		$("h2").append();
		$(".darthsidious").hide();
		$(".lukeskywalker").hide();
		$(".darthvader").hide();
		


		

		// alert('it works!');

	});
	//picking emperor poopatine fight
	$('.darthsidious').click(function(){
		$("h2").append();
		$(".bobafett").hide();
		$(".lukeskywalker").hide();
		$(".darthvader").hide();



		// alert('yes!');

	});
	//picking uke fight
	$('.lukeskywalker').click(function(){
		$("h2").append();
		$(".bobafett").hide();
		$(".darthsidious").hide();
		$(".darthvader").hide();



		// alert('thank you!');

	});
	//picking vader fight
	$('.darthvader').click(function(){
		$("h2").append();
		$(".bobafett").hide();
		$(".darthsidious").hide();
		$(".lukeskywalker").hide();



		// alert('alright!');

	});

	
});

