import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Zesty, de menopauzeshot met 10g creatine, gember + kurkuma";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [imageData, fontBold, fontMedium] = await Promise.all([
    readFile(
      join(process.cwd(), "public/images/7-meet-zesty-bg.jpeg"),
      "base64"
    ),
    readFile(join(process.cwd(), "assets/fonts/Quicksand-Bold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Quicksand-Medium.ttf")),
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
        {/* Right: meet zesty image */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "520px",
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
          {/* Fade into background */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "120px",
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
            padding: "60px 0 60px 70px",
            width: "680px",
            flexShrink: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Brand eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                fontFamily: "Quicksand Bold",
                fontSize: "30px",
                color: "#F2A922",
                letterSpacing: "-0.02em",
              }}
            >
              zesty
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "rgba(45,45,45,0.25)",
                letterSpacing: "0.15em",
                fontFamily: "Quicksand Medium",
                textTransform: "uppercase",
              }}
            >
              drinkzesty.be
            </span>
          </div>

          {/* Headline — 2 lines */}
          <div
            style={{
              fontFamily: "Quicksand Bold",
              fontSize: "38px",
              color: "#2D2D2D",
              lineHeight: 1.2,
              letterSpacing: "-0.025em",
              marginBottom: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>De menopauzeshot tegen</span>
            <span style={{ color: "#F2A922" }}>brain fog, moeheid en spierverlies.</span>
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontFamily: "Quicksand Medium",
              fontSize: "18px",
              color: "rgba(45,45,45,0.45)",
              lineHeight: 1.5,
              marginBottom: "28px",
              display: "flex",
            }}
          >
            10g creatine verzegeld in de dop · koudgeperste gember + kurkuma
          </div>

          {/* Stat pills */}
          <div style={{ display: "flex", gap: "10px" }}>
            {["10g creatine", "Gember + kurkuma", "0g suiker"].map((text) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  border: "1px solid rgba(45,45,45,0.1)",
                  fontFamily: "Quicksand Bold",
                  fontSize: "13px",
                  color: "rgba(45,45,45,0.4)",
                  letterSpacing: "0.05em",
                }}
              >
                {text}
              </div>
            ))}
          </div>
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
        {
          name: "Quicksand Medium",
          data: fontMedium,
          style: "normal",
          weight: 500,
        },
      ],
    }
  );
}
