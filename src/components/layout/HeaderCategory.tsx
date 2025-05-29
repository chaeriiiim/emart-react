import styled from "styled-components";

const CategoryWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffd040;
  display: flex;
  align-items: center;
  // justify-content: center;
`;

const CategoryInnerWrapper = styled.div`
  width: 1280px;
  height: 100%;
  line-height: 60px;
  display: flex;
  margin: 0 auto;
`;

const CategoryButton = styled.div`
  width: 149px;
  height: 100%;

  & button {
    width: 32px;
    height: 32px;
    background-color: black;
    border-radius: 20px;
    color: white;
  }

  & span {
    margin: 0 0 0 12px;
    font-weight: bold;
  }
`;

const CategoryList = styled.div`
  display: flex;
  gap: 20px;

  & ul > li {
    font-size: 14px;
  }
`;

interface categoryItem {
  href: string;
  name: string;
}

const category: categoryItem[] = [
  { href: "#", name: "자주구매" },
  { href: "#", name: "세일중" },
  { href: "#", name: "오반장" },
  { href: "#", name: "베스트" },
  { href: "#", name: "신상품" },
  { href: "#", name: "미식관" },
  { href: "#", name: "이벤트" },
];

export default function HeaderCategory() {
  return (
    <CategoryWrapper>
      <CategoryInnerWrapper>
        <CategoryButton>
          <button>버튼</button>
          <span>전체 카테고리</span>
        </CategoryButton>

        <CategoryList>
          {category.map((item, index) => (
            <ul key={index}>
              <li>
                <a href={item.href}>{item.name}</a>
              </li>
            </ul>
          ))}
        </CategoryList>
      </CategoryInnerWrapper>
    </CategoryWrapper>
  );
}
