export default function Pieces({ knight, oneBlock }) {
  return (
    <div style={{ width: oneBlock, height: oneBlock }}>
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
    </div>
  );
}
