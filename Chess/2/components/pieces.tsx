import { useState } from "react";
import { Pawn } from "./knight/pawn";
import { King } from "./knight/king";
import { Horse } from "./knight/horse";
import { Bishop } from "./knight/bishop";
import { Rook } from "./knight/rook";
import { Queen } from "./knight/queen";

export default function Pieces({
  knight,
  position,
  setChessboard,
  chessboard,
  turn,
  setTurn,
}) {
  const oneBlock = 125;

  const [moves, setMoves] = useState([]);

  return (
    <div style={{ width: oneBlock, height: oneBlock }}>
      <button
        onClick={() => {
          let newMove = [];

          const props = {
            chessboard,
            position,
            knight,
            setMoves,
            newMove,
            turn,
          };

          Pawn(props);
          King(props);
          Horse(props);
          Bishop(props);
          Rook(props);
          Queen(props);
        }}
      >
        <img
          src={
            knight === "p"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
              : knight === "P"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
              : knight === "r"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png"
              : knight === "R"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
              : knight === "n"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
              : knight === "N"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
              : knight === "b"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png"
              : knight === "B"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png"
              : knight === "q"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png"
              : knight === "Q"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png"
              : knight === "k"
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png"
              : "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png"
          }
        />
      </button>
      {moves.map((index, el) => (
        <div
          style={{
            height: oneBlock,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: oneBlock,
            position: "absolute",
            top: oneBlock * index.y,
            left: oneBlock * index.x,
          }}
          key={el}
        >
          <button
            style={{
              backgroundColor:
                chessboard[index.y][index.x] === "." ? "black" : "yellow",
              opacity: 0.5,
              height: oneBlock * 0.8,
              width: oneBlock * 0.8,
              borderRadius: 50,
              top: 0,
            }}
            onClick={() => {
              const newBoard = [...chessboard];

              newBoard[position.y][position.x] = ".";
              newBoard[index.y][index.x] = knight;

              setChessboard(newBoard);
              if (turn === "white") {
                setTurn("black");
              } else {
                setTurn("white");
              }
            }}
          />
        </div>
      ))}
    </div>
  );
}
