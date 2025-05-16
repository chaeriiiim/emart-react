import { useNavigate } from "react-router-dom";

import styled from "styled-components";

interface MoreViewButtonProps {
  path: string;
  title: string;
}

const MoreViewButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreViewButtonSetting = styled.button`
  width: 480px;
  height: 60px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  color: #666666;
`;

export default function MoreViewButton({ title, path }: MoreViewButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <MoreViewButtonWrapper>
      <MoreViewButtonSetting onClick={handleClick}>
        {title}
      </MoreViewButtonSetting>
    </MoreViewButtonWrapper>
  );
}
