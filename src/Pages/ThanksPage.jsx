import React, { useEffect, useState } from "react";

const ThanksPage = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [txnNumber, setTxnNumber] = useState("");


  const generateRandomTxnNumber = () => {
    // Generating a random 8-digit number
    const randomTxnNumber = Math.floor(10000000 + Math.random() * 90000000);
    
    return `${randomTxnNumber}`;
  };

  useEffect(() => {
    // Fetch items from local storage and store them in the state
    const localStorageItems = { ...localStorage };
    const items = Object.keys(localStorageItems).map((key) =>
      JSON.parse(localStorageItems[key])
    );
    setOrderDetails(items);
    setContentLoaded(true); // Set contentLoaded to true after items are fetched
    setTxnNumber(generateRandomTxnNumber()); // Set the random txn number

  }, []); // Ensure the dependency array is empty so that it only runs once on component mount

  useEffect(() => {
    // Clear local storage after content has loaded
    if (contentLoaded) {
      clearLocalStorage();
    }
  }, [contentLoaded]); // Dependency on contentLoaded triggers this effect when it becomes true

  const clearLocalStorage = () => {
    localStorage.clear();
  };


  return (
    <div>
      <div className="banner-bar">
        <div className="container-fluid">
          <div className="banner-content">
            <h1>Nursing Procedure</h1>
            <ul className="location">
              <li>
                <a href="index.asp">Home</a>
              </li>
              <li>
                <a href="" className="active">
                  Thanks
                </a>
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
                        <strong>{txnNumber} </strong>{" "}
                      </p>
                      <div className="table-responsive">
                        <table
                          className="table table-bordered mytable thanks_table"
                          id="tblOrder"
                          cellSpacing="0"
                          cellPadding="0"
                        >
                          <tbody>
                            <tr>
                              <th>Item Details</th>
                              <th>Particulars</th>
                              <th>Status</th>
                              <th>Order Details</th>
                            </tr>
                            {orderDetails.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <img src={`design_img/${item.courseId}.jpg`} alt="Course Image" />
                                </td>
                                <td>
                                  <strong>Item :</strong> {item.title}
                                  <br />
                                  <strong>Qty :</strong> {item.quantity}
                                  <br />
                                  <strong>Total :</strong>{" "}
                                  {(item.quantity * item.fees).toFixed(2)}
                                  <br />
                                  <strong> </strong>{" "}
                                </td>
                                <td>Confirmed</td>
                                <td>
                                  {/* <strong>Order Number :</strong> {index + 1} */}
                                  <br />
                                  <strong>Order Date :</strong> {new Date().toLocaleDateString()}
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
