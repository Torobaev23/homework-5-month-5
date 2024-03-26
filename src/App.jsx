import {Routes, Route} from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'
import './App.css'
import {useSelector} from "react-redux";


function App() {
    const {productsCount} = useSelector(state => state.productsSlice)

    return (
        <>
            <nav>
                <ul>
                    <li className="cards">Корзина товаров: {productsCount}</li>
                </ul>
            </nav>
            <Routes>
                    <Route path='/products' element={<ProductsPage />} />
            </Routes>
        </>
    )
}

export default App