import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Table from "react-bootstrap/Table";
import "./style.css";

import ArrowSvg from "../../../assets/Images/arrow.svg";
import ArrowRightSvg from "../../../assets/Images/black-right.svg";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import CollaborationSvg from "../../../assets/Images/collab.svg";
import RoundGroupSvg from "../../../assets/Images/round-group.svg";
import ExploreSvg from "../../../assets/Images/explore.svg";

import SettingSvg from "../../../assets/Images/settings.svg";
import ManagementSvg from "../../../assets/Images/management.svg";
import BrandingSvg from "../../../assets/Images/branding.svg";
import DevelopmentSvg from "../../../assets/Images/development.svg";
import Client1Svg from "../../../assets/Images/wg-ecd-tools.svg";
import Client2Svg from "../../../assets/Images/wg-adoptium.svg";
import Client3Svg from "../../../assets/Images/wg-jakarta.svg";
import Client4Svg from "../../../assets/Images/wg_iot.svg";
import CheckSvg from "../../../assets/Images/6-Check 1.svg";

// Type assertions for image imports
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const Collaboration: StaticImageData = CollaborationSvg as unknown as StaticImageData;
const RoundGroup: StaticImageData = RoundGroupSvg as unknown as StaticImageData;
const Explore: StaticImageData = ExploreSvg as unknown as StaticImageData;

const Setting: StaticImageData = SettingSvg as unknown as StaticImageData;
const Management: StaticImageData = ManagementSvg as unknown as StaticImageData;
const Branding: StaticImageData = BrandingSvg as unknown as StaticImageData;
const Development: StaticImageData = DevelopmentSvg as unknown as StaticImageData;

const Client1: StaticImageData = Client1Svg as unknown as StaticImageData;
const Client2: StaticImageData = Client2Svg as unknown as StaticImageData;
const Client3: StaticImageData = Client3Svg as unknown as StaticImageData;
const Client4: StaticImageData = Client4Svg as unknown as StaticImageData;
const Check: StaticImageData = CheckSvg as unknown as StaticImageData;

const boxes = [
  {
    id: 1,
    icon: Setting,
    count: "01",
    title: "Vendor Neutral Governance",
    description:
      "The CometBid Foundation enables individuals and organisations to collaborate under a vendor-neutral governance model",
  },
  {
    id: 2,
    icon: Management,
    count: "02",
    title: "Collaboration Management",
    description:
      "The CometBid Foundation enables individuals and organisations to collaborate under a vendor-neutral governance model",
  },
  {
    id: 3,
    icon: Branding,
    count: "03",
    title: "Branding and Compatibility",
    description: "Building scalable and robust technology solutions for diverse industry needs.",
  },
  {
    id: 4,
    icon: Development,
    count: "04",
    title: "Specification Development",
    description: "Fostering an inclusive environment for developers, businesses, and researchers.",
  },
];
const CollabData = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Industry <span>Collaborations</span>
                </h1>
                <p className="hero-description">
                  Work With Your contemporary in the Tech Industry in a Vendor-Neutral independent{" "}
                  <br /> governance structure to drive Innovation, ideas and collective growth
                </p>
                <div className="border-button">
                  <Link href="/collaborations/interest-group">
                    <button className="btn btn-primary">
                      Explore all collaborations <Image src={Arrow} alt="Icon" />
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
              <span>Collaborations</span>
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
              <h2>Collaborate to Drive Innovation</h2>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-3">
              <div className="participate-item">
                <div className="participate-icon">
                  <Image src={Collaboration} alt="Icon" />
                </div>
                <Link href="#clients">
                  <button className="btn btn-header">Join a Collaboration</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="participate-item">
                <div className="participate-icon">
                  <Image src={RoundGroup} alt="Icon" />
                </div>
                <Link href="#start-collaboration">
                  <button className="btn btn-header">Start a Collaboration </button>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="participate-item">
                <div className="participate-icon">
                  <Image src={Explore} alt="Icon" />
                </div>
                <Link href="/collaborations/interest-group">
                  <button className="btn btn-header">Explore Collaborations </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Participate Section end here */}

      {/* Banner Background Image Start Here */}
      <section className="banner mt-80">
        <div className="container">
          <div className="banner-bg-image">
            <div className="banner-content">
              <div className="section-title">
                <h2>
                  Collaborating at <br />
                  The Cometbid Software Foundation
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been <br />{" "}
                the industry&#39;s standardever since the 1500s
              </p>
              <div className="border-button">
                <button className="btn btn-primary">
                  DOWNLOAD THE INDUSTRY COLLABORATION GUIDE <Image src={Arrow} alt="Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Background Image End Here */}

      {/* Collaborating Section Start Here */}
      <section className="collaborating-section mt-80">
        <div className="container">
          <div className="sec-header text-center mb-5">
            <div className="page-title">
              <h2>
                Collaborating at <br />
                The Cometbid Software Foundation
              </h2>
            </div>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam,
              <br /> eaque ipsa quae ab illo inventore veritatis et quasi
            </p>
          </div>
          <div className="row">
            {boxes.map(box => (
              <div className="col-lg-6 mb-4" key={box.id}>
                <div className="border-box-d">
                  <div className="box-inner">
                    <div className="box-icon">
                      <Image src={box.icon} alt="Icon" />
                      <div className="count">{box.count}</div>
                    </div>
                    <div className="box-content  ">
                      <h3 className="Collaborating-text-d">{box.title}</h3>
                      <p className="Collaborating-text-d">{box.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Collaborating Section End Here */}

      {/* Start Collaboration Section Start Here */}
      <section className="start-collaboration mt-80" id="start-collaboration">
        <div className="container">
          <div className="sec-header mb-5">
            <div className="page-title">
              <h2>Start a New Collaboration</h2>
            </div>
            <p className=" collabration-text">
              The CometBid Foundation provides multiple services to support industry Whether you
              intend on contentionsclipse technologies that are important to your product strategy,
              or simply want to explore a specific innovation area with like-minded organisations,
              the CometBid Foundation is the open source home for industry collaboration.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <Table className="table-transprent">
                <thead>
                  <tr>
                    <th></th>
                    <th>Working Groups</th>
                    <th>Interest Groups</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Vendor Neutral Governance</td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Collaboration Management </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ecosystem Development and Marketing </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Specification Development </td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Branding and Compatibility</td>
                    <td>
                      <Image src={Check} alt="Icon" />
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <Link href="/collaborations/about-working-group">
                        <button className="btn-black">More About Working Groups</button>
                      </Link>
                    </td>
                    <td>
                      <Link href="/collaborations/about-interest-group">
                        <button className="btn-border">More About Interest Groups</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="btn-center gap-3">
                <button className="btn-yellow">Contact Us About Creating a Working Group</button>
                <button className="btn-black">Propose an Interest Group</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section Start Here  */}
      <section className="latest-news-section mt-80" id="clients">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2>Featured Collaborations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client1} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client2} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client3} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
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

      {/* Subscribe Section Start Here */}
      {/* <Subscribe /> */}
      {/* Subscribe Section End Here */}
    </>
  );
};

export default CollabData;
