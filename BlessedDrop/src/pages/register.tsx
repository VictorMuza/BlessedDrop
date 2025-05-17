import "./../styles/Register.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Password } from "primereact/password";
// Removed incorrect import



function Register() {
    const [value, setValue] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e: { target: { value: any; }; }) => {
      const inputValue = e.target.value;
      const regex = /^[A-Za-z\s]*$/; // só letras e espaços
  
      if (regex.test(value) || value === '') {
        setPassword(inputValue);
      }
    };
    const [email, setEmail] = useState('');
  return (
    
    <div className='flex align-items-center justify-content-center h-screen'>
      <Card title="BlessedDrop" subTitle="BlessedDrop — a cada drop, um passo de fé." className="md:w-25rem">
      
    <div className="p-float-label">
        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="email">Email</label>
    </div>
    <br />
    <div className="p-float-label">
        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
        <label htmlFor="username">Nome de Usuário</label>
    </div>
      <br />
      <div className="p-float-label">
      <Password value={password} onChange={handleChange} toggleMask />
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