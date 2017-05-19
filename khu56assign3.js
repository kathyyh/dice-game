//Global variables
var playerOneName;
var playerTwoName;
var playerTwoTurn;
var player1FinalValue="";
var player2FinalValue="";
var highestGoal;
var lowestGoal;
var slot1Player1;
var slot2Player1;
var slot3Player1;
var slot4Player1;
var slot1Player2;
var slot2Player2;
var slot3Player2;
var slot4Player2;

//This function will set up the game and hide buttons
function setUp() {
	highestGoal=document.getElementById("highest");
	lowestGoal=document.getElementById("lowest");
	document.getElementById("rollTwo").style.visibility="hidden";
	document.getElementById("rollOne").style.visibility="hidden";
	document.getElementById("setGoal").style.visibility="hidden";
	document.getElementById("playAgain").style.visibility="hidden";
	playerTwoTurn=0;
	slot1Player1=document.getElementById("player1Slot1").innerHTML;
	slot2Player1=document.getElementById("player1Slot2").innerHTML;
	slot3Player1=document.getElementById("player1Slot3").innerHTML;
	slot4Player1=document.getElementById("player1Slot4").innerHTML;
	slot1Player2=document.getElementById("player2Slot1").innerHTML;
	slot2Player2=document.getElementById("player2Slot2").innerHTML;
	slot3Player2=document.getElementById("player2Slot3").innerHTML;
	slot4Player2=document.getElementById("player2Slot4").innerHTML;
	highestGoal.disabled=true;
	lowestGoal.disabled=true;
	document.getElementById("p1Slot1Button").disabled=true;
	document.getElementById("p1Slot2Button").disabled=true;
	document.getElementById("p1Slot3Button").disabled=true;
	document.getElementById("p1Slot4Button").disabled=true;
	document.getElementById("p2Slot1Button").disabled=true;
	document.getElementById("p2Slot2Button").disabled=true;
	document.getElementById("p2Slot3Button").disabled=true;
	document.getElementById("p2Slot4Button").disabled=true;
}

//This function will allow the player's to submit their names
function submitName() {
	highestGoal=document.getElementById("highest");
	lowestGoal=document.getElementById("lowest");
	playerOneName=document.getElementById("playerOneName").value;
	playerTwoName=document.getElementById("playerTwoName").value;
	if (playerOneName.length<1 || playerTwoName<1) {
		alert ("Must enter Player names");
	} else {
		document.getElementById("playerOneNewName").innerHTML=playerOneName;
		document.getElementById("playerTwoNewName").innerHTML=playerTwoName;
		document.getElementById("submitName").style.visibility="hidden";
		document.getElementById("setGoal").style.visibility="visible";
		highestGoal.disabled=false;
		lowestGoal.disabled=false;	
	}//end of if statement
}

//This function will allow the user to set the goal of the game and prevent the user from changing their selection
function setGoal() {
	highestGoal=document.getElementById("highest");
	lowestGoal=document.getElementById("lowest");
	document.getElementById("setGoal").style.visibility="hidden";
	document.getElementById("rollOne").style.visibility="visible";
	highestGoal.disabled=true;
	lowestGoal.disabled=true;
}

//This function will generate a value for player one
function rollOne() {
	var valueOne;
	var diceOne;
	valueOne=Math.floor(Math.random()*6)+1;
	if (valueOne==1) {
		diceOne="dice1.jpg";
		document.getElementById("diceOne").src=diceOne;
	} else if (valueOne==2) {
		diceOne="dice2.jpg";
		document.getElementById("diceOne").src=diceOne;
	} else if (valueOne==3) {
		diceOne="dice3.jpg";
		document.getElementById("diceOne").src=diceOne;
	} else if (valueOne==4) {
		diceOne="dice4.jpg";
		document.getElementById("diceOne").src=diceOne;
	} else if (valueOne==5) {
		diceOne="dice5.jpg";
		document.getElementById("diceOne").src=diceOne;
	} else {
		diceOne="dice6.jpg";
		document.getElementById("diceOne").src=diceOne;
	} // end of if statement
	localStorage.playerOneValue=valueOne;
	document.getElementById("p1Slot1Button").disabled=false;
	document.getElementById("p1Slot2Button").disabled=false;
	document.getElementById("p1Slot3Button").disabled=false;
	document.getElementById("p1Slot4Button").disabled=false;
	document.getElementById("rollOne").style.visibility="hidden";
}

