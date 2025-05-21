import DeliveryMark from "../../components/common/DeliveryMark";

import styled from "styled-components";

const ProductListLink = styled.a`
  width: 302px;
  padding: 32px 0px 40px;
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

export interface ProductCardProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  markSrc?: string;
  markAlt?: string;
  componyName?: string;
  productName: string;
  productPrice: string;
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
}: ProductCardProps) {
  return (
    <ProductListLink href={href}>
      <div>
        <ProductListImg src={imgSrc} alt={imgAlt} />
        {markSrc && <DeliveryMark src={markSrc} alt={markAlt ?? "배송마크"} />}
        <ProductComponyName>{componyName}</ProductComponyName>
        <ProductName>{productName}</ProductName>
        <ProductPrice>{productPrice}</ProductPrice>
      </div>
    </ProductListLink>
  );
}
