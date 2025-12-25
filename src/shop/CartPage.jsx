import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgurl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    //  featch cart item from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setcartItems(storedCartItems);
  }, []);

  //  calculte prices
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  //  handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setcartItems([...cartItems]);

    // upadate local storage with new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //  handle quantity decrease
  const handleDecrese = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setcartItems([...cartItems]);

      // upadate local storage with new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  //  handle item remove
  const handleRemoveItem = (item) => {
    const upadateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    //  upadte new cart
    setcartItems(upadateCart);
    upadateLocalStorage(upadateCart);
  };

  const upadateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //  cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  //  order total
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}

            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cart-product">Product</th>
                    <th className="cart-price">Price</th>
                    <th className="cart-quantity">Quantity</th>
                    <th className="cart-toprice">Total</th>
                    <th className="cart-edit">Edit</th>
                  </tr>
                </thead>

                {/*  table body  */}

                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt={item.name} />
                          </Link>
                        </div>

                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrese(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>

                      <td className="cat-toprice">
                        {calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgurl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ........ cart top ends...... */}

            {/*  cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupan">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupan"
                    id="coupan"
                    placeholder="coupan code.."
                  />

                  <input type="submit" value="Apply Coupan" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="update Cart" />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>

              {/*  ................ checkat box end */}

              {/*  shopping box */}

              <div className="shiping-box">
                <div className="row " >
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="us">United states (USA)</option>
                          <option value="ind">india </option>
                          <option value="db">Dubey </option>
                          <option value="chi">china </option>
                          <option value="aus">australia</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">New York (UK)</option>
                          <option value="us">america (USA)</option>
                          <option value="ind">Delhi </option>
                          <option value="db">banglore </option>
                          <option value="chi">dhaka </option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="postcode/zip *"
                        className="cart-page-input-text"
                      />
                      <button>Update Adress</button>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                      <div className="cart-overview">
                        <h3>Cart Totals</h3>
                        <ul className="lab-ul">
                          <li>
                            <span className="pull-left">Cart Subtotal</span>
                            <p className="pull-right">${cartSubtotal}</p>
                          </li>
                          <li>
                            <span className="pull-left">Shipping and Handling</span>
                            <p className="pull-right">Free Shiping</p>
                          </li>
                          <li>
                            <span className="pull-left">Order Total</span>
                            <p className="pull-right">${orderTotal.toFixed(2)}</p>
                          </li>
                        </ul>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
