import Footer from "../layout/Footer";
import Header from "../layout/Header";

import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fafafa;
`;

const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
  border: 2px dashed red;
  padding: 2rem;
`;

export default function Layout() {
  return (
    <Root>
      {/* /<HeaderNav /> */}
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Root>
  );
}
