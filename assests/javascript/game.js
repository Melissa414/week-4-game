
$(document).ready(function(){

var bobaFett= {
		name: 'Boba Fett', 
		health: 95, 
		attk: 6, 
		counterattk: 7
	}

var darthSidious= {
		name:'Darth Sidious', 
		health: 120, 
		attk: 6, 
		counterattk: 10
	}

var lukeSkywalker= {
		name:'Luke Skywaker', 
		health: 115, 
		attack: 6, 
		counterattk: 8
	}	

var darthVader= {
		name:'Darth Vader',
		health: 105, 
		attk: 6, 
		counterattk: 8
	}

var powerUp={
		hp:6
	}

var yourEnemies= ['Boba Fett', 'Darth Sidious', 'Luke Skywalker', 'Darth Vader'];

var yourCharacter= ['Boba Fett', 'Darth Sidious', 'Luke Skywalker', 'Darth Vader'];

//music playing
var audio = new Audio('assests/music/starwars.mp3');
audio.play();

// var yourCharacter = $('#yourCharacter');

	//picking boba battle
	$('#boba').click(function(){
		$('#yourCharacter').append()
		$('h2').hide();
		$('#sidious, #luke, #vader').appendTo('#yourEnemies');


		// alert('it works!');

	});
	//picking emperor poopatine battle
	$('#sidious').click(function(){
		$('#yourCharacter').append(); 
		$('h2').hide();
		$('#boba, #luke, #vader').appendTo('#yourEnemies');


		// alert('yes!');

	});
	//picking luke battle
	$('#luke').click(function(){
		$('#yourCharacter').append();
		$('h2').hide();
		$('#boba, #sidious, #vader').appendTo('#yourEnemies');


		// alert('thank you!');

	});
	//picking vader battle
	$('#vader').click(function(){
		$('#yourCharacter').append();
		$('h2').hide();
		$('#boba, #sidious, #luke').appendTo('#yourEnemies');


		// alert('alright!');

	});

		//attack button
	$('.attk-btn-default').click(function() {
		this.yourCharacter = yourCharacter + 6;
		this.yourEnemies = yourEnemies - 4;


	});


		//restart game
	$('.restart-btn-default').click(function(){
  		document.location.reload(true);
	});


	
});

