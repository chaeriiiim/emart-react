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
    <div
      style={{
        display: "flex",
        width: "1280px",
        margin: "0 auto",
        gap: "0 24px",
      }}
    >
      {eventProducts.map((eventProduct, index) => (
        <EventProductCard key={index} {...eventProduct} />
      ))}
    </div>
  );
}
