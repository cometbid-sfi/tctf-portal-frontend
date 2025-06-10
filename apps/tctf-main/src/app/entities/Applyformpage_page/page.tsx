"use client";

import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import "./style.css";

// Type assertions for image imports
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const ApplyFormPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Accounting <span>Assistant</span>
                </h1>
                <p className="hero-description ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Navigation Section */}
      <section className="page-navigation-section mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-navigation">
              <Link href="/">Home</Link>
              <span>
                <Image src={AltArrow} alt="Arrow Icon" />
              </span>
              <Link href="/about">Our Community</Link>
              <span>
                <Image src={AltArrow} alt="Arrow Icon" />
              </span>
              <span>Accounting Assistant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Job + Form Section */}
      <section className="career-apply-section py-5">
        <div className="container">
          <div className="row">
            {/* Job Description */}
            <div className="col-md-6 mb-4">
              <div className="page-title">
                <h2>Accounting Assistant – Cometbid Foundation</h2>
                <p className="apply-text-description">
                  The Cometbid Foundation is one of the world’s largest open source software
                  foundations...
                </p>

                <h2 className="mt-4">What We Offer</h2>
                <ul className="apply-text-description">
                  <li>Competitive salary and benefits.</li>
                  <li>Remote-friendly work environment.</li>
                  <li>Engagement with global open source community.</li>
                  <li>Opportunities for professional growth.</li>
                </ul>

                <h2 className="mt-4">About the Role</h2>
                <p className="apply-text-description">
                  Provide crucial support to the Senior Operations Manager Europe and Director,
                  Worldwide Operations...
                </p>

                <h2 className="mt-3">Key Responsibilities</h2>
                <ul className="apply-text-description">
                  <li>Accounts Payable/Receivable</li>
                  <li>Expense report verification</li>
                  <li>Monthly statements for EFE GmbH</li>
                  <li>Tax office compliance</li>
                  <li>Research project accounting</li>
                </ul>

                <h2 className="mt-3">Required Qualifications</h2>
                <ul className="apply-text-description">
                  <li>2+ years of accounting/admin experience</li>
                  <li>Fluent in German; good English</li>
                  <li>Detail-oriented, organized</li>
                </ul>

                <h2 className="mt-3">Preferred</h2>
                <ul className="apply-text-description">
                  <li>Experience with DATEV, Google Sheets</li>
                  <li>Basic tax law knowledge</li>
                  <li>Self-driven</li>
                </ul>

                <h2 className="mt-3">Location</h2>
                <p className="apply-text-description">
                  Remote in Germany, preferably near Frankfurt or Darmstadt
                </p>

                <hr className="my-3" />
                <p className="small apply-text-description">
                  <strong>Note:</strong> If you require accommodations during the hiring process,
                  please include that in your application.
                </p>
              </div>
            </div>

            {/* Application Form */}
            <div className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h1 className="card-title mb-3">Apply for this Position</h1>
                  <form>
                    <div className="mb-2">
                      <label className="form-label apply-text-description">First Name*</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-2">
                      <label className="form-label apply-text-description">Last Name*</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-2">
                      <label className="form-label apply-text-description">Email Address*</label>
                      <input type="email" className="form-control" required />
                    </div>
                    <div className="mb-2">
                      <label className="form-label apply-text-description">Phone*</label>
                      <input type="tel" className="form-control" required />
                    </div>
                    <div className="mb-2">
                      <label className="form-label apply-text-description">Address</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label className="form-label apply-text-description">City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-2">
                      <label className="form-label apply-text-description">State/Province</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label apply-text-description">Postal</label>
                      <input type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                      <label className="form-label apply-text-description">Resume*</label>
                      <input
                        type="file"
                        className="form-control"
                        accept=".pdf,.doc,.docx,.odt,.txt,.rtf"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label apply-text-description">Cover Letter</label>
                      <textarea className="form-control" rows={4}></textarea>
                    </div>

                    <div className="mb-2">
                      <label className="form-label apply-text-description">
                        Are you eligible to work anywhere in the European Union?*
                      </label>
                      <select className="form-select" required>
                        <option value="">-- No answer --</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="form-label apply-text-description">
                        Are you currently located in Germany?*
                      </label>
                      <select className="form-select" required>
                        <option value="">-- No answer --</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    {/* <div className="mb-3">
                      <label className="form-label">Human Check*</label>
                      <input type="text" className="form-control" placeholder="Type the word: Cometbid" required />
                    </div> */}

                    <button type="submit" className="btn btn-primary w-100">
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplyFormPage;
