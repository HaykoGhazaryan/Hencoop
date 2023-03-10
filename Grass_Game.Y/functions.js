function generator(n, m, fp, sp, tp, ffp, fffp) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix[i] = []
        for (let j = 0; j < m; j++) {
            matrix[i][j] = 0;
        }
    }

    let a = Math.floor(Math.random() * 100);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let a = Math.floor(Math.random() * 100);
            if (a >= 0 && a < fp) {
                matrix[i][j] = 0;
            } else if (a >= (fp) && a < (fp + sp)) {
                matrix[i][j] = 1;
            } else if (a >= (fp + sp) && a < (sp + fp + tp)) {
                matrix[i][j] = 2;
            } else if (a >= (sp + fp + tp) && a < (sp + fp + tp + ffp)) {
                matrix[i][j] = 3;
            } else if (a >= (sp + fp + tp + ffp) && a < (sp + fp + tp + ffp + fffp)) {
                matrix[i][j] = 4;
            }
        }
    }
    return (matrix);
}

function randomGrassEater() {
    for (let i = 0; i < 50; i++) {
        randomx = Math.floor(random(matrix[0].length));
        randomy = Math.floor(random(matrix.length));
        if (matrix[randomy][randomx] == 0) {
            matrix[randomy][randomx] = 2;
            let randomGrassEater = new GrassEater(randomx, randomy);
            grassEaterArr.push(randomGrassEater);
        }
    }
}

function randomWater() {
    for (let i = 0; i < 50; i++) {
        randomx = Math.floor(random(matrix[0].length));
        randomy = Math.floor(random(matrix.length));
        if (matrix[randomy][randomx] == 0 && waterArr.length < 30) {
            matrix[randomy][randomx] = 3;
            let randomWater = new Water(randomx, randomy);
            waterArr.push(randomWater);
        }
    }
}

function randomFire() {
    for (let i = 0; i < 50; i++) {
        randomx = Math.floor(random(matrix[0].length));
        randomy = Math.floor(random(matrix.length));
        if (matrix[randomy][randomx] == 0) {
            matrix[randomy][randomx] = 4;
            let randomFire = new Fire(randomx, randomy);
            fireArr.push(randomFire);
        }
    }
}

function randomGrass() {
    for (let i = 0; i < 50; i++) {
        randomx = Math.floor(random(matrix[0].length));
        randomy = Math.floor(random(matrix.length));
        if (matrix[randomy][randomx] == 0) {
            matrix[randomy][randomx] = 1;
            let randomGrass = new Grass(randomx, randomy);
            grassArr.push(randomGrass);
        }
    }
}

function withoutEnd() {
    if (grassArr.length < 10) {
        randomGrass();
    }
    if (grassEaterArr.length < 10) {
        randomGrassEater();
    }
    if (fireArr.length < 10) {
        randomFire();
    }
}

function themefunc() {
    if (theme == 1) {
        theme = 2;
    } else if (theme == 2) {
        theme = 1;
    }
}