import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyle";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
