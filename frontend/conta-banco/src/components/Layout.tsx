// src/components/Layout.tsx
import { Link } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="bg-blue-700 p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between">
          <span className="font-bold text-lg">BancoPro</span>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/conta" className="hover:underline">Criar Conta</Link>
            {/* Removido: <Link to="/operacoes" className="hover:underline">Operações</Link> */}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

