const team1Add1Event = () => {
  console.log("clicked team 1 button ")

  // we add to 1 to score every time the button is clicked
  // get the current score
  const currentScore = document.querySelector('.team-1-score').textContent
  // increment the score by 1
  const newScore = parseInt(currentScore) + 1
  // add the new score back to the display
  document.querySelector('.team-1-score').textContent = newScore  
}

const team1Subtract1Event = () => {
  //we subtract 1 from the score when the button is clicked
  //get the current score
  const currentScore = document.querySelector('.team-1-score').textContent
  //increment score by -1
  const newScore = parseInt(currentScore) - 1
  //insert new score back into display
  document.querySelector('.team-1-score').textContent = newScore 
}

const team2Add1Event = () => {
  console.log("clicked team 2 button ")

  const currentScore = document.querySelector('.team-2-score').textContent
  const NewestScore = parseInt(currentScore) + 1
  document.querySelector('.team-2-score').textContent = NewestScore
}

const team2Subtract1Event = () => {
  const currentScore = document.querySelector('.team-2-score').textContent
  const newestScore = parseInt(currentScore) - 1
  document.querySelector('.team-2-score').textContent = newestScore
}

const OUTPUT_MESSAGE = 'Team Name'

const updateNameEvent = () => {
  const team1Name = document.querySelector('.team1Name').value
  const message = 'Team ' + team1Name
  document.querySelector('.output').textContent = message
}

const updateName2Event = () => {
  const team2Name = document.querySelector('.team2Name').value
  const message = 'Team ' + team2Name
  document.querySelector('.output2').textContent = message
}


document.querySelector('.add1ToTeam1Button').addEventListener('click', team1Add1Event)
document.querySelector('.sub1ToTeam1Button').addEventListener('click', team1Subtract1Event)
document.querySelector('.add1ToTeam2Button').addEventListener('click', team2Add1Event)
document.querySelector('.sub1ToTeam2Button').addEventListener('click', team2Subtract1Event)
document.querySelector('.Team1Button').addEventListener('click', updateNameEvent)
document.querySelector('.Team2Button').addEventListener('click', updateName2Event)

