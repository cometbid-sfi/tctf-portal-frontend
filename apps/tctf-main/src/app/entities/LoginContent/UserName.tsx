"use client";

import React from "react";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { Button } from "react-bootstrap";

const UserNameContent = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="hero-title">{/* <h2 className="hero-title">Sign In</h2> */}</div>
        </div>
      </section>
      <div className="loginsection">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="logincontent">
                <div className="form-content">
                  <h2 className="text-center">Recover Username</h2>
                  <p className="text-center mb-3">
                    Enter your First name, Last name and Membership name.
                  </p>
                  <div className="email-notify">m*******@example.com</div>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Last Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                      <Form.Label>Membership Name</Form.Label>
                      <Form.Control type="text" placeholder="Membership Name" />
                    </Form.Group>
                  </Form>
                  <div className="btn-center">
                    <Button type="submit" className="login-btn">
                      Recover Username
                    </Button>
                  </div>
                  <div className="login mt-3 text-center">
                    <Link href="/register" className="link-btn">
                      Go back to Sign In.
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

export default UserNameContent;
