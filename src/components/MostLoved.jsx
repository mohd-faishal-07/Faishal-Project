import React from 'react'
import { Link } from 'react-router-dom'

export const MostLoved = () => {
    return (
        <>
            <div className="loved-products">
                <div className="container">
                    <div className="most-loved">
                        <div className="loved-heading">
                            <p>Most Loved Products</p>
                        </div>
                        <div className='loved-img'>
                            <div className="loved-category">
                                <Link to="/products">
                                    <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="img" />
                                </Link>
                            </div>
                            <div className="loved-category">
                                <Link to="/products">
                                    <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" alt="img" />
                                </Link>
                            </div>
                            <div className="loved-category">
                                <Link to="/products">
                                    <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="img" />
                                </Link>
                            </div>
                            <div className="loved-category">
                                <Link to="/products">
                                    <img src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" alt="img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
