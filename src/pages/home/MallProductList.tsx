import MallProductCard, { type ProductCardProps } from "./MallProductCard";

import styled from "styled-components";

const MallProductListWrapper = styled.div`
  gap: 0 24px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

interface MallProductListProps {
  products: ProductCardProps[];
}

export default function MallProductList({ products }: MallProductListProps) {
  return (
    <MallProductListWrapper>
      {products.map((product, index) => (
        <MallProductCard key={index} {...product} />
      ))}
    </MallProductListWrapper>
  );
}
