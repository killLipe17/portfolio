import { ImageResponse } from "next/og";

export const alt =
  "LIPEXP Studio — Criação de sites e soluções digitais para negócios reais";

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
          padding: "56px 64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(103,228,128,0.05) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "-140px",
            right: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(103, 228, 128, 0.08)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-120px",
            left: "-60px",
            width: "320px",
            height: "320px",
            borderRadius: "999px",
            background: "rgba(103, 228, 128, 0.05)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "34px",
            left: "34px",
            width: "22px",
            height: "22px",
            borderTop: "2px solid #67e480",
            borderLeft: "2px solid #67e480",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "34px",
            right: "34px",
            width: "22px",
            height: "22px",
            borderTop: "2px solid #67e480",
            borderRight: "2px solid #67e480",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "34px",
            left: "34px",
            width: "22px",
            height: "22px",
            borderBottom: "2px solid #67e480",
            borderLeft: "2px solid #67e480",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "34px",
            right: "34px",
            width: "22px",
            height: "22px",
            borderBottom: "2px solid #67e480",
            borderRight: "2px solid #67e480",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* TOPO */}
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
                  borderRadius: "16px",
                  background: "#121416",
                  color: "#67e480",
                  fontSize: "28px",
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                LX
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#f4f5f5",
                  }}
                >
                  LIPEXP STUDIO
                </span>

                <span
                  style={{
                    marginTop: "6px",
                    color: "#a8afb5",
                    fontSize: "16px",
                  }}
                >
                  Criação de Sites • por Fellipe Leite
                </span>
              </div>
            </div>

            <span
              style={{
                color: "#67e480",
                fontSize: "16px",
                letterSpacing: "2px",
                textTransform: "uppercase",
              }}
            >
              @lipexpstudio
            </span>
          </div>

          {/* CONTEÚDO PRINCIPAL */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "48px",
            }}
          >
            {/* LADO ESQUERDO */}
            <div
              style={{
                maxWidth: "660px",
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
                Sites modernos para negócios reais
              </span>

              <span
                style={{
                  marginTop: "24px",
                  fontSize: "72px",
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: "-4px",
                  color: "#f4f5f5",
                }}
              >
                Level up
              </span>

              <span
                style={{
                  fontSize: "72px",
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: "-4px",
                  color: "#67e480",
                }}
              >
                your business.
              </span>

              <span
                style={{
                  marginTop: "22px",
                  maxWidth: "620px",
                  fontSize: "26px",
                  lineHeight: 1.45,
                  color: "#c2c8ce",
                }}
              >
                A LIPEXP Studio cria landing pages, sites institucionais,
                portfólios e soluções digitais com foco em presença profissional
                e resultado.
              </span>
            </div>

            {/* CARD DIREITO */}
            <div
              style={{
                width: "340px",
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "26px",
                border: "1px solid #292d31",
                borderRadius: "18px",
                background: "#121416",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "#67e480",
                    fontSize: "15px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Perfil LIPEXP
                </span>

                <span
                  style={{
                    padding: "6px 12px",
                    border: "1px solid rgba(103, 228, 128, 0.35)",
                    borderRadius: "999px",
                    color: "#67e480",
                    fontSize: "13px",
                  }}
                >
                  Online
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontFamily: "monospace",
                  fontSize: "17px",
                  lineHeight: 1.6,
                }}
              >
                <span style={{ color: "#67e480" }}>
                  const studio ={" "}
                  <span style={{ color: "#d8f8de" }}>
                    &quot;LIPEXP Studio&quot;
                  </span>
                  ;
                </span>

                <span style={{ color: "#67e480" }}>
                  const developer ={" "}
                  <span style={{ color: "#d8f8de" }}>
                    &quot;Fellipe Leite&quot;
                  </span>
                  ;
                </span>

                <span style={{ color: "#67e480" }}>
                  const mission ={" "}
                  <span style={{ color: "#d8f8de" }}>
                    &quot;Criar soluções úteis&quot;
                  </span>
                  ;
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  marginTop: "8px",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "18px",
                    border: "1px solid #292d31",
                    borderRadius: "14px",
                    background: "#0e1012",
                  }}
                >
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#f4f5f5",
                    }}
                  >
                    03
                  </span>

                  <span
                    style={{
                      marginTop: "6px",
                      fontSize: "14px",
                      color: "#a8afb5",
                    }}
                  >
                    Projetos publicados
                  </span>
                </div>

                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    padding: "18px",
                    border: "1px solid #292d31",
                    borderRadius: "14px",
                    background: "#0e1012",
                  }}
                >
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#f4f5f5",
                    }}
                  >
                    15+
                  </span>

                  <span
                    style={{
                      marginTop: "6px",
                      fontSize: "14px",
                      color: "#a8afb5",
                    }}
                  >
                    Tecnologias e habilidades
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RODAPÉ */}
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
            <span>
              Landing Pages • Sites institucionais • Portfólios
            </span>

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