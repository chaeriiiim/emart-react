import BannerImg from "../../assets/banner_1.webp";

export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        marginTop: "120px",
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* props 적용 시 backgroundImage 각각 다른 값 */}
      <a href="#">
        {/* props 적용 시 href 각각 다른 값 */}
        <div
          style={{
            position: "absolute",
            left: "32px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            지금 SSG.COM Biz. 가입하고, 혜택 받으세요!
            {/* props 적용 시 contents 각각 다른 값(css에서 color 도 다른 값) */}
          </span>
          <p style={{ color: "#fff", marginTop: "2px" }}>
            가입 즉시 10% 할인 쿠폰과 매월 6종 쿠폰 자동 지급까지
            {/* props 적용 시 contents 각각 다른 값(css에서 color 도 다른 값) */}
          </p>
        </div>
      </a>
    </div>
  );
}
