import { useState } from "react";
import DownArrow from "../../assets/downArrow.png";

export default function HeaderOnClick() {
  const [isOpen, setIsopen] = useState(false);

  const handleToggle = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <div
      style={{
        width: "400px",
        height: "44px",
        backgroundColor: "#FFDA6C",
        borderRadius: "22px",
        display: "flex",
        alignItems: "center",
        padding: "0px 10px 0px 16px",
        justifyContent: "space-between",
      }}
      onClick={handleToggle}
    >
      <span style={{ fontWeight: "bold", fontSize: "14px" }}>
        로그인 후 쓱-배송시간을 확인해보세요
      </span>
      <button>
        <img
          src={DownArrow}
          alt="검색"
          style={{
            width: "9px",
            height: "9px",
            objectFit: "contain",
          }}
        />
      </button>
      {isOpen && (
        <div
          style={{
            width: "400px",
            height: "92px",
            backgroundColor: "white",
          }}
        ></div>
      )}
    </div>
  );
}
