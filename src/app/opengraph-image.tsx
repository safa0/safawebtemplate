import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Gradient Fellows — AI-Enabled STEM Fellowship";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#E8DCC4",
          position: "relative",
        }}
      >
        {/* Left content panel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "60%",
            height: "100%",
            padding: "60px",
          }}
        >
          {/* Logo + name */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                height: "56px",
                backgroundColor: "#3E3426",
                borderRadius: "12px",
                color: "#E8DCC4",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              λ
            </div>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#3E3426",
              }}
            >
              Gradient Fellows
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontSize: "64px",
                fontWeight: 700,
                color: "#3E3426",
                lineHeight: 1.1,
              }}
            >
              Your Science Degree
            </div>
            <div
              style={{
                fontSize: "64px",
                fontWeight: 700,
                color: "#9C8B6C",
                lineHeight: 1.1,
              }}
            >
              Is Your AI Superpower
            </div>
          </div>

          {/* Bottom stats row */}
          <div
            style={{
              display: "flex",
              gap: "40px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#3E3426" }}>
                $200/mo
              </span>
              <span style={{ fontSize: "14px", color: "#8B7355", textTransform: "uppercase", letterSpacing: "1px" }}>
                Stipend
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#3E3426" }}>
                3–12 mo
              </span>
              <span style={{ fontSize: "14px", color: "#8B7355", textTransform: "uppercase", letterSpacing: "1px" }}>
                Programme
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#3E3426" }}>
                $0
              </span>
              <span style={{ fontSize: "14px", color: "#8B7355", textTransform: "uppercase", letterSpacing: "1px" }}>
                Tuition
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "28px", fontWeight: 700, color: "#3E3426" }}>
                Global
              </span>
              <span style={{ fontSize: "14px", color: "#8B7355", textTransform: "uppercase", letterSpacing: "1px" }}>
                Remote
              </span>
            </div>
          </div>
        </div>

        {/* Right accent panel */}
        <div
          style={{
            display: "flex",
            width: "40%",
            height: "100%",
            backgroundColor: "#9C8B6C",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              color: "#E8DCC4",
            }}
          >
            <div style={{ fontSize: "120px", fontWeight: 700, lineHeight: 1 }}>
              λ
            </div>
            <div
              style={{
                fontSize: "16px",
                textTransform: "uppercase",
                letterSpacing: "4px",
                color: "#E8DCC4",
                opacity: 0.8,
              }}
            >
              AI-Enabled STEM Fellowship
            </div>
          </div>
        </div>

        {/* URL bar at bottom */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "40px",
            backgroundColor: "#3E3426",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "14px", color: "#C3B091", letterSpacing: "2px" }}>
            gradientfellows.org
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
