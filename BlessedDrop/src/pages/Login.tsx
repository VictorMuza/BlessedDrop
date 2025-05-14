import "./../styles/Login.css";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
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
    
    <div className='flex align-items-center justify-content-center h-screen'>
      <Card title="BlessedDrop" subTitle="BlessedDrop — a cada drop, um passo de fé." className="md:w-25rem">
      
    <div className="p-float-label">
        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
        <label htmlFor="username">Username</label>
    </div>
      <br />
      <div className="p-float-label">
      <InputText value={password}
        onChange={handleChange} />
        <label htmlFor="password">Password</label>
    </div>
        <br />
    <div className="flex justify-content-end mt-2">
          <button className="p-button p-component p-button-text">Login</button>
    </div>
    <div className="flex justify-content-center mt-2">
    <a className="m-0">Esqueceu a senha?</a>
    </div>
</Card>
    </div>
  );
}

export default Login;