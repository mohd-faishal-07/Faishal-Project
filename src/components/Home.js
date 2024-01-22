import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export default function Home() {
    return (
        <div className="home">
            <div className="home-img">
                <div className="container">
                    <div className="banner">
                        <div className="right">
                            <h2>Every product is special</h2>
                            <Link to="/products">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-content">
                <div className="container">
                    <div className="main">
                        <div className="categories-heading">
                            <p>Shop By Categories</p>
                        </div>
                        <div className="category-images"> 
                            <ul>
                                <li>
                                    <Link to="/products">
                                        <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="img"/>
                                        <p>Men</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products">
                                        <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="img"/>
                                        <p>Jewellery</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products">
                                        <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="img"/>
                                        <p>Electronics</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products">
                                        <img src="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg" alt="img"/>
                                        <p>Women</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}