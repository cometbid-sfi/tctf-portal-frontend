import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "../../../component/Sidebar/Sidebar";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const PublicLicense = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CT Foundation - <span>Terms of Use</span>
                </h1>
                <p className="hero-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                  Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End Here */}

      {/* Page-nevigation Section Start Here */}
      <section className="page-navigation-section mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-navigation">
              <Link href="/">Home</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <Link href="/legal-trademark">Legal Framework</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Terms of Use</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Participate Section start here */}
      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="sec-header mb-5">
                <div className="page-title">
                  <h2>CT Foundation Terms of Use</h2>
                </div>
                <p>
                  {
                    "This Privacy Policy explains how the CometBid Group (“Us”, “Our”, or “We”, as further identified below in section “Who We Are. Data Controllers and Our contact data”) collects and processes Personal Information (as defined below) from website visitors (“you” or “your”). All references to the “Website” in this Privacy Policy are deemed to refer to any CometBid Group website or online resource that contains a reference or link to this Privacy Policy, including in the first place the Website at https://www.CometBid.org/ as well as any other Website of the CometBid Group."
                  }
                </p>
                <p>
                  {
                    "The CometBid Group acts as the steward of Our open source projects, industry collaborations including working groups and interest groups, community, and ecosystem. We are committed to respecting your rights to privacy within Our global ecosystem. We promise to transparently share all aspects of how CometBid Group projects and Websites work in regards to privacy, terms, and Personal Information, and We are in full support of efforts to ensure your protection online, regardless of what laws are applicable and what your location may be. We recognize that different laws apply to protect your privacy, including but not limited to the laws of the United States, Canada, European Union, and We will aim to apply the same standards of privacy and protection of Personal Information to all individuals."
                  }
                </p>
              </div>

              <div className="border-bottom-section">
                <div className="page-title">
                  <h3>
                    Terms and Conditions of Use for the CometBid Foundation Website and Related
                    Services
                  </h3>
                </div>
                <div className="page-description mt-3">
                  <p>
                    As used herein, the term “you” or “your” means the individual accessing any CT
                    Foundation website or online resource that contains a reference or link to these
                    Terms of Use, including in the first place at{" "}
                    <Link href="" className="text-primary">
                      https://www.CT.org/
                    </Link>
                    as well as those websites of its industry collaborations and any other website
                    of the CT Group (“Website”), as well as any person or entity which has granted
                    to such individual the authority to enter into this agreement on its behalf. By
                    accessing, browsing, or using this Website, you acknowledge that you have read,
                    understand, and agree to be bound by these terms.
                  </p>
                  <p>
                    This Website and related services are made available by the CT Foundation AISBL
                    , and/or its affiliated CT Foundation organisations, including CT Foundation
                    Canada, CT.org Foundation, Inc, and CT Foundation Europe GmbH (collectively, “CT
                    Foundation”). All software, documentation, information and/or other materials
                    provided on and through this Website (“Content”) and all of the related services
                    offered by the CT Foundation may be used solely under the following terms and
                    conditions (“Terms of Use”).
                  </p>
                  <p>
                    This Website and related services are not meant for or targeted to anyone under
                    the age of 16...
                  </p>
                  <p>
                    This Website may contain other proprietary notices and copyright information...
                  </p>
                  <p>
                    Neither the CT Foundation nor its members (“Members”) assume any responsibility
                    regarding the accuracy of the Content...
                  </p>
                  <p>
                    The CT Foundation and its Members do not want to receive confidential
                    information from you...
                  </p>
                  <p>
                    You are prohibited from posting, transmitting, or storing to or from this
                    Website...
                    <span>
                      Community Code of Conduct:{" "}
                      <Link href="mailto:emea@CometBid.org" className="text-primary">
                        {" "}
                        https://www.CT.org/org/documents/Community_Code_of_Conduct.php
                      </Link>
                      View Code , Communication Guidelines:{" "}
                      <Link href="mailto:emea@CometBid.org" className="text-primary">
                        {" "}
                        https://www.CT.org/org/documents/communication-channel-guidelines/
                      </Link>{" "}
                      View Guidelines .
                    </span>
                  </p>
                  <p>
                    Should the CT Foundation determine that a Submission violates these Terms...
                  </p>
                  <p>If your Submission has been removed for violation of these Terms...</p>
                  <p>
                    If you believe that Content residing or accessible on or through this Website...
                    <Link href="mailto:emea@CometBid.org" className="text-primary">
                      https://www.CT.org/legal/copyright-infringement/
                    </Link>{" "}
                    Report Infringement
                  </p>
                  <p>
                    If you repeatedly provide manifestly illegal Content or if you repeatedly issue
                    infringement notices...
                  </p>
                  <p>Should you disagree with our response or our reaction to the complaint...</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      {/* Participate Section end here */}
    </>
  );
};

export default PublicLicense;
