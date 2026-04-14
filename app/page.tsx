import VapiButton from "@/components/VapiButton";

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

      <VapiButton />

      <p style={styles.footer}>
        Habla ahora con un asesor IA y solicita tu certificado
      </p>
    </main>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    textAlign: "center",
    padding: "50px",
    background: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "40px",
    color: "#2E7D32",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    margin: "20px auto",
    width: "300px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  footer: {
    marginTop: "30px",
    fontSize: "14px",
    color: "#555",
  },
};
