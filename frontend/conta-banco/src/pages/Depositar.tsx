import { useState } from "react";
import api from "../services/api";

interface Props {
  titular: string;
  onMensagem: (msg: string) => void;
}

export default function Depositar({ titular, onMensagem }: Props) {
  const [valor, setValor] = useState("");

  const handleDeposito = async () => {
    try {
      const response = await api.post("/depositar", {
        titular,
        valor: parseFloat(valor),
      });
      onMensagem(response.data);
      setValor("");
    } catch {
      onMensagem("Erro ao depositar");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Valor para depósito"
        className="w-full border rounded-md p-3 mb-2"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button
        onClick={handleDeposito}
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Depositar
      </button>
    </div>
  );
}
