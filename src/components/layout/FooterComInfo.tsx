import LinkButton from "../common/LinkButton";

export default function FooterComInfo() {
  return (
    <div
      style={{
        width: "1280px",
        height: "100px",
        border: "1px solid red",
        margin: "0 auto",
      }}
    >
      <p style={{ fontSize: "12px", fontWeight: "bold", lineHeight: "23px" }}>
        (주) 에스에스지닷컴
      </p>
      <div>
        <p style={{ fontSize: "24px" }}>1577-3419</p>
        <LinkButton href="#" title="전화문의 전 클릭" />
      </div>
    </div>
  );
}
