import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const PressReleases = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              CometBid Press <span>Releases</span>
            </h1>
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
              <span>Press Releases</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}
    </>
  );
};

export default PressReleases;
