import ChessBoard from "@/components/ChessBoard";
import { useState } from "react";

export default function Home() {
  const [turn, setTurn] = useState("white");
  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <div className="text-7xl font-mono text-white">
        THE ULTIIMATE CHESS GAME
      </div>
      <ChessBoard turn={turn} setTurn={setTurn} />
      <div className={`text-4xl font-mono text-${turn}`}>turn: {turn}</div>
    </main>
  );
}
