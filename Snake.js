class Snake {
    constructor(cells, direction)  {
        this.segments = [
            {x: 6, y: 5},
            {x: 5, y: 5},
            
        ];
        this.cells = cells;
        this.direction = direction;
    }

    move() {
        const newHead = {...this.segments[0]};
        switch (this.direction) {
            case "left": 
            newHead.x -= 1;
            if(newHead.x < 0) newHead.x = this.cells.length - 1;
                break;
            case "right": 
            newHead.x += 1;
            if(newHead.x > this.cells.length - 1) newHead.x = 0;
                break;
            case "up": 
            newHead.y -= 1;
            if(newHead.y < 0) newHead.y = this.cells.length - 1;
                break;
            case "down": 
            newHead.y += 1;
            if(newHead.y > this.cells.length - 1) newHead.y = 0;
                break;
        }
        this.segments.unshift(newHead);
    }

    getHeadLocation() {
        return this.segments[0];
    }

    getTailLocation() {
        return this.segments[this.segments.length - 1];
    }
}


export default Snake;