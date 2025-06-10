"use client"

import Image from "next/image";
import React, { useState } from "react";

import ArrowUp from "../../../assets/Images/open.png";
import ArrowDown from "../../../assets/Images/close.png";
import EmailIcon from "../../../assets/Images/mage_email-fill.svg";
import CallIcon from "../../../assets/Images/fluent_call.svg";
import Subscribe from "@/component/Subscribe/Subscribe";


const faqs = [
    {
        question: "How do I get started?",
        answer: "All membership account type is Free to sign up but the Group and Organization membership account are for teams (more than one person) and allows unlimited team members. Organization account is specifically for Corporations and establishments with Corporate registered names.",
    },
    {
        question: "What happens after signing up for an account?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I know which membership account suites my workload best?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How can I upgrade my membership account?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How can I downgrade my membership account?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "What should I do to be part of CSF Incubator program",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "What is included in the Organization membership account?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "What is included in the Individual membership account?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How can I start a new Project?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I cancel my membership?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "How do I transfer my membership to a different account?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
    {
        question: "What is included in the Individual membership account?",
        answer: "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
    },
];

const FaqData = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            {/* Hero Section Start Here */}
            <section className="hero-section-common project-hero-section position-relative mt-80">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12">
                            <div className="hero-content text-center">
                                <h1 className="hero-title">Frequently Asked <span>Questions</span></h1>
                                <p className="hero-description">Unlock premium features to boost productivity and streamline your workflow. <br />Choose the account that suits you best!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End Here */}

            {/* FAQs Section Start Here  */}
            <section className="faqs-section mt-80">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="faq-section">
                                <div className="">
                                    <div className="space-y-4">
                                        {faqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="border rounded-lg faq-item"
                                            >
                                                <button
                                                    onClick={() => toggleFAQ(index)}
                                                    className="w-100 flex justify-between px-4 py-3 text-left bg-white hover:bg-gray-200"
                                                >
                                                    <span className="font-medium">{faq.question}</span>
                                                    {openIndex === index ? <Image src={ArrowUp} alt="Icon" /> : <Image src={ArrowDown} alt="Icon" />}
                                                </button>
                                                {openIndex === index && (
                                                    <div className="px-4 py-3 text-gray-700 bg-white border-t faq-content">
                                                        {faq.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQs Section End Here  */}

            {/* Contact Us details section start here */}
            <section className="contact-us-section mt-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-3">
                            <div className="contact-box">
                                <div className="box-icon">
                                    <Image src={EmailIcon} alt="Icon" />
                                </div>
                                <div className="box-content">
                                    <h4 className="box-title">Email Us</h4>
                                    <p className="box-description">Have questions or need assistance? Reach out to us via email. We&apos;re here to help!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="contact-box">
                                <div className="box-icon">
                                    <Image src={CallIcon} alt="Icon" />
                                </div>
                                <div className="box-content">
                                    <h4 className="box-title">Call Us</h4>
                                    <p className="box-description">Need help or have inquiries? Call us anytime. We&apos;re here for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Us details section end here */}

            {/* <Subscribe /> */}
        </>
    );
};

export default FaqData;