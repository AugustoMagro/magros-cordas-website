import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import './index.css'
import Home from "./pages/Home/index.tsx";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>,
);