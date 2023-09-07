import ChessPieces from "./chessPieces";

export default function ChessBoard({ turn, setTurn }) {
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
        backgroundPosition: `0 0, 0 ${oneBlock}px, ${oneBlock}px ${oneBlock}px, ${oneBlock}px 0px`,
        width: oneBlock * boardWidth,
        height: oneBlock * boardHeight,
        backgroundColor: "brown",
      }}
    >
      <div style={{ position: "absolute" }}>
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
            width: oneBlock * boardWidth,
            top: oneBlock * boardHeight,
          }}
        >
          {numsTwo.map((el, index) => (
            <div
              key={el}
              style={{
                left: oneBlock * index,
                position: "absolute",
                width: oneBlock,
                display: "flex",
                justifyContent: "flex-end",
                bottom: 0,
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
        <ChessPieces turn={turn} setTurn={setTurn} />
      </div>
    </div>
  );
}
