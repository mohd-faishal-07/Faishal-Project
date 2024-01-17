import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { Footer } from './Footer'
export const Products = () => {

    const [datas, setDatas] = useState([])
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((response) => {
            setDatas(response.data)
            console.log(datas);
        })
    }, [])
    return (
        
        < div className = 'products-page' >
            <div className='container'>
                <div className='products'>
                    {
                        datas.map((item) => {
                            return (
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
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        </div >
    )
}
