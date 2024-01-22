import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { Footer } from './Footer';
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart } from '../redux/action';

export const ProductDetails = () => {

  const [data, setData] = useState([])
  const dispatch =  useDispatch()
  console.log(data);
  useEffect(() => {
    axios
      .get("http://localhost:2500/products").then((response) => {
        setData(response.data)
      })
      .catch(() => {
        console.log("API error");
      });
  }, [])

  const params = useParams();
  console.log(params.id);
  const product = {
    name : "iphone",
    price : 1200000
  }
  return (
    <>
      <div className='details'>
        <div className='container'>
          <div className='all-details'>
            {
              data.map((item) => {
                if (item.id == params.id) {
                  return (
                    <>
                      <div className='detail-img'>
                        <img src={item.image} alt='img' />
                      </div>
                      <div className='product-desc'>
                        <p className='title'>{item.title}</p>
                        <p className='rating'>Ratings : {item.rating.rate}</p>
                        <p className='stock'>In-Stock : {item.rating.count}</p>
                        <p className='color'>Color : {item.color}</p>
                        <p className='items'>Description :-</p>
                        <div className='item-desc'>
                          <p className='description'>{item.description}</p>
                        </div>
                        <Link to="#" onClick={()=>dispatch(addToCart(product))}>Add to Cart</Link>
                        <Link to="#" onClick={()=>dispatch(removeToCart(product))}>Remove to Cart</Link>
                      </div>
                    </>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}