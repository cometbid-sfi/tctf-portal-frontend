import Image from "next/image";
import Link from "next/link";
import React from "react";

import AltArrow from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "@/component/Sidebar/Sidebar";
import logo1 from "../../../assets/Images/Picture-logo-1.jpg";
import logo2 from "../../../assets/Images/Picture-logo-2.jpg";
import logo3 from "../../../assets/Images/Picture-logo-3.jpg";
import "./style.css";

const cardDetaildatacard = [
  {
    id: 1,
    img: logo1,
    title: "Brand Guidelines",
    text: "Includes: Colour | ReversedColour | Monochromatic",
  },
  {
    id: 2,
    img: logo2,
    title: "Brand Guidelines",
    text: "Includes: Colour | ReversedColour | Monochromatic",
  },
  {
    id: 3,
    img: logo3,
    title: "Brand Guidelines",
    text: "Includes: Colour | ReversedColour | Monochromatic",
  },
];
const LogoSpecificationsContantPage = () => {
  return (
    <>
      <section className="hero-section-common position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              CTF - Logo <span> Specifications</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem <br /> Ipsum has been the industry&apos;s standard
              dummy text ever since the 1500s,
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
              <Link href="">Learning</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Incubator Programs</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}
      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="sec-header mb-5">
                <div className="page-title">
                  <h2>CTF Logos and Artwork</h2>
                </div>
                <p className="mt-5">
                  {
                    "We are providing copies of the CometBid logo so our community can use it to show their support of CometBid and link back to our community. These logos are the intellectual property of the CometBid Foundation and cannot be altered without CometBid’s permission. They are provided for use under the CometBid Foundation Trademark Usage Policy."
                  }
                </p>
                <p className="mt-5">
                  {
                    "CometBid Foundation LogosCometBid Foundation Member LogosCometBid IDE LogosGeneric CometBid Project LogosIndustry Collaboration Logos"
                  }
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      <section className="heding-text-section ">
        <div className="container">
          <div className="page-title ">
            <h2>CTF Foundation Logos</h2>
          </div>
        </div>
      </section>
      <section className="csf-new-card-section py-5">
        <div className="container">
          <div className="row">
            {cardDetaildatacard.map((card) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex "
                key={card.id}
              >
                <div className="csf-new-card p-4 w-100 d-flex flex-column  ">
                  {/* Image */}
                  <div className="csf-new-card-image mb-3">
                    <Image
                      src={card.img}
                      alt="Card Image"
                      className="img-fluid"
                    />
                  </div>

                  {/* Content */}
                  <div className="csf-new-card-body">
                    {/* <span className="csf-new-card-subtitle text-primary">{card.hedimg}</span> */}
                    <h3 className="csf-new-card-title mt-2">{card.title}</h3>
                    <p className="csf-new-card-description mt-2">{card.text}</p>
                  </div>

                  {/* Button */}
                  <div className="mt-3">
                    <button className="csf-new-card-btn">Download</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="heding-text-section ">
        <div className="container">
          <div className="page-title ">
            <h2>CometBid Foundation Member Logos</h2>
          </div>
        </div>
      </section>
      <section className="csf-new-card-section py-5">
        <div className="container">
          <div className="row">
            {cardDetaildatacard.map((card) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex "
                key={card.id}
              >
                <div className="csf-new-card p-4 w-100 d-flex flex-column  ">
                  {/* Image */}
                  <div className="csf-new-card-image mb-3">
                    <Image
                      src={card.img}
                      alt="Card Image"
                      className="img-fluid"
                    />
                  </div>

                  {/* Content */}
                  <div className="csf-new-card-body">
                    {/* <span className="csf-new-card-subtitle text-primary">{card.hedimg}</span> */}
                    <h3 className="csf-new-card-title mt-2">{card.title}</h3>
                    <p className="csf-new-card-description mt-2">{card.text}</p>
                  </div>

                  {/* Button */}
                  <div className="mt-3">
                    <button className="csf-new-card-btn">Download</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="heding-text-section ">
        <div className="container">
          <div className="page-title ">
            <h2>CometBid IDE Logos</h2>
          </div>
        </div>
      </section>
      <section className="csf-new-card-section py-5">
        <div className="container">
          <div className="row">
            {cardDetaildatacard.map((card) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex "
                key={card.id}
              >
                <div className="csf-new-card p-4 w-100 d-flex flex-column  ">
                  {/* Image */}
                  <div className="csf-new-card-image mb-3">
                    <Image
                      src={card.img}
                      alt="Card Image"
                      className="img-fluid"
                    />
                  </div>

                  {/* Content */}
                  <div className="csf-new-card-body">
                    {/* <span className="csf-new-card-subtitle text-primary">{card.hedimg}</span> */}
                    <h3 className="csf-new-card-title mt-2">{card.title}</h3>
                    <p className="csf-new-card-description mt-2">{card.text}</p>
                  </div>

                  {/* Button */}
                  <div className="mt-3">
                    <button className="csf-new-card-btn">Download</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="heding-text-section ">
        <div className="container">
          <div className="page-title ">
            <h2>Industry Collaboration Logos</h2>
          </div>
        </div>
      </section>
      <section className="csf-new-card-section py-5">
        <div className="container">
          <div className="row">
            {cardDetaildatacard.map((card) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex "
                key={card.id}
              >
                <div className="csf-new-card p-4 w-100 d-flex flex-column  ">
                  {/* Image */}
                  <div className="csf-new-card-image mb-3">
                    <Image
                      src={card.img}
                      alt="Card Image"
                      className="img-fluid"
                    />
                  </div>

                  {/* Content */}
                  <div className="csf-new-card-body">
                    {/* <span className="csf-new-card-subtitle text-primary">{card.hedimg}</span> */}
                    <h3 className="csf-new-card-title mt-2">{card.title}</h3>
                    <p className="csf-new-card-description mt-2">{card.text}</p>
                  </div>

                  {/* Button */}
                  <div className="mt-3">
                    <button className="csf-new-card-btn">Download</button>
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

export default LogoSpecificationsContantPage;
