import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom'
import { Pickup } from './Pickup';
import { BillingAddress } from './BillingAddress';

export const Checkout = () => {
    const cartData = useSelector(state => state.cartData);
    console.log(cartData);

    const [toggle, setToggle] = useState(1)
    const [checked, setChecked] = useState(false)

    function handleChange() {
        setChecked(!checked)
    }

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

    function validatePass(value) {
        const element = document.querySelector("#pass + .error_1");
        if (value.length < 8) {
            element.textContent = "Password should contain atleast 8 characters"
        }
        else {
            element.textContent = ""
        }
    }

    function validateCpass(value) {
        const element = document.querySelector("#cpass + .error_1");
        const passwordValue = document.getElementById("pass").value;

        if (value.length < 8) {
            element.textContent = "Password should contain atleast 8 characters";
        } else if (value !== passwordValue) {
            element.textContent = "Passwords do not match";
        } else {
            element.textContent = "";
        }
    }
    function handleValidations() {
        validateName(document.getElementById('firstName').value);
        validateLastName(document.getElementById('lastName').value);
        validateAddress(document.getElementById('address').value);
        validateCity(document.getElementById('city').value);
        validatePostCode(document.getElementById('postcode').value);
        validateEmail(document.getElementById('email').value);
        validateTelephone(document.getElementById('telephone').value);
        validateSelectCity(document.getElementById('selectCity').value);
        validatePass(document.getElementById('pass').value);
        validateCpass(document.getElementById('cpass').value);

        console.log("Checked:", checked);
        // document.querySelectorAll(".error_1");
        if(!checked){
            validateName(document.getElementById('billingfirstName').value);
            validateLastName(document.getElementById('billinglastName').value);
            validateAddress(document.getElementById('billingaddress').value);
            validateCity(document.getElementById('billingcity').value);
            validatePostCode(document.getElementById('billingpostcode').value);
            validateTelephone(document.getElementById('billingtelephone').value);
            validateSelectCity(document.getElementById('billingselectCity').value);
        }
    }
    return (
        <>
            <div className="checkout-info">
                <div className="container">
                    <div className="checkout-info">
                        <div className='checkout-pickup'>
                            <Link to="#" onClick={() => setToggle(1)} className={toggle == 1 ? "click-active" : ""}>Ship</Link>
                            <Link to="#" onClick={() => setToggle(2)} className={toggle == 2 ? "click-active" : ""}>Pick Up</Link>
                        </div>
                        {toggle == 1 ?
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

                                        <div className='checkboxes'>
                                            <p><input type="checkbox" onChange={() => handleChange()} />Use this address for billing</p>
                                            {!checked ?
                                                <div>
                                                    <div className='group-fields two-fields'>
                                                        <div className="inputs">
                                                            <input type="text" placeholder='First Name' maxLength={30} onChange={(e) => validateName(e.target.value)} id='billingfirstName' />
                                                            <div className="error_1"></div>
                                                        </div>
                                                        <div className="inputs">
                                                            <input type="text" placeholder='Last Name' id='billinglastName' onChange={(e) => validateLastName(e.target.value)} />
                                                            <div className="error_1"></div>
                                                        </div>
                                                    </div>
                                                    <div className='group-fields'>

                                                        <div className="full-width">
                                                            <input type="text" placeholder='Address Line 1' id='billingaddress' onChange={(e) => validateAddress(e.target.value)} />
                                                            <div className="error_1"></div>
                                                        </div>
                                                        <div className="full-width">
                                                            <input type="text" placeholder='Address Line 2 (Optional)' />
                                                        </div>
                                                    </div>
                                                    <div className='group-fields two-fields'>
                                                        <div className="inputs">
                                                            <input type="text" placeholder='City' onChange={(e) => validateCity(e.target.value)} id='billingcity' />
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
                                                            <input type="text" placeholder='Postcode' id='billingpostcode' onChange={(e) => validatePostCode(e.target.value)} />
                                                            <div className="error_1"></div>
                                                        </div>
                                                        <div className="inputs">
                                                            <select name="" id="billingselectCity" onChange={(e) => validateSelectCity(e.target.value)}>
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
                                                            <input type="tel" placeholder='Telephone' id='billingtelephone' maxLength={10} onChange={(e) => validateTelephone(e.target.value)} />
                                                            <div className="error_1"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null}
                                            <p><input type="checkbox" />Send me News, updates & offers</p>
                                        </div>
                                        <p className='account'>Save Your Account (Optional)</p>
                                        <p className='save-account'>Create an account to easily track your order and request a ring resize online.</p>

                                        <div className="group-fields two-fields">
                                            <div className="inputs">
                                                <input type="password" placeholder='Password' id='pass' onChange={(e) => validatePass(e.target.value)} maxLength={8} />
                                                <div className="error_1"></div>
                                            </div>
                                            <div className="inputs">
                                                <input type="password" placeholder='Confirm Password' id='cpass' maxLength={8} onChange={(e) => validateCpass(e.target.value)} />
                                                <div className="error_1"></div>
                                            </div>
                                        </div>

                                        <div className='move-pages'>
                                            <div className="move-cart">
                                                <Link to="/cart"><MdKeyboardArrowLeft />Return To Shopping Bag</Link>
                                            </div>
                                            <div className="continue-payment">
                                                <Link to="#" onClick={() => handleValidations()}>Continue To Payment</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="checkout-right">
                                    <h3>Order Summary</h3>
                                    {
                                        cartData.map((item) => {
                                            return (
                                                <>
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
                            : <Pickup />}
                    </div>
                </div>
            </div>
        </>
    )
}
