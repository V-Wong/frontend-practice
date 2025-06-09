import useImageLoader from "../hooks/useImageLoader";

type ProgressiveImageProps = {
  placeholderSrc?: string;
  src: string;
  height: number;
  width: number;
};

const ProgressiveImage = ({
  placeholderSrc,
  src,
  width,
  height,
}: ProgressiveImageProps) => {
  const { isLoading, imageSrc } = useImageLoader(src, placeholderSrc);

  return (
    <img
      src={imageSrc}
      width={width}
      height={height}
      className={
        isLoading ? "blur-sm" : "blur-none transition duration-300 ease-in-out"
      }
    />
  );
};

export default ProgressiveImage;
