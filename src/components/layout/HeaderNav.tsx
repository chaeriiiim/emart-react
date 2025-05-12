import SSGLogo from "../../assets/ssg_logo.svg";

export default function HeaderNav() {
  return (
    <div
      style={{
        width: "1280px",
        height: "42px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <img src={SSGLogo} style={{ width: "90px", height: "16px" }} />
        <ul style={{ display: "flex" }}>
          <li style={{ fontSize: "12px", fontWeight: "bold" }}>
            <a href="#">이마트몰</a>
          </li>
          <li style={{ fontSize: "12px" }}>
            <a href="#">신세계몰</a>
          </li>
          <li style={{ fontSize: "12px" }}>
            <a href="#">신세계백화점</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
