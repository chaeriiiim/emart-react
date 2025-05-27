import {
  mockProducts_3,
  mockProducts_4,
  mockProducts_6,
  mockProducts_7,
} from "../../api/mockData";
import Banner from "../../components/common/Banner";
import DeliveryTextMark from "../../components/common/DeliveryTextMark";
import MoreViewButton from "../../components/common/MoreViewButton";
import EventProductList from "./EventProductList";
import MallProductList from "./MallProductList";
import MallTabSection from "./MallTabSection";
import SectionTitle from "./SectionTitle";

import BannerImg from "../../assets/banner_1.webp";
import BannerSubImg from "../../assets/banner_2.png";

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
      <Banner
        backgroundImg={BannerImg}
        href="#"
        title="지금 SSG.COM Biz. 가입하고, 혜택 받으세요!"
        description="가입 즉시 10% 할인 쿠폰과 매월 6종 쿠폰 자동 지급까지"
        titleColor="#fff"
        descColor="#fff"
      />
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

        <Banner
          backgroundImg={BannerSubImg}
          href="#"
          title="배달 대신 장보기로 식비 걱정 뚝"
          description="1만원 대로 혼술 달리는 법"
          titleColor="#fff"
          descColor="#fff"
        />

        <MallSectionInnerWrapper>
          <SectionTitle title="Food Essay" />
          <EventProductList eventProducts={mockProducts_6} />
          <MoreViewButton title="Food Essay 전체보기" path="#" />
        </MallSectionInnerWrapper>
      </div>

      <MallSectionInnerWrapper>
        <SectionTitle title="이번 주 주목할 만한 소식" />
        <EventProductList eventProducts={mockProducts_7} />
        <MoreViewButton title="기획전 전체보기" path="#" />
      </MallSectionInnerWrapper>
    </MallSectionWrapper>
  );
}
