"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Tab } from "react-bootstrap";
import { usePathname } from "next/navigation";
import "./style.css";

import ArrowSvg from "../../../assets/Images/arrow.svg";
import ArrowBlackSvg from "../../../assets/Images/black-right.svg";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Client1Svg from "../../../assets/Images/wg-ecd-tools.svg";
import Client2Svg from "../../../assets/Images/wg-adoptium.svg";
import Client3Svg from "../../../assets/Images/wg-jakarta.svg";
import Client4Svg from "../../../assets/Images/wg_iot.svg";
import ArrowRightSvg from "../../../assets/Images/black-right.svg";

// Create properly typed constants
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;
const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;
const Client1Img: StaticImageData = Client1Svg as unknown as StaticImageData;
const Client2Img: StaticImageData = Client2Svg as unknown as StaticImageData;
const Client3Img: StaticImageData = Client3Svg as unknown as StaticImageData;
const Client4Img: StaticImageData = Client4Svg as unknown as StaticImageData;

export default function CampaignLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CSF <span>Membership</span>
                </h1>
                <p className="hero-description">
                  Supported by Our Member Organizations, the Cometbid Foundation Provides the
                  Community
                  <br /> With Intellectual Property, Mentorship, Marketing, Event and IT Services.
                </p>
                <div className="border-button d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/choose-account">
                    <button className="btn btn-primary">
                      Become a Member <Image src={Arrow} alt="Icon" />
                    </button>
                  </Link>
                  <Link href="/our-partner">
                    <button className="btn btn-yellow">
                      Explore Our Member <Image src={ArrowBlack} alt="Icon" />
                    </button>
                  </Link>
                </div>
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
              <Link href="/collaborations">CSF Membership</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      <section className="membership-section">
        <div className="container">
          <Tab.Container id="left-tabs-example">
            <div className="tab-content membership-tabs">
              <div className="d-flex flex-row justify-content-between tab-line-container">
                <Link
                  href="/csf-membership/benefits"
                  className={`nav-link ${pathname === "/csf-membership/benefits" ? "active" : ""}`}
                >
                  <span className="tab-user-name">Benefits and Services</span>
                </Link>
                <Link
                  href="/csf-membership/membership-levels"
                  className={`nav-link ${pathname === "/csf-membership/membership-levels" ? "active" : ""}`}
                >
                  <span className="tab-user-name">Membership Levels</span>
                </Link>
                <Link
                  href="/csf-membership/membership-fees"
                  className={`nav-link ${pathname === "/csf-membership/membership-fees" ? "active" : ""}`}
                >
                  <span className="tab-user-name">Membership Fees</span>
                </Link>
                <Link
                  href="/csf-membership/become-member"
                  className={`nav-link ${pathname === "/csf-membership/become-member" ? "active" : ""}`}
                >
                  <span className="tab-user-name">Become a Member</span>
                </Link>
                <Link
                  href="/csf-membership/resources"
                  className={`nav-link ${pathname === "/csf-membership/resources" ? "active" : ""}`}
                >
                  <span className="tab-user-name">Resources</span>
                </Link>
                <Link
                  href="/csf-membership/member-portal"
                  className={`nav-link ${pathname === "/csf-membership/member-portal" ? "active" : ""}`}
                >
                  <span className="tab-user-name">Member Portal</span>
                </Link>
              </div>
            </div>
            <div className="tab-content">{children}</div>
          </Tab.Container>
        </div>
      </section>

      {/* Brand Section Start Here  */}
      <section className="latest-news-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2>Featured Collaborations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client1Img} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client2Img} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client3Img} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client4Img} alt="Icon" />
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
    </>
  );
}
