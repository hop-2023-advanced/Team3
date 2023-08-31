export const King = ({
  knight,
  position,
  chessboard,
  setMoves,
  newMove,
  turn,
}) => {
  if (turn === "white") {
    if (knight === "k") {
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
  } else {
    if (knight === "K") {
      if (
        chessboard[position.y - 1] &&
        (chessboard[position.y - 1][position.x].charCodeAt(0) >= 97 ||
          chessboard[position.y - 1][position.x] === ".")
      ) {
        newMove.push({ x: position.x, y: position.y - 1 });
      }
      if (
        chessboard[position.y] &&
        chessboard[position.y][position.x - 1] &&
        (chessboard[position.y][position.x - 1].charCodeAt(0) >= 97 ||
          chessboard[position.y][position.x - 1] === ".")
      ) {
        newMove.push({ x: position.x - 1, y: position.y });
      }
      if (
        chessboard[position.y - 1] &&
        chessboard[position.y - 1][position.x - 1] &&
        (chessboard[position.y - 1][position.x - 1].charCodeAt(0) >= 97 ||
          chessboard[position.y - 1][position.x - 1] === ".")
      ) {
        newMove.push({ x: position.x - 1, y: position.y - 1 });
      }
      if (
        chessboard[position.y] &&
        chessboard[position.y][position.x + 1] &&
        (chessboard[position.y][position.x + 1].charCodeAt(0) >= 97 ||
          chessboard[position.y][position.x + 1] === ".")
      ) {
        newMove.push({ x: position.x + 1, y: position.y });
      }
      if (
        chessboard[position.y - 1] &&
        chessboard[position.y - 1][position.x + 1] &&
        (chessboard[position.y - 1][position.x + 1].charCodeAt(0) >= 97 ||
          chessboard[position.y - 1][position.x + 1] === ".")
      ) {
        newMove.push({ x: position.x + 1, y: position.y - 1 });
      }
      if (
        chessboard[position.y + 1] &&
        chessboard[position.y + 1][position.x - 1] &&
        (chessboard[position.y + 1][position.x - 1].charCodeAt(0) >= 97 ||
          chessboard[position.y + 1][position.x - 1] === ".")
      ) {
        newMove.push({ x: position.x - 1, y: position.y + 1 });
      }
      if (
        chessboard[position.y + 1] &&
        chessboard[position.y + 1][position.x + 1] &&
        (chessboard[position.y + 1][position.x + 1].charCodeAt(0) >= 97 ||
          chessboard[position.y + 1][position.x + 1] === ".")
      ) {
        newMove.push({ x: position.x + 1, y: position.y + 1 });
      }
      if (
        chessboard[position.y + 1] &&
        (chessboard[position.y + 1][position.x].charCodeAt(0) >= 97 ||
          chessboard[position.y + 1][position.x] === ".")
      ) {
        newMove.push({ x: position.x, y: position.y + 1 });
      }

      setMoves(newMove);
    }
  }
};
