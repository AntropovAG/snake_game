import Board from './Board.js';
import Snake from './Snake.js';
import Apple from './Apple.js';

class Game {
    constructor(container) {
        this.width = 10;
        this.height = 10;
        this.container = container;
        this.direction = "left";
        this.board = new Board(this.width, this.height, this.container);
        this.snake = new Snake();
        this.apple = new Apple(this.width, this.height,);

        this.board.drawBoard();
        this.draw();
    }


    draw() {
        const cells = this.container.querySelectorAll('.cell');
        for (let i = 0; i < cells.length; i++){
            for (let j = 0; j < this.snake.segments.length; j++) {
                if(cells[i].dataset.x === this.snake.segments[j].x && cells[i].dataset.y === this.snake.segments[j].y) {
                    cells[i].classList.add("snake");
                }
            }
        }

        for (let i = 0; i < cells.length; i++){
            if(cells[i].dataset.x === this.apple.position.x && cells[i].dataset.y === this.apple.position.y) {
                cells[i].classList.add("apple");
            }
        }
    }
}

const container = document.querySelector('.container');
new Game(container);