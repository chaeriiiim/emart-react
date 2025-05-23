export default function HomeSlider() {
  return (
    <div
      style={{
        width: "1280px",
        height: "500px",
        display: "flex",
        gap: "24px",
        marginTop: "30px",
        margin: "0 auto",
      }}
    >
      <div>
        <div
          style={{
            width: "837px",
            height: "500px",
            backgroundColor: "gray",
            borderRadius: "10px",
          }}
        ></div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            width: "419px",
            height: "238px",
            backgroundColor: "gray",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            width: "419px",
            height: "238px",
            backgroundColor: "gray",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}
