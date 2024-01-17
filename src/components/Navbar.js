import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
export default function Navbar() {
    return (
        <div className="nav">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <div className="contact">
                            <Link to="/contact">
                                Contact Us
                            </Link>
                        </div>
                        <div className="name">
                            <Link to="#">
                                E-KART
                            </Link>
                        </div>
                        <div className="icons">
                            <ul>
                                <li><Link to='#'><IoBagOutline /></Link></li>
                                <li><Link to='#'><FaRegHeart/></Link></li>
                                <li><Link to='#'><AiOutlineUser/></Link></li>

                            </ul>
                        </div>
                    </div>
                    <ul>
                        <img src="" />
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/productdetails'>Product Details</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}