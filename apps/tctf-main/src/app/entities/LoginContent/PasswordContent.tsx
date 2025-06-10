"use client";

import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import Link from "next/link";
import { Button } from "react-bootstrap";

const NewPasswordGetContent = () => {
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    return (
        <>
        <section className="banner-section">
                <div className="container">
                    <div className="hero-title">
                        <h2 className="hero-title">Get New Password</h2>
                    </div>
                </div>
            </section>
            <div className="loginsection">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="logincontent">
                                <div className="form-content">
                                    <h2 className="text-center">New password </h2>
                                    <p className="text-center">Your new password must be different from previously used one, and must have at least 8 characters.</p>
                                    <Form>
                                        {/* New Password Field */}
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>New Password</Form.Label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={showNewPassword ? "text" : "password"}
                                                    placeholder="Enter new password"
                                                />
                                                <span
                                                    className="position-absolute end-0 top-50 translate-middle-y me-3"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                                >
                                                    {showNewPassword ? <FaEye size={20} color="#9A9A9A" /> : <FaEyeSlash size={20} color="#9A9A9A" />}
                                                </span>
                                            </div>
                                        </Form.Group>

                                        {/* Confirm Password Field */}
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    placeholder="Confirm password"
                                                />
                                                <span
                                                    className="position-absolute end-0 top-50 translate-middle-y me-3"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                >
                                                    {showConfirmPassword ? <FaEye size={20} color="#9A9A9A" /> : <FaEyeSlash size={20} color="#9A9A9A" />}
                                                </span>
                                            </div>
                                        </Form.Group>
                                    </Form>
                                    <div className="btn-center">
                                        <Button type="submit" className="login-btn">Reset Password</Button>
                                    </div>
                                    <div className="login mt-3 text-center">
                                        <Link href="/login" className="link-btn"> Go back to Sign in.</Link>
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

export default NewPasswordGetContent;
