// import MoreViewButton from "../../components/common/MoreViewButton";
import MoreViewButton from "../../components/common/MoreViewButton";
import Tap from "../../components/common/Tap";
import MallProductList from "./MallProductList";
import SectionTitle from "./SectionTitle";

import dawnDeliveryMark from "../../assets/dawnDeliveryMark.avif";
import Product_1 from "../../assets/product_1.avif";
import Product_2 from "../../assets/product_2.avif";
import Product_3 from "../../assets/product_3.avif";
import Product_4 from "../../assets/product_4.avif";
import Product_5 from "../../assets/product_5.avif";
import Product_6 from "../../assets/product_6.avif";
import Product_7 from "../../assets/product_7.avif";
import Product_8 from "../../assets/product_8.avif";

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
    imgSrc: Product_3,
    imgAlt: "맬크앤허니 제품",
    markSrc: dawnDeliveryMark,
    componyName: "밀크앤허니",
    productName: "(~1+1)호텔컬렉션/르쎄떼 전 품목 할인행사",
    productPrice: "1,290원~",
  },
  {
    href: "#",
    imgSrc: Product_4,
    imgAlt: "국물내기 제품",
    productName: "국물내기 참치액/간장/육수팩 ~50%",
    productPrice: "9,900원~",
  },
  {
    href: "#",
    imgSrc: Product_5,
    imgAlt: "쌀 제품",
    componyName: "이쌀이다",
    productName: "전국팔도 쌀 잡곡 할인특가!",
    productPrice: "30,570원~",
  },
  {
    href: "#",
    imgSrc: Product_6,
    imgAlt: "영양제 제품",
    productName: "인기 영양제/홍삼/건강식품 ~6-% 쓱 새벽배송",
    productPrice: "19,800원~",
  },
  {
    href: "#",
    imgSrc: Product_7,
    imgAlt: "뉴오리진 제품",
    componyName: "뉴오리진",
    productName: "이너플로라 질유산균 외 데일리 건강특가 골라",
    productPrice: "9,900원~",
  },
  {
    href: "#",
    imgSrc: Product_8,
    imgAlt: "과일",
    markSrc: dawnDeliveryMark,
    productName: "제철 프리미엄 과일 ~50% 할인",
    productPrice: "9,950원~",
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
