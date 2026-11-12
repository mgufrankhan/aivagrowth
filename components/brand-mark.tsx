import Image from "next/image";
import { brandAssets } from "@/data/site";
import { cn } from "@/lib/utils";

type Tone = "default" | "inverse";

/** Stand-in used only when brandAssets.wordmarkSrc and markSrc are both empty. */
export function PlaceholderMark({
  tone = "default",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  const fill = tone === "inverse" ? "#1265F5" : "#071A43";
  return (
    <svg
      className={cn("h-8 w-8 shrink-0", className)}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill={fill} />
      <path d="M16 7.5 24.5 25h-3.2l-1.7-3.8h-7.2L10.7 25H7.5L16 7.5Zm0 6.2-2.5 5.6h5L16 13.7Z" fill="#FFFFFF" />
    </svg>
  );
}

export function Wordmark({ tone = "default" }: { tone?: Tone }) {
  return (
    <span className="text-[1.15rem] font-semibold tracking-[-0.04em]" aria-hidden="true">
      <span className={tone === "inverse" ? "text-white" : "text-navy"}>AIVA</span>
      <span className={tone === "inverse" ? "text-cyan" : "text-blue"}>growth</span>
    </span>
  );
}

function LockupImage({
  src,
  width,
  height,
  priority = false,
}: {
  src: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt="AIVAgrowth"
      width={width}
      height={height}
      priority={priority}
      sizes="240px"
      className="h-11 w-auto"
      style={{ height: "2.75rem", width: "auto" }}
    />
  );
}

export function BrandLockup({ tone = "default" }: { tone?: Tone }) {
  if (tone === "inverse" && brandAssets.inverseWordmarkSrc) {
    return (
      <LockupImage
        src={brandAssets.inverseWordmarkSrc}
        width={brandAssets.inverseWordmarkWidth}
        height={brandAssets.inverseWordmarkHeight}
      />
    );
  }

  if (brandAssets.wordmarkSrc) {
    return (
      <LockupImage
        src={brandAssets.wordmarkSrc}
        width={brandAssets.wordmarkWidth}
        height={brandAssets.wordmarkHeight}
        priority={tone === "default"}
      />
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      {brandAssets.markSrc ? (
        <Image src={brandAssets.markSrc} alt="" width={32} height={32} className="h-8 w-8" />
      ) : (
        <PlaceholderMark tone={tone} />
      )}
      <Wordmark tone={tone} />
    </span>
  );
}
