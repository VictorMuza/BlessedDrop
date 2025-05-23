
import "./../styles/Register.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Password } from "primereact/password";

// Função principal do componente Register
function Register() {
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');

    // Função para tratar a mudança no campo de senha
    const handleChange = (e: { target: { value: any; }; }) => {
      const inputValue = e.target.value;
      const regex = /^[A-Za-z\s]*$/; // Permite apenas letras e espaços
  
      // Se o valor digitado for válido ou vazio, atualiza o estado da senha
      if (regex.test(value) || value === '') {
        setPassword(inputValue);
      }
    };

    const [email, setEmail] = useState('');

    return (
      <div className='flex align-items-center justify-content-center h-screen'>

        {/* Card estilizado com título e subtítulo */}
        <Card 
          title="BlessedDrop" 
          subTitle="BlessedDrop — a cada drop, um passo de fé."
        >

          {/* Campo de input para email com label flutuante */}
          <div className="p-float-label">
            <InputText 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label htmlFor="email">Email</label>
          </div>

          <br />

          {/* Campo de input para nome de usuário */}
          <div className="p-float-label">
            <InputText 
              id="username" 
              value={value} 
              onChange={(e) => setValue(e.target.value)} 
            />
            <label htmlFor="username">Nome de Usuário</label>
          </div>

          <br />

          {/* Campo de input para senha com máscara e botão para exibir/esconder senha */}
          <div className="p-float-label">
            <Password 
              value={password} 
              onChange={handleChange} 
              toggleMask={true}
              id="password"
            />
            <label htmlFor="password">Senha</label>
          </div>

          <br />

          <div className="flex justify-content-end mt-2">
            <Button label="Registrar" />
          </div>

          <div className="flex justify-content-center mt-2">
            <a className="m-0">Já tenho uma conta.</a>
          </div>
        </Card>

        
        
      </div>
    );
}

export default Register;
