import Tap from "../../components/common/Tap";

const tabsData = [
  { id: "banner_1", label: "오반장" },
  { id: "banner_2", label: "1+1" },
  { id: "banner_3", label: "마감세일" },
  { id: "banner_4", label: "이마트 전단행사" },
  { id: "banner_5", label: "트레이더스 점포행사" },
];

export default function MallSection() {
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        marginTop: "120px",
        border: "1px solid red",
      }}
    >
      <Tap tabs={tabsData} />
    </div>
  );
}
