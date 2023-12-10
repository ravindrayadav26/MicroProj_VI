import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Entertainment from "./pages/Entertainment";
import DefaultPage from "./components/DefaultPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/" element={<Registration />} />
        <Route path="/category" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<Entertainment />} />
      </Routes>
    </>
  );
}

export default App;
