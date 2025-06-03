import "./../styles/cart.css";
// Removed incorrect import


// 🆕 Importação do CSS do PrimeReact
function Cart() {
    return (
        <div className="cart-container">
            <h2>Carrinho de Compras</h2>
            <div className="cart-items">
                {/* Exemplo de item no carrinho */}
                <div className="cart-item">
                    <img src="https://via.placeholder.com/80" alt="Produto" className="cart-item-image" />
                    <div className="cart-item-details">
                        <span className="cart-item-title">Nome do Produto</span>
                        <span className="cart-item-price">R$ 99,90</span>
                        <div className="cart-item-quantity">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                    <button className="cart-item-remove">Remover</button>
                </div>
                {/* Fim do exemplo */}
            </div>
            <div className="cart-summary">
                <span>Total:</span>
                <span className="cart-total-price">R$ 99,90</span>
                <button className="cart-checkout-btn">Finalizar Compra</button>
            </div>
        </div>
    );
}

export default Cart;