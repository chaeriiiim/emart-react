import styled from "styled-components";

const DeliveryWrapper = styled.div`
  padding-top: 40px;
  width: 1280px;
  height: 100%;
  margin: 0 auto;
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
    padding: 0px 10px;
    font-size: 12px;
  }

  & p {
    font-weight: bold;
  }
`;

interface DeliveryButtonItem {
  href: string;
  src: string;
  alt: string;
  buttonTitle: string;
  TitleText: string;
}

const deliveryButton: DeliveryButtonItem[] = [
  {
    href: "#",
    src: "https://sui.ssgcdn.com/ui/grocery/img/emall_main/circle/img_delivery_circle_morning@2x.png",
    alt: "주건배송 서비스 버튼",
    buttonTitle: "쓱 주간배송",
    TitleText: "원하는걸 원하는 시간에",
  },
  {
    href: "#",
    src: "https://sui.ssgcdn.com/ui/grocery/img/emall_main/circle/img_delivery_circle_earlymorning@2x.png",
    alt: "새벽배송 서비스 버튼",
    buttonTitle: "쓱 새벽배송",
    TitleText: "6시 도착, 신선한 식탁",
  },
  {
    href: "#",
    src: "https://sui.ssgcdn.com/ui/grocery/img/emall_main/circle/img_delivery_circle_star@2x.png",
    alt: "스타배송 서비스 버튼",
    buttonTitle: "스타배송",
    TitleText: "약속한 날짜에 정확하게",
  },
  {
    href: "#",
    src: "https://sui.ssgcdn.com/ui/grocery/img/emall_main/circle/img_delivery_circle_traders@2x.png",
    alt: "트레이더스 서비스 버튼",
    buttonTitle: "쓱 트레이더스 배송",
    TitleText: "대용량 상품도 쓱-",
  },
];

export default function DeliverySection() {
  return (
    <DeliveryWrapper>
      <Title>배송서비스별 매장 바로가기</Title>

      <DeliveryButton>
        {deliveryButton.map((item, index) => (
          <DeliveryLink key={index} href={item.href}>
            <img src={item.src} alt={item.alt} />
            <DeliveryButtonContent>
              <div>
                <span>{item.buttonTitle}</span>
              </div>
              <p>{item.TitleText}</p>
            </DeliveryButtonContent>
          </DeliveryLink>
        ))}
      </DeliveryButton>
    </DeliveryWrapper>
  );
}
