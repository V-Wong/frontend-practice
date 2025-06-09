import { useState } from "react";
import Grid from "../components/tic-tac-toe/Grid";
import Page from "../Page";

const TicTacToe = () => {
  const [winner, setWinner] = useState<"O" | "X" | undefined>();

  return (
    <Page>
      <h1 className="text-2xl">Tic Tac Toe</h1>
      <Grid m={4} n={4} onWin={setWinner} />
      {winner && <h2>Winner: {winner}</h2>}
    </Page>
  );
};

export default TicTacToe;
