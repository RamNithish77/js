let playGame = confirm("do you want to play Rock paper Scissors");
if(playGame){
    let playerChoice=prompt("Enter the rock paper Scissors");
    if(playerChoice){
        let player=playerChoice.trim().toLowerCase();
        if(player === "rock"|| player === "paper"||player === "scissors")
            {
                let computer=Math.floor(Math.random()*3+1)
                let computerChoice= computer === 1? "rock"
                    : computerChoice = computer === 2 ? "paper"
                    : "scissors"
                // let computerChoice
                // if(computer===1){
                //     computerChoice="rock"
                // }
                // else if(computer===2){
                //     computerChoice="paper"
                // }
                // else{
                //     computerChoice="scissors"
                // };
                let result= computerChoice===player?"tie Break"
                            :player==="rock" && computerChoice==="paper"?`playerchoice:${player} and computerChoice:${computerChoice} \ncomupter wins`
                            :player==="rock" && computerChoice==="scissors"?`playerchoice:${player} and computerChoice:${computerChoice} \nplayer wins`
                            :player==="scissors" && computerChoice==="paper"?`playerchoice:${player} and computerChoice:${computerChoice} \nplayer wins`
                            :player==="scissors" && computerChoice==="rock"?`playerchoice:${player} and computerChoice:${computerChoice} \ncomupter wins`
                            :player==="paper" && computerChoice==="rock"?`playerchoice:${player} and computerChoice:${computerChoice} \nplayer wins`
                            :player==="paper" && computerChoice==="Scissors"?`playerchoice:${player} and computerChoice:${computerChoice} \nplayer wins`
                            :
                   alert(result);
            // let result;
            // if(computerChoice===player){
            //     alert("tiebreak")
            // }
            // else if(player==="rock" && computerChoice==="paper"){
            //     alert(`playerchoice:${player} and computerChoice:${computerChoice} \ncomupter wins`)
            // }
            // else if(player==="rock" && computerChoice==="scissors"){
            //     alert(`playerchoice:${player} and computerChoice:${computerChoice} \nplayer wins`)
            // }
            // else if(player==="scissors" && computerChoice==="paper"){
            //     alert(`playerchoice:${player} and computerChoice:${computerChoice} \nplayer wins`)
            // }else if(player==="scissors" && computerChoice==="rock"){
            //     alert(`playerchoice:${player} and computerChoice:${computerChoice} \ncomputer wins`)
            // }else if(player==="paper" && computerChoice==="rock"){
            //     alert(`playerchoice:${player} and computerChoice:${computerChoice} \nplayer wins`)
            // }else if(player==="paper" && computerChoice==="scissors"){
            //     alert(`playerchoice:${player} and computerChoice:${computerChoice} \ncomputer wins`)
            // }
            // else{
            //     alert("nothing")
            // }
            }
            else{
                alert("You didnt enter the rock paper Scissor")
            };

    }
    else{
        alert("Ok may Be Next Time")
    }
}
else{
    alert("ok May be Next Time!");
}