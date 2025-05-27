import React, { useState } from "react";
import api from "../services/api.tsx";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import "primereact/resources/themes/lara-light-indigo/theme.css";

const AdminCadastrar: React.FC = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState<number | null>(null);
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

const cadastrarTenis = () => {
  console.log({ nome, preco, imagem, descricao }); // Verifica se os dados estão certinhos
  if (nome && preco && imagem) {
    api
      .post("/tenis", { nome, preco, imagem, descricao })
      .then(() => {
        alert("Tênis cadastrado com sucesso!");
        // Limpa campos
        setNome("");
        setPreco(null);
        setImagem("");
        setDescricao("");
      })
      .catch((err) => {
        console.error("Erro ao cadastrar:", err);
      });
  } else {
    alert("Preencha todos os campos obrigatórios.");
  }
};


  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Cadastrar Novo Drop</h2>

      <div className="p-fluid grid">
        <div className="field col-12 md:col-6">
          <label>Nome</label>
          <InputText value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        <div className="field col-12 md:col-6">
          <label>Preço</label>
          <InputNumber
            value={preco}
            onValueChange={(e) => setPreco(e.value!)}
            mode="currency"
            currency="BRL"
            locale="pt-BR"
          />
        </div>

        <div className="field col-12">
          <label>Imagem (URL)</label>
          <InputText value={imagem} onChange={(e) => setImagem(e.target.value)} />
        </div>

        <div className="field col-12">
          <label>Descrição</label>
          <InputTextarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows={3}
          />
        </div>

        <div className="col-12">
          <Button label="Cadastrar" icon="pi pi-plus" onClick={cadastrarTenis} />
        </div>
      </div>
    </div>
  );
};

export default AdminCadastrar;