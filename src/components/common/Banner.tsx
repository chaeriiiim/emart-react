import BannerImg from "../../assets/banner_1.webp";

export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        marginTop: "120px",
      }}
    >
      <a href="#">
        <div
          style={{
            width: "1280px",
            height: "120px",
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              // left: "32px",
              // top: "50%",
              // transform: "translateY(-50%)",
              // color: "#fff",
              // fontWeight: "bold",
              // fontSize: "16px",
            }}
          >
            지금 SSG.COM Biz. 가입하고, 혜택 받으세요!
          </span>
        </div>
      </a>
    </div>
  );
}
