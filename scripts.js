const gameBoard = (() => {
  let array = ["A", "A", "A", "A", "A", "A", "A", "A", "A"];
  const updateArray = (position, xo) => array.splice(position, 1, xo);
  return { array, updateArray };
})();

// const playerFactory = (name) => {
//   const hello = () => console.log("hello");
//   let wins = 0;
//   return { name, hello, wins };
// };

const displayController = (() => {
  const gameBoardDiv = document.querySelector(".game-board");
  const populateBoard = () => {
    // gameBoardDiv.replaceChildren();
    for (let i = 0; i < gameBoard.array.length; i++) {
      let div = document.createElement("div");
      gameBoardDiv.appendChild(div);
      div.classList.add("game-tile");
      div.setAttribute("id", "tile-" + i);
      div.addEventListener("click", clicker);
    }
  };
  const makeMove = (tileId) => {
    let image = document.createElement("img");
    if (gameBoard.array[tileId] === "X") {
      // console.log(tileId + "x");
      image.src = "x.svg";
      document.getElementById("tile-" + tileId).appendChild(image);
    } else if (gameBoard.array[tileId] === "O") {
      // console.log(tileId + "o");
      image.src = "o.svg";
      document.getElementById("tile-" + tileId).appendChild(image);
    } else {
      // console.log("third else?");
    }
  };

  function clicker() {
    // console.log(this.id);
    let tile = this.id;
    tile = tile.slice(5);
    console.log(tile);
    if (gameBoard.array[tile] === "A") {
      gameBoard.updateArray(tile, gameFlow.turner());
      // console.log(this.id, gameBoard.array);
      makeMove(tile);
      gameFlow.winChecker();
    } else {
    }
  }
  function clickerAi() {
    // console.log(this.id);
    let tile = this.id.slice(5);
    // console.log(tile);
    if (gameBoard.array[tile] === "A") {
      let turn = gameFlow.turner();
      console.log(turn);
      gameBoard.updateArray(tile, turn);
      // console.log(this.id, gameBoard.array);
      makeMove(tile);
      gameFlow.winChecker();
      let wincheck = document.querySelector(".turn");
      if (
        turn === "X" &&
        wincheck.textContent.indexOf("wins") === -1
        // || (turn === "X" && wincheck.textContent.indexOf("Tie") === -1)
      ) {
        console.log("aiturn");
        playAi.aiMove();
      }
    } else {
    }
  }
  function reset() {
    for (i = 0; i < gameBoard.array.length; i++) {
      gameBoard.updateArray(i, "A");
      let gameTile = document.getElementById("tile-" + i);
      gameTile.replaceChildren();
      gameTile.removeEventListener("click", clickerAi);
      gameTile.addEventListener("click", clicker);
      gameFlow.turner();
    }
    gameFlow.turner();
  }
  return { populateBoard, makeMove, clicker, reset, clickerAi };
})();
this;

