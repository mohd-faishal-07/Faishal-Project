import React from 'react'
import { useSelector } from 'react-redux'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom'

export const Checkout = () => {
    const cartData = useSelector(state => state.cartData);
    console.log(cartData);

    function validateName(value){
        if(isNaN(value) && typeof(value) === "string"){
            console.log("String");
        }
    }

    return (
        <>
            <div className="checkout-info">
                <div className="container">
                    <div className="checkout">
                        <div className="checkout-left">
                            <form action="">
                                <div className="inputs">
                                    <input type="text" placeholder='First Name' maxLength={30} onChange={(e)=>validateName(e.target.value)}/>
                                </div>
                                <div className="inputs">
                                    <input type="text" placeholder='Last Name' />
                                </div>
                                <div className="full-width">
                                    <input type="text" placeholder='Address Line 1' />
                                </div>
                                <div className="full-width">
                                    <input type="text" placeholder='Address Line 2 (Optional)' />
                                </div>
                                <div className="inputs">
                                    <input type="text" placeholder='City' />
                                </div>
                                <select name="" id="">
                                    <option value="">Select State / Province</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Punjab">Punjab</option>
                                </select>
                                <div className="inputs">
                                    <input type="text" placeholder='Postcode' />
                                </div>
                                <select name="" id="">
                                    <option value="">Select Country</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Punjab">Punjab</option>
                                </select>
                                <div className="inputs">
                                    <input type="text" placeholder='Email Address' />
                                </div>
                                <div className="inputs">
                                    <input type="tel" placeholder='Telephone' />
                                </div><br/>

                                <input type="checkbox" checked/>Use this address for billing<br/>
                                <input type="checkbox" />Send me News, updates & offers

                                <p>Save Your Account (Optional)</p>

                                <div className="inputs">
                                    <input type="password" placeholder='Password' />
                                </div>
                                <div className="inputs">
                                    <input type="password" placeholder='Confirm Password' />
                                </div>

                                <Link to="/cart"><MdKeyboardArrowLeft />Return To Bag</Link>

                                <Link to="#">Continue To Payment</Link>
                            </form>
                        </div>
                        <div className="checkout-right">
                            {
                                cartData.map((item) => {
                                    return (
                                        <>
                                            <h3>Order Summary</h3>
                                            <div className="order-summary">
                                                <img src={item.image} alt="img" />
                                                <div className="summary-details">
                                                    <p className="order-name">
                                                        {item.title}
                                                    </p>
                                                    <p className="order-name">
                                                        ${item.price}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
