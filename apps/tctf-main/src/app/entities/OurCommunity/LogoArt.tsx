import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import CloudDevToolsSvg from "../../../assets/Images/wg-ecd.svg";
import AdoptiumSvg from "../../../assets/Images/wg-adoptium.svg";
import JakartaSvg from "../../../assets/Images/wg-jakarta.svg";
import IotSvg from "../../../assets/Images/wg_iot.svg";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const CloudDevTools: StaticImageData = CloudDevToolsSvg as unknown as StaticImageData;
const Adoptium: StaticImageData = AdoptiumSvg as unknown as StaticImageData;
const Jakarta: StaticImageData = JakartaSvg as unknown as StaticImageData;
const Iot: StaticImageData = IotSvg as unknown as StaticImageData;

const logoArtworkCards = [
  {
    icon: CloudDevTools,
    title: "Brand Guidelines",
    description: "Includes: Colour | Reversed Colour | Monochromatic",
    downloadLink: "#",
  },
  {
    icon: Adoptium,
    title: "Brand Guidelines",
    description: "Includes: Colour | Reversed Colour | Monochromatic",
    downloadLink: "#",
  },
  {
    icon: Jakarta,
    title: "Brand Guidelines",
    description: "Includes: Colour | Reversed Colour | Monochromatic",
    downloadLink: "#",
  },
  {
    icon: Iot,
    title: "Brand Guidelines",
    description: "Includes: Colour | Reversed Colour | Monochromatic",
    downloadLink: "#",
  },
  {
    icon: CloudDevTools,
    title: "Brand Guidelines",
    description: "Includes: Colour | Reversed Colour | Monochromatic",
    downloadLink: "#",
  },
  {
    icon: Adoptium,
    title: "Brand Guidelines",
    description: "Includes: Colour | Reversed Colour | Monochromatic",
    downloadLink: "#",
  },
  {
    icon: Jakarta,
    title: "Brand Guidelines",
    description: "Includes: Colour | Reversed Colour | Monochromatic",
    downloadLink: "#",
  },
  {
    icon: Iot,
    title: "Brand Guidelines",
    description: "Includes: Colour | Reversed Colour | Monochromatic",
    downloadLink: "#",
  },
];
const LogoArt = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CT Foundation <span>Logos & Artwork</span>
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
              <Link href="/about">Our Community</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Logos & Artwork</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sec-header">
                <div className="page-title">
                  <h2>CometBid Logos and Artwork</h2>
                </div>
                <p>
                  {
                    "We are providing copies of the CometBid logo so our community can use it to show their support of CometBid and link back to our community. These logos are the intellectual property of the CometBid Foundation and cannot be altered without CometBid’s permission. They are provided for use under the CometBid Foundation Trademark Usage Policy."
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-artwork-section mt-80">
        <div className="container">
          <div className="page-title mb-5">
            <h3>Intellectual Property (IP) Management</h3>
          </div>
          <div className="row">
            {logoArtworkCards.map((card, index) => (
              <div className="col-lg-3" key={index}>
                <div className="logo-artwork-card">
                  <div className="logo-artwork-card-icon">
                    <Image src={card.icon} alt="Icon" />
                  </div>
                  <div className="logo-artwork-card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Link href={card.downloadLink}>Download</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="logo-artwork-section mt-80">
        <div className="container">
          <div className="page-title mb-5">
            <h3>Intellectual Property (IP) Management</h3>
          </div>
          <div className="row">
            {logoArtworkCards.map((card, index) => (
              <div className="col-lg-3" key={index}>
                <div className="logo-artwork-card">
                  <div className="logo-artwork-card-icon">
                    <Image src={card.icon} alt="Icon" />
                  </div>
                  <div className="logo-artwork-card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Link href={card.downloadLink}>Download</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoArt;
