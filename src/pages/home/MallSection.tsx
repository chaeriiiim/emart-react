import {
  mockProducts_3,
  mockProducts_4,
  mockProducts_6,
} from "../../api/mockData";
import DeliveryTextMark from "../../components/common/DeliveryTextMark";
import MoreViewButton from "../../components/common/MoreViewButton";
import EventProductList from "./EventProductList";
import MallProductList from "./MallProductList";
import MallTabSection from "./MallTabSection";
import SectionTitle from "./SectionTitle";

import styled from "styled-components";

const MallSectionWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
`;

const MallSectionInnerWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export default function MallSection() {
  return (
    <MallSectionWrapper>
      <MallSectionInnerWrapper>
        <SectionTitle title="지금 세일 중인 상품이에요" />
        <MallTabSection />
        <DeliveryTextMark />
      </MallSectionInnerWrapper>

      <MallSectionInnerWrapper>
        <SectionTitle title="계속 사게되는 재구매 베스트 상품" />
        <MallProductList products={mockProducts_3} />
        <MoreViewButton title="재구매 베스트 전체보기" path="#" />
      </MallSectionInnerWrapper>

      <div
        style={{
          backgroundColor: "#f0f0f0",
          margin: "46px 0px",
          padding: "46px 0px",
        }}
      >
        <MallSectionInnerWrapper>
          <SectionTitle title="계속 사게되는 재구매 베스트 상품" />
          <MallProductList products={mockProducts_4} />
          <MoreViewButton title="재구매 베스트 전체보기" path="#" />
        </MallSectionInnerWrapper>

        <MallSectionInnerWrapper>
          <SectionTitle title="Food Essay" />
          <EventProductList eventProducts={mockProducts_6} />
          <MoreViewButton title="Food Essay 전체보기" path="#" />
        </MallSectionInnerWrapper>
      </div>
    </MallSectionWrapper>
  );
}
