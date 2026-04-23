import { useMemo, useState, ImgHTMLAttributes } from "react";
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
  const resolvedAlt = useMemo(() => alt, [alt]);

  return (
    <div
      className={cn("relative overflow-hidden bg-muted", wrapperClassName)}
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 720px" }}
    >
      <div
        aria-hidden
        className={cn("absolute inset-0 bg-muted transition-opacity", loaded ? "opacity-0" : "opacity-100")}
        style={{ transitionDuration: "700ms" }}
      />
      <img
        src={src}
        alt={resolvedAlt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={cn(
          "transition-opacity ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={{ transitionDuration: "700ms", willChange: "opacity, transform" }}
        {...rest}
      />
    </div>
  );
};

export default SmoothImage;
