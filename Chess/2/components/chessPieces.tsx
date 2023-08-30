import { useState } from "react";
import Pieces from "./pieces";

export default function ChessPieces({}) {
  const oneBlock = 125;
  const knights = [
    {
      id: "wp1",
      color: "white",
      position: { top: 7, left: 1 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
    },
    {
      id: "wp2",
      color: "white",
      position: { top: 7, left: 2 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
    },
    {
      id: "wp3",
      color: "white",
      position: { top: 7, left: 3 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
    },
    {
      id: "wp4",
      color: "white",
      position: { top: 7, left: 4 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
    },
    {
      id: "wp5",
      color: "white",
      position: { top: 7, left: 5 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
    },
    {
      id: "wp6",
      color: "white",
      position: { top: 7, left: 6 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
    },
    {
      id: "wp7",
      color: "white",
      position: { top: 7, left: 7 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
    },
    {
      id: "wp8",
      color: "white",
      position: { top: 7, left: 8 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png",
    },
    {
      id: "bp1",
      color: "black",
      position: { top: 2, left: 1 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "bp2",
      color: "black",
      position: { top: 2, left: 2 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "bp3",
      color: "black",
      position: { top: 2, left: 3 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "bp4",
      color: "black",
      position: { top: 2, left: 4 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "bp5",
      color: "black",
      position: { top: 2, left: 5 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "bp6",
      color: "black",
      position: { top: 2, left: 5 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "bp7",
      color: "black",
      position: { top: 2, left: 6 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "bp8",
      color: "black",
      position: { top: 2, left: 7 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "bp1",
      color: "black",
      position: { top: 2, left: 8 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png",
    },
    {
      id: "wbr",
      color: "white",
      position: { top: 8, left: 3 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png",
    },
    {
      id: "wbl",
      color: "white",
      position: { top: 8, left: 6 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wb.png",
    },
    {
      id: "bbl",
      color: "black",
      position: { top: 1, left: 3 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png",
    },
    {
      id: "bbr",
      color: "black",
      position: { top: 1, left: 6 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png",
    },

    {
      id: "wnl",
      color: "white",
      position: { top: 8, left: 2 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png",
    },
    {
      id: "wnr",
      color: "white",
      position: { top: 8, left: 7 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png",
    },
    {
      id: "bnl",
      color: "black",
      position: { top: 1, left: 2 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png",
    },
    {
      id: "bnr",
      color: "black",
      position: { top: 1, left: 7 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png",
    },
    {
      id: "wrl",
      color: "white",
      position: { top: 8, left: 1 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png",
    },
    {
      id: "wrr",
      color: "white",
      position: { top: 8, left: 8 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png",
    },
    {
      id: "brl",
      color: "black",
      position: { top: 1, left: 1 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png",
    },
    {
      id: "brr",
      color: "black",
      position: { top: 1, left: 8 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png",
    },
    {
      id: "wQ",
      color: "white",
      position: { top: 8, left: 4 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png",
    },
    {
      id: "bQ",
      color: "black",
      position: { top: 1, left: 4 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png",
    },
    {
      id: "wK",
      color: "white",
      position: { top: 8, left: 5 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png",
    },
    {
      id: "bK",
      color: "white",
      position: { top: 1, left: 5 },
      URl: "https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png",
    },
  ];

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
