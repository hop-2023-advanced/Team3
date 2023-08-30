import { useState } from "react";

export default function Pieces({
  knight,
  position,
  setChessboard,
  chessboard,
}) {
  const oneBlock = 125;

  const [moves, setMoves] = useState([]);

  return (
    <div style={{ width: oneBlock, height: oneBlock }}>
      <button
        onClick={() => {
          if (knight === "p") {
            if (position.y > 0) {
              let newMove = [];

              if (chessboard[position.y - 1][position.x] === ".") {
                newMove.push({ x: position.x, y: position.y - 1 });
              }
              if (
                position.y === 6 &&
                chessboard[position.y - 2][position.x] === "." &&
                chessboard[position.y - 1][position.x] === "."
              ) {
                newMove.push({ x: position.x, y: position.y - 2 });
              }

              if (
                chessboard[position.y - 1][position.x - 1] !== "." &&
                chessboard[position.y - 1][position.x - 1] &&
                chessboard[position.y - 1][position.x - 1].charCodeAt(0) < 97
              ) {
                newMove.push({ x: position.x - 1, y: position.y - 1 });
              }
              if (
                chessboard[position.y - 1][position.x + 1] !== "." &&
                chessboard[position.y - 1][position.x + 1] &&
                chessboard[position.y - 1][position.x + 1].charCodeAt(0) < 97
              ) {
                newMove.push({ x: position.x + 1, y: position.y - 1 });
              }

              setMoves(newMove);
            }
          }

          if (knight === "k") {
            let newMove = [];

            if (
              chessboard[position.y - 1] &&
              chessboard[position.y - 1][position.x].charCodeAt(0) < 97
            ) {
              newMove.push({ x: position.x, y: position.y - 1 });
            }
            if (
              chessboard[position.y] &&
              chessboard[position.y][position.x - 1] &&
              chessboard[position.y][position.x - 1].charCodeAt(0) < 97
            ) {
              newMove.push({ x: position.x - 1, y: position.y });
            }
            if (
              chessboard[position.y - 1] &&
              chessboard[position.y - 1][position.x - 1] &&
              chessboard[position.y - 1][position.x - 1].charCodeAt(0) < 97
            ) {
              newMove.push({ x: position.x - 1, y: position.y - 1 });
            }
            if (
              chessboard[position.y] &&
              chessboard[position.y][position.x + 1] &&
              chessboard[position.y][position.x + 1].charCodeAt(0) < 97
            ) {
              newMove.push({ x: position.x + 1, y: position.y });
            }
            if (
              chessboard[position.y - 1] &&
              chessboard[position.y - 1][position.x + 1] &&
              chessboard[position.y - 1][position.x + 1].charCodeAt(0) < 97
            ) {
              newMove.push({ x: position.x + 1, y: position.y - 1 });
            }
            if (
              chessboard[position.y + 1] &&
              chessboard[position.y + 1][position.x - 1] &&
              chessboard[position.y + 1][position.x - 1].charCodeAt(0) < 97
            ) {
              newMove.push({ x: position.x - 1, y: position.y + 1 });
            }
            if (
              chessboard[position.y + 1] &&
              chessboard[position.y + 1][position.x + 1] &&
              chessboard[position.y + 1][position.x + 1].charCodeAt(0) < 97
            ) {
              newMove.push({ x: position.x + 1, y: position.y + 1 });
            }
            if (
              chessboard[position.y + 1] &&
              chessboard[position.y + 1][position.x].charCodeAt(0) < 97
            ) {
              newMove.push({ x: position.x, y: position.y + 1 });
            }

            setMoves(newMove);
          }

          if (knight === "P") {
            if (position.y === 1) {
              setMoves([
                { x: position.x, y: position.y + 1 },
                { x: position.x, y: position.y + 2 },
              ]);
            } else {
              setMoves([{ x: position.x, y: position.y + 1 }]);
            }
          }
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
