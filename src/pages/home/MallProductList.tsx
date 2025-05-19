import dawnDeliveryMark from "../../assets/dawnDeliveryMark.avif";
import ProductImg from "../../assets/product_1.avif";

import DeliveryMark from "../../components/common/DeliveryMark";

export default function MallSectionBox() {
  return (
    <div
      style={{
        width: "302px",
        height: "302px",
        gap: "0 24px",
        display: "flex",
        marginTop: "30px",
      }}
    >
      <a href="#">
        {" "}
        {/* href는 값이 달라짐 */}
        <div style={{ lineHeight: "24px" }}>
          <img
            src={ProductImg}
            alt="제품 이미지"
            style={{ width: "302px", height: "302px" }}
          />
          {/* src,alt 는 값이 달라짐 */}
          <DeliveryMark src={dawnDeliveryMark} alt="새벽배송마크" />
          {/* mark는 있을수도 있고 없을 수도 있음 */}
          <span style={{ fontSize: "14px", fontWeight: "bold" }}>
            CJ제일제당
          </span>
          {/* span 는 값이 달라짐 */}
          <span style={{ fontSize: "14px" }}>
            브랜드 FESTA! 조미료/소스 ~ 1+1
          </span>
          {/* span 는 값이 달라짐 */}
          <p style={{ fontWeight: "bold", lineHeight: "24px" }}>13,200원~</p>
          {/* p 는 값이 달라짐 */}
        </div>
      </a>
    </div>
  );
}
