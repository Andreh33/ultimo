"use client";

import { useEffect } from "react";

export default function VapiButton() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@vapi-ai/web/dist/index.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const startCall = async () => {
    // espera a que cargue Vapi
    const interval = setInterval(() => {
      if ((window as any).Vapi) {
        clearInterval(interval);

        const vapi = new (window as any).Vapi(
          "52941f2d-82d4-4301-9d37-a071f50d5d4d"
        );

        vapi.start("892d826c-22bf-4823-8638-6befd0dcc48c");
      }
    }, 300);
  };

  return (
    <button onClick={startCall} style={styles.button}>
      🎧 Hablar con asesor (online ahora)
    </button>
  );
}

const styles = {
  button: {
    backgroundColor: "#2E7D32",
    color: "white",
    padding: "15px 25px",
    border: "none",
    borderRadius: "10px",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "20px",
  },
};
