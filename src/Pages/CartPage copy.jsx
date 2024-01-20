import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve all items from local storage
    const localStorageItems = { ...localStorage };
    const items = Object.keys(localStorageItems).map((key) =>
      JSON.parse(localStorageItems[key])
    );

    setCartItems(items);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.clear(); // Clear all items from local storage
    updatedCart.forEach((item) => {
      localStorage.setItem(item.courseId, JSON.stringify(item));
    });
  };

  const calculateTotals = () => {
    let cartTotal = 0;
  
    cartItems.forEach((item) => {
      cartTotal += parseFloat(item.fees); // Convert fees to float before adding
    });
  
    return cartTotal.toFixed(2);
  };
  
  return (
    <div>
      <div className="banner-bar">
        <div className="container-fluid">
          <div className="banner-content">
            <h1>Nursing Procedure</h1>
            <ul className="location">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart" className="active">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contents">
        <div className="nur-procedure-sec package-bar cart-bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <div className="nursing-block-outer">
                  <div className="row">
                    <div className="col-sm-7 col-md-8">
                      <div className="table-responsive">
                        <table
                          width="100%"
                          border="0"
                          cellSpacing="0"
                          cellPadding="0"
                          className="table table-bordered mytable cart_table"
                        >
                          <thead>
                            <tr>
                              <th align="center"> </th>
                              <th></th>
                              <th>Item Description</th>
                              <th>Unit Price</th>
                              <th>Quantity</th>
                              <th>Total Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <p className="pr_remove">
                                    <button onClick={() => handleRemoveItem(index)}>
                                      Remove
                                    </button>
                                  </p>
                                </td>
                                <td>
                                  <img alt="" src="design_img/acupressure-therapy.jpg" />
                                </td>
                                <td>
                                  <p className="pr_name">{item.title}</p>
                                </td>
                                <td>
                                  <p className="pr_rate">₹ {item.fees}</p>
                                </td>
                                <td>
                                  <input
                                    step="1"
                                    name="quantity"
                                    id="txtQty"
                                    value="1"
                                    className="form-control qty"
                                    type="text"
                                    readOnly="readonly"
                                  />
                                </td>
                                <td>
                                  <p className="pr_total">₹ {item.fees}</p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <p className="cart-btn-continue">
                          <Link to="/courses" className="btn btn-shop">
                            Continue Shopping
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-5 col-md-4">
                      <div className="cart-summery">
                        <h4>Pay Now</h4>

                        <table
                          width="100%"
                          border="0"
                          cellSpacing="0"
                          cellPadding="0"
                          className="sum_tab"
                        >
                          <tr>
                            <td className="pr_total_txt"> Cart Total</td>
                            <td className="pr_total_amt">₹ {calculateTotals()}</td>
                          </tr>
                          <tr>
                            <td className="pr_total_txt"> Discount </td>
                            <td className="pr_total_amt">(-) ₹ 0.00 </td>
                          </tr>
                          <tr className="pr_total_tr">
                            <td className="pr_total_txt"> Total Amount </td>
                            <td className="pr_total_amt">₹ {calculateTotals()}</td>
                          </tr>
                          <tr>
                            <td className="" colSpan="2">
                              <Link
                                to={{
                                  pathname: "/thanks",
                                  state: { cartItems: cartItems },
                                }}
                                className="btn btn-pay"
                              >
                                Pay & Enroll
                              </Link>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
