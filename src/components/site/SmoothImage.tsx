import { memo, useEffect, useMemo, useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  eager?: boolean;
  placeholderClassName?: string;
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
  placeholderClassName,
  width,
  height,
  style,
  ...rest
}: Props) => {
  const [loaded, setLoaded] = useState(false);
  const resolvedAlt = useMemo(() => alt, [alt]);
  const numericWidth = typeof width === "number" ? width : undefined;
  const numericHeight = typeof height === "number" ? height : undefined;
  const ratio =
    numericWidth && numericHeight ? `${numericWidth} / ${numericHeight}` : undefined;

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <div
      className={cn("relative overflow-hidden bg-muted", wrapperClassName)}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize:
          numericWidth && numericHeight
            ? `${numericWidth}px ${numericHeight}px`
            : "1px 720px",
        aspectRatio: ratio,
      }}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-muted transition-opacity",
          loaded ? "opacity-0" : "opacity-100",
          placeholderClassName
        )}
        style={{ transitionDuration: "700ms" }}
      />
      <img
        src={src}
        alt={resolvedAlt}
        width={width}
        height={height}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : "auto"}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        draggable={false}
        className={cn(
          "transition-opacity ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={{
          transitionDuration: "700ms",
          willChange: "opacity, transform",
          ...style,
        }}
        {...rest}
      />
    </div>
  );
};

export default memo(SmoothImage);
