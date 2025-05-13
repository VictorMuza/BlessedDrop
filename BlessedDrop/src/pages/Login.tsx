import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { useState, type FormEvent } from 'react';



function Login() {
    const [value, setValue] = useState('');
    const [] = useState(false);
    function validateInput(_event: FormEvent<HTMLInputElement>, _validatePattern: boolean): void {
        throw new Error('Function not implemented.');
    }

  return (
    
    <div className='flex align-items-center justify-content-center h-screen'>
      <Card title="BlessedDrop" subTitle="BlessedDrop — a cada drop, um passo de fé." className="md:w-25rem">
      
    <div className="p-float-label">
        <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
        <label htmlFor="username">Username</label>
    </div>
      <br />
      <div className="p-float-label">
        <InputText id="password" keyfilter={/(?=.*?[#?!@$ %^&*-])/} validateOnly onInput={validateInput} />
        <label htmlFor="password">Password</label>
    </div>
        <br />
        <a className="m-0">Esqueceu a senha?</a>
    <div className="flex justify-content-end mt-2">
          <button className="p-button p-component p-button-text">Login</button>
    </div>
</Card>
    </div>
  );
}

export default Login;