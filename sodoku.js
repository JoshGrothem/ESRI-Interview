/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    for (let i = 0; i < board.length; i++) {
        let row = new Set();
        let col = new Set();
        let box = new Set();
        for (let j = 0; j < board.length; j++) {
            let r = board[i][j];
            let c = board[j][i];
            let b = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)]

            if (r != ".") {
                if (row.has(r)) {
                    return false;
                }
                row.add(r);
            }
            if (c != ".") {
                if (col.has(c)) {
                    return false;
                }
                col.add(c);
            }
            if (b != ".") {
                if (box.has(b)) {
                    return false;
                }
                box.add(b);
            }

        }
    }

    return true;
};