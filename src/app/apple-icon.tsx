import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2D2D2D",
          color: "#F2A922",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 800,
          fontSize: 140,
          letterSpacing: "-0.05em",
        }}
      >
        z
      </div>
    ),
    size
  );
}
