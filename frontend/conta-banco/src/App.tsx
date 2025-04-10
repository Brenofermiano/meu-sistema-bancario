import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Conta from "./pages/Conta";
import Operacoes from "./pages/Operacoes"; // se tiver
import Home from "./pages/Home"; // se tiver
import ResumoConta from "./pages/ResumoConta";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/operacoes" element={<Operacoes />} />
          <Route path="/resumo" element={<ResumoConta />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
