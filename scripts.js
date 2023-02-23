const gameBoard = (() => {
  let array = ["A", "X", "X", "O", "O", "O", "X", "X", "X"];
  const updateArray = (position, xo) => array.splice(position, 1, xo);
  return { array, updateArray };
})();

const playerFactory = (name) => {
  const test = () => console.log("test");
  return { name, test };
};

const gameFlow = (() => {
  console.log("gameFlow");
})();

const displayController = (() => {
  const gameBoardDiv = document.querySelector(".game-board");
  const populateBoard = () => {
    for (let i = 0; i < gameBoard.array.length; i++) {
      let div = document.createElement("div");
      gameBoardDiv.appendChild(div);
      div.classList.add("game-tile");
      div.setAttribute("id", i);
      let image = document.createElement("img");
      if (gameBoard.array[i] === "X") {
        image.src = "x.svg";
        div.appendChild(image);
      } else if (gameBoard.array[i] === "O") {
        image.src = "o.svg";
        div.appendChild(image);
      } else {
        console.log(i);
      }
    }
  };
  return { populateBoard };
})();

displayController.populateBoard();
