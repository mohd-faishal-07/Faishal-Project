import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const ShopByCategory = ({ filter, filterMen}) => {

    return (
        <>
            <div className='shop-category'>
                <div className='all-categories'>
                    <Link to="#" onClick={() => filterMen("men's clothing")}>
                        <img src='https://cdn.pixabay.com/photo/2017/03/27/13/28/man-2178721_1280.jpg' className={filter == "men's clothing" ? "border" : ""} alt='img' />
                        <p>Men</p>
                    </Link>
                    <Link to="#" onClick={() => filterMen("women's clothing")}>
                        <img src='https://cdn.pixabay.com/photo/2020/02/01/03/00/girl-4809434_1280.jpg' className={filter == "women's clothing" ? "border" : ""} alt='img' />
                        <p>Women</p>
                    </Link>
                    <Link to="#" onClick={() => filterMen("jewelery")}>
                        <img src='https://cdn.pixabay.com/photo/2016/02/02/15/54/jewellery-1175533_1280.jpg' className={filter == "jewelery" ? "border" : ""} alt='img' />
                        <p>Jewellery</p>
                    </Link>
                    <Link to="#" onClick={() => filterMen("electronics")}>
                        <img src='https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg' className={filter == "electronics" ? "border" : ""} alt='img' />
                        <p>Electronics</p>
                    </Link>
                </div>
            </div>
        </>
    )
}
