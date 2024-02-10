import Slider from "react-slider";
import React from "react";

const ShopByPrice = ({value, setValue, min, max}) => {
  return (
    <>
      <div className="prices">
        <div className="container">
          <div className="shop-price">
            <Slider
              className="slider"
              min={min}
              max={max}
              value={value}
              onChange={setValue}
            />
            <p>
              <b>Price :</b> ${value[0]} - ${value[1]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByPrice;
