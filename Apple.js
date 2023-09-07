class Apple {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.position = {x: '2', y: '2'};
    }

    setPosition(x, y) {
        this.position.x = toString(x);
        this.position.y = toString(y);
    }
}

export default Apple;