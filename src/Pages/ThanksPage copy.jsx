import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ThanksPage = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };

  useEffect(() => {
    const generateOrderNumber = () => {
      const min = 10000;
      const max = 99999;
      const randomNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;
      setOrderNumber(randomNumber);
    };

    const getCurrentDate = () => {
      const today = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      setCurrentDate(today.toLocaleDateString("en-US", options));
    };

    generateOrderNumber();
    getCurrentDate();
  }, []);

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
                <Link to="/thanks" className="active">
                  Thanks
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
                <div className="nursing-block-outer thanks-outer">
                  <div className="row">
                    <div className="col-xs-12 thanks-bar">
                      <p className="message-icon"></p>
                      <h3 className="message-head">Congratulations!</h3>
                      <p className="message-text">
                        You successfully enrolled.
                        <br /> Here is the confirmation of your Order no.{" "}
                        <strong>{orderNumber}</strong>{" "}
                      </p>
                      <div className="table-responsive">
                        <table
                          className="table table-bordered mytable thanks_table"
                          id="tblOrder"
                          cellSpacing="0"
                          cellPadding="0"
                        >
                          <tbody>
                            {cartItems.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <img
                                    src="design_img/acupressure-therapy.jpg"
                                    alt="Course Image"
                                  />
                                </td>
                                <td>
                                  <strong>Item :</strong> {item.title}
                                  <br />
                                  <strong>Qty :</strong> {item.quantity}
                                  <br />
                                  <strong>Total :</strong>{" "}
                                  {item.total.toFixed(2)}
                                  <br />
                                  <strong> </strong>{" "}
                                </td>
                                <td>Confirmed</td>
                                <td>
                                  <strong>Order Number :</strong>{" "}
                                  {orderNumber}
                                  <br />
                                  <strong>Order Date :</strong>{" "}
                                  {currentDate}
                                </td>
                              </tr>
                            ))}
                          </tbody>
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

export default ThanksPage;
