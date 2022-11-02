import React from 'react'
import './CardProduto.css'

import { Link } from 'react-router-dom';

const CardProduto = ({ product_id, img_url, name, regular_price, actual_price, onSale }) => {

    const link = `/produto/${product_id}`

    const irParaTopoDaPagina = () =>{
        // const rota = window.location.pathname
        window.scroll(0, 0);
    }

    return (
        <div className="cartao-produto" onClick={irParaTopoDaPagina}>
            <Link to={link}>
                <div>
                    <img src={img_url} className="imagem-produto" alt="imagem produto" />   
                    {onSale ? <div className="promocao">Promoção</div> : ''}
                </div>
                <div className="informacao-produto">
                    <div className="avaliacao-produto">
                        <img src="/assets/icons/rating.png" alt="nota do produto" />
                    </div>
                    <div className="nome-produto">{name}</div>
                    <div className="price-container">
                        {onSale && <span className="preco-antigo">R${Number(regular_price).toFixed(2).replace('.', ',')}</span>}
                        <span className="preco-atual">R${Number(actual_price).toFixed(2).replace('.', ',')}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardProduto