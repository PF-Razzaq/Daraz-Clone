import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  return (
    <>
      <div className="container-main">
        <div className="main">
          <div className="d-flex py-4 justify-content-between">
            <h4>Create Your Daraz Account</h4>
            <p>
              Already member? <Link>login</Link> here.
            </p>
          </div>

          <div className="signup-form ">
            <form action="">
              <div className="">
                <label htmlFor="" className="d-block">
                  Phone Number<span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Please input your phone number"
                  required
                />
              </div>
              <div className="">
                <label htmlFor="" className="d-block">
                  Phone Number<span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Verification Code"
                  required
                />
              </div>
              <div className="">
                <label htmlFor="" className="d-block">
                  Phone Number<span>*</span>
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Minimum 6 character with a number and a letter"
                  required
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
