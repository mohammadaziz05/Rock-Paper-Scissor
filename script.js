const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")




let userScore = 0
let compScore = 0

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random()*options.length)
    return  options[randomIndex]
}

const draw = () => {
    msg.textContent = "It's a draw!"
    msg.style.backgroundColor = '#020122'
    
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        userScorePara.textContent = userScore
        msg.textContent = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = 'green'
    }
    else {
        compScore++
        compScorePara.textContent = compScore
        msg.textContent = `You lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red'
    }

}

const playGame = (userChoice) => {
    //Generate Comp Choice

    const compChoice = genCompChoice()
    
    if(userChoice == compChoice){
        draw()
    }

    else {
        let userWin = true
        if(userChoice === 'rock') {
            //paper, scissors
            userWin = compChoice === 'paper' ? false : true
        }
        else if(userChoice === 'paper') {
            //rock, scissors
            userWin = compChoice === 'scissors' ? false : true
        }
        else {
            //rock, paper
            userWin = compChoice === 'rock' ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
    

}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})
