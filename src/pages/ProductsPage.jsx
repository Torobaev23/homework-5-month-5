import {useState, useEffect} from "react"
import products from '../data/products.json';
import {useDispatch} from "react-redux";
import {addBasket} from "../store/productsSlice.js";

const ProductsPage = () => {
    const [productsData, setProductsData] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        setProductsData(products)
    }, []);
    const addToBasket = (product) => {
        dispatch(addBasket(product))
    };

    return (
        <div>
            <h1>PRODUCTS</h1>
                <div className='items'>
                    {productsData.map((product, index) => (
                        <div key={index} className='card'>
                            <img src={product.picture} alt="productsImage"/>
                            <h3>name: {product.name}</h3>
                            <p>price: {product.price}</p>
                            <p>Category: {product.category}</p>
                            <button onClick={addToBasket}>Купить</button>
                        </div>
                    ))}
                </div>

        </div>
    )
}

export default ProductsPage