class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        let newCell = random(this.chooseCell(0));
        if (this.multiply >= 7 && newCell) {
            let x = newCell[0];
            let y = newCell[1];
            let newGrass = new Grass(x, y);
            grassArr.push(newGrass);
            matrix[y][x] = 1;
            this.multiply = 0;
        }
        this.multiply += 3;
    }
    fastmul() {
        let newCell = random(this.chooseCell(3));
        if (newCell) {
            this.multiply += 5;
        }
    }

}
class GrassEater {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 2;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length && matrix[y][x] == character) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    eat() {
        let newCell = random(this.chooseCell(1));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[y][x] = 2;
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move();
        }
        if (this.energy > 8) {
            this.mul();
        }
    }
    move() {
        let newCell = random(this.chooseCell(0));
        if (newCell) {
            matrix[this.y][this.x] = 0;
            let x = newCell[0];
            let y = newCell[1];

            this.energy--;
            this.x = x;
            this.y = y;
            matrix[y][x] = 2;

            if (this.energy < 0) {
                this.die();
            }
        }
    }
    mul() {
        let newCell = random(this.chooseCell(0));
        let x = newCell[0];
        let y = newCell[1];
        matrix[y][x] = 2;
        if (newCell) {
            let newGrassEater = new GrassEater(x, y);
            grassEaterArr.push(newGrassEater);
            this.energy = 2;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}
class Water {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.directions = [
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 2, this.y],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y],
            [this.x - 1, this.y - 1],
            [this.x - 1, this.y - 2],
            [this.x, this.y + 2],
            [this.x, this.y + 1],
            [this.x, this.y],
            [this.x, this.y - 1],
            [this.x, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x + 1, this.y + 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y - 2]
        ];
    }
    chooseCell(character) {
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let newCell = random(this.chooseCell(0));
        if (this.multiply >= 25 && newCell && waterArr.length < 30) {
            let x = newCell[0];
            let y = newCell[1];
            let newWater = new Water(x, y);
            waterArr.push(newWater);
            matrix[y][x] = 3;
            this.multiply = 0;
        }
        this.multiply++;
    }
}
class Fire {
    constructor(x, y) {
        this.x = x;
        this.y = y
        this.energy = 10;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    eat() {
        let newCell = random(this.chooseCell(2).concat(this.chooseCell(3)).concat(this.chooseCell(1)).concat(this.chooseCell(1)).concat(this.chooseCell(1)));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            this.energy++;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[y][x] = 4;
            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            for (let i = 0; i < waterArr.length; i++) {
                if (waterArr[i].x == x && waterArr[i].y == y) {
                    waterArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move();
        }
        if (this.energy > 30) {
            this.mul();
        }
    }
    move() {
        let newCell = random(this.chooseCell(0));
        if (newCell) {
            matrix[this.y][this.x] = 0;
            let x = newCell[0];
            let y = newCell[1];

            this.energy -= 2;
            this.x = x;
            this.y = y;
            matrix[y][x] = 4;

            if (this.energy < 0) {
                this.die();
            }
        }
    }
    mul() {
        let newCell = random(this.chooseCell(0));
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let newFire = new Fire(x, y);
            fireArr.push(newFire);
            this.energy = 2;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i = 0; i < fireArr.length; i++) {
            if (fireArr[i].x == this.x && fireArr[i].y == this.y) {
                fireArr.splice(i, 1);
                break;
            }
        }
    }
}