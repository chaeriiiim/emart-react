export default function FooterNav() {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#f5f5f5", marginTop: "160px" }}
    >
      <div
        style={{
          width: "1280px",
          height: "52px",
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <a
          style={{
            fontSize: "13px",
            margin: "0px 20px 0px 0px",
            color: "#666666",
            fontWeight: "bold",
          }}
        >
          공지사항
        </a>
        <a
          style={{
            fontSize: "13px",
            margin: "0px 20px",
            color: "#666666",
            fontWeight: "bold",
          }}
        >
          이마트 점포안내
        </a>
        <a
          style={{
            fontSize: "13px",
            margin: "0px 20px",
            color: "#666666",
            fontWeight: "bold",
          }}
        >
          트레이더스 점포안내
        </a>
        <a
          style={{
            fontSize: "13px",
            margin: "0px 0px 0px 20px",
            color: "#666666",
            fontWeight: "bold",
          }}
        >
          신세계포인트
        </a>
      </div>
    </div>
  );
}
