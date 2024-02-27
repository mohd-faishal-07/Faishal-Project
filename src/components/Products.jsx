import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Loading } from "./Loading";
import Slider from "react-slider";
import { ShopByCategory } from "./filtering/ShopByCategory";
import { ShopByColor } from "./filtering/ShopByColor";
import ShopByPrice from "./filtering/ShopByPrice";

export const Products = () => {
  const min = 0;
  const max = 1000;

  const [datas, setDatas] = useState([]);
  const [toggle, setToggle] = useState(1);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState(null);
  const [value, setValue] = useState([min, max]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      axios.get("http://localhost:2500/products").then((response) => {
        setDatas(response.data);
      });
    }, 3000);
  }, []);

  function updateToggle(value) {
    setToggle(value);
  }

  function filterMen(value) {
    setFilter((prevFilter) => (prevFilter === value ? null : value));
  }

  function filterByColor(colors) {
    setColor((prevColor) => (prevColor === colors ? null : colors));
  }

  return (
    <div className="products-page">
      <div className="container">
        <div className="titles">
          <div className="category-shop" onClick={() => updateToggle(1)}>
            <Link to="#" className={toggle == 1 ? "activate" : ""}>
              Shop By Category
            </Link>
          </div>
          <span className="lines">|</span>
          <div className="color-shop" onClick={() => updateToggle(2)}>
            <Link to="#" className={toggle == 2 ? "activate" : ""}>
              Shop By Color
            </Link>
          </div>
          <span className="lines">|</span>
          <div className="price-shop" onClick={() => updateToggle(3)}>
            <Link to="#" className={toggle == 3 ? "activate" : ""}>
              Shop By Price
            </Link>
          </div>
        </div>
        <hr />
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="filtering">
              <div
                className={toggle == 1 ? "active" : "filters shop-by-category"}
              >
                <ShopByCategory filter={filter} filterMen={filterMen} />
              </div>
              <div className={toggle == 2 ? "active" : "filters shop-by-color"}>
                <ShopByColor color={color} filterByColor={filterByColor} />
              </div>
              <div className={toggle == 3 ? "active" : "filters shop-by-price"}>
                <ShopByPrice
                  value={value}
                  setValue={setValue}
                  min={min}
                  max={max}
                />
              </div>
            </div>{" "}
            <div className="products">
              {datas.length > 0 ? (
                datas.map(
                  (item) =>
                    (filter === item.category || filter === null) &&
                    (color === null || color === item.color) &&
                    item.price >= value[0] &&
                    item.price <= value[1] && (
                      <Link to={`/productdetails/${item.id}`} key={item.id}>
                        <div className="items">
                          <img src={item.image} alt="img" />
                          <div className="description">
                            <p>{item.title}</p>
                          </div>
                          <div className="price">
                            <p>
                              <b>Price : </b>${item.price}
                            </p>
                            <p>
                              <b>Ratings : {item.rating.rate}</b>
                            </p>
                          </div>
                        </div>
                      </Link>
                    )
                )
              ) : (
                <p className="no-data">No Data Found</p>
              )}
            </div>
          </>
        )}
        <Footer />
      </div>
    </div>
  );
};
