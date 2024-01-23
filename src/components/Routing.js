import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import { ProductDetails } from './ProductDetails'
import { Products } from './Products'
import Navbar from './Navbar'
import { Cart } from './Cart'

export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/*' element={<Home />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                    <Route path='/productdetails/:id' element={<ProductDetails />}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}   