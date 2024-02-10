import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";


export default function Navbar() {

    // const storedCounts = JSON.parse(localStorage.getItem('cartCounts')) || {};
    // const totalCartCount = Object.values(storedCounts).reduce((acc, count) => acc + count, 0);
    // const result = useSelector((state)=>state.cartData)
    // console.log("data",result)

    const cartCounts = useSelector((state) => state.increment.cartCounts || {});
    const cart = useSelector((state) => state.cartData || []);
    console.log(cart);
    const totalCartCount = cart.map((item)=>item.qty).reduce((acc, count) => acc + count, 0);
  

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
                                <li className="first-list"><Link to='/cart'><IoBagOutline /></Link></li>
                                <span className="cart-count">{totalCartCount}</span>

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