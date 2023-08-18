import ChessBoard from "@/components/ChessBoard";

export default function Home() {
  const oneBlock = 70;
  const boardWidth = 8;
  const boardHeight = 8;
  return (
    <main className="flex justify-center">
      <ChessBoard
        oneBlock={oneBlock}
        boardHeight={boardHeight}
        boardWidth={boardWidth}
      />
    </main>
  );
}
