import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";


export default function Navbar() {

    const result = useSelector((state)=>state.cartData)
    console.log("data",result);
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
                            <Link to="/home">
                                E-KART
                            </Link>
                        </div>
                        <div className="icons">
                            <ul>
                                <li><Link to='#'><FaRegHeart/></Link></li>
                                <li><Link to='#'><AiOutlineUser/></Link></li>
                                <li className="first-list"><Link to='/cart'><IoBagOutline /></Link></li>
                                <span className="cart-count">{result.length}</span>

                            </ul>
                        </div>
                    </div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}