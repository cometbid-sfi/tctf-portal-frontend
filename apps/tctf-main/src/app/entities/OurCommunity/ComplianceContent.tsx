import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import ArrowSvg from "../../../assets/Images/arrow.svg";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;

const boardCards = [
  {
    title: "Copyright Agent",
    description:
      "We respect the intellectual property rights of others, and require that the people who use the Website do the same. Review our Copyright Agent page to learn more or to contact us if you have a concern.",
  },
  {
    title: "Report Content Issues",
    description:
      "If you find any content that violates our Privacy Policy or our Terms of Use, please report it to transparency@CT.org. Learn more about our content management and moderation practices across our various online platforms.",
  },
  {
    title: "Privacy Inquiries",
    description:
      "For questions regarding our compliance to privacy requirements including, for example, the EU’s General Data Protection Regulation (GDPR), or to make a request to be forgotten, please reach out to us at privacy@CT.org.",
  },
];

const ComplianceContent = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CT Foundation - <span>Compliance</span>
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
              <span>Compliance</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Board Governance Section Start Here */}
      <section className="board-governance-section mt-5">
        <div className="container">
          <div className="row">
            {boardCards.map((card, index) => (
              <div className="col-lg-4" key={index}>
                <div className="board-governance-card">
                  <div className="inline-icon-title">
                    <h3>{card.title}</h3>
                    <FiArrowUpRight />
                  </div>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Board Governance Section End Here */}

      <section className="subscribe-section mt-80">
        <div className="container">
          <div className="bg-image">
            <div className="row justify-content-center">
              <div className="page text-center col-lg-9 col-md-12">
                <div className="page-title">
                  <h2>Who are we?</h2>
                </div>
                <div className="page-description">
                  We&apos;re bulding cutting-edge IT solutions tailored to your needs. Our expert
                  team ensures seamless integration, security, and 24/7 support. Experience
                  innovation and unmatched customer service.
                </div>
                <div className="border-button mt-32">
                  <Link href="/about">
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
    </>
  );
};

export default ComplianceContent;
