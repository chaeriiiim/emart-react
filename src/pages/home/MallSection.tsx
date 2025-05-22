import MoreViewButton from "../../components/common/MoreViewButton";
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
      <SectionTitle title="지금 세일 중인 상품이에요" />
      <MallTabSection />

      <MoreViewButton path="/a" title="오반장 전체보기" />
    </MallSectionWrapper>
  );
}
