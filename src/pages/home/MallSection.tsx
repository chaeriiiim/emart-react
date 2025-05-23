import { mockProducts_3, mockProducts_4 } from "../../api/mockData";
import DeliveryTextMark from "../../components/common/DeliveryTextMark";
import MoreViewButton from "../../components/common/MoreViewButton";
import MallProductList from "./MallProductList";
import MallTabSection from "./MallTabSection";
import SectionTitle from "./SectionTitle";

import styled from "styled-components";

const MallSectionWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
`;

export default function MallSection() {
  return (
    <MallSectionWrapper>
      <div style={{ width: "1280px", margin: "0 auto" }}>
        <SectionTitle title="지금 세일 중인 상품이에요" />
        <MallTabSection />
        <DeliveryTextMark />
      </div>

      <div style={{ width: "1280px", margin: "0 auto" }}>
        <SectionTitle title="계속 사게되는 재구매 베스트 상품" />
        <MallProductList products={mockProducts_3} />
        <MoreViewButton title="재구매 베스트 전체보기" path="#" />
      </div>

      <div
        style={{
          backgroundColor: "#f0f0f0",
          height: "624px",
          margin: "46px 0px 0px 0px",
          padding: "46px 0px 0px 0px",
        }}
      >
        <div style={{ width: "1280px", margin: "0 auto" }}>
          <SectionTitle title="계속 사게되는 재구매 베스트 상품" />
          <MallProductList products={mockProducts_4} />
          <MoreViewButton title="재구매 베스트 전체보기" path="#" />
        </div>
      </div>
    </MallSectionWrapper>
  );
}
