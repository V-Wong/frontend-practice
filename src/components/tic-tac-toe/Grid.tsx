import { useState } from "react";

type GridProps = {
  m: number;
  n: number;
  onWin: (winner: Turn) => void;
};
type Turn = "X" | "O";
type GridValue = Turn | undefined;

const determineWinner = (
  grid: GridValue[],
  m: number,
  n: number,
): Turn | undefined => {
  for (let i = 0; i < m * n; i += n) {
    const row = grid.filter((_, index) => i <= index && index < i + n);
    if (row.every((cell) => cell && cell === row[0])) {
      return row[0];
    }
  }

  for (let j = 0; j < n; j += 1) {
    const col = grid.filter((_, index) => (index - j) % n === 0);
    if (col.every((cell) => cell && cell === col[0])) {
      return col[0];
    }
  }

  const mainDiagonal: GridValue[] = [];
  for (let i = 0; i < m * n; i += n + 1) {
    mainDiagonal.push(grid[i]);
  }
  if (mainDiagonal.every((cell) => cell && cell === mainDiagonal[0])) {
    return mainDiagonal[0];
  }

  const offDiagonal: GridValue[] = [];
  for (let i = m * n - n; i >= n - 1; i -= n - 1) {
    offDiagonal.push(grid[i]);
  }
  if (offDiagonal.every((cell) => cell && cell === offDiagonal[0])) {
    return offDiagonal[0];
  }

  return undefined;
};

const Grid = ({ m, n, onWin }: GridProps) => {
  const [grid, setGrid] = useState<GridValue[]>(
    new Array(m * n).fill(undefined),
  );
  const [turn, setTurn] = useState<Turn>("O");

  const handleClick = (index: number) => {
    if (grid[index] !== undefined) {
      return;
    }

    const updatedGrid = grid.map((cellValue, i) =>
      i === index ? turn : cellValue,
    );

    setGrid(updatedGrid);
    setTurn(turn === "X" ? "O" : "X");

    const maybeWinner = determineWinner(updatedGrid, m, n);
    if (maybeWinner) {
      onWin(maybeWinner);
    }
  };

  return (
    <div
      className={`grid w-80 h-80`}
      style={{
        gridTemplateRows: `repeat(${m}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
      }}
    >
      {grid.map((cellValue, index) => (
        <button
          className="bg-black border-white border-2 text-white"
          role="button"
          key={index}
          onClick={() => handleClick(index)}
        >
          {cellValue}
        </button>
      ))}
    </div>
  );
};

export default Grid;
