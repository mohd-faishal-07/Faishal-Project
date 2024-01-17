import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import { ProductDetails } from './ProductDetails'
import { Products } from './Products'
import Navbar from './Navbar'

export default function Routing() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/products' element={<Products />}></Route>
                    <Route path='/productdetails' element={<ProductDetails />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}   