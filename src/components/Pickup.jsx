import React from 'react'
import { useSelector } from 'react-redux';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom'

export const Pickup = () => {
    const cartData = useSelector(state => state.cartData);

    function validateName(value) {
        const element = document.querySelector("#firstName + .error_1")
        var reg = /^[a-z A-Z]+$/;
        if (!value.trim()) {
            element.textContent = "First Name is Required"
        }
        else if (!reg.test(value)) {
            element.textContent = "Please enter a valid Name"
        }
        else {
            element.textContent = "";
        }
    }
    function validateLastName(value) {
        const element = document.querySelector("#lastName + .error_1")
        var reg = /^[a-z A-Z]+$/;

        if (!value.trim()) {
            element.textContent = "Last Name is Required"
        }
        else if (!reg.test(value)) {
            element.textContent = "Please enter a valid Name"
        }
        else {
            element.textContent = "";
        }
    }

    function validateAddress(value) {
        const element = document.querySelector("#address + .error_1")
        if (!value.trim()) {
            element.textContent = "Address Line 1 is Required"
        }
        else {
            element.textContent = "";
        }
    }

    function validateCity(value) {
        const element = document.querySelector("#city + .error_1")
        var reg = /^[a-z A-Z]+$/;
        if (!value.trim()) {
            element.textContent = "City/Town is required"
        }
        else if (!reg.test(value)) {
            element.textContent = "Please enter a valid City"
        }
        else {
            element.textContent = "";
        }
    }

    function validatePostCode(value) {
        const element = document.querySelector("#postcode + .error_1")
        if (!value.trim()) {
            element.textContent = "Zip Code is required."
        }
        else if (isNaN(value)) {
            element.textContent = "Please enter Valid Zip code"
        }
        else {
            element.textContent = "";
        }
    }

    function validateEmail(value) {
        const element = document.querySelector("#email + .error_1")
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!value.trim()) {
            element.textContent = "Email Address is required."
        }
        else if (!reg.test(value)) {
            element.textContent = "Please enter Valid Email Address"
        }
        else {
            element.textContent = "";
        }
    }

    function validateTelephone(value) {
        const element = document.querySelector("#telephone + .error_1")
        if (!value.trim()) {
            element.textContent = "Telephone is required."
        }
        else if (isNaN(value) || value.length < 10) {
            element.textContent = "Please enter valid Telephone Number"
        }
        else {
            element.textContent = "";
        }
    }

    function validateSelectCity(value) {
        const element = document.querySelector("#selectCity + .error_1");

        if (!value.trim()) {
            element.textContent = "City is required.";
        } else {
            element.textContent = "";
        }
    }

    return (
        <>
            <div className="product-pickup">
                <div className="checkout">
                    <div className="checkout-left">
                        <form action="">
                            <div className='group-fields two-fields'>
                                <div className="inputs">
                                    <input type="text" placeholder='First Name' maxLength={30} onChange={(e) => validateName(e.target.value)} id='firstName' />
                                    <div className="error_1"></div>
                                </div>
                                <div className="inputs">
                                    <input type="text" placeholder='Last Name' id='lastName' onChange={(e) => validateLastName(e.target.value)} />
                                    <div className="error_1"></div>
                                </div>
                            </div>
                            <div className='group-fields two-fields'>
                                <div className="inputs">
                                    <input type="text" placeholder='Email Address' id='email' onChange={(e) => validateEmail(e.target.value)} />
                                    <div className="error_1"></div>
                                </div>
                                <div className="inputs">
                                    <input type="tel" placeholder='Telephone' id='telephone' maxLength={10} onChange={(e) => validateTelephone(e.target.value)} />
                                    <div className="error_1"></div>
                                </div>
                            </div>

                            <p className='billing'>Billing Address</p>
                            <div className='group-fields two-fields'>
                                <div className="inputs">
                                    <input type="text" placeholder='First Name' maxLength={30} onChange={(e) => validateName(e.target.value)} id='firstName' />
                                    <div className="error_1"></div>
                                </div>
                                <div className="inputs">
                                    <input type="text" placeholder='Last Name' id='lastName' onChange={(e) => validateLastName(e.target.value)} />
                                    <div className="error_1"></div>
                                </div>
                            </div>
                            <div className='group-fields'>
                                <div className="full-width">
                                    <input type="text" placeholder='Address Line 1' id='address' onChange={(e) => validateAddress(e.target.value)} />
                                    <div className="error_1"></div>
                                </div>
                                <div className="full-width">
                                    <input type="text" placeholder='Address Line 2 (Optional)' />
                                </div>
                            </div>
                            <div className='group-fields two-fields'>
                                <div className="inputs">
                                    <input type="text" placeholder='City' onChange={(e) => validateCity(e.target.value)} id='city' />
                                    <div className="error_1"></div>
                                </div>
                                <select name="" id="">
                                    <option value="">Select State / Province</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Punjab">Punjab</option>
                                </select>
                            </div>
                            <div className='group-fields two-fields'>
                                <div className="inputs">
                                    <input type="text" placeholder='Postcode' id='postcode' onChange={(e) => validatePostCode(e.target.value)} />
                                    <div className="error_1"></div>
                                </div>
                                <div className="inputs">
                                    <select name="" id="selectCity" onChange={(e) => validateSelectCity(e.target.value)}>
                                        <option value="">Select Country</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Punjab">Punjab</option>
                                    </select>
                                    <div className="error_1"></div>
                                </div>
                            </div>
                            <div className='group-fields'>
                                <div className="inputs">
                                    <input type="tel" placeholder='Telephone' id='telephone' maxLength={10} onChange={(e) => validateTelephone(e.target.value)} />
                                    <div className="error_1"></div>
                                </div>
                            </div>

                            <div className='checkboxes'>

                                <p><input type="checkbox" />Send me Brilliant Earth news, updates & offers.</p>
                            </div>
                            <p className='account'>Save Your Account (Optional)</p>
                            <p className='save-account'>Create an account to easily track your order and request a ring resize online.</p>

                            <div className="group-fields two-fields">
                                <div className="inputs">
                                    <input type="password" placeholder='Password' />
                                </div>
                                <div className="inputs">
                                    <input type="password" placeholder='Confirm Password' />
                                </div>
                            </div>

                            <div className='move-pages'>
                                <div className="move-cart">
                                    <Link to="/cart"><MdKeyboardArrowLeft />Return To Shopping Bag</Link>
                                </div>
                                <div className="continue-payment">
                                    <Link to="#">Continue To Payment</Link>
                                </div>
                            </div>
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
        </>
    )
}
