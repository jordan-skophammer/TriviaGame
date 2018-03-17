$(document).ready(function(){

	var timer = 15;
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
			q3: "How many pints of blood does the average humand body contain?",
			answers: ["5", "9", "12", "15"],
			key: "9"
		}
	];

	var imageArray = new Array();

	imageArray[0] = new Image();
	imageArray[0].src = '../assets/images/japan_map_base.png';

	imageArray[1] = new Image();
	imageArray[1].src = '../assets/images/monoploy.jpg';

	imageArray[2] = new Image();
	imageArray[2].src = '../assets/images/river.jpg';

	imageArray[3] = new Image();
	imageArray[3].src = '../assets/images/blood.jp'

	function setTimer(){

		var countDown = setInterval(function() {
		    $('#timer').text(timer);

		    if (timer === 0) {
		        clearInterval(countDown);
		        $('#timer').text(timer);
		        alert('TIME IS UP!!!')
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
		} else {
			alert('INCORRECT!!!');
			missedPoints++;
		}
	}

	function displayOne() {

		$('#questionBody').text(questionOne.q1);
		$('#A').text(questionOne.answers[0]);
		$('#B').text(questionOne.answers[1]);
		$('#C').text(questionOne.answers[2]);
		$('#D').text(questionOne.answers[3]);
		$('#questionImage').attr('src', './assets/images/japan_map_base.png');

		setTimer(); 
		answerListener();
	}

	displayOne();
	
	
	
});


