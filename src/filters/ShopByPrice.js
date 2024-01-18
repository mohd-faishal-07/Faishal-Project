import React from 'react'

export const ShopByPrice = () => {
    return (
        <div className='prices'>
            <div className='container'>
                <div className='shop-price'>
                    <div className='slider-price'>
                        <input type='range' min={0} max={1000}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
