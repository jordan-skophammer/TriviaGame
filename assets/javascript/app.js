$(document).ready(function(){
	var questionOne = "How many islands make up Japan?";
	var questionTwo = "";
	var questionThree = "";
	var questionFour = "";
	var questionFive = "";


	var i = 30;
	var countDown = setInterval(function() {
	    document.getElementById('timer').innerHTML = i;

	    if (i === 0) {
	        clearInterval(countDown);
	        document.getElementById('timer').innerHTML = "TIME'S UP!"
	    }
	    else {
	        i--;
	    }
	}, 1000)


	// countDown();

	// var answersOne = {
	// 	A : "4",
	// 	B : "33",
	// 	C : "108",
	// 	D : "6852"
	// };

	
	document.getElementById('questionBody').innerHTML = "How many islands make up Japan?";
});


