import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Zesty, de menopauzeshot met 10g creatine, gember + kurkuma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [imageData, fontBold] = await Promise.all([
    readFile(
      join(process.cwd(), "public/images/7-meet-zesty-bg.jpeg"),
      "base64"
    ),
    readFile(join(process.cwd(), "assets/fonts/Quicksand-Bold.ttf")),
  ]);

  const imageSrc = `data:image/jpeg;base64,${imageData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FFFDF7",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Right: product image */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "480px",
            display: "flex",
          }}
        >
          <img
            src={imageSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "160px",
              background:
                "linear-gradient(to right, #FFFDF7, rgba(255,253,247,0))",
              display: "flex",
            }}
          />
        </div>

        {/* Left: text content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px 0 80px 80px",
            width: "720px",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Brand */}
          <span
            style={{
              fontFamily: "Quicksand Bold",
              fontSize: "36px",
              color: "#F2A922",
              letterSpacing: "-0.02em",
              marginBottom: "24px",
            }}
          >
            zesty
          </span>

          {/* Headline */}
          <div
            style={{
              fontFamily: "Quicksand Bold",
              fontSize: "54px",
              color: "#2D2D2D",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              marginBottom: "24px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>De menopauzeshot</span>
            <span>tegen brain fog, moeheid</span>
            <span style={{ color: "#F2A922" }}>en spierverlies.</span>
          </div>

          {/* Subtitle */}
          <span
            style={{
              fontFamily: "Quicksand Bold",
              fontSize: "24px",
              color: "rgba(45,45,45,0.45)",
              display: "flex",
            }}
          >
            10g creatine per shot
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Quicksand Bold",
          data: fontBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
