import { ImageResponse } from "next/og";

export const shareImageSize = {
  width: 1200,
  height: 630,
};

export function createShareImage(size = shareImageSize) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#071A43",
          color: "#F8FAFF",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 42, fontWeight: 700 }}>
          <span style={{ color: "#FFFFFF" }}>AIVA</span>
          <span style={{ color: "#20C8F4" }}>growth</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 8,
              borderRadius: 999,
              backgroundColor: "#FF8A1E",
            }}
          />
          <div style={{ fontSize: 68, fontWeight: 650, lineHeight: 1.05, letterSpacing: -1.5 }}>
            Your AI Team for Business Growth.
          </div>
          <div style={{ fontSize: 28, color: "#D5E2F7", maxWidth: 860, lineHeight: 1.4 }}>
            AI virtual agents for content, campaigns, leads, customer conversations, and analytics.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
