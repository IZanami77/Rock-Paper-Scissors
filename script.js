function getComputerChoice(){
     result = Math.floor(Math.random()*100);
     console.log(result);

     if(result <= 33){
        var computerChoice = "rock";
     }
     else if(result > 33 && result <= 66){
        var computerChoice = "paper";
     }
     else{
        var computerChoice = "scissors";
     }
     console.log(`The computer picks ${computerChoice}`)
        return computerChoice;
   


     
     
}

function getHumanChoice(){
    let humanChoice = prompt("Pick something: rock,paper o scissors").toLowerCase();
    console.log(`You have picked ${humanChoice}`);
    
    return humanChoice;
   
}




function playAround(humanChoice,computerChoice){
    
    if(humanChoice == computerChoice){
        console.log("It`s a Tie!")
    }
    
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You won! Rock beats scissors");
        human_score += 1;
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("You lose!");
        computer_score += 1;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        console.log("You won!");
        human_score += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose!");
        computer_score += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You won!");
        human_score += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose!");
        computer_score += 1;
    }
    else{
        console.log("Invalid input");
    }

}
let human_score = 0;
let computer_score = 0;

function playGame(){
    for(rounds = 0; rounds < 5; rounds++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playAround(humanSelection,computerSelection);
    }
    if(human_score > computer_score){
        alert("Congrats! you have defeated the matrix "+ `The final score was You: ${human_score} Matrix: ${computer_score}`);
    }
    else{
        alert("Sorry! better luck next time " + `The final score was You: ${human_score} Matrix: ${computer_score}`);
    }
}


playGame();
