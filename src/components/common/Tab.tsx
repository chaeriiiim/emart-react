import styled from "styled-components";

interface TabsItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabsItem[];
  activeTab: string;
  onChangeTab: (id: string) => void;
}

const TapWrapper = styled.div`
  width: 100%;
  height: 56px;
  background-color: #f5f5f5;
  border-radius: 12px;
  display: flex;
`;

const TapInnerWrapper = styled.div<{ $active: boolean }>`
  width: 256px;
  height: 56px;
  background-color: ${({ $active }) => ($active ? "#FFD040" : "#F5F5F5")};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  & p {
    color: #777777;
  }
`;

export default function Tap({ tabs, activeTab, onChangeTab }: TabsProps) {
  return (
    <TapWrapper>
      {tabs.map((tab) => (
        <TapInnerWrapper
          key={tab.id}
          onClick={() => onChangeTab(tab.id)}
          $active={activeTab === tab.id}
        >
          <p>{tab.label}</p>
        </TapInnerWrapper>
      ))}
    </TapWrapper>
  );
}
