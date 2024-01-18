import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { Footer } from './Footer'
import { ShopByCategory } from '../filters/ShopByCategory'
import { ShopByColor } from '../filters/ShopByColor'
import { ShopByPrice } from '../filters/ShopByPrice'
import { Loading } from './Loading'




export const Products = () => {

    const [datas, setDatas] = useState([])
    const [toggle, setToggle] = useState(1)
    const [filter, setFilter] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            axios.get("https://fakestoreapi.com/products").then((response) => {
                setDatas(response.data)
                console.log(datas);
            })
        }, 3000);
    }, [])

    function updateToggle(value) {
        setToggle(value)
    }

    function filterMen(value) {
        setFilter(value)
    }
    return (

        < div className='products-page' >
            <div className='container'>
                <div className='titles'>
                    <div className='category-shop' onClick={() => updateToggle(1)}>
                        <Link to="#" className={toggle == 1 ? "activate" : ""}>
                            Shop By Category
                        </Link>
                    </div>
                    <span className='lines'>|</span>
                    <div className='color-shop' onClick={() => updateToggle(2)}>
                        <Link to="#" className={toggle == 2 ? "activate" : ""}>
                            Shop By Color
                        </Link>
                    </div>
                    <span className='lines'>|</span>
                    <div className='price-shop' onClick={() => updateToggle(3)}>
                        <Link to="#" className={toggle == 3 ? "activate" : ""}>
                            Shop By Price
                        </Link>
                    </div>
                </div>
                <hr />
                {loading ? <Loading /> :
                    <>
                        <div className='filtering'>
                            <div className={toggle == 1 ? "active" : "filters shop-by-category"}>
                                <div className='container'>
                                    <div className='shop-category'>
                                        <div className='all-categories'>
                                            <Link to="#" onClick={() => filterMen("men's clothing")}>
                                                <img src='https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg' className={filter == "men's clothing" ? "border" : ""} />
                                                <p>Men</p>
                                            </Link>
                                            <Link to="#" onClick={() => filterMen("women's clothing")}>
                                                <img src='https://cdn.pixabay.com/photo/2020/02/01/03/00/girl-4809434_1280.jpg' className={filter == "women's clothing" ? "border" : ""} />
                                                <p>Women</p>
                                            </Link>
                                            <Link to="#" onClick={() => filterMen("jewelery")}>
                                                <img src='https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175533_1280.jpg' className={filter == "jewelery" ? "border" : ""} />
                                                <p>Jewellery</p>
                                            </Link>
                                            <Link to="#" onClick={() => filterMen("electronics")}>
                                                <img src='https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg' className={filter == "electronics" ? "border" : ""} />
                                                <p>Electronics</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggle == 2 ? "active" : "filters shop-by-color"}>
                                <ShopByColor />
                            </div>
                            <div className={toggle == 3 ? "active" : "filters shop-by-price"}>
                                <ShopByPrice />
                            </div>
                        </div>
                        <div className='products'>
                            {
                                datas.map((item) => {
                                    return (
                                        (filter == item.category || filter == null) ? (
                                            <>
                                                <Link to="/productdetails">
                                                    <div className='items'>
                                                        <img src={item.image} />
                                                        <div className='description'>
                                                            <p>{item.title}</p>
                                                        </div>
                                                        <div className='price'>
                                                            <p><b>Price : </b>${item.price}</p>
                                                            <p><b>Ratings : {item.rating.rate}</b></p>
                                                        </div>

                                                    </div>
                                                </Link>
                                            </>
                                        ) : null
                                    )
                                })
                            }
                        </div>
                    </>
                }
                <Footer />
            </div>
        </div >
    )
}
