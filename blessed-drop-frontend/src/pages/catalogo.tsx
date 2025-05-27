import React, { useEffect, useState } from "react";
import api from "../services/api.tsx";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import { useNavigate } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./../styles/catalogo.css";

interface Tenis {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

const Catalogo: React.FC = () => {
  const [tenis, setTenis] = useState<Tenis[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    carregarTenis();
  }, []);

  const carregarTenis = () => {
    api.get<Tenis[]>("/tenis").then((response) => {
      setTenis(response.data);
    });
  };

  const deletarTenis = (id: number) => {
    confirmDialog({
      message: "Tem certeza que deseja excluir esse drop?",
      header: "Confirmar Exclusão",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Sim",
      rejectLabel: "Cancelar",
      accept: () => {
        api.delete(`/tenis/${id}`).then(() => {
          carregarTenis();
        });
      },
    });
  };

  return (
    <div className="p-4">
      <ConfirmDialog />
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1.5rem" }}>
        {tenis.map((item) => (
          <Card
  key={item.id}
  className="shadow-3 border-round-xl overflow-hidden flex flex-column"
  style={{ width: "230px", height: "360px", display: "flex" }}
>
  {/* Imagem */}
  <div style={{ height: "150px", position: "relative" }}>
    <Image
      src={item.imagem}
      alt={item.nome}
      width="100%"
      height="100%"
      preview
      className="border-0"
      imageStyle={{ objectFit: "cover" }}
    />
    <div className="absolute top-0 right-0 p-2 z-2">
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-sm p-button-danger"
        onClick={() => deletarTenis(item.id)}
      />
    </div>
  </div>

  {/* Conteúdo */}
  <div className="p-2 flex flex-column justify-content-between flex-grow-1" style={{ flex: "1 1 auto", overflow: "hidden" }}>
    <h4 className="m-0 text-md font-semibold text-overflow-ellipsis white-space-nowrap overflow-hidden" title={item.nome}>
      {item.nome}
    </h4>

    <p
      className="text-800 text-xs line-height-2 mt-1"
      style={{
        flex: "1 1 auto",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
      }}
    >
      {item.descricao}
    </p>

    {/* Footer */}
    <div className="flex justify-content-between align-items-center mt-2">
      <span className="text-lg font-bold text-blue-600">
        R$ {item.preco.toFixed(2)}
      </span>
      <Button
        icon="pi pi-eye"
        label="Ver"
        className="p-button-sm p-button-info"
        onClick={() => navigate(`/detalhe/${item.id}`)}
      />
    </div>
  </div>
</Card>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
