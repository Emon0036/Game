let playerscore = 0;
let computerscore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#message");
const you = document.querySelector("#sc");
const comp = document.querySelector("#csr");


const computerChoice=()=>{
    let options =["rock","paper","scissor"];
  let ranchoice=  Math.floor(Math.random() * 3); // give me number less than 3
  return options[ranchoice];
};

const drawGame = ()=>{
      console.log("Game is draw");
      msg.innerText = "Game is draw,Play again";
};

const winner = (userWin ,userId,compchoice)=>{
    if(userWin){
        playerscore++;
        you.innerText = playerscore;
        console.log("You win!");
        msg.innerText = `You win! ${userId} beats ${compchoice}`;
       
      
    }
    else{
        computerscore++;
        comp.innerText = computerscore;
        console.log("You lose!"); 
        msg.innerText =`You lose! ${compchoice} beats ${userId}`;
        
      
    }
}

const playGame=(userId)=>{
    console.log("User choice=",userId);
    
    let compchoice = computerChoice();
    console.log("Computer choice=" , compchoice);
    let userWin = true;

    if(userId === compchoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userId === "rock"){
            //paper , scissor
            userWin = compchoice === paper ? false : true;

        }
        else if(userId === "paper"){
            //rock , scissor
            userWin = compchoice === rock ? true : false;
        }
        else{
            // userId scissor
            //paper , rock
            userWin = compchoice === paper  ? false : true;
        }

        winner(userWin,userId , compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
         const userId = choice.getAttribute("id")
         playGame(userId);

    });
    
});