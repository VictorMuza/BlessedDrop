import "./../styles/home.css";
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { MegaMenu } from 'primereact/megamenu';
import { Card } from 'primereact/card';

function Home() {
  const items = [
    {
      label: 'Categorias',
      items: [
        [
          { label: 'Eletrônicos', items: [{ label: 'Celulares' }, { label: 'Notebooks' }] },
          { label: 'Roupas', items: [{ label: 'Masculino' }, { label: 'Feminino' }] }
        ]
      ]
    },
    {
      label: 'Ofertas',
      items: [
        [{ label: 'Descontos', items: [{ label: 'Semana' }, { label: 'Mês' }] }]
      ]
    }
  ];

  // 🆕 Produtos com imagens individuais
  const produtos = [
    {
      nome: "Tênis Giannis",
      descricao: "Tênis Giannis Antetokounmpo",
      imagem: "https://imgnike-a.akamaihd.net/360x360/0267595BA8.jpg"
    },
    {
      nome: "Tênis Nike Air Max",
      descricao: "Tênis Nike Air Max 90",
      imagem: "https://imgnike-a.akamaihd.net/360x360/013923IDA8.jpg"
    },
    {
      nome: "Tênis Nike Air Force",
      descricao: "Tênis Nike Air Force 1",
      imagem: "https://artwalk.vtexassets.com/arquivos/ids/571788-800-auto?v=638828527304630000&width=800&height=auto&aspect=true"
    },
    {
      nome: "Tênis Puma RS-X",
      descricao: "Tênis Puma RS-X3",
      imagem: "https://artwalk.vtexassets.com/arquivos/ids/436443-800-auto?v=638277210260500000&width=800&height=auto&aspect=true"
    }
  ];

  // 🆕 Função que gera o header do card
  const getHeader = (imagem: string | undefined) => (
    <img alt="Produto" src={imagem} style={{ width: '100%', height: '280px', objectFit: 'cover' }} />
  );

  const footer = (
    <span>
      <Button label="Comprar" icon="pi pi-shopping-cart" />
      <Button label="Ver detalhes" icon="pi pi-info" />
    </span>
  );

  return (
    <div>
      <div className="fixed-toolbar">
        <div className="toolbar-content">
          <Toolbar
            left={
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
                <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>BlessedDrop</span>
                <input type="text" placeholder="Está procurando algo?" className="p-inputtext p-component" />
              </div>
            }
            right={
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a href="/produtos">Produtos</a>
                <a href="/carrinho">Carrinho</a>
                <a href="/about">Sobre</a>
                <Button label="Entrar" className="p-button p-component" />
              </div>
            }
          />
        </div>
      </div>

      <MegaMenu model={items} breakpoint="960px" />

      <div className="cards-container">
        <h2>Produtos em destaque</h2>
        <div className="cards-grid">
          {produtos.map((produto, index) => (
            <Card
              key={index}
              title={produto.nome}
              subTitle={produto.descricao}
              footer={footer}
              header={getHeader(produto.imagem)}
              className="md:w-25rem"
            >
              <p className="m-0">{produto.descricao}</p>
            </Card>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-content">
          <p>&copy; 2023 BlessedDrop. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
