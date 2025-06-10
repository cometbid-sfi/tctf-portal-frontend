"use client";

import React from "react";
import Image from "next/image";
import Form from 'react-bootstrap/Form';

import LoginBanner from "../../../assets/Images/login-banner.svg";
import Link from "next/link";
import { Button } from "react-bootstrap";

const EmailContent = () => {
    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="hero-title">
                        <h2 className="hero-title">Email Sent</h2>
                    </div>
                </div>
            </section>
            <div className="loginsection">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-5">
                            <div className="logincontent">
                                <div className="form-content">
                                    <h2>Check your email</h2>
                                    <p className="mb-3">We have sent a password recovery instructions to your email address.</p>
                                    <p>Didn&apos;t receive the email? Check your spam folder or try to <Link href="/sent-email" className="link-btn">Re-send the message.</Link></p>
                                    <div className="btn-center">
                                        <Link href="/login" className="link-btn w-100">
                                            <Button type="submit" className="login-btn">Go back to Sign In</Button>
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

export default EmailContent;