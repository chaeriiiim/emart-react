import styled from "styled-components";

const DeliveryTextMarkWrapper = styled.div`
  display: inline-block;
  height: 20px;
  background-color: #f5f5f5;
  font-size: 12px;
  padding: 0px 6px;
  margin: 4px 4px 0px 0px;
  border-radius: 4px;

  & p {
    color: #888888;
    line-height: 20px;
  }
`;

interface DeliveryTextMarkProps {
  title?: string;
}

export default function DeliveryTextMark({ title }: DeliveryTextMarkProps) {
  return (
    <DeliveryTextMarkWrapper>
      <p>{title}</p>
    </DeliveryTextMarkWrapper>
  );
}
