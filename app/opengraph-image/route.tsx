import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title");

    if (!title) {
      return new Response("Missing title parameter", { status: 400 });
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fffff8",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "32px",
              right: "32px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                color: "#57534a",
                fontSize: "20px",
                fontWeight: 400,
                letterSpacing: "0.08em",
              }}
            >
              ahmet burak dinç
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 48px",
              maxWidth: "900px",
            }}
          >
            <h1
              style={{
                fontSize: "56px",
                fontWeight: 400,
                color: "#111111",
                lineHeight: 1.2,
                textAlign: "center",
                margin: 0,
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image: ${e.message}`, {
      status: 500,
    });
  }
}
