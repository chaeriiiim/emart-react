import FooterFamilySiteSelect from "./FooterFamilySiteSelect";

import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
`;

const FooterMainNavWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
  height: 51px;
`;

const FooterMainNavInner = styled.div`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLinkGroup = styled.div`
  display: flex;
  align-items: center;
`;

const FooterMainNavLink = styled.a<{ isLast?: boolean }>`
  font-size: 13px;
  color: #777777;
  font-weight: bold;
  margin: 0 20px 0 0;

  &::after {
    ${({ isLast }) =>
      !isLast &&
      `
      content: "|";
      display: inline-block;
      margin-left: 20px;
      color: #e5e5e5;
    `}
  }

  // &:nth-child(2) ,
  // &:nth-child(8){
  //   color:red;
  // }
`;

interface FooterMainNavItem {
  href: string;
  title: string;
}

const footerMainNav: FooterMainNavItem[] = [
  { href: "#", title: "회사소개" },
  { href: "#", title: "개인정보처리방침" },
  { href: "#", title: "이용약관" },
  { href: "#", title: "청소년 보호방침" },
  { href: "#", title: "지식재산권센터" },
  { href: "#", title: "입점상담" },
  { href: "#", title: "이마트점포 입점상담" },
  { href: "#", title: "광고신청" },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterMainNavWrapper>
        <FooterMainNavInner>
          <NavLinkGroup>
            {footerMainNav.map((item, index) => (
              <FooterMainNavLink
                key={index}
                href={item.href}
                isLast={index === footerMainNav.length - 1}
              >
                {item.title}
              </FooterMainNavLink>
            ))}
          </NavLinkGroup>
          <FooterFamilySiteSelect />
        </FooterMainNavInner>
      </FooterMainNavWrapper>
    </FooterWrapper>
  );
}
