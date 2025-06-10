"use client";

import Form from "react-bootstrap/Form";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { MdEmail, MdCall } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";

const GroupContent = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">
              Become a <span>Member</span>
            </h2>
          </div>
        </div>
      </section>
      <div className="loginsection">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-xl-3 order-2 order-md-1">
              <div className="sidecontent">
                <div className="small-title">Contact us</div>
                <div className="side-bar-title">
                  Get In <br /> <span>Touch Today</span>{" "}
                </div>
                <div className="side-bar-content">
                  We love questions and feedback- and we&apos;re always happy to help! Here are some
                  ways to contact us.
                </div>

                <div className="contect-list">
                  <div className="contact-item mb-3">
                    <div className="contact-icon">
                      <MdEmail />
                    </div>
                    <div className="contact-content">
                      <div className="contact-title">Email:</div>
                      <div className="contact-detail">Contact@company.com</div>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MdCall />
                    </div>
                    <div className="contact-content">
                      <div className="contact-title">Call us: </div>
                      <div className="contact-detail">(113) 12220827368</div>
                    </div>
                  </div>
                </div>

                <div className="social-media mt-4">
                  <h4>Reach out to us on:</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaGoogle />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 mb-3 order-1 order-md-2">
              <div className="logincontent">
                <div className="form-content">
                  <h2 className="text-center mb-5">Create Group account</h2>
                  <div className="other-btn row">
                    <div className="col-lg-6 mb-3">
                      <Button type="submit" className="google-btn">
                        Sign in with Google
                      </Button>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <Button type="submit" className="github-btn">
                        Sign in with GitHub
                      </Button>
                    </div>
                  </div>
                  <div className="other-login">
                    <p>Or sign in with</p>
                  </div>
                  <Form>
                    <div className="row">
                      <div className="form-step-title">Group Name </div>
                      <div className="col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Group Name" />
                        </Form.Group>
                      </div>
                      <div className="form-step-title">Member Representative </div>
                      <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Frirst Name" />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                      </div>
                      <div className="col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="email" placeholder="Email Address" />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                      </div>
                      <div className="form-step-title">Where do you currently work ?</div>
                      <div className="col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Check aria-label="option 1" label="SELF-EMPOYED" />
                        </Form.Group>
                      </div>
                      <div className="col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Company name*" />
                        </Form.Group>
                      </div>
                      <div className="col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Job title*" />
                        </Form.Group>
                      </div>
                      <div className="col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="Your LinkedIn profile " />
                        </Form.Group>
                      </div>
                      <div className="form-step-title">User Details</div>
                      <div className="col-lg-12">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Select aria-label="Default select example">
                            <option>Country*</option>
                            <option value="1">India</option>
                            <option value="2">United States</option>
                            <option value="3">United Kingdom</option>
                            <option value="4">Australia</option>
                            <option value="5">Canada</option>
                            <option value="6">New Zealand</option>
                            <option value="7">South Africa</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="State " />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                      </div>
                    </div>
                  </Form>
                  <div className="btn-center">
                    <Button type="submit" className="login-btn">
                      Create Account
                    </Button>
                  </div>
                  <div className="login mt-3 text-center">
                    <p>
                      By creating an account, you are agree to our
                      <Link href="/about/privacy-policy" className="link-btn">
                        Terms of Service and Privacy Policy.
                      </Link>
                    </p>
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

export default GroupContent;
