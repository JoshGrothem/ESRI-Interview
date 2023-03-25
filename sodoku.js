/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    //checking row and col for validity
    for (let i = 0; i < board.length; i++) {
        let row = new Set();
        let col = new Set();
        for (let j = 0; j < board.length; j++) {
            let r = board[i][j];
            let c = board[j][i];

            if (r != ".") {
                if (row.has(r)) {
                    return false;
                }
                row.add(r);
                if (c != ".") {
                    if (col.has(c)) {
                        return false;
                    }
                    col.add(c);
                }
            }
        }
    }

    //checking 3x3 boxes
    for (let i = 0; i < 9 - 2; i += 3) {
        let box = new Set();
        for (let j = 0; j < 9 - 7; j += 3) {
            for (let k = 0; k < 3; k++) {
                for (let l = 0; l < 3; l++) {
                    let b = board[i + k][j + l];
                    if (b != ".") {
                        if (box.has(b)) {
                            return false;
                        }
                        box.add(b);
                    }
                }
            }
        }
    }

    return true;
};