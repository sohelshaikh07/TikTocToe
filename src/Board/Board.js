import React, { useState } from 'react'
import Square from '../Square/Square'
import '../App.css'

const Board = () => {
    const [state, setState] = useState({
        squares: Array(9).fill(null),
        xIsNext: true
    });



    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    const handleClick = (i) => {
        let shalowCopy = state.squares.slice();//for maiking shallow copy of original array
        shalowCopy[i] = state.xIsNext ? "X" : "O";






        setState({
            squares: shalowCopy,
            xIsNext: !state.xIsNext
        });
    }


    const renderSquare = (i) => {
        return (
            <Square
                value={state.squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }
    const winner = calculateWinner(state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (state.xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div>{
                
                status
            }</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </>
    )
}

export default Board
