import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

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
          background: "#121416",
          border: "8px solid #67e480",
          borderRadius: "36px",
          color: "#67e480",
          fontSize: "68px",
          fontWeight: 700,
          letterSpacing: "-3px",
        }}
      >
        FL
      </div>
    ),
    {
      ...size,
    },
  );
}