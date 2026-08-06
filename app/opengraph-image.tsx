import { ImageResponse } from "next/og";

export const alt =
  "Fellipe Leite — Desenvolvedor Web e criador de soluções digitais";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#090a0b",
          color: "#f4f5f5",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-120px",
            width: "520px",
            height: "520px",
            display: "flex",
            borderRadius: "999px",
            background: "#67e480",
            opacity: 0.08,
          }}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid #67e480",
                  borderRadius: "12px",
                  background: "#121416",
                  color: "#67e480",
                  fontSize: "24px",
                  fontWeight: 700,
                }}
              >
                FL
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  Fellipe Leite
                </span>

                <span
                  style={{
                    marginTop: "6px",
                    color: "#a8afb5",
                    fontSize: "16px",
                  }}
                >
                  Desenvolvedor Web
                </span>
              </div>
            </div>

            <span
              style={{
                color: "#67e480",
                fontSize: "16px",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              Portfólio
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "70px",
            }}
          >
            <div
              style={{
                maxWidth: "690px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  color: "#67e480",
                  fontSize: "17px",
                  fontWeight: 700,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                Soluções digitais reais
              </span>

              <span
                style={{
                  marginTop: "24px",
                  fontSize: "67px",
                  fontWeight: 700,
                  lineHeight: 1.04,
                  letterSpacing: "-4px",
                }}
              >
                Transformo ideias em sites modernos e funcionais.
              </span>
            </div>

            <div
              style={{
                width: "320px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "28px",
                border: "1px solid #292d31",
                borderRadius: "16px",
                background: "#121416",
                fontFamily: "monospace",
                fontSize: "17px",
              }}
            >
              <span style={{ color: "#67e480" }}>
                const desenvolvedor =
              </span>

              <span style={{ color: "#d8f8de" }}>
                &quot;Fellipe Leite&quot;;
              </span>

              <span style={{ color: "#67e480" }}>
                const projetos =
              </span>

              <span style={{ color: "#d8f8de" }}>
                &quot;Soluções úteis&quot;;
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "22px",
              borderTop: "1px solid #292d31",
              color: "#a8afb5",
              fontSize: "16px",
            }}
          >
            <span>Next.js • TypeScript • Desenvolvimento responsivo</span>
            <span>São Paulo/SP</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}