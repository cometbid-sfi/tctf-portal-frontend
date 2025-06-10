"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { Form } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import "./style.css";

import ArrowSvg from "../../../assets/Images/arrow.svg";
import ArrowLeftSvg from "../../../assets/Images/arrow-left.svg";
import ArrowRightSvg from "../../../assets/Images/black-right.svg";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import SearchIconSvg from "../../../assets/Images/searchnormal1.svg";
import ProjectSvg from "../../../assets/Images/project.svg";
import PuzzleSvg from "../../../assets/Images/puzzle.svg";
import RunningProjectSvg from "../../../assets/Images/member-list.svg";
import ActivitySvg from "../../../assets/Images/activity.svg";
import PlanSvg from "../../../assets/Images/plan.svg";
import BlockchainSvg from "../../../assets/Images/blockchain.svg";
import CloudNativeSvg from "../../../assets/Images/cloudnative.svg";
import EdgeSvg from "../../../assets/Images/edge.svg";
import FinancialSvg from "../../../assets/Images/financial.svg";
import RoboticsSvg from "../../../assets/Images/robotics.svg";
import AutomotiveSvg from "../../../assets/Images/automotive.svg";
import AgroTechSvg from "../../../assets/Images/agrotech.svg";
import GoogleLogoSvg from "../../../assets/Images/google.svg";
import MicrosoftLogoSvg from "../../../assets/Images/microsoft.svg";
import MetaLogoSvg from "../../../assets/Images/meta.svg";
import ShopifyLogoSvg from "../../../assets/Images/shopify.svg";

// Type assertions for SVG imports
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const ArrowLeft: StaticImageData = ArrowLeftSvg as unknown as StaticImageData;
const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const SearchIcon: StaticImageData = SearchIconSvg as unknown as StaticImageData;
const Project: StaticImageData = ProjectSvg as unknown as StaticImageData;
const Puzzle: StaticImageData = PuzzleSvg as unknown as StaticImageData;
const RunningProject: StaticImageData = RunningProjectSvg as unknown as StaticImageData;
const Activity: StaticImageData = ActivitySvg as unknown as StaticImageData;
const Plan: StaticImageData = PlanSvg as unknown as StaticImageData;
const Blockchain: StaticImageData = BlockchainSvg as unknown as StaticImageData;
const CloudNative: StaticImageData = CloudNativeSvg as unknown as StaticImageData;
const Edge: StaticImageData = EdgeSvg as unknown as StaticImageData;
const Financial: StaticImageData = FinancialSvg as unknown as StaticImageData;
const Robotics: StaticImageData = RoboticsSvg as unknown as StaticImageData;
const Automotive: StaticImageData = AutomotiveSvg as unknown as StaticImageData;
const AgroTech: StaticImageData = AgroTechSvg as unknown as StaticImageData;
const GoogleLogo: StaticImageData = GoogleLogoSvg as unknown as StaticImageData;
const MicrosoftLogo: StaticImageData = MicrosoftLogoSvg as unknown as StaticImageData;
const MetaLogo: StaticImageData = MetaLogoSvg as unknown as StaticImageData;
const ShopifyLogo: StaticImageData = ShopifyLogoSvg as unknown as StaticImageData;

