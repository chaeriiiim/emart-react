import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* 기본 초기화 */
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html, body, #root {
    width:100%;
    height :100%;
    font-family:'Noto Sans KR', 'sans-serif;
    background-color:#fff;
    color:#000;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  ul, li{
    list-style:none;
  }

  button {
    border : none;
    background:none;
    cursor : pointer;
    font-family:inherit;
  }
`;
