import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router"

import { CartContext } from '../../context/cart'
import ProdutoComponent from "../../components/Produto/Produto";
import Slide from "../../components/Slide/Slide";

import "./Produto.css"

const Produto = () => {
  const params = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5450/produtos/${params.id}`)
      .then(res => setProduct(res.data))
  }, [params])

  const idCategoria = product[0]?.category_id

  let nomeCategoria;

  if(idCategoria === "d2494831-6f26-4799-974c-3e837c1020e7"){
    nomeCategoria = "Masculino"
  }
  else if(idCategoria === "90bf3977-04e2-4ab2-9bfb-3bd9afe1b3d3"){
    nomeCategoria = "Feminino"
  }
  else if(idCategoria === "abef372a-029f-4168-93fa-280c086893a2"){
    nomeCategoria = "Infantil"
  }else{
    nomeCategoria = "Promocoes"
  }
  
  const {
    addProductToCart,
  } = useContext(CartContext);

  return (
    <div>
      {product.map((produto) => {
        return <ProdutoComponent
          key={produto.product_id}
          item={produto}
          onAdd={addProductToCart}
        />
      })}

      <section className="slide__section">
        <Slide 
          idProdutoRemover={params.id}
          nomeCategoria={nomeCategoria}
        />
      </section>

    </div>
  )
}

export default Produto;
