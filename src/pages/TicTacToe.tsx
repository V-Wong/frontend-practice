import { useState } from "react";
import Grid from "../components/tic-tac-toe/Grid";

const TicTacToe = () => {
  const [winner, setWinner] = useState<"O" | "X" | undefined>();

  return (
    <div className="min-h-screen h-full flex flex-col items-center gap-y-1 pt-5 bg-black text-white">
      <h1 className="text-2xl">Tic Tac Toe</h1>
      <Grid m={4} n={4} onWin={setWinner} />
      {winner && <h2>Winner: {winner}</h2>}
    </div>
  );
};

export default TicTacToe;
