const computer = ["rock", "paper" ,"scissors"];
let end_game = false
var count = 0 

function choice(){
    var user = prompt("Choose rock,paper,scissors:")
    return user
}
function getComputerChoice(){
    var a = Math.floor(Math.random() * 3);
    var b = computer[a]
    console.log("Computer chooses:" + b)
    return b
}

function play(user,b){
    if (user==="rock" && b=="scissors"){
        console.log("win")
        end_game = true
    }else if (user==="paper" && b==="rock"){
        console.log("win")
        end_game = true 
    }else if (user==="scissors" && b==="paper"){
        console.log("win")
        end_game = true 
    }else if (user==="rock" && b==="paper"){
        console.log("lose")
        end_game = true
    }else if (user==="paper" && b==="scissors"){
        console.log("lose")
        end_game = true
    }else if (user==="scissors" && b==="rock"){
        console.log("lose")
        end_game = true
    }else if (user===b){
        console.log("Draw")
        console.log("Try again")
        choice()
    }else{
        console.log("no such option")
        console.log("try again")
        choice()
        return false
    }return true
}
for (var i =1; i < 6;i++){
console.log("Round "+ `${i}`+ ":")
end_game=false
while (end_game===false)  {
    var b = getComputerChoice();
    var user = choice()
    play(user,b);
}}