class Board {
    constructor(height, width, boardContainer) {
        this.height = height;
        this.width = width;
        this.container = boardContainer;
    }

    drawBoard() {
        console.log("drawing board");
        for (let i = 0; i < this.width; i++) {
            for(let j = 0; j < this.height; j++) {
                const cell = document.createElement("div");
                cell.classList.add('cell');
                cell.dataset.x = String(i);
                cell.dataset.y = String(j);
                this.container.appendChild(cell);
            }
        }
    }

}

export default Board;