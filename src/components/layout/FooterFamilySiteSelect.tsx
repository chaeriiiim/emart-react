import { useState } from "react";
// import { familySiteList } from "../../api/familySiteList";

// import styled from "styled-components";

export default function FooterFamilySiteSelect() {
  const [opne, setOpen] = useState(false);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <div
      style={{
        position: "relative",
        width: "182px",
        height: "30px",
        border: "1px solid #ccc",
        textAlign: "left",
        backgroundColor: "#fff",
        padding: "0px 10px 0px 15px",
        display: "flex",
        alignItems: "center",
        color: "#444",
      }}
    >
      <div
        style={{
          // padding: "12px 16px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",

          fontSize: "12px",
        }}
        onClick={toggleDropdown}
      >
        FAMILY SITE
      </div>
    </div>
  );
}
