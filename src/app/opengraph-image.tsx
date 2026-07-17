import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sea Critter — PADI Freediving Courses in India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background: "linear-gradient(180deg,#0A4D68 0%,#062A42 55%,#041E30 100%)",
          color: "#F7FBFC",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#7FDBD4", fontSize: 26, letterSpacing: 6 }}>
          −0 M · SURFACE
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 16 }}>
          Sea Critter
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#20B2AA", marginTop: 8 }}>
          PADI Freediving Training Center · India
        </div>
      </div>
    ),
    size
  );
}
