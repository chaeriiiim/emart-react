import styled from "styled-components";

interface LinkButtonProps {
  href: string;
  title: string;
}

const ButtonStyled = styled.a`
  display: inline-flex;
  align-items: center;
  border: 1px solid #dcdcdc;
  padding: 1px 8px 1px 6px;
  font-size: 12px;
  border-radius: 4px;
  background-color: white;
`;

const Arrow = styled.span`
  display: inline-block;
  margin-left: 6px;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 6px solid red;
`;

export default function LinkButton({ href, title }: LinkButtonProps) {
  return (
    <ButtonStyled href={href}>
      {title}
      <Arrow />
    </ButtonStyled>
  );
}
