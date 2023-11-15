function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * choices.length)

    return choices[randomNumber]
}


function playRound(playerSelection, computerSelection) {
    if (computerSelection===playerSelection){
        console.log("tie")
    }

    if (computerSelection=="rock" && playerSelection=="scissors" || computerSelection=="paper" && playerSelection=="rock" || computerSelection=="scissors" && playerSelection=="paper"){
        console.log("you lose");
    }
    else if (computerSelection=="scissors" && playerSelection=="rock" || computerSelection=="rock" && playerSelection=="paper" || computerSelection=="paper" && playerSelection=="scissors"){
        console.log("you win");
    }
  }
   


 
  function game(){
    for(let i = 0; i < 5 ; i++){
        const playerSelection = prompt();
        const computerSelection = getComputerChoice();
      
      
        console.log(`Computer chose: ${computerSelection}`, `You chose: ${playerSelection}`);
        const result = playRound(playerSelection, computerSelection);


    }
  }

  const games = game();
