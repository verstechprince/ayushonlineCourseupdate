import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState([1]);

  useEffect(() => {
    const localStorageItems = { ...localStorage };
    const items = Object.keys(localStorageItems).map((key) =>
      JSON.parse(localStorageItems[key])
    );

    const initialQuantities = items.map((item) => item.quantity || 1);
    setQuantities(initialQuantities);

    setCartItems(items);
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = newQuantity;

    const updatedCart = cartItems
      .map((item, i) => {
        if (i === index) {
          let updatedItem;
          if (newQuantity < 1) {
            localStorage.removeItem(item.courseId);
            return null;
          } else {
            updatedItem = {
              ...item,
              quantity: updatedQuantities[i],
              total: item.fees * newQuantity,
            };

            localStorage.setItem(
              updatedItem.courseId,
              JSON.stringify(updatedItem)
            );

            return updatedItem;
          }
        }

        return item;
      })
      .filter(Boolean);

    setQuantities(updatedQuantities);
    setCartItems(updatedCart);
  };

  const handleIncrementQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] += 1;
    handleQuantityChange(index, updatedQuantities[index]);
  };

  const handleDecrementQuantity = (index) => {
    const updatedQuantities = [...quantities];
    if (updatedQuantities[index] > 1) {
      updatedQuantities[index] -= 1;
      handleQuantityChange(index, updatedQuantities[index]);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    const removedItem = updatedCart.splice(index, 1)[0];
    localStorage.removeItem(removedItem.courseId);

    updatedCart.forEach((item) => {
      localStorage.setItem(item.courseId, JSON.stringify(item));
    });

    setCartItems(updatedCart);
  };

  const calculateTotals = () => {
    let cartTotal = 0;

    cartItems.forEach((item, index) => {
      cartTotal += parseFloat(item.fees) * quantities[index];
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
                      {cartItems.length > 0 ? (
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
                                      <a
                                        onClick={() => handleRemoveItem(index)}
                                      ></a>
                                    </p>
                                  </td>
                                  <td>
                                    <img
                                      src={`/design_img/${item.courseId}.jpg`}
                                      alt="Course Image"
                                    />
                                  </td>
                                  <td>
                                    <p className="pr_name">{item.title}</p>
                                  </td>
                                  <td>
                                    <p className="pr_rate">₹ {item.fees}</p>
                                  </td>
                                  <td>
                                    <div className="quantity-container">
                                      <p
                                        onClick={() =>
                                          handleDecrementQuantity(index)
                                        }
                                        style={{ cursor: "pointer" }}
                                      >
                                        -
                                      </p>
                                      <span>{item.quantity}</span>
                                      <p
                                        onClick={() =>
                                          handleIncrementQuantity(index)
                                        }
                                        style={{ cursor: "pointer" }}
                                      >
                                        +
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <p className="pr_total">
                                      ₹{" "}
                                      {item.total > item.fees
                                        ? item.total
                                        : item.fees}
                                    </p>
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
                      ) : (
                        <div className="empty-cart-msg">
                          <img
                            src="design_img/empty-cart.jpg"
                            style={{ display: "block", margin: "auto" }}
                            alt="Empty Cart"
                          />
                          <p>There is no item in your cart.</p>
                          <p className="cart-btn-continue">
                            <Link to="/courses" className="btn btn-shop">
                              Continue Shopping
                            </Link>
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="col-sm-5 col-md-4">
                      {cartItems.length > 0 && (
                        <div className="cart-summery">
                          <h4>Pay Now</h4>

                          <table
                            width="100%"
                            border="0"
                            cellSpacing="0"
                            cellPadding="0"
                            className="sum_tab"
                          >
                            <tbody>
                              <tr>
                                <td className="pr_total_txt"> Cart Total</td>
                                <td className="pr_total_amt">
                                  ₹ {calculateTotals()}
                                </td>
                              </tr>
                              <tr>
                                <td className="pr_total_txt"> Discount </td>
                                <td className="pr_total_amt">(-) ₹ 0.00 </td>
                              </tr>
                              <tr className="pr_total_tr">
                                <td className="pr_total_txt"> Total Amount </td>
                                <td className="pr_total_amt">
                                  ₹ {calculateTotals()}
                                </td>
                              </tr>
                              <tr>
                                <td className="pr_pay-opt" colSpan="2">
                                  (Place your order by)
                                  <div
                                    className="btn-group"
                                    data-toggle="buttons"
                                  >
                                    <label className="btn btn-check btn-active">
                                      <span></span>
                                      <input
                                        value="COD"
                                        type="radio"
                                        name="payMode"
                                        defaultChecked
                                      />
                                      Cash on Delivery
                                    </label>
                                    <label className="btn btn-check btn-deactive active">
                                      <span></span>
                                      <input
                                        value="QR"
                                        type="radio"
                                        name="payMode"
                                      />
                                      Scan QR Code
                                    </label>
                                  </div>
                                  <div
                                    className="qr-col"
                                    style={{ display: "block" }}
                                  >
                                    <img
                                      src="design_img/qr-code.jpg"
                                      alt="QR Code"
                                      style={{
                                        height: "150px",
                                        width: "120px",
                                      }}
                                    />
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="2">
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
                            </tbody>
                          </table>
                        </div>
                      )}
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
