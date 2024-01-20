import React from "react";

const ThanksPage = () => {
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
                        <br /> Here is the confirmation of your Txn no.{" "}
                        <strong>49918294 </strong>{" "}
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
                            <tr>
                              <td>
                                <img src="design_img/acupressure-therapy.jpg" alt="Course Image" />
                              </td>
                              <td>
                                <strong>Item :</strong> Advance Certification Course in Acupressure Therapy
                                <br />
                                <strong>Qty :</strong> 1
                                <br />
                                <strong>Total :</strong> 5000.00
                                <br />
                                <strong> </strong>{" "}
                              </td>
                              <td>Confirmed</td>
                              <td>
                                <strong>Order Number :</strong> 15855
                                <br />
                                <strong>Order Date :</strong> January 17, 2024
                              </td>
                            </tr>
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
