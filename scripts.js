const gameBoard = (() => {
  let array = ["A", "A", "A", "A", "A", "A", "A", "A", "A"];
  const updateArray = (position, xo) => array.splice(position, 1, xo);
  return { array, updateArray };
})();

const playerFactory = (name) => {
  const test = () => console.log("test");
  return { name, test };
};

const displayController = (() => {
  const gameBoardDiv = document.querySelector(".game-board");
  const populateBoard = () => {
    for (let i = 0; i < gameBoard.array.length; i++) {
      let div = document.createElement("div");
      gameBoardDiv.appendChild(div);
      div.classList.add("game-tile");
      div.setAttribute("id", i);
      div.addEventListener("click", clicker);
    }
  };
  const makeMove = (tileId) => {
    let image = document.createElement("img");
    if (gameBoard.array[tileId] === "X") {
      // console.log(tileId + "x");
      image.src = "x.svg";
      document.getElementById(tileId).appendChild(image);
    } else if (gameBoard.array[tileId] === "O") {
      // console.log(tileId + "o");
      image.src = "o.svg";
      document.getElementById(tileId).appendChild(image);
    } else {
      // console.log("third else?");
    }
  };
  function clicker() {
    // console.log(this.id);
    if (gameBoard.array[this.id] === "A") {
      gameBoard.updateArray(this.id, gameFlow.turner());
      // console.log(this.id, gameBoard.array);
      makeMove(this.id);
      gameFlow.winChecker();
    } else {
    }
  }
  return { populateBoard, makeMove, clicker };
})();

const gameFlow = (() => {
  let turn = "O";
  const playerTurn = document.querySelector(".turn");
  const turner = () => {
    if (turn === "X") {
      turn = "0";
      playerTurn.textContent = "X - Player 1's Turn";
      return (turn = "O");
    } else {
      turn = "X";
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
      playerTurn.textContent = "You win!";
    } else if (
      gameBoard.array[3] != "A" &&
      gameBoard.array[3] === gameBoard.array[4] &&
      gameBoard.array[3] === gameBoard.array[5]
    ) {
      playerTurn.textContent = "You win!";
    } else if (
      gameBoard.array[6] != "A" &&
      gameBoard.array[6] === gameBoard.array[7] &&
      gameBoard.array[6] === gameBoard.array[8]
    ) {
      playerTurn.textContent = "You win!";
    } else if (
      gameBoard.array[0] != "A" &&
      gameBoard.array[0] === gameBoard.array[3] &&
      gameBoard.array[0] === gameBoard.array[6]
    ) {
      playerTurn.textContent = "You win!";
    } else if (
      gameBoard.array[1] != "A" &&
      gameBoard.array[1] === gameBoard.array[4] &&
      gameBoard.array[1] === gameBoard.array[7]
    ) {
      playerTurn.textContent = "You win!";
    } else if (
      gameBoard.array[2] != "A" &&
      gameBoard.array[2] === gameBoard.array[5] &&
      gameBoard.array[2] === gameBoard.array[8]
    ) {
      playerTurn.textContent = "You win!";
    } else if (
      gameBoard.array[0] != "A" &&
      gameBoard.array[0] === gameBoard.array[4] &&
      gameBoard.array[0] === gameBoard.array[8]
    ) {
      playerTurn.textContent = "You win!";
    } else if (
      gameBoard.array[2] != "A" &&
      gameBoard.array[2] === gameBoard.array[4] &&
      gameBoard.array[2] === gameBoard.array[6]
    ) {
      playerTurn.textContent = "You win!";
    }
  };
  return { turner, winChecker };
})();

displayController.populateBoard();