//Thos function will generate a value for player two
function rollTwo() {
	var valueTwo;
	var diceTwo;
	valueTwo=Math.floor(Math.random()*6)+1;
	if (valueTwo==1) {
		diceTwo="dice1.jpg";
		document.getElementById("diceTwo").src=diceTwo;
	} else if (valueTwo==2) {
		diceTwo="dice2.jpg";
		document.getElementById("diceTwo").src=diceTwo;
	} else if (valueTwo==3) {
		diceTwo="dice3.jpg";
		document.getElementById("diceTwo").src=diceTwo;
	} else if (valueTwo==4) {
		diceTwo="dice4.jpg";
		document.getElementById("diceTwo").src=diceTwo;
	} else if (valueTwo==5) {
		diceTwo="dice5.jpg";
		document.getElementById("diceTwo").src=diceTwo;
	} else {
		diceTwo="dice6.jpg";
		document.getElementById("diceTwo").src=diceTwo;
	} // end of if statement
	localStorage.playerTwoValue=valueTwo;
	document.getElementById("p2Slot1Button").disabled=false;
	document.getElementById("p2Slot2Button").disabled=false;
	document.getElementById("p2Slot3Button").disabled=false;
	document.getElementById("p2Slot4Button").disabled=false;
	document.getElementById("rollTwo").style.visibility="hidden";
}

//This function will allow player one to insert a value into slot one
function player1Slot1() {
	document.getElementById("player1Slot1").innerHTML=localStorage.playerOneValue;
	document.getElementById("p1Slot1Button").style.visibility="hidden";
	document.getElementById("p1Slot2Button").disabled=true;
	document.getElementById("p1Slot3Button").disabled=true;
	document.getElementById("p1Slot4Button").disabled=true;
	document.getElementById("rollOne").style.visibility="hidden";
	document.getElementById("rollTwo").style.visibility="visible";
}

//This function will allow player one to insert a value into slot two
function player1Slot2() {
	document.getElementById("player1Slot2").innerHTML=localStorage.playerOneValue;
	document.getElementById("p1Slot2Button").style.visibility="hidden";
	document.getElementById("p1Slot1Button").disabled=true;
	document.getElementById("p1Slot3Button").disabled=true;
	document.getElementById("p1Slot4Button").disabled=true;
	document.getElementById("rollOne").style.visibility="hidden";
	document.getElementById("rollTwo").style.visibility="visible";
}

//This function will allow player one to insert a value into slot three
function player1Slot3() {
	document.getElementById("player1Slot3").innerHTML=localStorage.playerOneValue;
	document.getElementById("p1Slot3Button").style.visibility="hidden";
	document.getElementById("p1Slot2Button").disabled=true;
	document.getElementById("p1Slot1Button").disabled=true;
	document.getElementById("p1Slot4Button").disabled=true;
	document.getElementById("rollOne").style.visibility="hidden";
	document.getElementById("rollTwo").style.visibility="visible";
}

//This function will allow player one to insert a value into slot four
function player1Slot4() {
	document.getElementById("player1Slot4").innerHTML=localStorage.playerOneValue;
	document.getElementById("p1Slot4Button").style.visibility="hidden";
	document.getElementById("p1Slot2Button").disabled=true;
	document.getElementById("p1Slot3Button").disabled=true;
	document.getElementById("p1Slot1Button").disabled=true;
	document.getElementById("rollOne").style.visibility="hidden";
	document.getElementById("rollTwo").style.visibility="visible";
}

