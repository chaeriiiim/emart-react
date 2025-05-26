import EventProductCard, {
  type EventProductCardProps,
} from "./EventProductCard";

interface EventProductListProps {
  eventProducts: EventProductCardProps[];
}
export default function EventProductList({
  eventProducts,
}: EventProductListProps) {
  return (
    <div style={{ display: "flex" }}>
      {eventProducts.map((eventProduct, index) => (
        <EventProductCard key={index} {...eventProduct} />
      ))}
    </div>
  );
}
