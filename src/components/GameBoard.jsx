import React, { useState } from "react";

const GameBoard = ({ onSlelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(row, col) {
  //     setGameBoard((prevGameBoard) => {
  //       const gameBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //       gameBoard[row][col] = activePlayerSymbol;
  //       return gameBoard;
  //     });
  //     onSlelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSlelectSquare(rowIndex, colIndex)}
                  disabled={col !== null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
