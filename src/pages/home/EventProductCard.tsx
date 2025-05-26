import test from "../../assets/assay_product_1.avif";

export default function EventProdcutCard() {
  return (
    <div
      style={{
        width: "1280px",
        height: "500px",
        border: "1px solid red",
        margin: "0 auto",
      }}
    >
      <div>
        <a href="#">
          <img
            style={{ width: "400px", height: "240px", borderRadius: "12px" }}
            src={test}
          />
          <div style={{ marginTop: "20px" }}>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              미식관 PICK: 문경사과
            </p>
            <p style={{ fontSize: "12px", marginTop: "4px" }}>
              풍부한 과즙, 싱그러운 달콤함
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
