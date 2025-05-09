import { Outlet } from "react-router-dom";
import Container from "../common/Container";
import Root from "../common/Root";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

function Layout() {
  return (
    <Root>
      <Header />
      <Container>
        <div style={{ height: 300, backgroundColor: "yellow" }}>
          🚨 여기가 Container다
        </div>
        <Outlet />
      </Container>
      <Footer />
    </Root>
  );
}

export default Layout;
