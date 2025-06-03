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
`;

const FooterMainNavLink = styled.a<{ $highlight?: boolean }>`
  font-size: 13px;
  // color: #777777;
  color: ${({ $highlight }) => ($highlight ? "red" : "#777777")};
  font-weight: bold;
  margin: 0 20px 0 0;

  &:not(:last-child)::after {
    content:"|";
    display:"inline-block;
    right:0;
    color: #e5e5e5;
    height:12px;
    margin-left:20px;
    width:1px;
  }

  &:nth-child(2),
  &:nth-child(8){
    color:red;
  }
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
          {footerMainNav.map((item, index) => (
            <FooterMainNavLink
              key={index}
              href={item.href}
              $highlight={
                item.title === "개인정보처리방침" || item.title === "광고신청"
              }
            >
              {/* 다시 해봐야함 오류 */}
              {item.title}
            </FooterMainNavLink>
          ))}
        </FooterMainNavInner>
      </FooterMainNavWrapper>
    </FooterWrapper>
  );
}
