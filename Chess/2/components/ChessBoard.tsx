import ChessPieces from "./chessPieces";

export default function ChessBoard() {
  const oneBlock = 80
  const boardHeight = 8
  const boardWidth = 8
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
      }}
    >
      <ChessPieces oneBlock={oneBlock}/>
    </div>
  );
}
