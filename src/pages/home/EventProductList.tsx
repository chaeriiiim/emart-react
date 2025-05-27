import EventProductCard, {
  type EventProductCardProps,
} from "./EventProductCard";

import styled from "styled-components";

const EventProductListWrapper = styled.div`
  display: flex;
  width: 1280px;
  height: 377px;
  margin: 0 auto;
  gap: 0 24px;
`;

interface EventProductListProps {
  eventProducts: EventProductCardProps[];
}
export default function EventProductList({
  eventProducts,
}: EventProductListProps) {
  return (
    <EventProductListWrapper>
      {eventProducts.map((eventProduct, index) => (
        <EventProductCard key={index} {...eventProduct} />
      ))}
    </EventProductListWrapper>
  );
}
