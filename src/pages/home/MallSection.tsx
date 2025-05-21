import { mockProducts } from "../../api/mockData";
import MoreViewButton from "../../components/common/MoreViewButton";
import Tap from "../../components/common/Tap";
import MallProductList from "./MallProductList";
import SectionTitle from "./SectionTitle";

import styled from "styled-components";

const MallSectionWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
`;

const tabsData = [
  { id: "banner_1", label: "오반장" },
  { id: "banner_2", label: "1+1" },
  { id: "banner_3", label: "마감세일" },
  { id: "banner_4", label: "이마트 전단행사" },
  { id: "banner_5", label: "트레이더스 점포행사" },
];

export default function MallSection() {
  return (
    <MallSectionWrapper>
      <SectionTitle title="지금 세일 중인 상품이에요" />
      <Tap tabs={tabsData} />
      <MallProductList products={mockProducts} />
      <MoreViewButton path="/a" title="오반장 전체보기" />
    </MallSectionWrapper>
  );
}
