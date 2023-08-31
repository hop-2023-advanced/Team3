import { useState } from "react";
import Pieces from "./pieces";

export default function ChessPieces({}) {
  const oneBlock = 125;


  const [chessboard, setChessboard] = useState([
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ]);

  return (
    <div>
      {chessboard.map((el, vindex) => (
        <div
          style={{ width: "100%", height: oneBlock, display: "flex" }}
          key={vindex}
        >
          {el.map((el, hindex) =>
            el === "." ? (
              <div style={{ height: oneBlock, width: oneBlock }} key={hindex} />
            ) : (
              <Pieces
                knight={el}
                key={hindex}
                position={{ x: hindex, y: vindex }}
                setChessboard={setChessboard}
                chessboard={chessboard}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}
