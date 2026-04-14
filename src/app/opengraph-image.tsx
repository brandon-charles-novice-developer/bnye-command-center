import { ImageResponse } from "next/og";

export const alt = "B.Nye Command Center — Enterprise sales meets AI engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0a0f 0%, #111128 50%, #0a0a0f 100%)",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(61,120,255,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-50px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(148,100,255,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #3D78FF, #9464FF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            BN
          </div>
          <span
            style={{
              fontSize: "24px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Command Center
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "white" }}>Enterprise Solutions Engineer</span>
          <span
            style={{
              background: "linear-gradient(135deg, #3D78FF, #5CD7EB)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            & AI Systems Builder
          </span>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "48px",
          }}
        >
          {[
            ["20K+", "Lines Shipped"],
            ["4", "Autonomous Agents"],
            ["5", "Production Apps"],
          ].map(([value, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#3D78FF",
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
