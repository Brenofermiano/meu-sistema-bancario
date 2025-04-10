import { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";

export default function Operacoes() {
  const location = useLocation();
  const titularInicial = location.state?.titular || ""; // titular vindo da tela anterior

  const [titular, setTitular] = useState(titularInicial);
  const [valor, setValor] = useState("");
  const [mensagem, setMensagem] = useState("");

  const depositar = async () => {
    try {
      const response = await api.post("/depositar", {
        titular,
        valor: parseFloat(valor),
      });
      setMensagem(response.data);
      setValor("");
    } catch {
      setMensagem("Erro ao depositar");
    }
  };

  const sacar = async () => {
    try {
      const response = await api.post("/sacar", {
        titular,
        valor: parseFloat(valor),
      });
      setMensagem(response.data);
      setValor("");
    } catch {
      setMensagem("Erro ao sacar");
    }
  };

  const consultarSaldo = async () => {
    try {
      const response = await api.get("/saldo", {
        params: { titular },
      });
      setMensagem(response.data);
    } catch {
      setMensagem("Erro ao consultar saldo");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Operações Bancárias</h1>

        <input
          type="text"
          placeholder="Titular"
          className="w-full border rounded-md p-3 mb-4"
          value={titular}
          onChange={(e) => setTitular(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor (para depositar/sacar)"
          className="w-full border rounded-md p-3 mb-4"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />

        <div className="flex flex-col gap-3 mb-4">
          <button onClick={depositar} className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Depositar
          </button>
          <button onClick={sacar} className="bg-red-600 text-white py-2 rounded hover:bg-red-700">
            Sacar
          </button>
          <button onClick={consultarSaldo} className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Ver Saldo
          </button>
        </div>

        {mensagem && (
          <div className="text-center text-sm text-gray-700 mt-2 bg-gray-100 p-2 rounded">
            {mensagem}
          </div>
        )}
      </div>
    </div>
  );
}
