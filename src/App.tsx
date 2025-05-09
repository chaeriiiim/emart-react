import Container from "./components/common/Container";
import Root from "./components/common/Root";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Root>
      <GlobalStyle />
      <Container>
        <h1>test</h1>
      </Container>
    </Root>
  );
}

export default App;
