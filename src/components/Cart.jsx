import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ImBin } from "react-icons/im";
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Footer } from './Footer';
import { removeCartCount, removeFromCart, removeToCart, updateCartCount } from '../redux/action';

export const Cart = () => {

    const [counts, setCounts] = useState({});
    const [price, setPrice] = useState({})

    const dispatch = useDispatch();

    useEffect(() => {
        const storedCounts = JSON.parse(localStorage.getItem('cartCounts')) || {};
        setCounts(storedCounts);
    }, []);


    const cartData = useSelector((state) => state.cartData)
    let amount = cartData.length && Object.values(price).reduce((prev, next) => prev + next, 0).toFixed(2);
    console.log(cartData);
    console.log(amount);

    useEffect(() => {
        const updatedPricesObj = {};
        cartData.forEach((item) => {
            const count = counts[item.id] || 1;
            updatedPricesObj[item.id] = item.price * count;
        });
        setPrice(updatedPricesObj);



    }, [counts, cartData]);




    const checkoutLink = (
        <div className='cart-button'>
            <Link to='/checkout'>
                Proceed to CheckOut
            </Link>
        </div>
    );


    const incrementCounter = (id, item) => {
        setCounts((prevCounts) => {
            const currentCount = prevCounts[id] || 1;
            const updatedCount = Math.min(currentCount + 1, 5); 
            const updatedCounts = {
                ...prevCounts,
                [id]: updatedCount,
            };
            dispatch(updateCartCount(updatedCounts));
            localStorage.setItem('cartCounts', JSON.stringify(updatedCounts));
            return updatedCounts;

        });
    };

    const decrementCounter = (id, item) => {
        setCounts((prevCounts) => {
            if (prevCounts[id] > 1) {
                const updatedCounts = {
                    ...prevCounts,
                    [id]: prevCounts[id] - 1,
                };
                dispatch(updateCartCount(updatedCounts));
                localStorage.setItem('cartCounts', JSON.stringify(updatedCounts));
                return updatedCounts;
            } else {
                dispatch(removeToCart(item));
                dispatch(removeCartCount(id));

                const updatedCounts = { ...prevCounts };
                delete updatedCounts[id];
                localStorage.setItem('cartCounts', JSON.stringify(updatedCounts));
                return updatedCounts;
            }
        });


    };

    return (
        <>
            <div className='cart-data'>
                <div className='container'>
                    {cartData.length >= 1 ? (
                        <div className='cart'>
                            <div className='cart-table'>
                                <table>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Color</th>
                                        <th>Item Count</th>
                                        <th>Price</th>
                                    </tr>
                                    {
                                        cartData.map((item) =>
                                            <tr>
                                                <td><img src={item.image} alt='img' /></td>
                                                <td>{item.title}</td>
                                                <td>{item.color}</td>
                                                <td>
                                                    <div className='counter'>
                                                        <FaMinus onClick={() => decrementCounter(item.id, item)} />
                                                        {counts[item.id] || 1}
                                                        <FaPlus onClick={() => incrementCounter(item.id, item)
                                                        } />
                                                    </div>
                                                </td>
                                                <td>${(price[item.id] || item.price).toFixed(2)}</td>
                                            </tr>
                                        )
                                    }
                                </table>
                            </div>
                            <div className='price-adjust'>
                                <div className='adjustments'>SubTotal</div>
                                <div className='adjustments'>Amount : <span>${amount}</span></div>
                                <div className='adjustments'>Shipping Fee : <span>${amount ? <span>50.00</span> : 0.00}</span></div>
                                <div className='adjustments'>Total Price : <span>${amount ? <span>{(parseFloat(amount) + 50).toFixed(2)}</span> : 0.00}</span></div>
                                {checkoutLink}

                            </div>
                        </div>) : (
                        <p className='cart-empty'>Your Cart is Empty</p>
                    )
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}
