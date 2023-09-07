export const Pawn = ({
  knight,
  position,
  chessboard,
  setMoves,
  newMove,
  turn,
}) => {
  if (turn === "white") {
    if (knight === "p") {
      if (position.y > 0) {
        if (chessboard[position.y - 1][position.x] === ".") {
          newMove.push({ x: position.x, y: position.y - 1 });
          if (
            position.y === 6 &&
            chessboard[position.y - 2][position.x] === "."
          ) {
            newMove.push({ x: position.x, y: position.y - 2 });
          }
        }

        if (
          chessboard[position.y - 1][position.x - 1] &&
          chessboard[position.y - 1][position.x - 1] !== "." &&
          chessboard[position.y - 1][position.x - 1].charCodeAt(0) < 97
        ) {
          newMove.push({ x: position.x - 1, y: position.y - 1 });
        }
        if (
          chessboard[position.y - 1][position.x + 1] &&
          chessboard[position.y - 1][position.x + 1] !== "." &&
          chessboard[position.y - 1][position.x + 1].charCodeAt(0) < 97
        ) {
          newMove.push({ x: position.x + 1, y: position.y - 1 });
        }

        setMoves(newMove);
      }
    }
  } else {
    if (knight === "P") {
      if (position.y > 0) {
        if (chessboard[position.y + 1][position.x] === ".") {
          newMove.push({ x: position.x, y: position.y + 1 });
          if (
            position.y === 1 &&
            chessboard[position.y + 2][position.x] === "."
          ) {
            newMove.push({ x: position.x, y: position.y + 2 });
          }
        }

        if (
          chessboard[position.y + 1][position.x - 1] &&
          chessboard[position.y + 1][position.x - 1].charCodeAt(0) >= 97
        ) {
          newMove.push({ x: position.x - 1, y: position.y + 1 });
        }
        if (
          chessboard[position.y + 1][position.x + 1] &&
          chessboard[position.y + 1][position.x + 1].charCodeAt(0) >= 97
        ) {
          newMove.push({ x: position.x + 1, y: position.y + 1 });
        }

        setMoves(newMove);
      }
    }
  }
};
