import dawnDeliveryMark from "../../assets/dawnDeliveryMark.avif";

export default function DeliveryMark() {
  return (
    <div style={{ lineHeight: "24px" }}>
      <img
        src={dawnDeliveryMark}
        alt="새벽배송마크"
        style={{ width: "60px", height: "20px" }}
      />
    </div>
  );
}
