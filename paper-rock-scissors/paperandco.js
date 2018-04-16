const getUserChoice = userInput =>
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Play the game right.'
  }
}

function getComputerChoice() => {
  let randomNumber = Math.floor((Math.random() * 3);
  switch (randomNumber) {
    case 0:
    	return 'rock';
    case 1:
    	return 'paper';
    case 2:
    	return 'scissors';
  }
}

function determineWinner = (userChoice, computerChoice) =>
	if (userChoice === computerChoice) {
  	console.log('You tie.');
  } else if {
      if (userChoice === 'rock' ) {
        if (computerChoice === 'scissors') {
          return console.log('You win.');
        } else {
          return console.log('Computer choose paper—you lose.');
        }}
  } else if {
    if (userChoice === 'paper') {
      if (computerChoice == 'rock') {
        return console.log('You win.');
      } else {
        return console.log('Computer chose scissors—you lose.');
      }
    }
  } else if {
    if (userChoice === 'paper') {
      if (computerChoice == 'rock') {
        return console.log('You win.');
      } else {
        return console.log('Computer chose scissors—you lose.');
      }
    }
  }
}}

function playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log ('You threw: ' + userChoice);
  console.log ('The computer threw: ' + computerChoice);
  console.log (determineWinner(userChoice, computerChoice);
               }
playGame();
