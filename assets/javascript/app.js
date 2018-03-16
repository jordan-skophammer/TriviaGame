$(document).ready(function(){
	// var questionOne = "How many islands make up Japan?";
	// var questionTwo = "";
	// var questionThree = "";
	// var questionFour = "";
	// var questionFive = "";

	function setTimer(){
		var i = 30;
		var countDown = setInterval(function() {
		    $('#timer').text(i);

		    if (i === 0) {
		        clearInterval(countDown);
		        $('#timer').text("TIME'S UP!");
		    }
		    else {
		        i--;
		    }
		}, 1000)
	};

	setTimer();

	function questionOne() {

		var answersOne = {
			A : "4",
			B : "33",
			C : "108",
			D : "6852"
		};

		var questionOneAnswer = answersOne.D;

		$('#questionBody').text('How many islands make up Japan?');
		$('#A').text(answersOne.A);
		$('#B').text(answersOne.B);
		$('#C').text(answersOne.C);
		$('#D').text(answersOne.D);
		$('#questionImage').attr('src', './assets/images/japan_map_base.png')

	}

	questionOne();
	

	
});


