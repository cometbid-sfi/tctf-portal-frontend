import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { MdJoinFull } from "react-icons/md";
import "./style.css";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import AnnounceIconSvg from "../../../assets/Images/dummy-image.svg";
import Client1Svg from "../../../assets/Images/wg-ecd-tools.svg";
import Client2Svg from "../../../assets/Images/wg-adoptium.svg";
import Client3Svg from "../../../assets/Images/wg-jakarta.svg";
import Client4Svg from "../../../assets/Images/wg_iot.svg";
import ArrowRightSvg from "../../../assets/Images/black-right.svg";

// Type assertions for image imports
const Client1: StaticImageData = Client1Svg as unknown as StaticImageData;
const Client2: StaticImageData = Client2Svg as unknown as StaticImageData;
const Client3: StaticImageData = Client3Svg as unknown as StaticImageData;
const Client4: StaticImageData = Client4Svg as unknown as StaticImageData;

const AnnounceIcon: StaticImageData = AnnounceIconSvg as unknown as StaticImageData;
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;

const AboutContent = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Our <span>Community</span>
                </h1>
                <p className="hero-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has <br /> been the industry&#39;s standard dummy text ever since the 1500s,
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
              <Link href="/about">Our Community</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* About Section Start Here */}
      <section className="about-section mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="about-content">
                <div className="page-title">
                  <h2>About the CSF</h2>
                </div>
                <p className="about-des">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End Here */}

      {/* About Section Start Here */}
      <section className="about-section mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <Image src={AnnounceIcon} alt="Icon" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="page-title">
                  <h2>What We Do</h2>
                </div>
                <p className="about-des">
                  We have a proven track record of enabling community-led and industry-ready open
                  source innovation earned over two decades. We host Adoptium, Software Defined
                  Vehicle, Jakarta EE, CometBid IDE, and 410+ open source projects, including
                  runtimes, tools, specifications, and frameworks for enterprise, cloud, edge,
                  automotive, AI, embedded, IoT, systems engineering, open processor designs, and
                  many others. Supported by over 360 members globally, the CometBid Foundation has
                  an established international reach and reputation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End Here */}

      <section className="banner-vendor mt-80">
        <div className="container">
          <div className="row row-no-gutters justify-content-center">
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="banner-vendor-content white-box">Automotive & Mobility</div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="banner-vendor-content yellow-box">IoT & Edge</div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="banner-vendor-content white-box">Cloud Native</div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6">
              <div className="banner-vendor-content yellow-box">Developer Tools & IDEs</div>
            </div>
          </div>
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
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client1} alt="Icon" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client2} alt="Icon" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client3} alt="Icon" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client4} alt="Icon" />
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

      {/* Who We Are Section Start Here */}
      <section className="who-we-are-section mt-80">
        <div className="container">
          <div className="sec-header text-center mb-5">
            <div className="page-title">
              <h2>Who We Are</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card-design-box blue-box">
                <div className="card-design-icon">
                  <MdJoinFull />
                </div>
                <div className="card-design-content">
                  <h3>Join the Community</h3>
                  <p>
                    Join the CometBid Foundation community and become a member of the CometBid open
                    source community.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card-design-box green-box">
                <div className="card-design-icon">
                  <MdJoinFull />
                </div>
                <div className="card-design-content">
                  <h3>Our History</h3>
                  <p>
                    Join the CometBid Foundation community and become a member of the CometBid open
                    source community.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card-design-box yellow-box-box">
                <div className="card-design-icon">
                  <MdJoinFull />
                </div>
                <div className="card-design-content">
                  <h3>Join the Community</h3>
                  <p>
                    Join the CometBid Foundation community and become a member of the CometBid open
                    source community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Subscribe /> */}
    </>
  );
};

export default AboutContent;
