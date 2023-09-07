class Snake {
    constructor()  {
        this.segments = [
            {x: '5', y: '5'},
            {x: '6', y: '5'},
        ];
    }

    move(direction) {
        const head = Object.assign({}, this.segments[0]);
        switch (this.direction) {
            case "left": 
                head.x -= 1;
                break;
            case "right": 
                head.x += 1;
                break;
            case "up": 
                head.y -= 1;
                break;
            case "down": 
                head.y += 1;
                break;
        }
        this.segments.unshift(head);
        this.segments.pop();
    }

    getHeadLocation() {
        return this.segments[0];
    }

    eatApple(applePosition) {
        const head = this.getHeadLocation();
        if(head.x === applePosition.x && head.y === applePosition.y) {
            return true;
        }   
            return false;
    };

    isCollided(x, y) {
        return this.segments.some(segment => segment.x === x && segment.y === y);
    }
}


export default Snake;