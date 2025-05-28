"use client";

import React, { useState } from "react";
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { Button } from "react-bootstrap";

const LoginContent = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="hero-title">
                        <h2 className="hero-title">Sign In</h2>
                    </div>
                </div>
            </section>
            <div className="loginsection">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="logincontent">
                                <div className="form-content">
                                    <h2 className="text-center">Sign in with email and password</h2>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Password</Form.Label>
                                            <div className="position-relative">
                                                <Form.Control
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Password"
                                                />
                                                <span
                                                    className="position-absolute end-0 top-50 translate-middle-y me-3 cursor-pointer"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <FaEye size={20} color="#9A9A9A" /> : <FaEyeSlash size={20} color="#9A9A9A" />}
                                                </span>
                                            </div>
                                        </Form.Group>
                                    </Form>
                                    <Link href="/forgot-password" className="link-btn">Forgot your password?</Link>
                                    <div className="btn-center">
                                        <Button type="submit" className="login-btn">Sign In</Button>
                                    </div>
                                    <div className="other-login">
                                        <p>Or sign in with</p>
                                    </div>
                                    <div className="other-btn row">
                                        <div className="col-lg-6 mb-3">
                                            <Button type="submit" className="google-btn">Sign in with Google</Button>
                                        </div>
                                        <div className="col-lg-6 mb-3">
                                            <Button type="submit" className="github-btn">Sign in with GitHub</Button>
                                        </div>
                                        <div className="col-lg-12">
                                            <Button type="submit" className="slack-btn">Sign in with Slack</Button>
                                        </div>
                                    </div>
                                    <div className="login mt-3 text-center">
                                        <p>Don&apos;t have an account? <Link href="/individual-account" className="link-btn">Sign Up</Link></p>
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

export default LoginContent;