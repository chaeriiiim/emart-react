import styled from "styled-components";

interface BannerProps {
  backgroundImg: string;
  href: string;
  title: string;
  description: string;
  titleColor?: string;
  descColor?: string;
}

const BannerSection = styled.div`
  margin-top: 120px;
`;
const BannerWrapper = styled.div<{ $backgroundImg: string }>`
  width: 1280px;
  height: 120px;

  background-image: url(${(props) => props.$backgroundImg});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 0 auto;
`;

const BannerTextWrapper = styled.div`
  position: absolute;
  left: 32px;
  top: 50%;
  transform: translateY(-50%);
`;

const Title = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

const Description = styled.p`
  color: #fff;
  margin-top: 2px;
`;

export default function Banner({
  backgroundImg,
  href,
  title,
  titleColor,
  description,
  descColor,
}: BannerProps) {
  return (
    <BannerSection>
      <BannerWrapper $backgroundImg={backgroundImg}>
        <a href={href}>
          <BannerTextWrapper>
            <Title color={titleColor}>{title}</Title>
            <Description color={descColor}>{description}</Description>
          </BannerTextWrapper>
        </a>
      </BannerWrapper>
    </BannerSection>
  );
}
