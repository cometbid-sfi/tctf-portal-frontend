"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Table } from "react-bootstrap";
import Link from "next/link";

import "./style.css";
import CheckSvg from "../../../assets/Images/check-rounded.svg";
import DashSvg from "../../../assets/Images/dash.svg";
import ArrowSvg from "../../../assets/Images/arrow.svg";
import GoogleLogoSvg from "../../../assets/Images/google.svg";
import MicrosoftLogoSvg from "../../../assets/Images/microsoft.svg";
import MetaLogoSvg from "../../../assets/Images/meta.svg";
import ShopifyLogoSvg from "../../../assets/Images/shopify.svg";
import ArrowRightSvg from "../../../assets/Images/black-right.svg";
import ArrowUpSvg from "../../../assets/Images/open.png";
import ArrowDownSvg from "../../../assets/Images/close.png";

// Type assertions for image imports
const Check: StaticImageData = CheckSvg as unknown as StaticImageData;
const Dash: StaticImageData = DashSvg as unknown as StaticImageData;
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const GoogleLogo: StaticImageData = GoogleLogoSvg as unknown as StaticImageData;

const MicrosoftLogo: StaticImageData = MicrosoftLogoSvg as unknown as StaticImageData;
const MetaLogo: StaticImageData = MetaLogoSvg as unknown as StaticImageData;
const ShopifyLogo: StaticImageData = ShopifyLogoSvg as unknown as StaticImageData;

const ArrowUp: StaticImageData = ArrowUpSvg as unknown as StaticImageData;
const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;
const ArrowDown: StaticImageData = ArrowDownSvg as unknown as StaticImageData;

const faqs = [
  {
    question:
      "How do I update our address andor member representative and other contact information?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Offending belonging promotion provision an be oh consulted ourselves it",
  },
  {
    question: "How do I edit our Membership Pages?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
  {
    question: "Why can't I see the changes I have made?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
  {
    question: "How do I promote my organization products and services?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
  {
    question: "How do I get involved in CSF Projects?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
];
const AccountData = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
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
                <h1 className="hero-title">
                  Choose An <span>Account</span>
                </h1>
                <p className="hero-description">
                  Unlock premium features to boost productivity and streamline your workflow. <br />
                  Choose the account that suits you best!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End Here */}

      {/* Account Features Section Start Here  */}
      <section className="account-features-section mt-80">
        <div className="container">
          <div className="sec-header text-center mb-5">
            <div className="page-title">
              <h2>Compare Account Features</h2>
            </div>
            <p>
              Compare features to choose the account type that fit your goals. You can always
              upgrade or downgrade whenever your goal or requirements change.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Table responsive className="table-compares">
                <thead>
                  <tr>
                    <th>Key Features</th>
                    <th>Individual</th>
                    <th>Group</th>
                    <th>Organization</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Templates</td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Sharing & Export</td>
                    <td>
                      <Image src={Dash} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Private Projects</td>
                    <td>
                      <Image src={Dash} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>JIRA Integration</td>
                    <td>
                      <Image src={Dash} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Dash} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Advanced Options</td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>User Roles</td>
                    <td>
                      <Image src={Dash} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>AI Assistant</td>
                    <td>
                      <Image src={Dash} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Link href="/individual-account">
                        <button type="button" className="btn btn-black">
                          Choose this account
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link href="/group-account">
                        <button type="button" className="btn btn-fill-blue">
                          Choose this account
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link href="/organization-account">
                        <button type="button" className="btn btn-black">
                          Choose this account
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
      {/* Account Features Section End Here  */}

      {/* Who are we section Start Here */}
      <section className="subscribe-section mt-80">
        <div className="container">
          <div className="bg-image">
            <div className="page text-center">
              <div className="page-title">
                <h2>Who are we?</h2>
              </div>
              <div className="page-description hide_mobile">
                We&apos;re bulding cutting-edge IT solutions tailored to your needs. Our expert team
                ensures seamless integration, security, and 24/7
                <br /> support. Experience innovation and unmatched customer service.
              </div>
              <div className="page-description show_mobile">
                We&apos;re bulding cutting-edge IT solutions tailored to your needs. Our expert team
                ensures seamless integration, security, and 24/7 support. Experience innovation and
                unmatched customer service.
              </div>
              <div className="border-button mt-32">
                <Link href="/about">
                  <button className="btn btn-primary">
                    View More <Image src={Arrow} alt="Icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who are we section End Here */}

      {/* Brand Section Start Here  */}
      <section className="latest-news-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2>
                Trusted by most popular <br /> brands
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="brand-logo">
                <Image src={GoogleLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="brand-logo">
                <Image src={MicrosoftLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="brand-logo">
                <Image src={MetaLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="brand-logo">
                <Image src={ShopifyLogo} alt="Icon" />
              </div>
            </div>
          </div>
          <div className="btn-center">
            <Link href="/our-partner">
              <button className="btn btn-header">
                View All <Image src={ArrowRight} alt="Icon" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Brand Section End Here  */}

      {/* Who are we section Start Here */}
      <section className="subscribe-section mt-80">
        <div className="container">
          <div className="bg-yellow">
            <div className="page text-center">
              <div className="page-title">
                <h2>Why choose to join us?</h2>
              </div>
              <div className="page-description hide_mobile">
                We&apos;re bulding cutting-edge IT solutions tailored to your needs. Our expert team
                ensures seamless integration, security, and 24/7
                <br /> support. Experience innovation and unmatched customer service.
              </div>
              <div className="page-description show_mobile">
                We&apos;re bulding cutting-edge IT solutions tailored to your needs. Our expert team
                ensures seamless integration, security, and 24/7 support. Experience innovation and
                unmatched customer service.
              </div>
              <div className="border-black-button mt-32">
                <Link href="/about">
                  <button className="btn btn-primary">
                    Become a Member <Image src={ArrowRight} alt="Icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who are we section End Here */}

      {/* FAQs Section Start Here  */}
      <section className="faqs-section mt-80">
        <div className="container">
          <div className="page-title mb-5">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="faq-section">
                <div className="">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border rounded-lg faq-item">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-100 flex justify-between px-4 py-3 text-left bg-white hover:bg-gray-200"
                        >
                          <span className="font-medium">{faq.question}</span>
                          {openIndex === index ? (
                            <Image src={ArrowUp} alt="Icon" />
                          ) : (
                            <Image src={ArrowDown} alt="Icon" />
                          )}
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

              <div className="view-all-faq mt-32">
                Need more? <Link href="/faq">Visit FAQs page</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs Section End Here  */}
    </>
  );
};

export default AccountData;
