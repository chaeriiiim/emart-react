// import MoreViewButton from "../../components/common/MoreViewButton";
import MoreViewButton from "../../components/common/MoreViewButton";
import Tap from "../../components/common/Tap";
import MallProductList from "./MallProductList";
import SectionTitle from "./SectionTitle";

import dawnDeliveryMark from "../../assets/dawnDeliveryMark.avif";
import Product_1 from "../../assets/product_1.avif";
import Product_2 from "../../assets/product_2.avif";

import styled from "styled-components";

const mockProducts = [
  {
    href: "#",
    imgSrc: Product_1,
    imgAlt: "조우 한우",
    componyName: "조우",
    productName: "[1++NO.9]생갈비 등 한우 특수부위 모듬",
    productPrice: "99,980원~",
  },
  {
    href: "#",
    imgSrc: Product_2,
    imgAlt: "백설 조미료",
    componyName: "CJ제일제당",
    productName: "브랜드 FESTA! 조미료/소스 ~1+1",
    productPrice: "13,200원~",
  },
  {
    href: "#",
    imgSrc: Product_1,
    imgAlt: "오뚜기 제품",
    markSrc: dawnDeliveryMark,
    componyName: "오뚜기",
    productName: "진라면 5+1",
    productPrice: "5,980원",
  },
  {
    href: "#",
    imgSrc: Product_1,
    imgAlt: "오뚜기 제품",
    markSrc: dawnDeliveryMark,
    componyName: "오뚜기",
    productName: "진라면 5+1",
    productPrice: "5,980원",
  },
  {
    href: "#",
    imgSrc: Product_1,
    imgAlt: "오뚜기 제품",
    markSrc: dawnDeliveryMark,
    componyName: "오뚜기",
    productName: "진라면 5+1",
    productPrice: "5,980원",
  },
  {
    href: "#",
    imgSrc: Product_1,
    imgAlt: "오뚜기 제품",
    markSrc: dawnDeliveryMark,
    componyName: "오뚜기",
    productName: "진라면 5+1",
    productPrice: "5,980원",
  },
  {
    href: "#",
    imgSrc: Product_1,
    imgAlt: "오뚜기 제품",
    markSrc: dawnDeliveryMark,
    componyName: "오뚜기",
    productName: "진라면 5+1",
    productPrice: "5,980원",
  },
  {
    href: "#",
    imgSrc: Product_1,
    imgAlt: "오뚜기 제품",
    markSrc: dawnDeliveryMark,
    componyName: "오뚜기",
    productName: "진라면 5+1",
    productPrice: "5,980원",
  },
];

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
    <MallSectionWrapper style={{}}>
      <SectionTitle title="지금 세일 중인 상품이에요" />
      <Tap tabs={tabsData} />
      <MallProductList products={mockProducts} />
      <MoreViewButton path="/a" title="오반장 전체보기" />
    </MallSectionWrapper>
  );
}
