import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getAllPosts, getPost } from "@/lib/blog";

export const alt = "Zesty blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateStaticParams() {
  return getAllPosts("en").map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug, "en");
  const title = post?.title ?? "Zesty";
  const description =
    post?.description?.slice(0, 110) ??
    "Daily creatine shot for women in menopause.";

  const fontBold = await readFile(
    join(process.cwd(), "assets/fonts/Quicksand-Bold.ttf")
  );
  const fontMedium = await readFile(
    join(process.cwd(), "assets/fonts/Quicksand-Medium.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FFFBF0",
          padding: "70px 80px",
          position: "relative",
        }}
      >
        {/* Brand bar */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            marginBottom: "60px",
          }}
        >
          <span
            style={{
              fontFamily: "Quicksand Bold",
              fontSize: "36px",
              color: "#F2A922",
              letterSpacing: "-0.02em",
            }}
          >
            zesty
          </span>
          <span
            style={{
              fontFamily: "Quicksand Medium",
              fontSize: "18px",
              color: "rgba(45,45,45,0.45)",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          >
            Blog
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: "Quicksand Bold",
            fontSize: title.length > 60 ? "56px" : "68px",
            color: "#2D2D2D",
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            display: "flex",
            maxWidth: "1040px",
            flexShrink: 0,
          }}
        >
          {title}
        </div>

        {/* Description */}
        <div
          style={{
            fontFamily: "Quicksand Medium",
            fontSize: "26px",
            color: "rgba(45,45,45,0.55)",
            lineHeight: 1.4,
            marginTop: "28px",
            display: "flex",
            maxWidth: "960px",
          }}
        >
          {description}
        </div>

        {/* Footer accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "12px",
            background: "#F2A922",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 80,
            fontFamily: "Quicksand Medium",
            fontSize: "20px",
            color: "rgba(45,45,45,0.4)",
            display: "flex",
          }}
        >
          drinkzesty.be
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Quicksand Bold", data: fontBold, style: "normal", weight: 700 },
        { name: "Quicksand Medium", data: fontMedium, style: "normal", weight: 500 },
      ],
    }
  );
}
