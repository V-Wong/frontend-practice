import ProgressBar from "../components/ProgessBar";

const Progress = () => (
  <div className="min-h-screen h-full flex flex-col items-center gap-y-1 pt-5 bg-black text-white">
    <h1>Progress Bar</h1>
    <ProgressBar duration={5000} />
  </div>
);

export default Progress;
