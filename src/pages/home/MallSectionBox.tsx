import ProductImg from "../../assets/product_1.avif";

export default function MallSectionBox() {
  return (
    <div
      style={{
        width: "302px",
        height: "302px",
        gap: "0 24px",
        display: "flex",
      }}
    >
      <div>
        <img
          src={ProductImg}
          alt="제품 이미지"
          style={{ width: "302px", height: "302px" }}
        />
      </div>
    </div>
  );
}
