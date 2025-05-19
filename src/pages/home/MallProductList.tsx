import dawnDeliveryMark from "../../assets/dawnDeliveryMark.avif";
import ProductImg from "../../assets/product_1.avif";

import DeliveryMark from "../../components/common/DeliveryMark";

import styled from "styled-components";

const MallProductListWrapper = styled.div`
  gap: 0 24px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const ProductListLink = styled.a`
  & div {
    line-height: 24px;
  }
`;

const ProductListImg = styled.img`
  width: 302px;
  height: 302px;
`;

const ProductComponyName = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

const ProductName = styled.span`
  font-size: 14px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  line-height: 24px;
`;

export default function MallProductList() {
  return (
    <MallProductListWrapper>
      <ProductListLink href="#">
        {/* href는 값이 달라짐 */}
        <ProductPrice>
          <ProductListImg src={ProductImg} alt="제품 이미지" />
          {/* src,alt 는 값이 달라짐 */}
          <DeliveryMark src={dawnDeliveryMark} alt="새벽배송마크" />
          {/* mark는 있을수도 있고 없을 수도 있음 */}
          <ProductComponyName>CJ제일제당</ProductComponyName>
          {/* span 는 값이 달라짐 */}
          <ProductName>브랜드 FESTA! 조미료/소스 ~ 1+1</ProductName>
          {/* span 는 값이 달라짐 */}
          <ProductPrice style={{ fontWeight: "bold", lineHeight: "24px" }}>
            13,200원~
          </ProductPrice>
          {/* p 는 값이 달라짐 */}
        </ProductPrice>
      </ProductListLink>
    </MallProductListWrapper>
  );
}
