import { useState } from "react";
import api from "../services/api";

interface Props {
  titular: string;
  onMensagem: (msg: string) => void;
}

export default function Sacar({ titular, onMensagem }: Props) {
  const [valor, setValor] = useState("");

  const handleSaque = async () => {
    try {
      const response = await api.post("/sacar", {
        titular,
        valor: parseFloat(valor),
      });
      onMensagem(response.data);
      setValor("");
    } catch {
      onMensagem("Erro ao sacar");
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Valor para saque"
        className="w-full border rounded-md p-3 mb-2"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      <button
        onClick={handleSaque}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Sacar
      </button>
    </div>
  );
}
