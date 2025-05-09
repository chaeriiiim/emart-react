import { BrowserRouter, Route, Routes } from "react-router-dom";

import Root from "./components/common/Root";
import { GlobalStyle } from "./styles/GlobalStyle";

import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Root>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Root>
    </BrowserRouter>
  );
}

export default App;
