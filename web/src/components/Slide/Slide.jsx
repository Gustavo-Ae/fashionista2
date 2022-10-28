import { useEffect, useState , useRef } from "react"

import axios from 'axios'

import CardProduto from "../../components/MainHome/CardProduto/CardProduto";

import "./Slide.css"

const Slide = ({idProdutoRemover, nomeCategoria}) => {

    const [products, setProduct] = useState([])

    const buscarCategoriaPeloNome = async () => {
        await axios.get(`http://localhost:5450/categorias/${nomeCategoria}`)
        .then(res => setProduct((res.data).filter((produto) => produto.product_id !== idProdutoRemover)))
    }

    useEffect(() => {
        buscarCategoriaPeloNome();
    }, [idProdutoRemover, nomeCategoria])

    const carousel = useRef(null);
    
    const handleCliqueLadoEsquerdo = (e) =>{
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleCliqueLadoDireito = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return ( 

        <>
            <div className="slide__container">
                <div className="slide__titulo">
                    <h1>QUEM VIU ESTE PRODUTO, TAMBÉM COMPROU</h1>
                </div>
                <div className="carousel" ref={carousel}>

                   {products.map((product) => {
                        return(
                            <CardProduto 
                                key={product.product_id}
                                product_id={product.product_id}  
                                img_url={product.img_url}
                                name={product.name}
                                regular_price={product.regular_price}
                                actual_price={product.actual_price}
                            />
                        )
                   })}
                </div>
                <div className="buttons__slide">
                    <button onClick={handleCliqueLadoEsquerdo} className="RolagemParaLados__btn--hover">
                        <img src="/assets/icons/seta.png" alt="Scrool Esquerdo"/>
                    </button>
                    <button onClick={handleCliqueLadoDireito} className="RolagemParaLados__btn--hover">
                        <img src="/assets/icons/seta.png" alt="Scrool Direito"/>
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default Slide;