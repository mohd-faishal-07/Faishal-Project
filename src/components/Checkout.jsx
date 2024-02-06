import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom'
import { Pickup } from './Pickup';
import { BillingAddress } from './BillingAddress';
import { validateAddress, validateCpass, validateEmail, validateName, validatePass, validatePostCode, validateTelephone } from './ValidationFunctions';
import { Footer } from './Footer';

export const Checkout = () => {
    const cartData = useSelector(state => state.cartData);
    console.log(cartData);

    const [toggle, setToggle] = useState(1)
    const [checked, setChecked] = useState(false)

    function handleChange() {
        setChecked(!checked)
    }

    
    function handleValidations() {
        validateName(document.getElementById('firstName').value, 'firstName', 'First Name');
        validateName(document.getElementById('lastName').value, 'lastName', 'Last Name');
        validateAddress(document.getElementById('address').value, 'address', 'Address');
        validateName(document.getElementById('city').value, 'city', 'City/Town');
        validatePostCode(document.getElementById('postcode').value, 'postcode', 'Zip Code');
        validateEmail(document.getElementById('email').value, 'email', 'Email Address');
        validateTelephone(document.getElementById('telephone').value, 'telephone', 'Telephone');
        validateAddress(document.getElementById('selectCity').value, 'selectCity', 'City');
        validatePass(document.getElementById('pass').value, 'pass', 'Password');
        validateCpass(document.getElementById('cpass').value, 'cpass','Confirm Password');

        console.log("Checked:", checked);
        if(!checked){
            validateName(document.getElementById('billingfirstName').value, 'billingfirstName', 'First Name');
            validateName(document.getElementById('billinglastName').value, 'billinglastName', 'Last Name');
            validateAddress(document.getElementById('billingaddress').value, 'billingaddress', 'Address');
            validateName(document.getElementById('billingcity').value, 'billingcity', 'City/Town');
            validatePostCode(document.getElementById('billingpostcode').value, 'billingpostcode', 'Zip Code');
            validateTelephone(document.getElementById('billingtelephone').value, 'billingtelephone', 'Telephone');
            validateAddress(document.getElementById('billingselectCity').value, 'billingselectCity', 'City');
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
                                                <input type="text" placeholder='First Name' maxLength={30} onChange={(e) => validateName(e.target.value,'firstName','First Name')} id='firstName' />
                                                <div className="error_1"></div>
                                            </div>
                                            <div className="inputs">
                                                <input type="text" placeholder='Last Name' id='lastName' onChange={(e) => validateName(e.target.value, 'lastName', 'Last Name')} />
                                                <div className="error_1"></div>
                                            </div>
                                        </div>
                                        <div className='group-fields'>

                                            <div className="full-width">
                                                <input type="text" placeholder='Address Line 1' id='address' onChange={(e) => validateAddress(e.target.value, 'address', 'Address')} />
                                                <div className="error_1"></div>
                                            </div>
                                            <div className="full-width">
                                                <input type="text" placeholder='Address Line 2 (Optional)' />
                                            </div>
                                        </div>
                                        <div className='group-fields two-fields'>
                                            <div className="inputs">
                                                <input type="text" placeholder='City' onChange={(e) => validateName(e.target.value, 'city', 'City/Town')} id='city' />
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
                                                <input type="text" placeholder='Postcode' id='postcode' onChange={(e) => validatePostCode(e.target.value, 'postcode', 'Zip Code')} />
                                                <div className="error_1"></div>
                                            </div>
                                            <div className="inputs">
                                                <select name="" id="selectCity" onChange={(e) => validateAddress(e.target.value, 'selectCity', 'City')}>
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
                                                <input type="text" placeholder='Email Address' id='email' onChange={(e) => validateEmail(e.target.value, 'email', 'Email Address')} />
                                                <div className="error_1"></div>
                                            </div>
                                            <div className="inputs">
                                                <input type="tel" placeholder='Telephone' id='telephone' maxLength={10} onChange={(e) => validateTelephone(e.target.value, 'telephone', 'Telephone Number')} />
                                                <div className="error_1"></div>
                                            </div>
                                        </div>

                                        <div className='checkboxes'>
                                            <p><input type="checkbox" onChange={() => handleChange()} />Use this address for billing</p>
                                            {!checked ?
                                                <div>
                                                    <div className='group-fields two-fields'>
                                                        <div className="inputs">
                                                            <input type="text" placeholder='First Name' maxLength={30} onChange={(e) => validateName(e.target.value, 'billingfirstName', 'First Name')} id='billingfirstName' />
                                                            <div className="error_1"></div>
                                                        </div>
                                                        <div className="inputs">
                                                            <input type="text" placeholder='Last Name' id='billinglastName' onChange={(e) => validateName(e.target.value, 'billinglastName', 'Last Name')} />
                                                            <div className="error_1"></div>
                                                        </div>
                                                    </div>
                                                    <div className='group-fields'>

                                                        <div className="full-width">
                                                            <input type="text" placeholder='Address Line 1' id='billingaddress' onChange={(e) => validateAddress(e.target.value, 'billingaddress', 'Address')} />
                                                            <div className="error_1"></div>
                                                        </div>
                                                        <div className="full-width">
                                                            <input type="text" placeholder='Address Line 2 (Optional)' />
                                                        </div>
                                                    </div>
                                                    <div className='group-fields two-fields'>
                                                        <div className="inputs">
                                                            <input type="text" placeholder='City' onChange={(e) => validateName(e.target.value, 'billingcity', 'City/Town')} id='billingcity' />
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
                                                            <input type="text" placeholder='Postcode' id='billingpostcode' onChange={(e) => validatePostCode(e.target.value, 'billingpostcode', 'Zip Code')} />
                                                            <div className="error_1"></div>
                                                        </div>
                                                        <div className="inputs">
                                                            <select name="" id="billingselectCity" onChange={(e) => validateAddress(e.target.value, 'billingselectCity', 'City')}>
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
                                                            <input type="tel" placeholder='Telephone' id='billingtelephone' maxLength={10} onChange={(e) => validateTelephone(e.target.value, 'billingtelephone', 'Telephone Number')} />
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
                                                <input type="password" placeholder='Password' id='pass' onChange={(e) => validatePass(e.target.value, 'pass', 'Password')} maxLength={8} />
                                                <div className="error_1"></div>
                                            </div>
                                            <div className="inputs">
                                                <input type="password" placeholder='Confirm Password' id='cpass' maxLength={8} onChange={(e) => validateCpass(e.target.value, 'cpass', 'Password')} />
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
                <Footer/>
            </div>
        </>
    )
}
