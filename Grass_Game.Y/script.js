let matrix = [];
matrix = generator(50, 50, 40, 40, 5, 5, 10);

console.log(matrix);


const side = 9; 

const grassArr = [];
const grassEaterArr = [];
const waterArr = [];
const fireArr = [];

let theme = 1;

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("black");
    frameRate(5);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let newGrass = new Grass(x, y);
                grassArr.push(newGrass)
            } else if (matrix[y][x] == 2) {
                let newGrassEater = new GrassEater(x, y);
                grassEaterArr.push(newGrassEater);
            } else if (matrix[y][x] == 3) {
                let newWater = new Water(x, y);
                waterArr.push(newWater);
            } else if (matrix[y][x] == 4) {
                let newFire = new Fire(x, y);
                fireArr.push(newFire);
            }
        }
    }
}

function draw() {
    xm = Math.floor(mouseX / side);
    ym = Math.floor(mouseY / side);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (theme == 1) {
                if (matrix[y][x] == 1) {
                    fill("green");
                } else if (matrix[y][x] == 2) {
                    fill("yellow");
                } else if (matrix[y][x] == 3) {
                    fill("blue");
                } else if (matrix[y][x] == 4) {
                    fill("red");
                } else if (matrix[y][x] == 0) {
                    fill("#acacac");
                } else if (matrix[y][x] == 6) {
                    fill("black");
                }
            } else if (theme == 2) {
                if (matrix[y][x] == 1) {
                    fill("white");
                } else if (matrix[y][x] == 2) {
                    fill("orange");
                } else if (matrix[y][x] == 3) {
                    fill("purple");
                } else if (matrix[y][x] == 4) {
                    fill("pink");
                } else if (matrix[y][x] == 0) {
                    fill("grey");
                } else if (matrix[y][x] == 6) {
                    fill("#acacac");
                }
            }
            rect(x * side, y * side, side, side);
        }
    }

    if (mouseIsPressed && mouseButton === LEFT && xm >= 0 && ym >= 0 && xm < matrix[0].length && ym < matrix.length) {

        matrix[ym][xm] = 6;
        console.log(xm);
        console.log(ym);
    } else if (mouseIsPressed && mouseButton === CENTER && xm >= 0 && ym >= 0 && xm < matrix[0].length && ym < matrix.length && matrix[ym][xm] == 6) {
        matrix[ym][xm] = 0;
        console.log(xm);
        console.log(ym);
    }
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
        grassArr[i].fastmul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat();
    }
    for (let i = 0; i < waterArr.length; i++) {
        waterArr[i].mul();
    }
    for (let i = 0; i < fireArr.length; i++) {
        fireArr[i].eat();
    }
}