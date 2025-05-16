import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface MoreViewButtonProps {}

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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <MoreViewButtonWrapper>
      <MoreViewButton onClick={handleClick}>오반장 전체보기</MoreViewButton>
    </MoreViewButtonWrapper>
  );
}
