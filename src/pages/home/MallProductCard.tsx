import DeliveryMark from "../../components/common/DeliveryMark";
import DeliveryTextMark from "../../components/common/DeliveryTextMark";

import styled from "styled-components";

export interface ProductCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  markSrc?: string;
  markAlt?: string;
  componyName?: string;
  productName: string;
  productPrice: string;
  badgeImg?: string;
  badgeWidth?: number;
  badgeHeight?: number;
  deliveryTextMark?: string[];
}

const ProductListLink = styled.a`
  width: 302px;
  padding: 32px 0px 40px;
  & div {
    line-height: 24px;
  }
`;

const ProductImgWrapper = styled.div<{
  $badge?: string;
  $badgeWidth?: number;
  $badgeHeight?: number;
}>`
  position: relative;
  width: 302px;
  height: 302px;

  &::after {
    content: "";
    position: absolute;
    top: 238px;
    right: 238px;
    width: ${(props) => props.$badgeWidth || 60}px;
    height: ${(props) => props.$badgeHeight || 60}px;
    background-image: url(${(props) => props.$badge});
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid red;
    background-color: black;
  }
`;
const ProductImg = styled.img`
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

const ProductTitleWrapper = styled.div`
  padding: 8px 0px;
`;

const MarkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export default function MallProductCard({
  href,
  imgSrc,
  imgAlt,
  markSrc,
  markAlt,
  componyName,
  productName,
  productPrice,
  badgeImg,
  deliveryTextMark,
  badgeWidth,
  badgeHeight,
}: ProductCardProps) {
  return (
    <ProductListLink href={href}>
      <div>
        <ProductImgWrapper
          $badge={badgeImg}
          $badgeWidth={badgeWidth}
          $badgeHeight={badgeHeight}
        >
          <ProductImg src={imgSrc} alt={imgAlt} />
        </ProductImgWrapper>
        <ProductTitleWrapper>
          {markSrc && (
            <DeliveryMark src={markSrc} alt={markAlt ?? "배송마크"} />
          )}
          <ProductComponyName>{componyName}</ProductComponyName>
          <ProductName>{productName}</ProductName>
          <ProductPrice>{productPrice}</ProductPrice>
          {deliveryTextMark && (
            <MarkRow>
              {deliveryTextMark.map((text, idx) => (
                <DeliveryTextMark key={idx} title={text} />
              ))}
            </MarkRow>
          )}
        </ProductTitleWrapper>
      </div>
    </ProductListLink>
  );
}
