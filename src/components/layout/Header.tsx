import { useState, type ChangeEvent, type JSX } from "react";
import Logo from "../../assets/e-mart_logo.svg";
import HeaderOnClick from "./HeaderOnClick";

import styled from "styled-components";

const HeaderRoot = styled.div`
  // width: 100%;
  // height: 72px;
  background-color: #ffd040;
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.div`
  width: 1280px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const LogoImg = styled.img`
  width: 160px;
  height: 56px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 320px;
`;

const SearchInput = styled.input`
  border-radius: 20px;
  border: none;
  outline: none;
  background-color: #f5f5f5;
  width: 320px;
  height: 44px;
  padding: 6px 52px 6px 16px;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #000;
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const HeaderOnClickWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`;

export default function Header(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <HeaderRoot>
      <HeaderWrapper>
        <LogoImg src={Logo} alt="이마트 로고" />
        <InputWrapper>
          <SearchInput
            type="text"
            placeholder="AD) 켈로그 첵스 신제품 출시"
            onChange={handleChange}
            value={inputValue}
          />
          <SearchButton>버튼</SearchButton>
        </InputWrapper>
        <HeaderOnClickWrapper>
          <HeaderOnClick />
        </HeaderOnClickWrapper>
      </HeaderWrapper>
    </HeaderRoot>
  );
}
