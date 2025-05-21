import DeliveryMark from "../../components/common/DeliveryMark";

import styled from "styled-components";

const ProductListLink = styled.a`
  width: 302px;
  padding: 32px 0px 40px;
  & div {
    line-height: 24px;
  }
`;

const ProductImgWrapper = styled.div<{ badge?: string }>`
  position: relative;
  width: 302px;
  height: 302px;

  &::after {
    content: "";
    position: absolute;
    top: 238px;
    right: 238px;
    width: 60px;
    height: 60px;
    background-image: url(${(props) => props.badge});
    background-size: cover;
    background-repeat: no-repeat;
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
}

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
}: ProductCardProps) {
  return (
    <ProductListLink href={href}>
      <div>
        <ProductImgWrapper badge={badgeImg}>
          <ProductImg src={imgSrc} alt={imgAlt} />
        </ProductImgWrapper>
        {markSrc && <DeliveryMark src={markSrc} alt={markAlt ?? "배송마크"} />}
        <ProductComponyName>{componyName}</ProductComponyName>
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
      </div>
    </ProductListLink>
  );
}
