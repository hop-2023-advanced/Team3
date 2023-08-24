import ChessPieces from "./chessPieces";

export default function ChessBoard() {
  const oneBlock = 80;
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
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          flexDirection: "column-reverse",
          height: oneBlock * boardHeight,
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
          height: oneBlock * boardHeight,
          alignItems: "flex-end",
        }}
      >
        {numsTwo.map((el) => (
          <div
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
