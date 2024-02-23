const gameContainer = document.getElementById("gameContainer");
const boardWidth = 450;

function boardSetup(boardSize) {
    children = []
    for (let i = 0; i < boardSize; i++) {
        let rowDiv = document.createElement("div")
        rowDiv.classList.add("row")
        children.push(rowDiv)
        for (let j = 0; j < boardSize; j++) {
            let cellDiv = document.createElement("div")
            cellDiv.setAttribute("id", `cell_${i}_${j}`)
            cellDiv.style.width = `${boardWidth / boardSize}px`;
            cellDiv.style.height = `${boardWidth / boardSize}px`;
            cellDiv.classList.add("cell")
            cellDiv.addEventListener("mouseover", () => changeBackgroundColor(`cell_${i}_${j}`))
            rowDiv.appendChild(cellDiv)
        }
    }
    gameContainer.replaceChildren(...children)
}

function changeBackgroundColor(cell) {
    document.getElementById(cell).classList.add("visited")
}

function changeBoardWidth(event) {
    boardSetup(document.getElementById("board-width").value)
}

boardSetup(16)