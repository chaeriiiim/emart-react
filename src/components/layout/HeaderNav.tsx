import IconCart from "../../assets/navCart_icon.svg";
import IconEarphone from "../../assets/navHead_icon.svg";
import IconHeart from "../../assets/navHeart_icon.svg";
import IconHuman from "../../assets/navHuman_icon.svg";
import IconSearch from "../../assets/navSearch_icon.svg";
import SSGLogo from "../../assets/ssg_logo.svg";

import styled from "styled-components";

interface IconItem {
  src: string;
  alt: string;
}

const icons: IconItem[] = [
  { src: IconSearch, alt: "검색 아이콘" },
  { src: IconHeart, alt: "좋아요 아이콘" },
  { src: IconHuman, alt: "좋아요 아이콘" },
  { src: IconCart, alt: "좋아요 아이콘" },
  { src: IconEarphone, alt: "좋아요 아이콘" },
];

interface NavItem {
  href: string;
  name: string;
}

const nav: NavItem[] = [
  { href: "#", name: "이마트몰" },
  { href: "#", name: "신세계몰" },
  { href: "#", name: "신세계백화점" },
];

const NavWrapper = styled.div`
  width: 1280px;
  height: 42px;
  // margin: 0 auto;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 90px;
  height: 16px;
`;

const NavList = styled.ul`
  display: flex;
  margin: 0 0 0 12px;
`;

const NavItem = styled.li`
  font-size: 12px;
  color: #666;
  position: relative;
  padding-right: 12px;

  &:not(:last-child)::after {
    content: "|";
    display: inline-block;
    right: 0;
    color: #e5e5e5;
    margin-left: 8px;
  }

  &:nth-child(1) a {
    font-weight: bold;
    color: #000;
  }

  &:nth-child(2) a {
    color: #666666;
  }

  &:nth-child(3) a {
    color: #666666;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: normal;
  }
`;

const IconWrapper = styled.div`
  & img {
    width: 20px;
    height: 20px;
    margin: 0 0 0 5px;
  }
`;

const NavLeftGroup = styled.div`
  display: flex;
  align-items: center;
`;

export default function HeaderNav() {
  return (
    <NavWrapper>
      <NavLeftGroup>
        <Logo src={SSGLogo} alt="ssg 로고" />
        <NavList>
          {nav.map((item, index) => (
            <NavItem key={index}>
              <a href={item.href}>{item.name}</a>
            </NavItem>
          ))}
        </NavList>
      </NavLeftGroup>
      <IconWrapper>
        {icons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} />
        ))}
      </IconWrapper>
    </NavWrapper>
  );
}
