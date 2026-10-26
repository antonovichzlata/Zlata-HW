import { START_POSITION, PIECES_SRC } from "./constantas.js";
import { getPossibleMoves } from "./moves.js";

const chessboard = document.querySelector('.chessboard');
const turnDOM = document.querySelector('.turn');
const position = START_POSITION;

let turn = 'W';
let activeSquare = null;
let possibleMoves = [];

function drawChessboard() {
    
    chessboard.innerHTML = '';

    turnDOM.innerHTML = `<img src="${turn === 'W' ? PIECES_SRC.P : PIECES_SRC.p}">`

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            const color = (row + col) % 2 ? 'black' : 'white';
            square.classList.add(color);

            if (possibleMoves.filter(move => row === move.row && col === move.col).length) {
                square.classList.add('possible');
            }

            if (activeSquare && activeSquare.col === col && activeSquare.row === row) {
                square.classList.add('selected');
            }

            square.dataset.row = row;
            square.dataset.col = col;

            const pieceFromPosition = position[row][col];

            square.dataset.piece = pieceFromPosition; //?

            if (pieceFromPosition !== '.') {
                const piece = document.createElement('img');
                piece.classList.add('piece');
                piece.src = PIECES_SRC[pieceFromPosition];
                square.append(piece);
            }

            square.onclick = () => {

                if (pieceFromPosition !== '.') {

                    const color = 
                    pieceFromPosition === pieceFromPosition.toUpperCase()
                        ? 'W'
                        : 'b';

                    if (turn === color) {
                        
                        activeSquare = {
                            color: color, //?
                            squareElt: square, //?
                            piece: pieceFromPosition,
                            row: row,
                            col: col
                        }
                        
                        possibleMoves = getPossibleMoves(activeSquare);
                        

                        
                    }  
                } else if (pieceFromPosition === '.' && activeSquare && possibleMoves.filter(move => row === move.row && col === move.col).length) {
                    
                    
                    position[row][col] = activeSquare.piece;
                    position[activeSquare.row][activeSquare.col] = '.';


                    activeSquare = null;

                    turn = turn === 'W' ? 'b' : 'W';

                    
                }
                drawChessboard()
            }

            chessboard.append(square);
        }    
    }
}

drawChessboard()