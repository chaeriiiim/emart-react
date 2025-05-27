import styled from "styled-components";

export interface EventProductCardProps {
  href: string;
  src: string;
  alt: string;
  title: string;
  subTitle: string;
}

const EventProductCardWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;

  gap: 0 24px;
`;

const EventCardContent = styled.div`
  & img {
    width: 400px;
    height: 240px;
    border-radius: 12px;
  }
`;

const TItleWrapper = styled.div`
  margin-top: 20px;
`;

const EventTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const EventSubTitle = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;

export default function EventProductCard({
  href,
  src,
  alt,
  title,
  subTitle,
}: EventProductCardProps) {
  return (
    <EventProductCardWrapper>
      <EventCardContent>
        <a href={href}>
          <img src={src} alt={alt} />
          <TItleWrapper>
            <EventTitle>{title}</EventTitle>
            <EventSubTitle>{subTitle}</EventSubTitle>
          </TItleWrapper>
        </a>
      </EventCardContent>
    </EventProductCardWrapper>
  );
}
