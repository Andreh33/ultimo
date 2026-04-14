export default function Home() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>ENAL Consultores</h1>

      <p style={styles.subtitle}>
        Certificados de eficiencia energética en toda España
      </p>

      <div style={styles.card}>
        <h2>Certificado energético desde 45€ + IVA</h2>
        <p>✔ Técnico certificado</p>
        <p>✔ Registro oficial incluido</p>
        <p>✔ Entrega rápida</p>
      </div>

      <a
        href="/vapi"
        style={styles.button}
      >
        🎧 Hablar con asesor IA
      </a>
    </main>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
    textAlign: "center",
    padding: "40px",
  },
  title: {
    fontSize: "40px",
    color: "#2E7D32",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  button: {
    marginTop: "30px",
    background: "#2E7D32",
    color: "white",
    padding: "15px 25px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "18px",
  },
};
