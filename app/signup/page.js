"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const confirmInputType = isConfirmPasswordVisible ? "text" : "password";
  const inputType = isPasswordVisible ? "text" : "password";

  return (
    <div>
      <div className="main-content">
        <div className="py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-10">
                <div className="align-items-center g-4 row">
                  <div className="col-lg-6 col-xl-5 text-center">
                    <div className="text-center mb-4">
                      <h3 className="fw-semibold">Register to Room Angel!</h3>
                      <p className="text-muted text-center mb-0">
                        Start your 15-day trial, no credit card required
                      </p>
                    </div>

                    <p>Marketing text placeholder</p>

                    <form className="register-form">
                      <div className="form-group mb-4">
                        <label className="required">First Name</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="form-group mb-4">
                        <label className="required">Surname</label>
                        <input type="text" className="form-control" />
                      </div>

                      <div className="form-group mb-4">
                        <label className="required">Email</label>
                        <input type="email" className="form-control" />
                      </div>

                      <div className="form-group mb-4">
                        <label className="required">Mobile</label>
                        <input type="number" className="form-control" />
                      </div>

                      <div className="form-group mb-4">
                        <label className="required">Fixed</label>
                        <input type="text" className="form-control" />
                      </div>

                      <div className="form-group mb-4">
                        <label className="required">Company</label>
                        <input type="text" className="form-control" />
                      </div>

                      <div className="form-group mb-4">
                        <label className="required">Password</label>
                        <input
                          id="password"
                          type={inputType}
                          className="form-control password"
                          autoComplete="off"
                        />
                        <i
                          className={`toggle-password ${
                            isPasswordVisible
                              ? "fa-regular fa-eye"
                              : "fa-regular fa-eye-slash"
                          }`}
                          onClick={togglePasswordVisibility}
                        ></i>
                        <p className="password-strength">
                          Choose a strong password
                        </p>
                      </div>

                      <div className="form-group mb-4">
                        <label className="required">Confirm Password</label>
                        <input
                          id="confirmPassword"
                          type={confirmInputType}
                          className="form-control c-password"
                          autoComplete="off"
                        />
                        <i
                          className={`toggle-password ${
                            isConfirmPasswordVisible
                              ? "fa-regular fa-eye"
                              : "fa-regular fa-eye-slash"
                          }`}
                          onClick={toggleConfirmPasswordVisibility}
                        ></i>
                      </div>

                      <div className="form-check mb-4 text-start">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          By registering, you agree to the{" "}
                          <Link
                            href="terms-conditions"
                            className="text-decoration-underline"
                          >
                            terms of service
                          </Link>
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                      >
                        Register
                      </button>
                    </form>

                    <div className="bottom-text text-center mt-3">
                      Already have an account?{" "}
                      <Link
                        href="signin"
                        className="fw-medium text-decoration-underline"
                      >
                        Sign In
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-7 order-lg-first pe-xl-5">
                    <img
                      src="assets/img/mark_black.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
