import { Layout } from "./Layout/Layout";
import "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
      <Analytics />
    </>
  );
}

export default App;
