import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [isDistributor, setIsDistributor] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    distributorId: '',
    password: '',
    agreeTerms: false,
  });

  const handleDistributorChange = (e) => {
    setIsDistributor(e.target.value === 'Yes');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Fetch API endpoint for registration
    try {
      const response = await fetch('http://your-backend-api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User registered successfully');
        // You can redirect or show a success message here
      } else {
        console.error('Failed to register user:', response.statusText);
        // Handle the error, show a message, etc.
      }
    } catch (error) {
      console.error('Error registering user:', error.message);
      // Handle the error, show a message, etc.
    }
  };

  return (
    <>
      <div className="banner-bar">
        <div className="container-fluid">
          <div className="banner-content">
            <h1>Register</h1>
            <ul className="location">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/register" className="active">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <section className="contents">
        <div className="content-bar">
          <div className="container">
            <div className="reg-form-box">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Mobile No.</label>
                      <input
                        type="text"
                        className="form-control"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email ID</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Are you a distributor of Amulya?</label>
                      <select
                        className="form-control"
                        onChange={handleDistributorChange}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>

                {isDistributor && (
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Distributor ID</label>
                        <input
                          type="text"
                          className="form-control"
                          name="distributorId"
                          value={formData.distributorId}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {!isDistributor && (
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label className="label-check">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                        />
                        I agree to the <a>Terms & Conditions</a>.
                      </label>
                    </div>
                  </div>
                </div>

                <input type="submit" value="Register" className="btn btn-sub" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
