let u_score = 0;
let c_score = 0;
let round = 1;
let gameString = {
  1: "ROCK",
  2: "PAPER",
  3: "SCISSORS"
};

function reset() {
  u_score = 0;
  c_score = 0;
  round = 1;
  document.getElementById("user-score").innerHTML = u_score;
  document.getElementById("comp-score").innerHTML = c_score;
  document.getElementById("winner").innerHTML = "";
  document.getElementById("resultLists").innerHTML = "";
  
}

function compChoose() {
  let comp = Math.floor(Math.random() * 3) + 1;
  let current = document.getElementById(gameString[comp]);
  current.className = "activate";
  window.setTimeout(function() {
      current.classList.remove("activate");

  }, 500);
  return comp;
}

function checkWinner() {
  if (u_score === 5) {
    document.getElementById("winner").innerHTML = "USER WINS!!";
  } else if (c_score === 5) {
    document.getElementById("winner").innerHTML = "COMPUTER WINS!!";
  }
}

function playRound(playerChoice) {
  if(u_score < 5 && c_score < 5) {
    const playerValue =  parseInt(playerChoice.getAttribute("player-val"));
    const computerValue = compChoose();
    let result = "Round " + round + ": " + gameString[playerValue] + " ";
    if (playerValue === computerValue) {
      result += "ties ";
    } else if (playerValue === 1 && computerValue === 3 ||
              playerValue === 2 && computerValue === 1 ||
              playerValue === 3 && computerValue === 2) {
      result += "beats ";
      u_score += 1;
    } else {
      result += "loses to ";
      c_score += 1;
    }
    result += gameString[computerValue];
    document.getElementById("user-score").innerHTML = u_score;
    document.getElementById("comp-score").innerHTML = c_score;
    appendResult(result);
    round += 1;
    checkWinner();
  }
}

function appendResult(result) {
  var newItem = document.createElement("LI");
  var textnode = document.createTextNode(result);
  newItem.appendChild(textnode);
  var list = document.getElementById("resultLists");
  list.insertBefore(newItem, list.childNodes[0]);
}

