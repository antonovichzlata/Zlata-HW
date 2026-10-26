export function getPossibleMoves(activeSquare) {
    const {row, col, piece} = activeSquare;
    const possibleMoves = [];
    
    switch (piece.toLowerCase()) {
        case 'r':
            for (let posCol = 0; posCol <= 7; posCol++) {
                if (posCol !== col) {
                        possibleMoves.push({
                        row: row,
                        col: posCol
                    })
                }
            }
            for (let posRow = 0; posRow <= 7; posRow++) {
                if (posRow !== row) {
                        possibleMoves.push({
                        row: posRow,
                        col: col
                    })
                }
            }
            break
        case 'b':
            const directions = [
                [1, 1],
                [-1, -1],
                [1, -1],
                [-1, 1]
            ]
            for (const [rowMove, colMove] of directions) {
//console.log('direction:', rowMove, colMove);
                for (let move = 1; move <= 7; move++) {
                    const posRow = row + rowMove * move
                    const posCol = col + colMove * move

                    if (posRow !== row && posCol !== col) {
                        possibleMoves.push({
                        row: posRow,
                        col: posCol
                    })
                }
            }
        }
            break
    }

    return possibleMoves
}