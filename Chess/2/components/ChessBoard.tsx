import ChessPieces from "./chessPieces";

export default function ChessBoard() {
  const oneBlock = 125;
  const boardHeight = 8;
  const boardWidth = 8;
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const numsTwo = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(45deg, beige 25%, transparent 25%), linear-gradient(-45deg, beige 25%, transparent 25%), linear-gradient(45deg, transparent 75%, beige 75%), linear-gradient(-45deg, transparent 75%, beige 75%)",
        backgroundSize: `${oneBlock * 2}px ${oneBlock * 2}px`,
        backgroundPosition: `0 0, 0 ${oneBlock}px, ${oneBlock}px -${oneBlock}px, -${oneBlock}px 0px`,
        width: oneBlock * boardWidth,
        height: oneBlock * boardHeight,
        backgroundColor: "brown",
        position: "absolute",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          flexDirection: "column-reverse",
          height: oneBlock * boardHeight,
          width: 0,
        }}
      >
        {nums.map((el) => (
          <div key={el} style={{ height: oneBlock }}>
            <div
              style={{
                fontSize: "22px",
                color: el % 2 === 0 ? "beige" : "brown",
              }}
            >
              {el}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          width: oneBlock * boardWidth,
          top: oneBlock * boardHeight,
        }}
      >
        {numsTwo.map((el) => (
          <div
            key={el}
            style={{
              width: oneBlock,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                fontSize: "25px",
                color: el.charCodeAt(0) % 2 === 0 ? "beige" : "brown",
              }}
            >
              {el}
            </div>
          </div>
        ))}
      </div>
      <ChessPieces />
    </div>
  );
}
// }import React from 'react';
// import React, { useState } from "react";

// const Chessboard: React.FC = () => {
//   const initialChessboard: string[][] = [
//     ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
//     ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
//     ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
//   ];

//   const [chessboard, setChessboard] = useState(initialChessboard);
//   const [selectedPiece, setSelectedPiece] = useState<string | null>(null);

//   const handleSquareClick = (row: number, col: number) => {
//     if (!selectedPiece) {
//       setSelectedPiece(chessboard[row][col]);
//     } else {
//       const updatedChessboard = [...chessboard];
//       updatedChessboard[row][col] = selectedPiece;
//       setSelectedPiece(null);
//       setChessboard(updatedChessboard);
//     }
//   };
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column'
//       }}>
//       {chessboard.map((row, rowIndex) => (
//         <div key={rowIndex}
//         style={{display : "flex"}}
//         className="chessboard-row">
//           {row.map((piece, columnIndex) => (
//             <div key={columnIndex}
//             style={{
//               width: 40,
//               height: 40,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               backgroundColor: 'lightgray',
//               border: '1px solid gray',
//               fontSize: 20
//             }}
//             onClick={() => handleSquareClick(0, 0, rowIndex, columnIndex)}
//             className="chessboard-square">
//               {piece}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Chessboard
