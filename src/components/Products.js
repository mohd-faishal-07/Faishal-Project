import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { Footer } from './Footer'
import { Loading } from './Loading'
import Slider from "react-slider"

export const Products = () => {
    const min = 0;
    const max = 1000

    const [datas, setDatas] = useState([])
    const [toggle, setToggle] = useState(1)
    const [filter, setFilter] = useState(null)
    const [loading, setLoading] = useState(false)
    const [color, setColor] = useState(null)
    const [value, setValue] = useState([min, max]);


    console.log(datas);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            axios.get("http://localhost:2500/products").then((response) => {
                setDatas(response.data)
            })
        }, 3000);
    }, [])

    function updateToggle(value) {
        setToggle(value)
    }

    function filterMen(value) {
        setFilter((prevFilter) => (prevFilter === value ? null : value));
    }

    function filterByColor(colors) {
        setColor((prevColor) => (prevColor === colors ? null : colors));
    }

    // function handleChange(event) {
    //     setValue(event.target.value, 10);
    // };
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
                                <div className='color'>
                                    <div className='container'>
                                        <div className='shop-color'>
                                            <ul>
                                                <li className={color == "black" ? "black active" : "black"} onClick={() => filterByColor("black")}><Link to="#" className=""></Link></li>
                                                <li className={color == "white" ? "white active" : "white"} onClick={() => filterByColor("white")}><Link to="#"></Link></li>
                                                <li className={color == "blue" ? "blue active" : "blue"} onClick={() => filterByColor("blue")}><Link to="#"></Link></li>
                                                <li className={color == "purple" ? "purple active" : "purple"} onClick={() => filterByColor("purple")}><Link to="#"></Link></li>
                                                <li className={color == "red" ? "red active" : "red"} onClick={() => filterByColor("red")}><Link to="#"></Link></li>
                                                <li className={color == "mud" ? "mud active" : "mud"} onClick={() => filterByColor("mud")}><Link to="#"></Link></li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={toggle == 3 ? "active" : "filters shop-by-price"}>
                                <div className='prices'>
                                    <div className='container'>
                                        <div className='shop-price'>
                                            <Slider className="slider" min={min} max={max} value={value} onChange={setValue} />
                                            <p><b>Price :</b> ${value[0]} - ${value[1]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='products'>
                            {datas.length > 0 ? (
                                datas.map((item) => (
                                    (filter === item.category || filter === null) && (color === null || color === item.color) && (item.price >= value[0] && item.price <= value[1]) && (
                                        <Link to={`/productdetails/${item.id}`} key={item.id}>
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
                                    )
                                ))
                            ) : (
                                <p className='no-data'>No Data Found</p>
                            )}
                        </div>
                    </>
                }
                <Footer />
            </div>
        </div >
    )
}
