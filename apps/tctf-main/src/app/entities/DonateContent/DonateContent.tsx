"use client";

import React, { useState } from "react";
import "./style.css";
import { GrPaypal } from "react-icons/gr";
import { FaCreditCard } from "react-icons/fa";
import Link from "next/link";
import { Form } from "react-bootstrap";

const DonateContent = () => {
  const [selected, setSelected] = useState("one-time");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("paypal");
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              Sponsor the <span>CometBid</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="donate-section mt-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="donate-content">
                {/* <div className="center-logo">
                        <Image src={Logo} alt="Image" />
                    </div> */}
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                  Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem
                  Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                </p>

                <div className="big-title">Invest Your Time</div>

                <div className="link-box">
                  <Link href="#">
                    Help answer questions rather than just asking them. Share your knowledge,
                    experience, and expertise.
                  </Link>
                </div>
                <div className="link-box">
                  <Link href="#">
                    Help fix bugs and help implement enhancements rather than just reporting
                    problems and requesting features. Not only will you personally benefit, giving
                    back to the commons makes everything better for everyone.
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="sponsor-form">
                <div className="row">
                  <div className="col-xs-24">
                    <label>How often would you like to sponsor?</label>
                  </div>
                  <div className="btn-grid">
                    <button
                      className={`btn-neutral ${selected === "one-time" ? "selected" : ""}`}
                      onClick={() => setSelected("one-time")}
                    >
                      One Time
                    </button>
                    <button
                      className={`btn-neutral ${selected === "monthly" ? "selected" : ""}`}
                      onClick={() => setSelected("monthly")}
                    >
                      Monthly
                    </button>
                  </div>
                  <div className="col-xs-24">
                    <label className="mt-3">Select the amount you&apos;d like to give:</label>
                  </div>
                  <div className="btn-grid button-3">
                    <button
                      className={`btn-neutral ${selectedPrice === "€-250" ? "selected" : ""}`}
                      onClick={() => setSelectedPrice("€-250")}
                    >
                      € 250
                    </button>
                    <button
                      className={`btn-neutral ${selectedPrice === "€-130" ? "selected" : ""}`}
                      onClick={() => setSelectedPrice("€-130")}
                    >
                      € 130
                    </button>
                    <button
                      className={`btn-neutral ${selectedPrice === "€-100" ? "selected" : ""}`}
                      onClick={() => setSelectedPrice("€-100")}
                    >
                      € 100
                    </button>
                  </div>
                  <div className="btn-grid button-3">
                    <button
                      className={`btn-neutral ${selectedPrice === "€-50" ? "selected" : ""}`}
                      onClick={() => setSelectedPrice("€-50")}
                    >
                      € 50
                    </button>
                    <button
                      className={`btn-neutral ${selectedPrice === "€-30" ? "selected" : ""}`}
                      onClick={() => setSelectedPrice("€-30")}
                    >
                      € 30
                    </button>
                    <button
                      className={`btn-neutral ${selectedPrice === "€-10" ? "selected" : ""}`}
                      onClick={() => setSelectedPrice("€-10")}
                    >
                      € 10
                    </button>
                  </div>
                  <div className="btn-grid button-3">
                    <div className="sponsor-form-custom-amount-input-wrapper form-control margin-top-10">
                      <span className="sponsor-form-currency">€</span>
                      <input
                        type="number"
                        step="any"
                        min="1"
                        name="amount"
                        placeholder="Other Amount"
                      />
                      <Form.Select
                        aria-label="Default select example"
                        className="sponsor-form-currency-select"
                      >
                        <option>EUR</option>
                        <option value="1">CAD</option>
                        <option value="2">USD</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-xs-24">
                    <label className="mt-3">How would you like to pay?</label>
                  </div>
                  <div className="btn-grid">
                    <button
                      className={`btn-neutral ${selectedPayment === "credit" ? "selected" : ""}`}
                      onClick={() => setSelectedPayment("credit")}
                    >
                      <FaCreditCard /> Credit
                    </button>
                    <button
                      className={`btn-neutral ${selectedPayment === "paypal" ? "selected" : ""}`}
                      onClick={() => setSelectedPayment("paypal")}
                    >
                      <GrPaypal />
                      PayPal
                    </button>
                  </div>
                  <div className="col-xs-24">
                    <button className="btn-foreground">Sponsor and Support</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonateContent;
