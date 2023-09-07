export const Horse = ({
  knight,
  position,
  chessboard,
  setMoves,
  newMove,
  turn,
}) => {
  if (turn === "white") {
    if (knight === "n") {
      if (
        chessboard[position.y - 2] &&
        chessboard[position.y - 2][position.x + 1] &&
        chessboard[position.y - 2][position.x + 1].charCodeAt(0) < 97
      ) {
        newMove.push({ x: position.x + 1, y: position.y - 2 });
      }
      if (
        chessboard[position.y - 2] &&
        chessboard[position.y - 2][position.x - 1] &&
        chessboard[position.y - 2][position.x - 1].charCodeAt(0) < 97
      ) {
        newMove.push({ x: position.x - 1, y: position.y - 2 });
      }
      if (
        chessboard[position.y + 2] &&
        chessboard[position.y + 2][position.x - 1] &&
        chessboard[position.y + 2][position.x - 1].charCodeAt(0) < 97
      ) {
        newMove.push({ x: position.x - 1, y: position.y + 2 });
      }
      if (
        chessboard[position.y + 2] &&
        chessboard[position.y + 2][position.x + 1] &&
        chessboard[position.y + 2][position.x + 1].charCodeAt(0) < 97
      ) {
        newMove.push({ x: position.x + 1, y: position.y + 2 });
      }
      if (
        chessboard[position.y - 1] &&
        chessboard[position.y - 1][position.x - 2] &&
        chessboard[position.y - 1][position.x - 2].charCodeAt(0) < 97
      ) {
        newMove.push({ x: position.x - 2, y: position.y - 1 });
      }
      if (
        chessboard[position.y - 1] &&
        chessboard[position.y - 1][position.x + 2] &&
        chessboard[position.y - 1][position.x + 2].charCodeAt(0) < 97
      ) {
        newMove.push({ x: position.x + 2, y: position.y - 1 });
      }
      if (
        chessboard[position.y + 1] &&
        chessboard[position.y + 1][position.x + 2] &&
        chessboard[position.y + 1][position.x + 2].charCodeAt(0) < 97
      ) {
        newMove.push({ x: position.x + 2, y: position.y + 1 });
      }
      if (
        chessboard[position.y + 1] &&
        chessboard[position.y + 1][position.x - 2] &&
        chessboard[position.y + 1][position.x - 2].charCodeAt(0) < 97
      ) {
        newMove.push({ x: position.x - 2, y: position.y + 1 });
      }

      setMoves(newMove);
    }
  } else {
    if (knight === "N") {
      if (
        chessboard[position.y - 2] &&
        chessboard[position.y - 2][position.x + 1] &&
        (chessboard[position.y - 2][position.x + 1].charCodeAt(0) >= 97 ||
          chessboard[position.y - 2][position.x + 1] === ".")
      ) {
        newMove.push({ x: position.x + 1, y: position.y - 2 });
      }
      if (
        chessboard[position.y - 2] &&
        chessboard[position.y - 2][position.x - 1] &&
        (chessboard[position.y - 2][position.x - 1].charCodeAt(0) >= 97 ||
          chessboard[position.y - 2][position.x - 1] === ".")
      ) {
        newMove.push({ x: position.x - 1, y: position.y - 2 });
      }
      if (
        chessboard[position.y + 2] &&
        chessboard[position.y + 2][position.x - 1] &&
        (chessboard[position.y + 2][position.x - 1].charCodeAt(0) >= 97 ||
          chessboard[position.y + 2][position.x - 1] === ".")
      ) {
        newMove.push({ x: position.x - 1, y: position.y + 2 });
      }
      if (
        chessboard[position.y + 2] &&
        chessboard[position.y + 2][position.x + 1] &&
        (chessboard[position.y + 2][position.x + 1].charCodeAt(0) >= 97 ||
          chessboard[position.y + 2][position.x + 1] === ".")
      ) {
        newMove.push({ x: position.x + 1, y: position.y + 2 });
      }
      if (
        chessboard[position.y - 1] &&
        chessboard[position.y - 1][position.x - 2] &&
        (chessboard[position.y - 1][position.x - 2].charCodeAt(0) >= 97 ||
          chessboard[position.y - 1][position.x - 2] === ".")
      ) {
        newMove.push({ x: position.x - 2, y: position.y - 1 });
      }
      if (
        chessboard[position.y - 1] &&
        chessboard[position.y - 1][position.x + 2] &&
        (chessboard[position.y - 1][position.x + 2].charCodeAt(0) >= 97 ||
          chessboard[position.y - 1][position.x + 2] === ".")
      ) {
        newMove.push({ x: position.x + 2, y: position.y - 1 });
      }
      if (
        chessboard[position.y + 1] &&
        chessboard[position.y + 1][position.x + 2] &&
        (chessboard[position.y + 1][position.x + 2].charCodeAt(0) >= 97 ||
          chessboard[position.y + 1][position.x + 2] === ".")
      ) {
        newMove.push({ x: position.x + 2, y: position.y + 1 });
      }
      if (
        chessboard[position.y + 1] &&
        chessboard[position.y + 1][position.x - 2] &&
        (chessboard[position.y + 1][position.x - 2].charCodeAt(0) >= 97 ||
          chessboard[position.y + 1][position.x - 2] === ".")
      ) {
        newMove.push({ x: position.x - 2, y: position.y + 1 });
      }

      setMoves(newMove);
    }
  }
};
