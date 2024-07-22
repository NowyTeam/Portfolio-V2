import { Layout } from "./Layout/Layout";
import "./App.module.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;
