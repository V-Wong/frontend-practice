import { useEffect, useState } from "react";

const useImageLoader = (
  src: string,
  placeholderSrc: string | undefined,
): { isLoading: boolean; imageSrc: string } => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc || src);
  const isLoading = placeholderSrc !== undefined && imageSrc !== src;

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return { isLoading, imageSrc };
};

export default useImageLoader;
