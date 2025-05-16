import styled from "styled-components";

const MoreViewButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreViewButton = styled.button`
  width: 480px;
  height: 60px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  color: #666666;
`;

export default function HomePageButton() {
  return (
    <MoreViewButtonWrapper>
      <MoreViewButton>오반장 전체보기</MoreViewButton>
    </MoreViewButtonWrapper>
  );
}
