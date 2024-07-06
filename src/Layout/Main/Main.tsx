import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";

import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default Main;
