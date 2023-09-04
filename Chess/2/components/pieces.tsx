import { useState } from "react";
import { Pawn } from "./knight/pawn";
import { King } from "./knight/king";
import { Horse } from "./knight/horse";
import { Bishop } from "./knight/bishop";

export default function Pieces({
  knight,
  position,
  setChessboard,
  chessboard,
}) {
  const oneBlock = 125;
  const [moves, setMoves] = useState([]);
  const [turn , setTurn] = useState("white")

  const toggleTurn = () => {
    setTurn(turn === "white" ? "black" : "white");
  };

  return (
    <div style={{ width: oneBlock, height: oneBlock }}>
      <button
        onClick={() => {
          toggleTurn
          let newMove = [];
          const props = { chessboard, position, knight, setMoves, newMove , turn };
          if(turn === "white"){
            setTurn("black")
          } else {
            setTurn("white")
          }
          Pawn(props);
          King(props);
          Horse(props);
          Bishop(props);
        }}>
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
              : knight === "K" 
              ? "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png"
              : "none"
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
              backgroundColor: "black",
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
            }}
          />
        </div>
      ))}
    </div>
  );
}