//This function will allow player two to insert a value into slot one and will also check to see if the game is over
function player2Slot1() {
	document.getElementById("player2Slot1").innerHTML=localStorage.playerTwoValue;
	document.getElementById("p2Slot1Button").style.visibility="hidden";
	document.getElementById("p2Slot2Button").disabled=true;
	document.getElementById("p2Slot3Button").disabled=true;
	document.getElementById("p2Slot4Button").disabled=true;
	document.getElementById("rollTwo").style.visibility="hidden";
	highestGoal=document.getElementById("highest");
	lowestGoal=document.getElementById("lowest");
	playerTwoTurn=playerTwoTurn+1;
	slot1Player1=document.getElementById("player1Slot1").innerHTML;
	slot2Player1=document.getElementById("player1Slot2").innerHTML;
	slot3Player1=document.getElementById("player1Slot3").innerHTML;
	slot4Player1=document.getElementById("player1Slot4").innerHTML;
	slot1Player2=document.getElementById("player2Slot1").innerHTML;
	slot2Player2=document.getElementById("player2Slot2").innerHTML;
	slot3Player2=document.getElementById("player2Slot3").innerHTML;
	slot4Player2=document.getElementById("player2Slot4").innerHTML;
	if (playerTwoTurn == 4) {
  		document.getElementById("rollOne").style.visibility = "hidden";
  		player1FinalValue = player1FinalValue.concat(slot1Player1, slot2Player1, slot3Player1, slot4Player1);
  		player2FinalValue = player2FinalValue.concat(slot1Player2, slot2Player2, slot3Player2, slot4Player2);
  		document.getElementById("playAgainButton").style.visibility = "visible";
  		if (highestGoal.checked == true) {
    		if (player1FinalValue > player2FinalValue) {
      			document.getElementById("winner").innerHTML = playerOneName + " wins!";
    		} else {
      			document.getElementById("winner").innerHTML = playerTwoName + " wins!";
    		} // end of inner if statement
  		} else if (lowestGoal.checked == true) {
    		if (player1FinalValue < player2FinalValue) {
      			document.getElementById("winner").innerHTML = playerOneName + " wins!";
    		} else {
      			document.getElementById("winner").innerHTML = playerTwoName + " wins!";
    		} //end of inner if statement
  		}// end of inner if statement 
  	} else {
    	document.getElementById("rollOne").style.visibility = "visible";
  	}// end of if statement
}

//This function will allow player two to insert a value into slot two and will also check to see if the game is over
function player2Slot2() {
	document.getElementById("player2Slot2").innerHTML=localStorage.playerTwoValue;
	document.getElementById("p2Slot2Button").style.visibility="hidden";
	document.getElementById("p2Slot1Button").disabled=true;
	document.getElementById("p2Slot3Button").disabled=true;
	document.getElementById("p2Slot4Button").disabled=true;
	document.getElementById("rollTwo").style.visibility="hidden";
	document.getElementById("rollOne").style.visibility="visible";
	highestGoal=document.getElementById("highest");
	playerTwoTurn=playerTwoTurn+1;
	slot1Player1=document.getElementById("player1Slot1").innerHTML;
	slot2Player1=document.getElementById("player1Slot2").innerHTML;
	slot3Player1=document.getElementById("player1Slot3").innerHTML;
	slot4Player1=document.getElementById("player1Slot4").innerHTML;
	slot1Player2=document.getElementById("player2Slot1").innerHTML;
	slot2Player2=document.getElementById("player2Slot2").innerHTML;
	slot3Player2=document.getElementById("player2Slot3").innerHTML;
	slot4Player2=document.getElementById("player2Slot4").innerHTML;
	if (playerTwoTurn == 4) {
  		document.getElementById("rollOne").style.visibility = "hidden";
  		player1FinalValue = player1FinalValue.concat(slot1Player1, slot2Player1, slot3Player1, slot4Player1);
  		player2FinalValue = player2FinalValue.concat(slot1Player2, slot2Player2, slot3Player2, slot4Player2);
  		document.getElementById("playAgainButton").style.visibility = "visible";
  		if (highestGoal.checked == true) {
    		if (player1FinalValue > player2FinalValue) {
      			document.getElementById("winner").innerHTML = playerOneName + " wins!";
    		} else {
      			document.getElementById("winner").innerHTML = playerTwoName + " wins!";
    		} // end of inner if statement
  		} else if (lowestGoal.checked == true) {
    		if (player1FinalValue < player2FinalValue) {
      			document.getElementById("winner").innerHTML = playerOneName + " wins!";
    		} else {
      			document.getElementById("winner").innerHTML = playerTwoName + " wins!";
    		} //end of inner if statement
  		}// end of inner if statement 
  	} else {
    	document.getElementById("rollOne").style.visibility = "visible";
  	}// end of if statement
}

