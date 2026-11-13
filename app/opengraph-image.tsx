import { createShareImage, shareImageSize } from "@/lib/og";

export const alt = "AIVA Growth. Your AI team for business growth.";
export const size = shareImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createShareImage(size);
}
