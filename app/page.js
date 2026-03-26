export default function Home() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        textAlign: "center",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        <h1>Sprintly</h1>

        <button style={{
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
          background: "black",
          color: "white",
          cursor: "pointer"
        }}>
          Continue with Google
        </button>
      </div>
    </div>
  );
  }
