"use client";

import React from "react";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { Button } from "react-bootstrap";

const ForgotContent = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="hero-title">
            <h2 className="hero-title">Forgot Password</h2>
          </div>
        </div>
      </section>
      <div className="loginsection">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="logincontent">
                <div className="form-content">
                  <h2 className="text-center">
                    Enter your email and we&apos;ll send you a link to reset your password
                  </h2>
                  {/* <p>Enter your email and we&apos;ll send you a link to reset your password.</p> */}
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                  </Form>
                  <div className="btn-center">
                    <Link href="/sent-email" className="link-btn w-100">
                      <Button type="submit" className="login-btn">
                        Reset Password
                      </Button>
                    </Link>
                  </div>
                  <div className="login mt-3 text-center">
                    <Link href="/login" className="link-btn">
                      Go back to Sign In
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotContent;
