import "./index.css";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import {
  CuisinePage,
  Home,
  Recipe,
  Container,
  Header,
} from "./components/Export";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CuisinePage/:type" element={<CuisinePage />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </Container>
      </HashRouter>
    </>
  );
}

export default App;
