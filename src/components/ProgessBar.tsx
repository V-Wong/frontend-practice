import useProgress from "../hooks/useProgress";

type ProgressBarProps = {
  duration: number;
};

const ProgressBar = ({ duration }: ProgressBarProps) => {
  const progress = useProgress(duration);

  return (
    <div className="h-2 w-96 border border-white rounded-full">
      <div
        style={{ transform: `scaleX(${progress}%)` }}
        className="h-full bg-white origin-left"
      ></div>
    </div>
  );
};

export default ProgressBar;
