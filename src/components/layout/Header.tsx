import { useState } from "react";
import Logo from "../../assets/e-mart_logo.svg";
import HeaderOnClick from "./HeaderOnClick";

export default function Header() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "72px",
        backgroundColor: "#ffd040",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "1280px", height: "100%", border: "1px solid red" }}>
        <div
          style={{
            width: "1280px",
            height: "100%",
            border: "1px solid red",
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <img src={Logo} style={{ width: "160px", height: "56px" }}></img>
          <div style={{ position: "relative", width: "320px" }}>
            <input
              type="text"
              placeholder="AD) 켈로그 첵스 신제품 출시"
              onChange={handleChange}
              value={inputValue}
              style={{
                borderRadius: "20px",
                border: "none",
                outline: "none",
                backgroundColor: "#f5f5f5",
                width: "320px",
                height: "44px",
                padding: "6px 52px 6px 16px",
              }}
            />
            <button
              style={{
                position: "absolute",
                right: "6px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                backgroundColor: "#000",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              버튼
            </button>
          </div>
          <div
            style={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <HeaderOnClick />
          </div>
        </div>
      </div>
    </div>
  );
}
