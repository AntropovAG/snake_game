import Board from './Board.js';
import Snake from './Snake.js';
import Apple from './Apple.js';

class Game {
    constructor(container) {
        this.width = 10;
        this.height = 10;
        this.container = container;
        this.direction = "right";
        this.board = new Board(this.width, this.height, this.container);
        this.apple = new Apple();
        this.cells = this.board.cells;
        this.snake = new Snake(this.cells, this.direction);
        this.board.drawBoard();
        this.drawSnake();
        this.generateApple();
        document.addEventListener('keydown', this.control.bind(this));
        this.intervalId = setInterval(() => this.update(), 500);

    }

    drawSnake() {
        this.snake.segments.forEach(segment => {
            this.cells[segment.y][segment.x].classList.add("snake");
        });
    }

    _drawApple() {
        this.cells[this.apple.position.y][this.apple.position.x].classList.add("apple");
    }

    generateApple() {
        let appleX, appleY;

        do {
            appleX = Math.floor(Math.random() * this.cells.length);
            appleY = Math.floor(Math.random() * this.cells.length);
        }
        while (this.snake.segments.some(segment => segment.x == this.apple.position.x && segment.y == this.apple.position.x));

        this.apple.setPosition(appleX, appleY);
        this._drawApple()
    }

    hideApple() {
        this.cells[this.apple.position.y][this.apple.position.x].classList.remove("apple");
    }

    drawSnakeHead() {
        const snakeHead = this.snake.getHeadLocation();
        this.cells[snakeHead.y][snakeHead.x].classList.add("snake");
    }

    hideSnakeTail() {
        const snakeTail = this.snake.getTailLocation();
        this.cells[snakeTail.y][snakeTail.x].classList.remove("snake");
    }

    update() {
        this.snake.direction = this.direction;
        this.snake.move();
        this.drawSnakeHead();
        let snake = this.snake;
        if(this.snake.segments.some(function (segment, index) {
            if (index === 0) return false;
            return (segment.x === snake.segments[0].x && segment.y === snake.segments[0].y)
        }
        )) {
            this.endGame();
        }

        if(this.snake.segments[0].x === this.apple.position.x && this.snake.segments[0].y === this.apple.position.y) {
            this.hideApple();
            this.generateApple();
            this._drawApple();
        } else {
            this.hideSnakeTail();
            this.snake.segments.pop();
        }
    }

    control(evt) {
        if (true) {
            switch (evt.key) {
                case 'ArrowUp':
                    if (this.direction !== 'down') {
                        this.direction = 'up';
                    }
                    break;
                case 'ArrowDown':
                    if (this.direction !== 'up') {
                        this.direction = 'down';
                    }
                    break;
                case 'ArrowLeft':
                    if (this.direction !== 'right') {
                        this.direction = 'left';
                    }
                    break;
                case 'ArrowRight':
                    if (this.direction !== 'left') {
                        this.direction = 'right';
                    }
                    break;
            }
        }
    }

    endGame() {
        clearInterval(this.intervalId);
        console.log('endGame');

    }

}

const container = document.querySelector('.container');
new Game(container);