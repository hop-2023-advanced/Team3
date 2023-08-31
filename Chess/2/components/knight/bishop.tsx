export const Bishop = ({
  knight,
  position,
  chessboard,
  setMoves,
  newMove,
  turn,
}) => {
  if (turn === "white") {
    if (knight === "b") {
      for (
        let i = 1;
        chessboard[position.y - i] &&
        chessboard[position.y - i][position.x - i] &&
        chessboard[position.y - i][position.x - i].charCodeAt(0) < 97;
        i++
      ) {
        newMove.push({ x: position.x - i, y: position.y - i });
        if (
          chessboard[position.y - i][position.x - i].charCodeAt(0) >= 65 &&
          chessboard[position.y - i][position.x - i].charCodeAt(0) <= 90
        ) {
          break;
        }
      }
      for (
        let i = 1;
        chessboard[position.y + i] &&
        chessboard[position.y + i][position.x + i] &&
        chessboard[position.y + i][position.x + i].charCodeAt(0) < 97;
        i++
      ) {
        newMove.push({ x: position.x + i, y: position.y + i });
        if (
          chessboard[position.y + i][position.x + i].charCodeAt(0) >= 65 &&
          chessboard[position.y + i][position.x + i].charCodeAt(0) <= 90
        ) {
          break;
        }
      }
      for (
        let i = 1;
        chessboard[position.y - i] &&
        chessboard[position.y - i][position.x + i] &&
        chessboard[position.y - i][position.x + i].charCodeAt(0) < 97;
        i++
      ) {
        newMove.push({ x: position.x + i, y: position.y - i });
        if (
          chessboard[position.y - i][position.x + i].charCodeAt(0) >= 65 &&
          chessboard[position.y - i][position.x + i].charCodeAt(0) <= 90
        ) {
          break;
        }
      }
      for (
        let i = 1;
        chessboard[position.y + i] &&
        chessboard[position.y + i][position.x - i] &&
        chessboard[position.y + i][position.x - i].charCodeAt(0) < 97;
        i++
      ) {
        newMove.push({ x: position.x - i, y: position.y + i });
        if (
          chessboard[position.y + i][position.x - i].charCodeAt(0) >= 65 &&
          chessboard[position.y + i][position.x - i].charCodeAt(0) <= 90
        ) {
          break;
        }
      }

      setMoves(newMove);
    }
  } else {
    if (knight === "B") {
      for (
        let i = 1;
        chessboard[position.y - i] &&
        chessboard[position.y - i][position.x - i] &&
        (chessboard[position.y - i][position.x - i].charCodeAt(0) >= 97 ||
          chessboard[position.y - i][position.x - i] === ".");
        i++
      ) {
        newMove.push({ x: position.x - i, y: position.y - i });
        if (chessboard[position.y - i][position.x - i].charCodeAt(0) >= 97) {
          break;
        }
      }
      for (
        let i = 1;
        chessboard[position.y + i] &&
        chessboard[position.y + i][position.x + i] &&
        (chessboard[position.y + i][position.x + i].charCodeAt(0) >= 97 ||
          chessboard[position.y + i][position.x + i] === ".");
        i++
      ) {
        newMove.push({ x: position.x + i, y: position.y + i });
        if (chessboard[position.y + i][position.x + i].charCodeAt(0) >= 97) {
          break;
        }
      }
      for (
        let i = 1;
        chessboard[position.y - i] &&
        chessboard[position.y - i][position.x + i] &&
        (chessboard[position.y - i][position.x + i].charCodeAt(0) >= 97 ||
          chessboard[position.y - i][position.x + i] === ".");
        i++
      ) {
        newMove.push({ x: position.x + i, y: position.y - i });
        if (chessboard[position.y - i][position.x + i].charCodeAt(0) >= 97) {
          break;
        }
      }
      for (
        let i = 1;
        chessboard[position.y + i] &&
        chessboard[position.y + i][position.x - i] &&
        (chessboard[position.y + i][position.x - i].charCodeAt(0) >= 97 ||
          chessboard[position.y + i][position.x - i] === ".");
        i++
      ) {
        newMove.push({ x: position.x - i, y: position.y + i });
        if (chessboard[position.y + i][position.x - i].charCodeAt(0) >= 97) {
          break;
        }
      }

      setMoves(newMove);
    }
  }
};
