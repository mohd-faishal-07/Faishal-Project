import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom'
import { validateAddress, validateCpass, validateEmail, validateName, validatePass, validatePostCode, validateTelephone, handleValidations } from './ValidationFunctions';
import Popup from 'reactjs-popup';
import { IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


export const Pickup = () => {
    const cartData = useSelector(state => state.cartData);
    const [open, setOpen] = useState(false);
    const [clicked, setCliked] = useState(false)
    const [selectedShowroom, setSelectedShowroom] = useState(null);

    const handleClose = () => {
        setOpen(false);
        console.log(open);
        setCliked(false)
    }

    const handleSelectShowroom = (showroom) => {
        setSelectedShowroom(showroom);
        setOpen(false);
    }
    return (
        <>
            <div className="product-pickup">
                <div className="select-showroom">
                    {
                        <>
                            {selectedShowroom && (
                                <div className="selected-showroom">
                                    <h4>{selectedShowroom.name}</h4>
                                    <p>{selectedShowroom.address}</p>
                                </div>
                            )}
                            {
                                selectedShowroom ? (
                                    <Link to="#" onClick={() => setOpen(true)}>Change Showroom</Link>
                                ) : (
                                    <Link to="#" onClick={() => setOpen(true)}>Select Showroom</Link>
                                )
                            }
                            <Popup trigger={null} position={'right center'} open={open} onClose={() => setOpen(false)}>
                                <div className="popup-contents">
                                    <div className='popup-heading'>
                                        <p>Find a Location</p>
                                        <p><Link to="#" onClick={() => handleClose()}><IoCloseSharp /></Link></p>
                                    </div>

                                    <div className="locations">
                                        <input type="search" placeholder='Search by City or Zip Code' />
                                        <span className='search'><CiSearch /></span>
                                        {selectedShowroom && (
                                            <div className="selected-showroom">
                                                <h3>Selected ShowRoom</h3>

                                                <h4>{selectedShowroom.name}</h4>
                                                <p>{selectedShowroom.address}</p>
                                            </div>
                                        )}
                                        <div className="location-1">
                                            <div className="loc-desc">
                                                <p className="loc-heading">San Francisco - Union Square</p>
                                                <p className="loc-address">300 Grant Ave. Fl 3 San Francisco, CA 94108 Entrance at 99 Harlan Place</p>
                                            </div>
                                            <div className="select-btn" onClick={() => handleSelectShowroom({ name: "San Francisco - Union Square", address: "300 Grant Ave. Fl 3 San Francisco, CA 94108 Entrance at 99 Harlan Place" })}>
                                                <Link to="#">Select Showroom</Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="location-1">
                                            <div className="loc-desc">
                                                <p className="loc-heading">Chicago - Gold Coast</p>
                                                <p className="loc-address">34 E Oak St. Fl 2 Chicago, IL 60611</p>
                                            </div>
                                            <div className="select-btn" onClick={() => handleSelectShowroom({ name: "Chicago - Gold Coast", address: "34 E Oak St. Fl 2 Chicago, IL 60611" })}>
                                                <Link to="#">Select Showroom</Link>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="location-1">
                                            <div className="loc-desc">
                                                <p className="loc-heading">New York - Flatiron</p>
                                                <p className="loc-address">135 Fifth Avenue, Floor 2 NY, NY 10010</p>
                                            </div>
                                            <div className="select-btn" onClick={() => handleSelectShowroom({ name: "New York - Flatiron", address: "135 Fifth Avenue, Floor 2 NY, NY 10010" })}>
                                                <Link to="#">Select Showroom</Link>
                                            </div>
                                        </div>
                                        <hr />
                                        {!clicked && <div className="load-btn"><Link to="#" onClick={() => setCliked(true)}>Load More</Link></div>}
                                        {clicked ?
                                            <>
                                                <div className="location-1">
                                                    <div className="loc-desc">
                                                        <p className="loc-heading">San Francisco - Union Square</p>
                                                        <p className="loc-address">300 Grant Ave. Fl 3
                                                            San Francisco, CA 94108
                                                            Entrance at 99 Harlan Place
                                                        </p>
                                                    </div>
                                                    <div className="select-btn"><Link to="#">Select Showroom</Link></div>
                                                </div>
                                                <hr />
                                                <div className="location-1">
                                                    <div className="loc-desc">
                                                        <p className="loc-heading">Chicago - Gold Coast</p>
                                                        <p className="loc-address">34 E Oak St. Fl 2
                                                            Chicago, IL 60611
                                                        </p>
                                                    </div>
                                                    <div className="select-btn"><Link to="#">Select Showroom</Link></div>
                                                </div>
                                                <hr />
                                                <div className="location-1">
                                                    <div className="loc-desc">
                                                        <p className="loc-heading">New York - Flatiron</p>
                                                        <p className="loc-address">135 Fifth Avenue, Floor 2
                                                            NY, NY 10010
                                                        </p>
                                                    </div>
                                                    <div className="select-btn"><Link to="#">Select Showroom</Link></div>
                                                </div>
                                            </> : null}
                                    </div>
                                </div>
                            </Popup>

                        </>
                    }

                </div>
                <div className="checkout">
                    <div className="checkout-left">
                        <form action="">
                            <div className='group-fields two-fields'>
                                <div className="inputs">
                                    <input type="text" placeholder='First Name' maxLength={30} onChange={(e) => validateName(e.target.value, 'firstName', 'First Name')} id='firstName' />
                                    <div className="error_1"></div>
                                </div>
                                <div className="inputs">
                                    <input type="text" placeholder='Last Name' id='lastName' onChange={(e) => validateName(e.target.value, 'lastName', 'Last Name')} />
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

                            <p className='billing'>Billing Address</p>
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
                            <div className='group-fields'>
                                <div className="inputs">
                                    <input type="tel" placeholder='Telephone' id='billingtelephone' maxLength={10} onChange={(e) => validateTelephone(e.target.value, 'billingtelephone', 'Telephone Number')} />
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
                                    <Link to="#" onClick={handleValidations}>Continue To Payment</Link>
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
            </div >
        </>
    )
}
