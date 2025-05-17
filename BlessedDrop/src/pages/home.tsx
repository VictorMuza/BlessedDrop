import "./../styles/home.css";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';

function Home() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            background: 'white'
        }}>
            <div style={{ width: '100%', padding: '1rem' }}>
                <Toolbar
                    left={
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
                            <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>BlessedDrop</span>
                            <input type="text" placeholder="Esta procurando algo?" className="p-inputtext p-component" />
                        </div>
                    }
                    right={
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <a href="/produtos">Produtos</a>
                            <a href="/carrinho">Carrinho</a>
                            <a href="/contato">Contato</a>
                            <Button label="Entrar" className="p-button p-component" />
                        </div>
                    }
                />
            </div>
        </div>
    );
}

export default Home;