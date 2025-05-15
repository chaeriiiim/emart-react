import Banner from "../../components/common/Banner";
import DeliverySection from "./DeliverySection";
import HomeSlider from "./HomeSlider";
import MallSection from "./MallSection";

import BannerImg from "../../assets/banner_1.webp";

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <DeliverySection />
      <Banner
        backgroundImg={BannerImg}
        href="#"
        title="지금 SSG.COM Biz. 가입하고, 혜택 받으세요!"
        description="가입 즉시 10% 할인 쿠폰과 매월 6종 쿠폰 자동 지급까지"
        titleColor="#fff"
        descColor="#fff"
      />
      <MallSection />
    </div>
  );
}
