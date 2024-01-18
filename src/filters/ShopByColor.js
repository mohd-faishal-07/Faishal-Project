import React from 'react'
import { Link } from 'react-router-dom'

export const ShopByColor = () => {
    return (
        <div className='color'>
            <div className='container'>
                <div className='shop-color'>
                    <div className='all-colors'>
                        <ul>
                            <li className='black'><Link to="#"></Link></li>
                            <li className='white'><Link to="#"></Link></li>
                            <li className='blue'><Link to="#"></Link></li>
                            <li className='purple'><Link to="#"></Link></li>
                            <li className='red'><Link to="#"></Link></li>
                            <li className='mud'><Link to="#"></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
