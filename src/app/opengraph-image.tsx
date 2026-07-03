import { ImageResponse } from "next/og";

export const alt = "Saloni Dabgar — Engineer, Builder, Thinker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(ellipse at 20% 30%, rgba(16,185,129,0.18) 0%, transparent 55%), radial-gradient(ellipse at 85% 75%, rgba(255,107,107,0.14) 0%, transparent 55%), radial-gradient(ellipse at 70% 10%, rgba(168,85,247,0.12) 0%, transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#a8a89a",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #10b981, #ff6b6b)",
              color: "#0a0a0a",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            S
          </div>
          SALONI DABGAR
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 44,
            fontSize: 116,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#f5f0eb",
          }}
        >
          <span>Engineer.</span>
          <span
            style={{
              background: "linear-gradient(135deg, #06d6a0 0%, #f59e0b 45%, #ff6b6b 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Builder. Thinker.
          </span>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 34,
            lineHeight: 1.35,
            color: "#d9d3ca",
            maxWidth: 940,
          }}
        >
          I write software that runs inside Jaguar Land Rover vehicles. I study
          the systems that run inside people.
        </div>
      </div>
    ),
    { ...size }
  );
}
