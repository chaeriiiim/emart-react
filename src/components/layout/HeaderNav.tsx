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

export default function HeaderNav() {
  return (
    <NavWrapper>
      <Logo src={SSGLogo} alt="ssg 로고" />
      <NavList>
        <li style={{ fontSize: "12px", fontWeight: "bold" }}>
          <a href="#">이마트몰</a>
        </li>
        <li style={{ fontSize: "12px" }}>
          <a href="#">신세계몰</a>
        </li>
        <li style={{ fontSize: "12px" }}>
          <a href="#">신세계백화점</a>
        </li>
      </NavList>
    </NavWrapper>
  );
}
