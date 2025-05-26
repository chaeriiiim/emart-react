import test from "../../assets/assay_product_1.avif";
import MoreViewButton from "../../components/common/MoreViewButton";

import styled from "styled-components";

const EventProductCardWrapper = styled.div`
  width: 1280px;
  // height: 500px;
  margin: 0 auto;
`;

const EventCardContent = styled.div`
  & img {
    width: 400px;
    height: 240px;
    border-radius: 12p;
  }
`;

const TItleWrapper = styled.div`
  margin-top: 20px;
`;

const EventTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const EventSubTitle = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;

export default function EventProdcutCard() {
  return (
    <EventProductCardWrapper>
      <EventCardContent>
        <a href="#">
          {/* href props 시 다른 값 */}
          <img src={test} alt="사과 이벤트" />
          {/* src,alt props 시 다른 값 */}
          <TItleWrapper>
            <EventTitle style={{}}>미식관 PICK: 문경사과</EventTitle>
            {/* title props 시 다른 값 */}
            <EventSubTitle>풍부한 과즙, 싱그러운 달콤함</EventSubTitle>
            {/* subtitle props 시 다른 값 */}
          </TItleWrapper>
        </a>
      </EventCardContent>
      <MoreViewButton title="기획전 전체보기" path="#" />
    </EventProductCardWrapper>
  );
}
