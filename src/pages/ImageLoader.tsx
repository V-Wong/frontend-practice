import ProgressiveImage from "../components/ProgressiveImage";

const PLACEHOLDER_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/ISS-40_Thunderheads_near_Borneo.jpg/330px-ISS-40_Thunderheads_near_Borneo.jpg";
const FULL_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/ISS-40_Thunderheads_near_Borneo.jpg";

const ImageLoader = () => (
  <div className="min-h-screen h-full flex flex-col items-center gap-y-1 pt-5 bg-black text-white">
    <h1>Progressive Image Loading</h1>
    <ProgressiveImage
      placeholderSrc={PLACEHOLDER_IMAGE}
      src={FULL_IMAGE}
      height={2832}
      width={4256}
    />
  </div>
);

export default ImageLoader;
