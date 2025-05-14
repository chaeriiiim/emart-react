import SSGLogo from "../../assets/ssg_logo.svg";

import styled from "styled-components";

const NavWrapper = styled.div`
  width: 1280px;
  height: 42px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 1px solid red;
`;

const Logo = styled.img`
  width: 90px;
  height: 16px;
`;

const NavList = styled.ul`
  display: flex;
  gap: 12px;
`;

const NavItem = styled.li`
  font-size: 12px;
  color: #666;
  position: relative;
  padding-right: 12px;

  &:not(:last-child)::after {
    content: "|";
    position: absolute;
    right: 0;
    color: #ccc;
    padding-left: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: normal;

    &:first-child {
      font-weight: bold;
      color: #000;
    }
  }
`;

export default function HeaderNav() {
  return (
    <NavWrapper>
      <Logo src={SSGLogo} alt="ssg 로고" />
      <NavList>
        <NavItem>
          <a href="#">이마트몰</a>
        </NavItem>
        <NavItem>
          <a href="#">신세계몰</a>
        </NavItem>
        <NavItem>
          <a href="#">신세계백화점</a>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}
