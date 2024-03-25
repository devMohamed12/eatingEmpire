import Home from "./Home";
import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import CuisinePage from "./CuisinePage";
import Recipe from "./Recipe";
import { Header } from "../components/Export";


const Pages = () => {
  return (
    <>
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CuisinePage/:type" element={<CuisinePage />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </HashRouter>
    </>
  );
};
export default Pages;
