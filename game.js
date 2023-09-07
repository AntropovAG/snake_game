import Board from './Board.js';

class Game {
    constructor(container) {
        this.width = 10;
        this.height = 10;
        this.container = container;
        this.board = new Board(this.width, this.height, this.container);

        this.board.drawBoard();
    }
}

const container = document.querySelector('.container');
new Game(container);