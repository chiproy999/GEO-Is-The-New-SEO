import { cn } from "@/lib/utils";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface SourceDescriptor {
  media?: string;
  type?: string;
  srcSet: string;
}

interface ResponsiveMediaProps
  extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  sources?: SourceDescriptor[];
  containerClassName?: string;
}

export function ResponsiveMedia({
  sources,
  containerClassName,
  className,
  loading = "lazy",
  decoding = "async",
  ...imgProps
}: ResponsiveMediaProps) {
  return (
    <picture className={cn("block overflow-hidden rounded-2xl", containerClassName)}>
      {sources?.map((source) => (
        <source key={source.srcSet} {...source} />
      ))}
      <img
        {...imgProps}
        className={cn("h-full w-full object-cover", className)}
        loading={loading}
        decoding={decoding}
      />
    </picture>
  );
}

