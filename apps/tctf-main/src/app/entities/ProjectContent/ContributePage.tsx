import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import ParticipateSvg from "../../../assets/Images/participate.svg";
import StrategicSvg from "../../../assets/Images/strategic.svg";
import InnovationSvg from "../../../assets/Images/innovation.svg";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Client1Svg from "../../../assets/Images/wg-ecd-tools.svg";
import Client2Svg from "../../../assets/Images/wg-adoptium.svg";
import Client3Svg from "../../../assets/Images/wg-jakarta.svg";
import Client4Svg from "../../../assets/Images/wg_iot.svg";
import ArrowRightSvg from "../../../assets/Images/black-right.svg";

// Type assertions for image imports
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const Participate: StaticImageData = ParticipateSvg as unknown as StaticImageData;

const Client1: StaticImageData = Client1Svg as unknown as StaticImageData;
const Client2: StaticImageData = Client2Svg as unknown as StaticImageData;
const Client3: StaticImageData = Client3Svg as unknown as StaticImageData;
const Client4: StaticImageData = Client4Svg as unknown as StaticImageData;
const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;

const Innovation: StaticImageData = InnovationSvg as unknown as StaticImageData;
const Strategic: StaticImageData = StrategicSvg as unknown as StaticImageData;

const community = [
  {
    icon: Participate,
    title: "New Project Proposals",
    description: "and provide contributions to CSF projects and Industry Collaborations.",
  },
  {
    icon: Strategic,
    title: "Upcoming Reviews",
    description:
      "Code is probably one of your important asset. Lets help support and advance these important technologies your business relies upon.",
  },
  {
    icon: Innovation,
    title: "Recent Activity",
    description:
      "while focusing resources on rapidly building differentiated features that customers value most.   ",
  },
  {
    icon: Participate,
    title: "New Project Proposals",
    description: "and provide contributions to CSF projects and Industry Collaborations.",
  },
  {
    icon: Strategic,
    title: "Upcoming Reviews",
    description:
      "Code is probably one of your important asset. Lets help support and advance these important technologies your business relies upon.",
  },
  {
    icon: Innovation,
    title: "Recent Activity",
    description:
      "while focusing resources on rapidly building differentiated features that customers value most.   ",
  },
];
const ContributeContentPage = () => {
  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              <span>Contribute</span>
            </h1>
            <p className="hero-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              <br /> Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              1500s,
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
              <Link href="/project">Projects</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Contribute</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}
      <div className="project-resources-section mt-80">
        <div className="container">
          <div className="tab-content-inner">
            <div className="sec-header text-center mb-5">
              <div className="page-title">
                {/* <h2>Why become a Member of CSF Community?</h2> */}
              </div>
              {/* <p>Take an active role in supporting sustainable commercializable open source technologies that benefit all.</p> */}
            </div>

            <div className="sec-body">
              <div className="row">
                {community.map((item, index) => (
                  <div className="col-md-6 col-lg-4 mb-3" key={index}>
                    <div className="border-box-common">
                      <div className="box-icon-csf">
                        <Image src={item.icon} alt="Icon" />
                      </div>
                      <div className="box-content-text">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
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
            <button className="btn btn-header">
              View All <Image src={ArrowRight} alt="Icon" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContributeContentPage;
