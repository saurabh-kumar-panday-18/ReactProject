import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Energistin an deliver atactia metrces after avsionary aproria trnsition enterpris an sources applications emerging psd template";

const ProductDisplay = ({ item }) => {
  //   console.log(item);
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupan, setCoupan] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorchange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = (e) => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = (e) => {
    setQuantity(prequantity + 1);
  };

  const handleSubmit = (e) => {
     e.preventDefault();
     const product = {
        id: id,
        img: img,
        name: name,
        price: price,
        quantity: prequantity,
        size: size,
        color: color,
        coupan: coupan


     }

    //  console.log(product);
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if(existingProductIndex !== -1){
      existingCart[existingProductIndex].quantity += prequantity;
    }
    else{
      existingCart.push(product);
    }
    //  upadate local storage
    localStorage.setItem("cart", JSON.stringify(existingCart));


    // reset form fileds
    setQuantity(1);
    setSize("selected Size");
    setColor("selected Color");
    setCoupan("");
  }

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} review </span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* card compnent */}

      <div>
        <form onSubmit={handleSubmit}>
          {/* size */}

          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* color  */}

          <div className="select-product color">
            <select value={color} onChange={handleColorchange}>
              <option>Select Color </option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/*  carts plus minus */}

          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/*  coupan filed  */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="enter Discount Code"
              onChange={(e) => setCoupan(e.target.value)}
            />
          </div>

          {/* btn section  */}

          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
