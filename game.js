const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById("option-buttons");

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

let correctAnswers = 0;

if(localStorage.getItem("correctAnswers")) {
  correctAnswers = parseInt(localStorage.getItem("correctAnswers"));
}

localStorage.setItem("correctAnswers", correctAnswers);

/* if (correctAnswers < 0) {
  console.log("Game Over");
  //messageElement2.textContent = "Game Over!";
} */

const textNodes = [
  {
    id: 1,
    //text: "There is a key in front of you",
    text: `there is a key infront of you`,
    img: "./images/knight1.png",
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
    text: `You open the door. You are now standing in a hallway.`,
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
    text: "A bat attacks! Answer this question 2 + 2 and submit the answer in the input box",
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
    text: "You come to another door. The door is open, but you are attacked by a troll! Answer these 3 questions:",
    img: "./img/troll_math.jpg",
    options: [
      {
        text: "First Question: 4 x 4 =",
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
        correctAnswers++;
        messageElement2.textContent = "You cut the bat in two!";
      } else {
        correctAnswers--;
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
      text: "Second Question: 9 x 3 =",
      nextText: 100,
    }],
    action: function fight() {
      const input = document.getElementById("heroName").value;
      const messageElement2 = document.getElementById("text");
      if (parseInt(input) === 16) {
        correctAnswers++;
        messageElement2.textContent = "You slash the troll with a deep cut";
      } else {
        correctAnswers--;
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
      text: "Third Question: 27 x 6 =",
      nextText: 102,
    }],
    action: function fight() {
      const input = document.getElementById("heroName").value;
      const messageElement2 = document.getElementById("text");
      if (parseInt(input) === 27) {
        correctAnswers++;
        messageElement2.textContent = "The Troll screams as you cut it's flesh!";
      } else {
        correctAnswers--;
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
        correctAnswers++;
        console.log(score);
        messageElement2.textContent = "You kill the troll with one fatal swing";
      } else {
        correctAnswers--;
        messageElement2.textContent = "The Troll jabs his sword at you";
      }
      document.getElementById("heroName").value = "";
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
        text: "Question: 32 x 12 =",
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
        text: "Question: 64 x 9 =",
      nextText:18,
      }
    ],
    action: function DragonFight() {
      const input = document.getElementById("heroName").value;
      const messageElementDragon = document.getElementById("text");
      if(parseInt(input) === 384) {
        correctAnswers++;
        messageElementDragon.textContent ="You win the first round!";
      } else {
        correctAnswers--;
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
        text: "Question 3: 87 x 7",
        nextText: 19,
      },
    ],
    action: function DragonFight() {
      const input = document.getElementById("heroName").value;
      const messageElementDragon = document.getElementById("text");
      if(parseInt(input) === 576) {
        correctAnswers++;
        messageElementDragon.textContent ="You win the second round!";
      } else {
        correctAnswers--;
      }
      document.getElementById("heroName").value = "";
    }
  },
  {
    id: 19,
    text: "The Dragon takes another blow",
    options: [
      {
        text: "Question 3: 112 x 3",
        nextText: 20,
      },
    ],
    action: function DragonFight() {
      const input = document.getElementById("heroName").value;
      const messageElementDragon = document.getElementById("text");
      if(parseInt(input) === 609) {
        correctAnswers++;
        messageElementDragon.textContent ="You win the third round!";
      } else {
        correctAnswers--;
      }
      document.getElementById("heroName").value = "";
    }
  },
  {
    id: 20,
    text: "The Dragon takes another blow",
    options: [
      {
        text: "Question 4: 108 x 16 = ",
        nextText: 21,
      },
    ],
    action: function DragonFight() {
      const input = document.getElementById("heroName").value;
      const messageElementDragon = document.getElementById("text");
      if(parseInt(input) === 336) {
        correctAnswers++;
        messageElementDragon.textContent ="You win the fourth round!";
      } else {
        correctAnswers--;
      }
      document.getElementById("heroName").value = "";
    }
  },
  {
    id: 21,
    text: "The Dragon takes another blow",
    options: [
      {
        text: "Kill the Dragon!",
        nextText: 22,
      },
    ],
    action: function DragonFight() {
      const input = document.getElementById("heroName").value;
      const messageElementDragon = document.getElementById("text");
      if(parseInt(input) === 1728) {
        correctAnswers++;
        //console.log(correctAnswers);
        messageElementDragon.textContent ="You have defeated the Dragon";
      } else {
        correctAnswers--;
        console.log(correctAnswers);
      }
      document.getElementById("heroName").value = "";
    }
  },
  {
    id: 22,
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
