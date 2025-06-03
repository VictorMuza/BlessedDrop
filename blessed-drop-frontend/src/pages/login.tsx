import "./../styles/Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useState } from 'react';
// Removed incorrect import



function Login() {
  const [value, setValue] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e: { target: { value: any; }; }) => {
    const inputValue = e.target.value;
    const regex = /^[A-Za-z\s]*$/; // só letras e espaços

    if (regex.test(value) || value === '') {
      setPassword(inputValue);
    }
  };

  return (
    <div className='login-container'>
      <Card
        title="BlessedDrop"
        subTitle="BlessedDrop — a cada drop, um passo de fé."
        className="custom-card"
      >
        <div className="p-float-label">
          <InputText
            id="username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label htmlFor="username">Nome de Usuário</label>
        </div>

        <br />

        <div className="p-float-label">
          <Password
            id="password"
            value={password}
            onChange={handleChange}
            toggleMask
          />
          <label htmlFor="password">Senha</label>
        </div>

        <br />

        <Button label="Login" className="w-full" />

        <div className="flex justify-content-center mt-3">
          <a href="#">Esqueceu a senha?</a>
        </div>
      </Card>
    </div>
  );
}

export default Login;