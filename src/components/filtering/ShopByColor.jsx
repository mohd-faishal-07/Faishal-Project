import React from "react";
import { Link } from "react-router-dom";

export const ShopByColor = ({color, filterByColor}) => {
  return (
    <>
      <div className="color">
        <div className="container">
          <div className="shop-color">
            <ul>
              <li
                className={color == "black" ? "black active" : "black"}
                onClick={() => filterByColor("black")}
              >
                <Link to="#" className=""></Link>
              </li>
              <li
                className={color == "white" ? "white active" : "white"}
                onClick={() => filterByColor("white")}
              >
                <Link to="#"></Link>
              </li>
              <li
                className={color == "blue" ? "blue active" : "blue"}
                onClick={() => filterByColor("blue")}
              >
                <Link to="#"></Link>
              </li>
              <li
                className={color == "purple" ? "purple active" : "purple"}
                onClick={() => filterByColor("purple")}
              >
                <Link to="#"></Link>
              </li>
              <li
                className={color == "red" ? "red active" : "red"}
                onClick={() => filterByColor("red")}
              >
                <Link to="#"></Link>
              </li>
              <li
                className={color == "mud" ? "mud active" : "mud"}
                onClick={() => filterByColor("mud")}
              >
                <Link to="#"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
