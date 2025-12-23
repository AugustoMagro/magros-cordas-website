import { BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";
import './index.css'
import Home from "./pages/Home/index.tsx";
import Produtos from "./pages/Produtos/index.tsx";
import MvVinhos from "./pages/MvVinhos/index.tsx";
import DetalheProduto from "./pages/DetalheProduto/index.tsx";


const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/mvvinhos" element={<MvVinhos />} />
      <Route path="/produto/:id" element={<DetalheProduto />} />
    </Routes>
  </BrowserRouter >
);
