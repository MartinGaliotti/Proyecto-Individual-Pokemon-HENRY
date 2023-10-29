import Landing from "./views/Landing/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import pathName from "./helpers/PATHNAME.routes.js";

function App() {
  return (
    <>
      <Routes>
        <Route path={pathName.LANDING} element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
