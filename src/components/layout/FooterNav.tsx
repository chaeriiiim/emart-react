import styled from "styled-components";

const FooterNavWrapper = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  margin-top: 160px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
`;

const FooterNavInnerWrapper = styled.div`
  width: 1280px;
  height: 52px;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const FooterNavLink = styled.a`
  font-size: 13px;
  margin: 0px 20px 0px 0px;
  color: #666666;
  font-weight: bold;

  &:not(:last-child)::after {
    content:"|";
    display:"inline-block;
    right:0;
    color: #e5e5e5;
    height:12px;
    margin-left:20px;
    width:1px;
  }
`;

interface FooterNavItem {
  href: string;
  title: string;
}

const footerNav: FooterNavItem[] = [
  { href: "#", title: "공지사항" },
  { href: "#", title: "이마트 점포안내" },
  { href: "#", title: "트레이더스 점포안내" },
  { href: "#", title: "신세계포인트" },
];

export default function FooterNav() {
  return (
    <FooterNavWrapper>
      <FooterNavInnerWrapper>
        {footerNav.map((item, index) => (
          <FooterNavLink key={index} href={item.href}>
            {item.title}
          </FooterNavLink>
        ))}
      </FooterNavInnerWrapper>
    </FooterNavWrapper>
  );
}
