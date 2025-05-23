import DeliveryMark from "../../components/common/DeliveryMark";
import DeliveryTextMark from "../../components/common/DeliveryTextMark";

import styled from "styled-components";

export interface ProductCardProps {
  width?: number;
  height?: number;
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

const ProductListLink = styled.a<{ width?: number }>`
  width: ${(props) => props.width || 302}px;
  padding: 32px 0px 40px;
  & div {
    line-height: 24px;
  }
`;

const ProductImgWrapper = styled.div<{
  width?: number;
  height?: number;
  $badge?: string;
  $badgeWidth?: number;
  $badgeHeight?: number;
}>`
  position: relative;
  width: ${(props) => props.width || 302}px;
  height: ${(props) => props.height || 302}px;

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
  }
`;
const ProductImg = styled.img<{ width?: number; height?: number }>`
  width: ${(props) => props.width || 302}px;
  height: ${(props) => props.height || 302}px;
  object-fit: cover;
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
  width,
  height,
}: ProductCardProps) {
  return (
    <ProductListLink href={href} width={width}>
      <div>
        <ProductImgWrapper
          $badge={badgeImg}
          $badgeWidth={badgeWidth}
          $badgeHeight={badgeHeight}
          width={width}
          height={height}
        >
          <ProductImg src={imgSrc} alt={imgAlt} width={width} height={height} />
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
