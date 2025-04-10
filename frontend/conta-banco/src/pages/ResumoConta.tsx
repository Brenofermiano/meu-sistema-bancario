// src/pages/ResumoConta.tsx
import { useLocation } from "react-router-dom";

export default function ResumoConta() {
  const location = useLocation();
  const { titular, saldo, historico } = location.state || {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Resumo da Conta</h1>

        <p className="mb-2"><strong>Titular:</strong> {titular}</p>
        <p className="mb-4"><strong>Saldo Atual:</strong> R$ {saldo?.toFixed(2)}</p>

        <h2 className="text-lg font-semibold mb-2">Histórico de Operações:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {historico?.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
