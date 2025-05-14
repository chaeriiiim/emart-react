import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* 박스 모델 통일 */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 문서 구조 */
  html, body {
    width: 100%;
    min-height: 100vh;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: #fff;
    color: #000;
  }

  /* 기본 링크 및 목록 초기화 */
  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol, li {
    list-style: none;
  }

  /* 버튼 초기화 */
  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }
`;
