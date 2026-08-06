import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          border: "3px solid #67e480",
          borderRadius: "14px",
          color: "#67e480",
          fontSize: "24px",
          fontWeight: 700,
          letterSpacing: "-1px",
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