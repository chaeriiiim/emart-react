import BannerImg from "../../assets/banner_1.webp";

export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        backgroundColor: "black",
        marginTop: "120px",
      }}
    >
      <img src={BannerImg} style={{ width: "1280px", height: "120px" }} />
    </div>
  );
}
