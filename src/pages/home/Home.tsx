import Banner from "../../components/common/Banner";

export default function Home() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "500px",
          border: "1px solid red",
          display: "flex",
          gap: "24px",
        }}
      >
        <div>
          <div
            style={{
              width: "837px",
              height: "500px",
              backgroundColor: "gray",
              borderRadius: "10px",
            }}
          ></div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              width: "419px",
              height: "238px",
              backgroundColor: "gray",
              borderRadius: "10px",
            }}
          ></div>
          <div
            style={{
              width: "419px",
              height: "238px",
              backgroundColor: "gray",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
      <Banner />
    </div>
  );
}
