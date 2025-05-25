import React from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Carousel } from 'primereact/carousel';
import { Dropdown } from 'primereact/dropdown';
import "./../styles/productDetails.css";

// Tipagens
interface Review {
  user: string;
  comment: string;
  rating: number;
}

interface RelatedProduct {
  name: string;
  image: string;
  price: number;
}

interface Product {
  name: string;
  price: number;
  images: string[];
  sizes: string[];
  colors: string[];
  description: string;
  rating: number;
  reviews: Review[];
  relatedProducts: RelatedProduct[];
}

const ProductDetails: React.FC = () => {
  const product: Product = {
    name: 'Tênis Nike Dunk Low Panda Feminino',
    price: 499.9,
    images: [
      'https://imgnike-a.akamaihd.net/360x360/01708551A10.jpg',
      'https://imgnike-a.akamaihd.net/360x360/01708551A4.jpg',
      'https://imgnike-a.akamaihd.net/360x360/01708551A5.jpg',
    ],
    sizes: ['37', '38', '39', '40', '41', '42'],
    colors: ['Preto', 'Branco', 'Vermelho'],
    description: `Originalmente criado para as quadras, o Dunk mais tarde foi para as ruas - e como se costuma dizer, o resto é história. Mais de 35 anos após sua estreia, a silhueta ainda oferece um estilo ousado e desafiador.

Agora, o tênis OG do basquete universitário retorna com camadas sobrepostas em couro premium e color blocking tradicional. O conforto fica por conta da tecnologia mais atual em calçados, enquanto uma combinação clássica de preto e branco remete ao legado das quadras.`,
    rating: 4.5,
    reviews: [
      { user: 'Lucas', comment: 'Muito confortável!', rating: 5 },
      { user: 'Ana', comment: 'Design incrível.', rating: 4 },
    ],
    relatedProducts: [
      { name: 'Tênis Runner X', image: 'https://imgnike-a.akamaihd.net/360x360/09755552A1.jpg', price: 399.9 },
      { name: 'Tênis Classic', image: 'https://imgnike-a.akamaihd.net/360x360/09351355A2.jpg', price: 299.9 },
    ],
  };

  return (
    <div className="product-details-container">
      {/* Imagens e Informações */}
      <div className="product-main-content">
        {/* Imagens */}
        <div className="product-images">
          {product.images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`Imagem ${index}`}
              zoomSrc={img}
              className="product-image"
            />
          ))}
        </div>

        {/* Informações */}
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">R$ {product.price.toFixed(2)}</p>

          {/* Tamanhos */}
          <div className="product-option">
            <label className="block mb-1">Tamanhos Disponíveis:</label>
            <Dropdown
              value={product.sizes[0]}
              options={product.sizes.map((size) => ({
                label: size,
                value: size,
              }))}
              placeholder="Selecione o tamanho"
            />
          </div>

          {/* Cores */}
          <div className="product-option">
            <label className="block mb-1">Cores:</label>
            <Dropdown
              value={product.colors[0]}
              options={product.colors.map((color) => ({
                label: color,
                value: color,
              }))}
              placeholder="Selecione a cor"
            />
          </div>

          {/* Descrição */}
          <p className="product-description">{product.description}</p>

          {/* Avaliação */}
          <div className="product-rating">
            <Rating value={product.rating} readOnly cancel={false} />
            <span>({product.reviews.length} avaliações)</span>
          </div>

          {/* Botões */}
          <div className="product-buttons">
            <Button
              label="Adicionar ao Carrinho"
              icon="pi pi-shopping-cart"
              className="p-button-outlined"
            />
            <Button
              label="Comprar Agora"
              icon="pi pi-credit-card"
              className="p-button-success"
            />
          </div>

          {/* Comentários */}
          <div className="mt-5">
            <h2 className="text-xl font-semibold mb-2">Comentários</h2>
            {product.reviews.map((review, index) => (
              <div key={index} className="comment-card">
                <strong>{review.user}</strong>
                <Rating value={review.rating} readOnly cancel={false} className="ml-2" />
                <p className="mt-1">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Produtos Relacionados */}
      <div className="related-products">
        <h2 className="text-xl font-semibold mb-4">Você também pode gostar</h2>
        <Carousel
          value={product.relatedProducts}
          numVisible={2}
          itemTemplate={(item: RelatedProduct) => (
            <div className="related-item">
              <Image src={item.image} alt={item.name} style={{ width: '200px', height: '200px' }} />
              <h3>{item.name}</h3>
              <p>R$ {item.price.toFixed(2)}</p>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
