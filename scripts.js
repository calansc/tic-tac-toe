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
      console.log(this.id, gameBoard.array);
      makeMove(this.id);
      // gameFlow.turner();
    } else {
    }
  }
  return { populateBoard, makeMove, clicker };
})();

const gameFlow = (() => {
  let turn = "O";
  const turner = () => {
    if (turn === "X") {
      turn = "0";
      return (turn = "O");
    } else {
      turn = "X";
      return (turn = "X");
    }
  };
  return { turn, turner };
})();

displayController.populateBoard();
