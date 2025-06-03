import "./../styles/Register.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Password } from "primereact/password";

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Função para tratar a mudança no campo de senha (letras e espaços)
  const handlePasswordChange = (e: { target: { value: string } }) => {
    const inputValue = e.target.value;
    const regex = /^[A-Za-z\s]*$/;

    if (regex.test(inputValue) || inputValue === '') {
      setPassword(inputValue);
    }
  };

  return (
    <div className="flex align-items-center justify-content-center h-screen">
      <Card
        title="BlessedDrop"
        subTitle="BlessedDrop — a cada drop, um passo de fé."
        className="custom-card"
      >
        <div className="p-float-label mb-3">
          <InputText
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bd-input"
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="p-float-label mb-3">
          <InputText
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bd-input"
          />
          <label htmlFor="username">Nome de Usuário</label>
        </div>

        <div className="p-float-label mb-3">
          <Password
            id="password"
            value={password}
            onChange={handlePasswordChange}
            toggleMask={true}
            className="bd-input"
          />
          <label htmlFor="password">Senha</label>
        </div>

        <Button label="Registrar" className="custom-button mb-2" />

        <div className="text-center mt-2">
          <a href="#">Já tenho uma conta.</a>
        </div>
      </Card>
    </div>
  );
}

export default Register;