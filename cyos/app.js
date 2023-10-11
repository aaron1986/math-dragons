//Dom Elements
const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

//Score variable
function leaderBoard(name) {
  this.name = name;
}

let score = 0;


const name = document.getElementById("heroName").value;

function startGame() {
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

  // Code to get function working!
  const choicesHTML = ""; 
  document.getElementById("choices").innerHTML = choicesHTML;

  // Check if there's an action function and call it
  if (textNode.action && typeof textNode.action === "function") {
    textNode.action();
  }
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    //text: "There is a key in front of you",
    text: `${name} there is a key infront of you`,
    img: "./img/key.jpg",
    options: [
      {
        text: "Pick up the key",
        nextText: 2,
      },
      {
        text: "Ignore the key",
        nextText: 3,
      },
    ],
  },
  {
    id: 2,
    text: `${name} You open the door. You are now standing in a hallway.`,
    img: "./img/hallway.jpg",
    options: [
      {
        text: "Move right",
        nextText: 4,
      },
      {
        text: "Walk up stairs",
        nextText: 5,
      },
      {
        text: "Move left",
        nextText: 6,
      },
    ],
  },
  {
    id: 3,
    text: "You needed that key! Journey over.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 4,
    text: "You come to another door. The door is open, so you step through, but fall into a bottomless pit!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: "A bat attacks! Answer this question to block these attacks and counter",
    img: "./img/bat_math.jpg",
    options: [
      {
        text: "Fight the Bat",
        nextText: 7,
      },
    ],
  },
  {
    id: 6,
    text: "You come to another door. The door is open, but you are attacked by a troll! Answer this question to block these attacks and counter",
    img: "./img/troll_math.jpg",
    options: [
      {
        text: "First Question",
        nextText: 11,
      },
    ],
  },
  {
    id: 7,
    text: "Bat maths question",
    img: "./img/bat_dead.jpg",
    options: [
        {
          text: "Correct Continue the journey!",
          nextText: 8,
        } 
    ],
    action: function fight() {
      const input = document.getElementById("heroName").value;
      const messageElement2 = document.getElementById("text");
      if (parseInt(input) === 4) {
        score++;
        messageElement2.textContent = "You cut the bat in two!";
      } else {
        score--;
        messageElement2.textContent = "The bat eats your face";
      }
      document.getElementById("heroName").value = "";
  },
},
  {
    id: 8,
    text: "Victorious, but tired, you proceed down the hallway.",
    img: "./img/dragon_joke.jpg",
    options: [
      {
        text: "Search for Dragon!!",
        nextText: 10,
      },
    ],
  },
  {
    id: 9,
    text: "Wrong! The bat is lightning quick, and swoops in before you have time to draw your shield!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 11,
    text: "Troll maths question",
    img: "./img/troll_math2.jpg",
    options: [{
      text: "Second Question",
      nextText: 100,
    }],
    action: function fight() {
      const input = document.getElementById("heroName").value;
      const messageElement2 = document.getElementById("text");
      if (parseInt(input) === 16) {
        score++;
        messageElement2.textContent = "You slash the troll with a deep cut";
      } else {
        score--;
        messageElement2.textContent = "The Troll jabs his sword at you";
      }
      document.getElementById("heroName").value = "";
    },
  },
  {
    id: 100,
    text: "Troll maths question",
    img: "./img/troll_math3.jpg",
    options: [{
      text: "Third Question",
      nextText: 102,
    }],
    action: function fight() {
      const input = document.getElementById("heroName").value;
      const messageElement2 = document.getElementById("text");
      if (parseInt(input) === 27) {
        score++;
        messageElement2.textContent = "The Troll screams as you cut it's flesh!";
      } else {
        score--;
        messageElement2.textContent = "The troll lifts his sword and swings down as he cuts you!";
      }
      document.getElementById("heroName").value = "";
    },
  },
  {
    id: 102,
    text: "Troll maths question",
    img: "./img/troll_death.jpg",
    options: [{
      text: "Kill the Troll",
      nextText: 2,
    }],
    action: function fight() {
      const input = document.getElementById("heroName").value;
      const messageElement2 = document.getElementById("text");
      if (parseInt(input) === 78) {
        score++;
        console.log(score);
        messageElement2.textContent = "You kill the troll with one fatal swing";
      } else {
        score--;
        messageElement2.textContent = "The Troll jabs his sword at you";
      }
      document.getElementById("heroName").value = "";

      if (score < 0) {
        //console.log("Game Over");
        messageElement2.textContent = "Game Over!";
      }
    },
  },
  {
    id: 12,
    text: "Incorrect! Fatality! The last things you see are two humongous troll fist raining down on you.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 13,
    text: "Correct! You dodge the first blow, and slice across the troll's heel! It still has some fight left however!",
    options: [
      {
        text: "More questions to survive",
        nextText: 14,
      },
    ],
  },
  {
    id: 16,
    text: "Correct! The troll attempted one last attack with the last of its energy, however you deflect this with your shield and it is left at your mercy. You show no mercy.",
    options: [
      {
        text: "Proceed down hallway",
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    text: "You come to another door, the lock has been burnt off. You enter a dark, cavernous chamber, to be confronted by the dragon! Only your logic can help you in battle . . . ",
    options: [
      {
        text: "Dragon Battle!",
        nextText: 17,
      },
    ],
  },
  {
    id: 17,
    text: "Correct! The dragon underestimated the might of your shield! It withstood the first barage of flames, and in the dragons puzzlement you were able to strike the first blow! The first of many that will be needed it seems . . .",
    img: "./img/dragon.jpg",
    options: [
      {
        text: "Question 2/5",
      nextText:18,
      }
    ],
    action: function DragonFight() {
      const input = document.getElementById("heroName").value;
      const messageElementDragon = document.getElementById("text");
      if(parseInt(input) === 89) {
        score++;
        messageElementDragon.textContent ="You win the first round!";
      } else {
        score--;
        messageElementDragon.textContent ="You lose!";
      }
      document.getElementById("heroName").value = "";
    },
  },
  {
    id: 28,
    text: "",
    options: [
      {
        text: "More questions to survive",
        nextText: 18,
      },
    ],
  },
  {
    id: 29,
    text: "Incorrect! The dragon swallows you up whole! It was expecting more of a fight!",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 18,
    text: "The Dragon takes another blow",
    options: [
      {
        text: "Question 3/5",
        nextText: 19,
      },
    ],
    action: function DragonFight() {
      const input = document.getElementById("heroName").value;
      const messageElementDragon = document.getElementById("text");
      if(parseInt(input) === 100) {
        score++;
        messageElementDragon.textContent ="You win the second round!";
      } else {
        score--;
      }
      document.getElementById("heroName").value = "";
    }
  },
  {
    id: 19,
    text: "Incorrect! Disaster! You were too slow to act this time, the dragon connecting with a mighty blow of its tail.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 20,
    text: "Correct! A second victorious blow from our hero! While the dragon is still somewhat dazed, you were able to get close enough to attack again. You hear the cheer of the princess, ensconced high above the battle on a balcony.",
    options: [
      {
        text: "More questions to survive",
        nextText: 21,
      },
    ],
  },
  {
    id: 21,
    text: "Dragon maths question 3/5",
    options: [
      {
        text: "Answer one (incorrect)",
        nextText: 16,
      },
      {
        text: "Answer two (incorrect)",
        nextText: 16,
      },
      {
        text: "Answer three (correct)",
        nextText: 22,
      },
      {
        text: "Answer four (incorrect)",
        nextText: 16,
      },
    ],
  },
  {
    id: 22,
    text: "Correct! The dragon came steaming in, but with a lack of concentration, you were able to roll underneath and strike out at the dragons soft underbelly! A terrific hit, but the dragon is not done yet . . . ",
    options: [
      {
        text: "More questions to survive",
        nextText: 23,
      },
    ],
  },
  {
    id: 23,
    text: "Dragon maths question 4/5",
    options: [
      {
        text: "Answer one (correct)",
        nextText: 24,
      },
      {
        text: "Answer two (incorrect)",
        nextText: 19,
      },
      {
        text: "Answer three (incorrect)",
        nextText: 19,
      },
      {
        text: "Answer four (incorrect)",
        nextText: 19,
      },
    ],
  },
  {
    id: 24,
    text: "Correct! The dragon, lashing out wildly, appeared to set the entire chamber ablaze! But you had managed to to create a refuge using your shield and an old statue. Out of the smoke, you launch a surprise attack to the back of the dragons head! It is in real pain now, but is not quite finished yet . . . ",
    options: [
      {
        text: "More questions to survive",
        nextText: 25,
      },
    ],
  },
  {
    id: 25,
    text: "Dragon maths question 5/5",
    options: [
      {
        text: "Answer one (incorrect)",
        nextText: 26,
      },
      {
        text: "Answer two (incorrect)",
        nextText: 26,
      },
      {
        text: "Answer three (incorrect)",
        nextText: 26,
      },
      {
        text: "Answer four (correct)",
        nextText: 27,
      },
    ],
  },
  {
    id: 26,
    text: "Incorrect! Disaster! The dragon appeared to be falling, but it was a ruse! Before it hit the floor, and with your guard down, it shot a concentrated beam of hot blue flame directly at you. The last thing you see is the look of despair in the princesses face. ",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 27,
    text: "Correct! Victory! The dragon rose to the sky and divebombed down, a desperate act. It was not expecting you to leap into the air to meet it however, and before it can react, your mighty blade has severed its head! A gruesome end. The princess is overjoyed with relief, and runs down the curved stairwell to meet you.",
    options: [
      {
        text: "You win. Restart",
        nextText: 1,
      },
    ],
  },
];


startGame();