const OurServies = [
  {
    id: 1,
    image: Blockchain,
    title: "BLOCKCHAIN",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    image: CloudNative,
    title: "Cloud Native",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    image: Edge,
    title: "Edge & IoT",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 4,
    image: Financial,
    title: "Financial",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 5,
    image: Robotics,
    title: "Robotics",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 6,
    image: Automotive,
    title: "Automotive & Mobility",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 7,
    image: AgroTech,
    title: "Agro-Tech",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const ProjectResources = [
  {
    id: 1,
    title: "Our Development Process",
    description:
      "This document describes the development process for the CometBid Foundation. In particular, it describes how the Membership at Large, the Board of Directors, other constituents of the Ecosystem, and the CometBid Management Organisation (EMO) lead, influence, and collaborate with CometBid Projects.",
  },
  {
    id: 2,
    title: "Project Handbook",
    description:
      "This document describes the development process for the CometBid Foundation. In particular, it describes how the Membership at Large, the Board of Directors, other constituents of the Ecosystem, and the CometBid Management Organisation (EMO) lead, influence, and collaborate with CometBid Projects.",
  },
];
const ProjectContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".next-arrow",
              prevEl: ".prev-arrow",
            }}
            onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
            loop={true}
            className="hero-slider"
          >
            {Array.from({ length: 3 }, (_, index) => (
              <SwiperSlide key={index}>
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-8">
                    <div className="hero-content text-center">
                      <h1 className="hero-title">
                        Discover and <span>explore</span>
                      </h1>
                      <p className="hero-description">
                        Supporting statement for your product&apos;s tagline. This text should
                        communicate your unique selling point to the reader.
                      </p>
                      <div className="border-button">
                        <Link href="/project/project-list">
                          <button className="btn btn-primary">
                            Explore all projects <Image src={Arrow} alt="Icon" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="slider-nevigation">
          <button className="prev-arrow">
            <Image src={ArrowLeft} alt="Previous" />
          </button>
          <button className="next-arrow">
            <Image src={ArrowRight} alt="Next" />
          </button>
        </div>
        <div className="slider-dots">
          {Array.from({ length: 3 }, (_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </section>
      {/* Hero Section End Here */}

      {/* Page-nevigation Section Start Here */}
      <section className="page-navigation-section mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
            <div className="page-navigation">
              <Link href="/">Home</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Projects</span>
            </div>
            <div className="search-bar">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search Project..."
                  className="me-2 search-input"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <Image src={SearchIcon} alt="Icon" />
                  Search
                </button>
              </Form>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Participate Section start here */}
      <section className="participate-section mt-80">
        <div className="container">
          <div className="sec-header text-center mb-5">
            <div className="page-title">
              <h2>Participate and Contribute</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="participate-item">
                <div className="participate-icon">
                  <Image src={Project} alt="Icon" />
                </div>
                <Link href="/project/contribute">
                  <button className="btn btn-header">
                    How to Contribute <Image src={ArrowRight} alt="Icon" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="participate-item">
                <div className="participate-icon">
                  <Image src={Puzzle} alt="Icon" />
                </div>
                <Link href="/project/start-project">
                  <button className="btn btn-header">
                    Start a new project <Image src={ArrowRight} alt="Icon" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="participate-item">
                <div className="participate-icon">
                  <Image src={RunningProject} alt="Icon" />
                </div>
                <Link href="/project/running-project">
                  <button className="btn btn-header">
                    Running a project <Image src={ArrowRight} alt="Icon" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="participate-item">
                <div className="participate-icon">
                  <Image src={Activity} alt="Icon" />
                </div>
                <Link href="/project/project-activity">
                  <button className="btn btn-header">
                    Project Activity <Image src={ArrowRight} alt="Icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Participate Section end here */}

      {/* Our Services Section Start Here */}
      <section className="our-services-section mt-80">
        <div className="container">
          <div className="why-choose-us-subtitle mb-2">
            Our Services <Image src={Plan} alt="Icon" />
          </div>
          <div className="page-title mb-5">
            <h2>Our Technologies</h2>
          </div>

          <div className="row justify-content-center">
            {OurServies &&
              OurServies.map((item, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="our-services-item">
                    <div className="our-services-icon">
                      <Image src={item.image} alt="Icon" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      {/* Our Services Section End Here */}

      {/* Project Resources Section Start Here */}
      <section className="project-resources-section mt-80">
        <div className="container">
          <div className="sec-header text-center mb-5">
            <div className="page-title">
              <h2>Project Resources</h2>
            </div>
          </div>
          <div className="row">
            {ProjectResources &&
              ProjectResources.map((item, index) => (
                <div className="col-md-6 col-lg-6" key={index}>
                  <div className="project-resources-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="btn">
                      Learn More <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              ))}
          </div>
          <div className="btn-center">
            <Link href="/resources">
              <button className="btn btn-header">
                More Resources <Image src={ArrowRight} alt="Icon" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Project Resources Section End Here */}

      <section className="subscribe-section mt-80">
        <div className="container">
          <div className="bg-image">
            <div className="row justify-content-center">
              <div className="page text-center col-lg-10">
                <div className="page-title">
                  <h2>Project Specifications</h2>
                </div>
                <div className="page-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when
                  an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </div>
                <div className="border-button mt-32">
                  <Link href="/specifications">
                    <button className="btn btn-primary">
                      Learn More
                      <Image src={Arrow} alt="Icon" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="col-lg-3">
              <div className="brand-logo">
                <Image src={GoogleLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="brand-logo">
                <Image src={MicrosoftLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="brand-logo">
                <Image src={MetaLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-lg-3">
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

      {/* Subscribe Section Start Here */}
      {/* <Subscribe /> */}
      {/* Subscribe Section End Here */}
    </>
  );
};

export default ProjectContent;