//This function will allow player two to insert a value into slot three and will also check to see if the game is over
function player2Slot3() {
	document.getElementById("player2Slot3").innerHTML=localStorage.playerTwoValue;
	document.getElementById("p2Slot3Button").style.visibility="hidden";
	document.getElementById("p2Slot2Button").disabled=true;
	document.getElementById("p2Slot1Button").disabled=true;
	document.getElementById("p2Slot4Button").disabled=true;
	document.getElementById("rollTwo").style.visibility="hidden";
	highestGoal=document.getElementById("highest");
	lowestGoal=document.getElementById("lowest");
	playerTwoTurn=playerTwoTurn+1;
	slot1Player1=document.getElementById("player1Slot1").innerHTML;
	slot2Player1=document.getElementById("player1Slot2").innerHTML;
	slot3Player1=document.getElementById("player1Slot3").innerHTML;
	slot4Player1=document.getElementById("player1Slot4").innerHTML;
	slot1Player2=document.getElementById("player2Slot1").innerHTML;
	slot2Player2=document.getElementById("player2Slot2").innerHTML;
	slot3Player2=document.getElementById("player2Slot3").innerHTML;
	slot4Player2=document.getElementById("player2Slot4").innerHTML;
	if (playerTwoTurn == 4) {
  		document.getElementById("rollOne").style.visibility = "hidden";
  		player1FinalValue = player1FinalValue.concat(slot1Player1, slot2Player1, slot3Player1, slot4Player1);
  		player2FinalValue = player2FinalValue.concat(slot1Player2, slot2Player2, slot3Player2, slot4Player2);
  		document.getElementById("playAgainButton").style.visibility = "visible";
  		if (highestGoal.checked == true) {
    		if (player1FinalValue > player2FinalValue) {
      			document.getElementById("winner").innerHTML = playerOneName + " wins!";
    		} else {
      			document.getElementById("winner").innerHTML = playerTwoName + " wins!";
    		} // end of inner if statement
  		} else if (lowestGoal.checked == true) {
    		if (player1FinalValue < player2FinalValue) {
      			document.getElementById("winner").innerHTML = playerOneName + " wins!";
    		} else {
      			document.getElementById("winner").innerHTML = playerTwoName + " wins!";
    		} //end of inner if statement
  		}// end of inner if statement 
  	} else {
    	document.getElementById("rollOne").style.visibility = "visible";
  	}// end of if statement
}

//This function will allow player two to insert a value into slot four and will also check to see if the game is over
function player2Slot4() {
	document.getElementById("player2Slot4").innerHTML=localStorage.playerTwoValue;
	document.getElementById("p2Slot4Button").style.visibility="hidden";
	document.getElementById("p2Slot2Button").disabled=true;
	document.getElementById("p2Slot3Button").disabled=true;
	document.getElementById("p2Slot1Button").disabled=true;
	document.getElementById("rollTwo").style.visibility="hidden";
	highestGoal=document.getElementById("highest");
	lowestGoal=document.getElementById("lowest");
	playerTwoTurn=playerTwoTurn+1;
	slot1Player1=document.getElementById("player1Slot1").innerHTML;
	slot2Player1=document.getElementById("player1Slot2").innerHTML;
	slot3Player1=document.getElementById("player1Slot3").innerHTML;
	slot4Player1=document.getElementById("player1Slot4").innerHTML;
	slot1Player2=document.getElementById("player2Slot1").innerHTML;
	slot2Player2=document.getElementById("player2Slot2").innerHTML;
	slot3Player2=document.getElementById("player2Slot3").innerHTML;
	slot4Player2=document.getElementById("player2Slot4").innerHTML;
	if (playerTwoTurn == 4) {
  		document.getElementById("rollOne").style.visibility = "hidden";
  		player1FinalValue = player1FinalValue.concat(slot1Player1, slot2Player1, slot3Player1, slot4Player1);
  		player2FinalValue = player2FinalValue.concat(slot1Player2, slot2Player2, slot3Player2, slot4Player2);
  		document.getElementById("playAgainButton").style.visibility = "visible";
  		if (highestGoal.checked == true) {
    		if (player1FinalValue > player2FinalValue) {
      			document.getElementById("winner").innerHTML = playerOneName + " wins!";
    		} else {
      			document.getElementById("winner").innerHTML = playerTwoName + " wins!";
    		} // end of inner if statement
  		} else if (lowestGoal.checked == true) {
    		if (player1FinalValue < player2FinalValue) {
      			document.getElementById("winner").innerHTML = playerOneName + " wins!";
    		} else {
      			document.getElementById("winner").innerHTML = playerTwoName + " wins!";
    		} //end of inner else statement
  		}// end of inner else statement 
  	} else {
    	document.getElementById("rollOne").style.visibility = "visible";
  	}// end of if statement
}

//This function will allow the users to play again
function playAgain() {
	window.location.href="khu56assign3.html";
}