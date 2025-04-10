import api from "../services/api";

interface Props {
  titular: string;
  onMensagem: (msg: string) => void;
}

export default function ConsultarSaldo({ titular, onMensagem }: Props) {
  const consultar = async () => {
    try {
      const response = await api.get("/saldo", { params: { titular } });
      onMensagem(response.data);
    } catch {
      onMensagem("Erro ao consultar saldo");
    }
  };

  return (
    <button
      onClick={consultar}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mt-2"
    >
      Ver Saldo
    </button>
  );
}
