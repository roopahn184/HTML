//first interactive game
let playGame = confirm(" shall we play rock, paper, or scissors");
if (playGame){
  let playerChoice = prompt("please enter rock, paper, or scissors");
  if(playerChoice){
    let playerOne = playerChoice.trim().toLowerCase();
    if(playerOne === "rock" ||
     playerOne === "paper" || 
     playerOne === "scissors"
     ){
        let computerChoice = Math.floor(Math.random() * 3 + 1);
        let computer = computerChoice === 1
         ? "rock"
         :computerChoice === 2 
         ? "paper" 
         : "scissors";
        let result =
        playerOne === computer
        ? "Tie game!"
        :playerOne === "rock" && computer === "paper"
        ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
        :playerOne === "paper" && computer === "scissors"
        ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
        :playerOne === "scissors" && computer === "rock"
        ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins!`
        : `playerOne: ${playerOne}\ncomputer: ${computer} \nplayerone wins!`;
        alert(result);
        let playAgain = confirm("play again?");
        playAgain ? location.reload() : alert("ok thanks for playing")
    }else{
        alert("you didn't enter rock, paper, scissors")

    }
  }
  else{
    alert("i guess u changed your mind. may be next time")

  }

}
else{
  alert("may be next time")
}