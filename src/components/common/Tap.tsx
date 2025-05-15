import { useState } from "react";

import styled from "styled-components";

interface tabsItem {
  id: string;
  label: string;
}

const tabs: tabsItem[] = [
  { id: "banner_1", label: "오반장" },
  { id: "banner_2", label: "1+1" },
  { id: "banner_3", label: "마감세일" },
  { id: "banner_4", label: "이마트 전단행사" },
  { id: "banner_5", label: "트레이더스 점포행사" },
];

const TapWrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: #f5f5f5;
  border-radius: 12px;
  display: flex;
`;

const TapInnerWrapper = styled.div<{ active: boolean }>`
  width: 256px;
  height: 56px;
  background-color: ${({ active }) => (active ? "#FFD040" : "#F5F5F5")};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: #777777;
  }
`;

export default function Tap() {
  const [activeTab, setActiveTab] = useState<string>("banner_1");
  return (
    <TapWrapper>
      {tabs.map((tab) => (
        <TapInnerWrapper
          key={tab.id}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab(tab.id);
          }}
          active={activeTab === tab.id}
        >
          <p>{tab.label}</p>
        </TapInnerWrapper>
      ))}
    </TapWrapper>
  );
}
