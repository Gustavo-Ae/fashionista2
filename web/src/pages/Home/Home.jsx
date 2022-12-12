import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CardProduto from "../../components/MainHome/CardProduto/CardProduto";

import './Home.css'

const Home = () => {
  const [newProducts, setNewProducts] = useState([])
  const [saleProducts, setSaleProducts] = useState([])

  useEffect(() => {
    axios.get('https://fashionista-eccomerce.up.railway.app/promocao/produtos/')
      .then(res => setSaleProducts(res.data))
  }, [])

  useEffect(() => {
    axios.get('https://fashionista-eccomerce.up.railway.app/novidades/produtos/')
      .then(res => setNewProducts(res.data))
  }, [])

  return (
    <>
      <div className="banner">  
        <div className="banner__header__container"> 
          <h1>
            Encontre o <br />
            melhor da <br />moda
          </h1>
          <p>
            Aqui você encontra roupas femininas, moda <br />
            infantil, moda masculina e muito mais. Confira <br />
            as promoções e aproveite!
          </p>
          <Link to="/catalogo/Promocoes">Melhores Ofertas</Link>
        </div>

        <div className="banner__container__imagem">
          <img src='/assets/img/banner.jpg' alt="imagem produto feminino" />
        </div>
      </div>

      <section className="categoria"> 
        
        <div className="categoria__header__container">
          <h1>Categorias</h1>
          <p>
            Moda feminina, masculina e infantil! Confira nossas promoções e
            aproveite!
          </p>
        </div>

        <div className="categoria__container">
          <div className="categoria__card"> 

            <Link to="catalogo/Feminino">
              <img src="/assets/img/feminino/14.jpg" alt="" />
              <span className="categoria__card__name">MODA FEMININA</span> 
            </Link>

          </div>

          <div className="categoria__card">

            <Link to="catalogo/Masculino">
              <img
                src="/assets/img/masculino/05.jpg"
                alt=""
              />
              <span className="categoria__card__name"> MODA MASCULINA </span>
            </Link>

          </div>

          <div className="categoria__card">

            <Link to="catalogo/Infantil">
              <img
                src="/assets/img/infantil/07.jpg"
                alt=""
              />
              <span className="categoria__card__name"> MODA INFANTIL </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="novidades">
        <div className="novidades__container"> {/* novidades__container */}

          <div className="novidades__header__container"> {/* novidades__header__container */}
            <h1>Novidades</h1>
            <p>
              As melhores novidades no mundo <br />
              da moda!
            </p>
            <a
              href='#melhoresOfertas'
              className="btn-branco btn__aproveite"
              aria-label="Aproveite as novidades"
            >
              APROVEITE
            </a>
          </div>

          <div className="produto__container">

            {newProducts.slice(0, 2).map((produto) => (
              <CardProduto
                key={produto.product_id}
                product_id={produto.product_id}
                img_url={produto.img_url}
                name={produto.name}
                regular_price={produto.regular_price}
                actual_price={produto.actual_price}
                onSale={produto.on_sale}
              />
            ))}
          </div>
        </div>
      </section>
      
      <div className="melhoresOfertas" id="melhoresOfertas">
        <div className="melhoresOfertas__header__container">
          <h1 className="melhoresOfertas__titulo">Melhores Ofertas</h1>
          <p className="melhoresOfertas__descricao">Confira nossas ofertas e promoções, aproveite!</p>
        </div>

        <div className="melhoresOfertas__container">
          {saleProducts.slice(0, 8).map((produto) => (
            <CardProduto
              key={produto.product_id}
              product_id={produto.product_id}
              img_url={produto.img_url}
              name={produto.name}
              regular_price={produto.regular_price}
              actual_price={produto.actual_price}
              onSale={produto.on_sale}
            />
          ))}
        </div>
      </div>  
    </>        
  );
};

export default Home
