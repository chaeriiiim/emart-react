import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HeaderCategory from "./HeaderCategory";
import HeaderNav from "./HeaderNav";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LayoutRoot = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  border: 2px dashed red;
  padding: 2rem;
`;

export default function Layout() {
  return (
    <LayoutRoot>
      <HeaderNav />
      <Header />
      <HeaderCategory />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </LayoutRoot>
  );
}
