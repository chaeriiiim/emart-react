export default function DeliverySection() {
  return (
    <div style={{ width: "100%", height: "100%", border: "1px solid red" }}>
      <p style={{ fontSize: "20px", fontWeight: "bold", margin: "0 0 20px" }}>
        배송서비스별 매장 바로가기
      </p>

      <div>
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            width: "314px",
            height: "92px",
            backgroundColor: "#f5f5f5",
            borderRadius: "8px",
          }}
        >
          <img
            src="https://sui.ssgcdn.com/ui/grocery/img/emall_main/circle/img_delivery_circle_morning@2x.png"
            alt="배송 서비스 버튼"
            style={{
              width: "60px",
              height: "60px",
              // objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <div>
            <div
              style={{
                border: "1px solid red",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 4px 0 12px",
              }}
            >
              <p>쓱 주간배송</p>
            </div>
            <p>원하는걸 원하는 시간에</p>
          </div>
        </a>
      </div>
    </div>
  );
}
