import styled from "styled-components";

interface SectionTitleProps {
  title: string;
}

const TitleContents = styled.p`
  font-size: 28px;
  font-weight: bold;
  line-height: 1.2142857143;
  margin-bottom: 20px;
`;

export default function SectionTitle({ title }: SectionTitleProps) {
  return <TitleContents>{title}</TitleContents>;
}
