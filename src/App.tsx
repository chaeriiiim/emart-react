import { Container } from "./components/Container";
import { Root } from "./components/Root";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <Root>
      <GlobalStyle />
      <header>
        <Container></Container>
      </header>
      <main>
        <Container>
          <h1>test</h1>
        </Container>
      </main>
    </Root>
  );
}

export default App;
