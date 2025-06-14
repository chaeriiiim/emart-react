// FooterComInfo.tsx

import styled from "styled-components";
import LinkButton from "../common/LinkButton";

const FooterCompanyInfoWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  padding-bottom: 24px;
`;

const CompanyName = styled.p`
  font-size: 12px;
  font-weight: bold;
  line-height: 23px;
`;

const CustomerServiceWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CompanyDetailsGroup = styled.div`
  margin-top: 12px;
`;

const DetailRow = styled.p`
  font-size: 12px;
  line-height: 23px;
  color: #777;
  display: flex;
  gap: 7px;
  flex-wrap: wrap;
`;

const ExtraLinks = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

export default function FooterCompanyInfo() {
  return (
    <FooterCompanyInfoWrapper>
      <CompanyName>(주) 에스에스지닷컴</CompanyName>

      <CustomerServiceWrapper>
        <p style={{ fontSize: "24px" }}>1577-3419</p>
        <LinkButton href="#" title="전화문의 전 클릭" />
        <LinkButton href="#" title="1:1 고객센터톡" />
        <p style={{ fontSize: "12px" }}>고객센터/전자금융거래분쟁처리</p>
      </CustomerServiceWrapper>

      <CompanyDetailsGroup>
        <DetailRow>
          <span>대표자: 최훈학</span>
          <span>서울특별시 영등포구 영신로 34길 30</span>
          <span>사업자등록번호: 870-88-01143</span>
          <span>통신판매업 신고번호: 제 2025-서울영등포-0509호</span>
        </DetailRow>
        <DetailRow>
          <span>개인정보보호책임자: 김우진</span>
          <span>Fax: 02-2068-7118</span>
          <span>ssg@ssg.com</span>
        </DetailRow>
        <ExtraLinks>
          <LinkButton href="#" title="사업자 정보확인" />
          <LinkButton href="#" title="소비자분쟁해결기준" />
        </ExtraLinks>
      </CompanyDetailsGroup>
    </FooterCompanyInfoWrapper>
  );
}
