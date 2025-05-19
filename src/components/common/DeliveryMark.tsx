import styled from "styled-components";

interface DeliveryMarkProps {
  src: string;
  alt: string;
}

const DeliveryMarkWrapper = styled.div`
  line-height: 24px;

  & img {
    width: 60px;
    height: 20px;
  }
`;
export default function DeliveryMark({ src, alt }: DeliveryMarkProps) {
  return (
    <DeliveryMarkWrapper>
      <img src={src} alt={alt} />
    </DeliveryMarkWrapper>
  );
}
