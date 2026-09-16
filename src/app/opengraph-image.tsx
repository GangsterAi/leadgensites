import { ImageResponse } from "next/og";

export const alt = "JETCHARTER.ASIA — Asia's independent private jet broker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#0A0B0D",
          color: "#E8EAED",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 48, fontWeight: 700, letterSpacing: 6 }}>
          <span>JETCHARTER</span>
          <span style={{ color: "#00B4FF" }}>.ASIA</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 36, fontWeight: 600, maxWidth: 900 }}>
          Asia&apos;s independent private jet broker
        </div>
        <div style={{ marginTop: 18, fontSize: 22, color: "#8B929A", maxWidth: 900 }}>
          We don&apos;t operate aircraft — we work for you.
        </div>
      </div>
    ),
    { ...size },
  );
}
