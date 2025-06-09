import ProgressiveImage from "../components/ProgressiveImage";
import Page from "../Page";

const PLACEHOLDER_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/ISS-40_Thunderheads_near_Borneo.jpg/330px-ISS-40_Thunderheads_near_Borneo.jpg";
const FULL_IMAGE =
  "https://upload.wikimedia.org/wikipedia/commons/1/1d/ISS-40_Thunderheads_near_Borneo.jpg";

const ImageLoader = () => (
  <Page>
    <h1>Progressive Image Loading</h1>
    <ProgressiveImage
      placeholderSrc={PLACEHOLDER_IMAGE}
      src={FULL_IMAGE}
      height={2832}
      width={4256}
    />
  </Page>
);

export default ImageLoader;