const gameFlow = (() => {
  let turn = "0";
  let player;
  const playerTurn = document.querySelector(".turn");
  const turner = () => {
    if (turn === "X") {
      turn = "0";
      player = "2";
      playerTurn.textContent = "X - Player 1's Turn";
      return (turn = "O");
    } else {
      turn = "X";
      player = "1";
      playerTurn.textContent = "O - Player 2's Turn";
      return (turn = "X");
    }
  };
  const winChecker = () => {
    if (
      gameBoard.array[0] != "A" &&
      gameBoard.array[0] === gameBoard.array[1] &&
      gameBoard.array[0] === gameBoard.array[2]
    ) {
      playerTurn.textContent = "Player " + player + " wins!";
      winClickStop();
      winCounter();
    } else if (
      gameBoard.array[3] != "A" &&
      gameBoard.array[3] === gameBoard.array[4] &&
      gameBoard.array[3] === gameBoard.array[5]
    ) {
      playerTurn.textContent = "Player " + player + " wins!";
      winClickStop();
      winCounter();
    } else if (
      gameBoard.array[6] != "A" &&
      gameBoard.array[6] === gameBoard.array[7] &&
      gameBoard.array[6] === gameBoard.array[8]
    ) {
      playerTurn.textContent = "Player " + player + " wins!";
      winClickStop();
      winCounter();
    } else if (
      gameBoard.array[0] != "A" &&
      gameBoard.array[0] === gameBoard.array[3] &&
      gameBoard.array[0] === gameBoard.array[6]
    ) {
      playerTurn.textContent = "Player " + player + " wins!";
      winClickStop();
      winCounter();
    } else if (
      gameBoard.array[1] != "A" &&
      gameBoard.array[1] === gameBoard.array[4] &&
      gameBoard.array[1] === gameBoard.array[7]
    ) {
      playerTurn.textContent = "Player " + player + " wins!";
      winClickStop();
      winCounter();
    } else if (
      gameBoard.array[2] != "A" &&
      gameBoard.array[2] === gameBoard.array[5] &&
      gameBoard.array[2] === gameBoard.array[8]
    ) {
      playerTurn.textContent = "Player " + player + " wins!";
      winClickStop();
      winCounter();
    } else if (
      gameBoard.array[0] != "A" &&
      gameBoard.array[0] === gameBoard.array[4] &&
      gameBoard.array[0] === gameBoard.array[8]
    ) {
      playerTurn.textContent = "Player " + player + " wins!";
      winClickStop();
      winCounter();
    } else if (
      gameBoard.array[2] != "A" &&
      gameBoard.array[2] === gameBoard.array[4] &&
      gameBoard.array[2] === gameBoard.array[6]
    ) {
      playerTurn.textContent = "Player " + player + " wins!";
      winClickStop();
      winCounter();
    } else if (gameBoard.array.every(checkArray)) {
      playerTurn.textContent = "Tie Game!";
    }
  };
  const checkArray = (spot) => {
    return spot != "A";
  };
  const winClickStop = () => {
    for (let i = 0; i < gameBoard.array.length; i++) {
      let gameTile = document.getElementById("tile-" + i);
      gameTile.removeEventListener("click", displayController.clicker);
      gameTile.removeEventListener("click", displayController.clickerAi);
    }
  };
  let p1 = 0;
  let p2 = 0;
  const winCounter = () => {
    const p1wins = document.querySelector(".p1wins");
    const p2wins = document.querySelector(".p2wins");
    if (player === "1") {
      p1++;
      // console.log(p1);
    }
    if (player === "2") {
      p2 += 1;
      // console.log(p2);
    }
    p1wins.textContent = "Player 1 Wins: " + p1;
    p2wins.textContent = "Player 2 Wins: " + p2;
  };
  return { turner, winChecker, turn };
})();

displayController.populateBoard();

const playAi = (() => {
  const getRandom = () => {
    return Math.floor(Math.random() * 9);
  };
  function playAiStart() {
    for (let i = 0; i < gameBoard.array.length; i++) {
      let gameTile = document.getElementById("tile-" + i);
      gameTile.removeEventListener("click", displayController.clicker);
      gameTile.addEventListener("click", displayController.clickerAi);
    }
    let turncheck = document.querySelector(".turn");
    if (turncheck.textContent.indexOf(1) === -1) {
      aiMove();
    }
    let playAiButton = document.querySelector(".play-ai");
    playAiButton.textContent = "Reset Vs AI";
  }
  const aiMove = () => {
    let move = getRandom();
    console.log(move);
    // let wincheck = document.querySelector(".turn");
    if (gameBoard.array[move] === "A") {
      console.log("ai made move" + move);
      gameBoard.updateArray(move, gameFlow.turner());
      displayController.makeMove(move);
      gameFlow.winChecker();
    } else if (gameBoard.array.every(checkArray)) {
      console.log("stop! tie");
    } else if (gameBoard.array[move] != "A") {
      aiMove();
    } else {
      console.log("error!");
    }
  };
  const checkArray = (spot) => {
    return spot != "A";
  };
  return { getRandom, aiMove, playAiStart };
})();

// wincheck.textContent.indexOf("wins") === -1 ||
//   wincheck.textContent.indexOf("Tie") === -1;
