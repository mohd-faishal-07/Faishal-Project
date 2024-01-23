import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImBin } from "react-icons/im";
import { removeToCart } from '../redux/action';
import { Link } from 'react-router-dom';

export const Cart = () => {

    const dispatch = useDispatch()

    const cartData = useSelector((state) => state.cartData)
    let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
    console.log(cartData);
    console.log(amount);

    const checkoutLink = (
        <div className='product-desc'>
            <Link to='#' onClick={() => cartData.forEach((item) => dispatch(removeToCart(item.id)))}>
                Proceed to CheckOut
            </Link>
        </div>
    );
    return (
        <>
            <div className='cart-data'>
                <div className='container'>
                    <div className='cart'>
                        <table>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Remove</th>
                            </tr>
                            {
                                cartData.map((item) =>
                                    <tr>
                                        <td><img src={item.image} alt='img' /></td>
                                        <td>{item.title}</td>
                                        <td>{item.color}</td>
                                        <td>{item.category}</td>
                                        <td>{item.price}</td>
                                        <td onClick={() => dispatch(removeToCart(item.id))}><ImBin /></td>
                                    </tr>
                                )
                            }
                        </table>

                        <div className='price-adjust'>
                            <div className='adjustments'>SubTotal</div>
                            <div className='adjustments'>Amount : <span>{amount}</span></div>
                            <div className='adjustments'>Discount : <span>{amount / 10}</span></div>
                            <div className='adjustments'>Total Price : <span>{amount - (amount / 10)}</span></div>
                            {checkoutLink}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
