// import { Outlet } from "react-router-dom";
// import Container from "../common/Container";
// import Root from "../common/Root";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

// function Layout() {
//   return (
//     <Root style={{ width: "100%", height: "100vh" }}>
//       {/* <Header /> */}
//       <h1>header!</h1>
//       <Container
//         style={{
//           width: "1280px",
//           height: "500px",
//           margin: "0 auto",
//           border: "1px solid red",
//         }}
//       >
//         <Outlet />
//       </Container>
//       {/* <Footer /> */}
//     </Root>
//   );
// }

// export default Layout;

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
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </Root>
  );
}
