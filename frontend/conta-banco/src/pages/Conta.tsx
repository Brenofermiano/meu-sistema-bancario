import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Conta() {
  const [titular, setTitular] = useState("");
  const [numero, setNumero] = useState("");
  const navigate = useNavigate();

  const criarConta = async () => {
    try {
      await api.post("/criar", {
        titular,
        numero: Number(numero),
      });

      alert("Conta criada com sucesso!");
      setTitular("");
      setNumero("");

      // 👇 envia o titular para a próxima tela sem usar URL
      navigate("/operacoes", {
        state: { titular },
      });
    } catch {
      alert("Erro ao criar conta");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Criar Conta Bancária</h1>
        <input
          type="text"
          placeholder="Titular"
          className="w-full border rounded-md p-3 mb-4"
          value={titular}
          onChange={(e) => setTitular(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número da Conta"
          className="w-full border rounded-md p-3 mb-6"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
        />
        <button
          onClick={criarConta}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Criar Conta
        </button>
      </div>
    </div>
  );
}
