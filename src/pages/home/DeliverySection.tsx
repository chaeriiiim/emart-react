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

const DeliveryButton = styled.div`
  display: flex;
  gap: 12px;
`;

const DeliveryLink = styled.a`
  display: flex;
  align-items: center;
  width: 314px;
  height: 92px;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding-left: 24px;

  & img {
    width: 60px;
    height: 60px;
    // objectFit: cover;
    border-radius: 8px;
  }
`;

const DeliveryButtonContent = styled.div`
  margin-left: 12px;

  & div {
    height: 24px;
    border: 1px solid #cfcfcf;
    border-radius: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    padding: 2px 10px;
    font-size: 12px;
  }
`;

export default function DeliverySection() {
  return (
    <DeliveryWrapper>
      <Title>배송서비스별 매장 바로가기</Title>

      <DeliveryButton>
        <DeliveryLink href="#">
          {/* map 적용시 href 각 다른 값 */}
          <img
            src="https://sui.ssgcdn.com/ui/grocery/img/emall_main/circle/img_delivery_circle_morning@2x.png"
            alt="배송 서비스 버튼"
          />
          {/* map 적용시 src , alt 각 다른 값 */}
          <DeliveryButtonContent>
            <div style={{}}>
              <span>쓱 주간배송</span>
              {/* map 적용시 각 다른 값 */}
            </div>
            <p>원하는걸 원하는 시간에</p>
            {/* map 적용시 각 다른 값 */}
          </DeliveryButtonContent>
        </DeliveryLink>
      </DeliveryButton>
    </DeliveryWrapper>
  );
}
