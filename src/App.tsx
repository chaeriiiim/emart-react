import Container from "./components/Container";
import Root from "./components/Root";
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
