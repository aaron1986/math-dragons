const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");


let correctAnswers = 0;
let incorrectAnswers = 0;


if (localStorage.getItem("correctAnswers")) {
  correctAnswers = parseInt(localStorage.getItem("correctAnswers"));
}
if (localStorage.getItem("incorrectAnswers")) {
  incorrectAnswers = parseInt(localStorage.getItem("incorrectAnswers"));
}


function startGame() {
  correctAnswers = 0;
  incorrectAnswers = 0;
  resultsArray.length = 0;
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textElement.innerText = textNode.text;
  document.getElementById("image").src = textNode.img;
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectOption(option));
    optionButtonsElement.appendChild(button);
  });
}


const resultsArray = []; 

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    startGame(); // Reset scores at the start of the game
    return;
  }
  showTextNode(nextTextNodeId);

  const correctIds = [8, 13, 16, 28, 20, 22, 24, 27];
  const incorrectIds = [9, 12, 15, 19, 26, 29];

  if (correctIds.includes(nextTextNodeId)) {
    correctAnswers++;
  } else if (incorrectIds.includes(nextTextNodeId)) {
    incorrectAnswers++;
  }

  // Push the updated values into the resultsArray
  resultsArray.push({ correctAnswers, incorrectAnswers });

  localStorage.setItem("correctAnswers", correctAnswers);
  localStorage.setItem("incorrectAnswers", incorrectAnswers);
}

let highScores = [];
if (localStorage.getItem("highScores")) {
  highScores = JSON.parse(localStorage.getItem("highScores"));
}

  function updateHighScores() {
  const playerName = prompt("Enter your name:");
  if (playerName) {
    const playerScore = { name: playerName, correctAnswers };

    highScores.push({ name: playerName, correctAnswers, incorrectAnswers });
    highScores.sort((a, b) => b.correctAnswers - a.correctAnswers);
    const maxHighScores = 10;
    highScores.splice(maxHighScores);
  
    localStorage.setItem("highScores", JSON.stringify(highScores));

      // Redirect to the leaderboard page and pass the results and player's name as query parameters
      displayHighScores();
      window.location.href = `leaderboard.html?highScores=${encodeURIComponent(JSON.stringify(highScores))}`;
  } 
}  



function displayHighScores() {
  const highScoresElement = document.createElement("ul");
  highScoresElement.classList.add("high-scores");

  highScores.forEach((score, index) => {
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `${index + 1}. ${score.name}: ${score.correctAnswers} correct answers`;
    highScoresElement.appendChild(scoreItem);
  });

  // Add or update the high scores element in your HTML
  const existingHighScoresElement = document.querySelector(".high-scores");
  if (existingHighScoresElement) {
    document.body.replaceChild(highScoresElement, existingHighScoresElement);
  } else {
    document.body.appendChild(highScoresElement);
  }
}


//textNodes code below here
