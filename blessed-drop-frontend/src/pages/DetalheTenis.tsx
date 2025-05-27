import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api.tsx";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

interface Tenis {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
}

const DetalheTenis: React.FC = () => {
  const { id } = useParams();
  const [tenis, setTenis] = useState<Tenis | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
  console.log("ID recebido:", id);
  api.get<Tenis>(`/tenis/${id}`)
    .then((response) => {
      console.log("Tênis carregado:", response.data);
      setTenis(response.data);
    })
    .catch((error) => {
      console.error("Erro ao carregar tênis:", error);
    });
}, [id]);

  if (!tenis) {
    return <p className="p-4">Carregando...</p>;
  }

  return (
    <div className="p-4 flex justify-content-center">
      <Card
        title={tenis.nome}
        subTitle={`R$ ${tenis.preco.toFixed(2)}`}
        className="shadow-4"
        style={{ maxWidth: "500px" }}
        footer={
          <Button
            label="Voltar"
            icon="pi pi-arrow-left"
            className="p-button-secondary"
            onClick={() => navigate("/catalogo")}
          />
        }
      >
        <Image
          src={tenis.imagem}
          alt={tenis.nome}
          width="100%"
          height="300px"
          preview
          className="border-round"
          imageStyle={{ objectFit: "cover" }}
        />
        <p className="mt-3">{tenis.descricao}</p>
      </Card>
    </div>
  );
};

export default DetalheTenis;
