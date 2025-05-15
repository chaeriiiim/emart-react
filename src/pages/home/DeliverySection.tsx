import styled from "styled-components";

const DeliveryWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 20px;
`;

export default function DeliverySection() {
  return (
    <DeliveryWrapper>
      <Title>배송서비스별 매장 바로가기</Title>

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
            paddingLeft: "24px",
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
          <div style={{ marginLeft: "12px" }}>
            <div
              style={{
                height: "24px",
                border: "1px solid #cfcfcf",
                borderRadius: "12px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "8px",
                padding: "2px 10px",
                fontSize: "12px",
              }}
            >
              <span>쓱 주간배송</span>
            </div>
            <p>원하는걸 원하는 시간에</p>
          </div>
        </a>
      </div>
    </DeliveryWrapper>
  );
}
