import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { Footer } from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart, updateCartCount } from '../redux/action';

export const ProductDetails = () => {

  const [data, setData] = useState([])
  const [disabled, setDisabled] = useState(false);
  const cartData = useSelector((state) => state.cartData);
  const counts = useSelector((state) => state.increment.cartCounts);

  const dispatch = useDispatch()
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


  useEffect(() => {
    const isInCart = cartData.some(item => item.id == params.id);
    setDisabled(isInCart);
  }, [cartData, params.id]);

  function handleProduct(item, id) {
    const newItem = {...item, qty : 1}
    console.log(newItem);
    dispatch(addToCart(newItem))
    const updatedCounts = { ...counts, [id]: (counts[id] || 0) + 1 };
    dispatch(updateCartCount(updatedCounts));
    setDisabled(true)

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
                        {disabled ? (
                          <Link to="/cart">View on Cart</Link>
                        ) : (
                          <Link to="#" onClick={() => handleProduct(item, item.id)} disabled={disabled}>Add to Cart</Link>
                        )
                        }
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
