import { useEffect, useState } from "react";

import styled from "styled-components";

import { mockProducts, mockProducts_2 } from "../../api/mockData";
import MoreViewButton from "../../components/common/MoreViewButton";
import Tab from "../../components/common/Tab";
import MallProductList from "./MallProductList";

import type { ProductCardProps } from "./MallProductCard";

const tabsData = [
  { id: "banner_1", label: "오반장" },
  { id: "banner_2", label: "1+1" },
  { id: "banner_3", label: "마감세일" },
  { id: "banner_4", label: "이마트 전단행사" },
  { id: "banner_5", label: "트레이더스 점포행사" },
];

const getProductByTab = async (tabId: string): Promise<ProductCardProps[]> => {
  await new Promise((res) => setTimeout(res, 500));

  switch (tabId) {
    case "banner_1":
      return mockProducts;
    case "banner_2":
      return mockProducts_2;
    default:
      return [];
  }
};

const getButtonTitleByTab = (tabId: string) => {
  switch (tabId) {
    case "banner_1":
      return "오반장 전체보기";
    case "banner_2":
      return "1+1 전체보기";
    case "banner_3":
      return "마감세일 전체보기";
    case "banner_4":
      return "전단행사 전체보기";
    case "banner_5":
      return "트레이더스 전체보기";
    default:
      return "";
  }
};

const MallTabWrapper = styled.div`
  margin-top: 24px;
`;

export default function MallTabSection() {
  const [activeTab, setActiveTab] = useState("banner_1");
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductByTab(activeTab).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [activeTab]);

  return (
    <MallTabWrapper>
      <Tab tabs={tabsData} activeTab={activeTab} onChangeTab={setActiveTab} />
      {loading ? <p>로딩중</p> : <MallProductList products={products} />}
      <MoreViewButton path="/a" title={getButtonTitleByTab(activeTab)} />
    </MallTabWrapper>
  );
}
