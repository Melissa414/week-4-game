
$(document).ready(function(){

var bobaFett= {
		name: 'Boba Fett', 
		health: 95, 
		attk: 6, 
		counterattk: 7}

var darthSidious= {
		name:'Darth Sidious', 
		health: 120, 
		attk: 6, 
		counterattk: 10}

var lukeSkywalker= {
		name:'Luke Skywaker', 
		health: 115, 
		attack: 6, 
		counterattk: 8}	

var darthVader= {
		name:'Darth Vader',
		health: 105, 
		attk: 6, 
		counterattk: 8}


//music playing
var audio = new Audio('assests/music/starwars.mp3');
audio.play();

// var yourCharacter = $('#yourCharacter');

	//picking boba battle
	$('#boba').click(function(){
		$('h3').append('#yourCharacter')
		$('h2').hide();
		$('#sidious, #luke, #vader').appendTo('#yourEnemies');


		// alert('it works!');

	});
	//picking emperor poopatine battle
	$('#sidious').click(function(){
		$('h3').append('#yourCharacter');  // thing to attach to.append(thing to attach) 
		$('h2').hide();
		$('#boba, #luke, #vader').appendTo('#yourEnemies');


		// alert('yes!');

	});
	//picking luke battle
	$('#luke').click(function(){
		$('h3').append('#yourCharacter');
		$('h2').hide();
		$('#boba, #sidious, #vader').appendTo('#yourEnemies');


		// alert('thank you!');

	});
	//picking vader battle
	$('#vader').click(function(){
		$('h3').append('#yourCharacter');
		$('h2').hide();
		$('#boba, #sidious, #luke').appendTo('#yourEnemies');


		// alert('alright!');

	});

		//attack button
	$('.attk-btn-default').click(function() {
		this.yourCharacter = this.players +6;
	});


		//restart game
	$('.restart-btn-default').click(function(){
  		document.location.reload(true);
	});


	
});

