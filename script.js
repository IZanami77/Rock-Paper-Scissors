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





function playAround(humanChoice,computerChoice){
    
    if(humanChoice == computerChoice){
        game = "It's a tie";
    }
    
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        game = "You won! Rock beats scissors";
        human_score += 1;
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper'){
        game = "You lose! Paper beats Rock";
        computer_score += 1;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'paper'){
        game = "You won! Scissors beats Paper";
        human_score += 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "rock"){
        game = "You lose! Rock beats scissors";
        computer_score += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        game = "You won! Paper beats rock"
        human_score += 1;
    }
    else if(humanChoice == "paper" && computerChoice == "scissors"){
        game = "You lose! Scissors beats Paper";
        computer_score += 1;
    }
    else{
        game = "Invalid input";
    }

}
let human_score = 0;
let computer_score = 0;


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const father = document.querySelector("body")

rock.addEventListener('click', () =>{
    var humanChoice = "rock";
    computerChoice = getComputerChoice();
    playAround(humanChoice,computerChoice);

    const div = document.createElement("div");
    const computer = document.createElement("div");

    div.textContent = game;
    div.style.textAlign = "center";
    div.style.fontSize = "24px";
    div.style.color = "white";

    computer.textContent = `The compueter's choice was ${computerChoice}`;
    computer.style.textAlign = "center";
    computer.style.fontSize = "24px";
    computer.style.color = "white";

    father.appendChild(computer);
    father.appendChild(div);

});

paper.addEventListener('click', () =>{
    var humanChoice = "paper";
    computerChoice = getComputerChoice();
    playAround(humanChoice,computerChoice);

    const div = document.createElement("div");
    const computer = document.createElement("div");

    div.textContent = game;
    div.style.textAlign = "center";
    div.style.fontSize = "24px";
    div.style.color = "white";

    computer.textContent = `The compueter's choice was ${computerChoice}`;
    computer.style.textAlign = "center";
    computer.style.fontSize = "24px";
    computer.style.color = "white";

    father.appendChild(computer);
    father.appendChild(div);

});

scissors.addEventListener('click', () =>{
    var humanChoice = "scissors";
    computerChoice = getComputerChoice();
    playAround(humanChoice,computerChoice);

    const div = document.createElement("div");
    const computer = document.createElement("div");

    div.textContent = game;
    div.style.textAlign = "center";
    div.style.fontSize = "24px";
    div.style.color = "white";

    computer.textContent = `The compueter's choice was ${computerChoice}`;
    computer.style.textAlign = "center";
    computer.style.fontSize = "24px";
    computer.style.color = "white";

    father.appendChild(computer);
    father.appendChild(div);

});


