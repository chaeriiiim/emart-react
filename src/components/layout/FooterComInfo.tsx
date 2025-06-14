import LinkButton from "../common/LinkButton";

export default function FooterComInfo() {
  return (
    <div
      style={{
        width: "1280px",
        margin: "0 auto",
      }}
    >
      <p style={{ fontSize: "12px", fontWeight: "bold", lineHeight: "23px" }}>
        (주) 에스에스지닷컴
      </p>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <p style={{ fontSize: "24px" }}>1577-3419</p>
        <LinkButton href="#" title="전화문의 전 클릭" />
        <LinkButton href="#" title="1:1 고객센터톡" />
        <p style={{ fontSize: "12px" }}>고객센터/전자금융거래분쟁처리</p>
      </div>
      <div>
        <p
          style={{
            fontSize: "12px",
            lineHeight: "23px",
            color: "#777",
            gap: "7px",
          }}
        >
          <span>대표자:최훈학</span>
          <span>서울특별시 영등포구 영신로 34길 30</span>
        </p>
      </div>
    </div>
  );
}
