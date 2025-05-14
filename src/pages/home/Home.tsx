import Banner from "../../components/common/Banner";
import DeliverySection from "./DeliverySection";
import HomeSlider from "./HomeSlider";

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <DeliverySection />
      <Banner />
    </div>
  );
}
