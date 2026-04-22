import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  eager?: boolean;
};

/**
 * SmoothImage — fades in once the image has decoded.
 * Falls back to a muted placeholder while loading.
 */
const SmoothImage = ({
  src,
  alt = "",
  className,
  wrapperClassName,
  eager = false,
  ...rest
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-muted", wrapperClassName)}>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-muted transition-opacity duration-[1200ms]",
          loaded ? "opacity-0" : "opacity-100"
        )}
      />
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        className={cn(
          "transition-opacity ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={{ transitionDuration: "1400ms" }}
        {...rest}
      />
    </div>
  );
};

export default SmoothImage;
