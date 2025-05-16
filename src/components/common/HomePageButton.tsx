import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function HomePageButton() {
  return (
    <ButtonWrapper>
      <button
        style={{
          width: "480px",
          height: "60px",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
        }}
      >
        오반장 전체보기
      </button>
    </ButtonWrapper>
  );
}
