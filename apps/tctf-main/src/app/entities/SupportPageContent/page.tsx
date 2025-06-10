import React from "react";
import Link from "next/link";
import "./style.css";
import Image, { StaticImageData } from "next/image";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";

// Create properly typed constants
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const Support = () => {
  return (
    <>
      <section className="hero-section-common position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              CTF - Support <span> framework</span>
            </h1>
            <p>
              Supported by Our Member Organizations, the Cometbid Foundation Provides the Community{" "}
              <br /> With Intellectual Property, Mentorship, Marketing, Event and IT Services.
            </p>
          </div>
        </div>
      </section>

      {/* Page-nevigation Section Start Here */}
      <section className="page-navigation-section mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-navigation">
              <Link href="/">Home</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <Link href="/project">Our Community</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </section>
      <section className="participate-section mt-80">
        <div className="container">
          <div className="sec-header mb-5">
            <div className="page-title">
              <h2>Project Support</h2>
            </div>
            <p className="support-subtitle-text">
              Cometbid Projects are created and managed by our community of developers. If you need
              support with <br /> any of our open source projects, you should:
            </p>
            <ol className="support-list">
              <li>Find the project page</li>
              <li>
                Navigate to the “Developer Resources” section of the page and find the project
                repositories. Open a ticket or PR directly against the project of interest
              </li>
              <li>
                If you are still having trouble, reach out to project lead(s) or committers involved
                in the project - found on the “Who's involved” page.
              </li>
            </ol>
            <p>
              {
                "If you are unable to resolve your issue with the project, create an issue on the Cometbid Foundation GitLab helpdesk or contact us. For issues related to security, find out how to report a vulnerability and privacy concerns can be sent to privacy@Cometbid."
              }
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
