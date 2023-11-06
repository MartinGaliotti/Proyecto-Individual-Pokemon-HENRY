import Landing from "./views/Landing/Landing.jsx";
import Home from "./views/Home/Home.jsx";
import Detail from "./views/Detail/Detail.jsx";
import Create from "./views/Create/Create.jsx";
import { Routes, Route } from "react-router-dom";
import pathName from "./helpers/PATHNAME.routes.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={pathName.LANDING} element={<Landing />} />
        <Route path={pathName.HOME} element={<Home />} />
        <Route path={`${pathName.DETAIL}/:id`} element={<Detail />} />
        <Route path={pathName.CREATE} element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
