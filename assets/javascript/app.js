$(document).ready(function(){

	var timer = 15;
	var i = 0;
	var correctPoints = 0;
	var missedPoints = 0;
	var qBank = [
		questionOne = {
			q1: 'How many islands make up Japan?',
			answers: ["4", "33", "108", "6852"],
			key: "6852"
		},

		questionTwo = {
			q2 : 'How many squares are on a Monopoly board?',
			answers: ["10", "40", "48", "32"],
			key: "40"
		},

		questionThree = {
			q3: "What is the world's longest river?",
			answers: ["Nile", "Mississippi", "Amazon", "Yangtze"],
			key: "Amazon"
		},

		questionFour = {
			q4: "How many pints of blood does the average humand body contain?",
			answers: ["5", "9", "12", "15"],
			key: "9"
		}
	];

	function setTimer(){

		var countDown = setInterval(function() {
		    $('#timer').text(timer);

		    if (timer === 0) {
		        // clearInterval(countDown);
		        $('#timer').text(timer);
		        alert('TIME IS UP!!!');
		        i++;
		        displayArray[i]();
		        timer = 15;
		    }
		    else {
		        timer--;
		    }
		}, 1000);
	};

	function answerListener() {
		$('#answer1').click(function() {
			checkAnswer(0);
		})

		$('#answer2').click(function() {
			checkAnswer(1);
		})

		$('#answer3').click(function() {
			checkAnswer(2);
		})

		$('#answer4').click(function() {
			checkAnswer(3);
		})
	};

	function checkAnswer(n) {
		if (questionOne.answers[n] === questionOne.key) {
			alert('CORRECT!!!');
			correctPoints++;
			i++
			displayArray[i]()
			timer = 15;

		} else {
			alert('INCORRECT!!!');
			missedPoints++;
			i++
			displayArray[i]()
			timer = 15;
		}
	}

	var displayArray = [

		function displayOne() {

			$('#questionBody').text(qBank[0].q1);
			$('#A').text(qBank[0].answers[0]);
			$('#B').text(qBank[0].answers[1]);
			$('#C').text(qBank[0].answers[2]);
			$('#D').text(qBank[0].answers[3]);
			$('#questionImage').attr('src', './assets/images/japan.png');

			answerListener();
		},

		function displayTwo() {

			$('#questionBody').text(qBank[1].q2);
			$('#A').text(qBank[1].answers[0]);
			$('#B').text(qBank[1].answers[1]);
			$('#C').text(qBank[1].answers[2]);
			$('#D').text(qBank[1].answers[3]);
			$('#questionImage').attr('src', './assets/images/monoploy.jpg');

			answerListener();
		},

		function displayThree() {
			$('#questionBody').text(qBank[2].q3);
			$('#A').text(qBank[2].answers[0]);
			$('#B').text(qBank[2].answers[1]);
			$('#C').text(qBank[2].answers[2]);
			$('#D').text(qBank[2].answers[3]);
			$('#questionImage').attr('src', './assets/images/river.jpg');

			answerListener();
		},

		function displayFour() {
			$('#questionBody').text(qBank[3].q4);
			$('#A').text(qBank[3].answers[0]);
			$('#B').text(qBank[3].answers[1]);
			$('#C').text(qBank[3].answers[2]);
			$('#D').text(qBank[3].answers[3]);
			$('#questionImage').attr('src', './assets/images/blood.jpg');

			answerListener();
		}
	];
	
	displayArray[i]();
	setTimer();
});


