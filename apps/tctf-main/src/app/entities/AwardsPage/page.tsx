import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Sidebar from "../../../component/Sidebar/Sidebar";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";

// Type assertions for image imports
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const AwardsPage = () => {
  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              CometBid <span>Awards</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Page-navigation Section Start Here */}
      <section className="page-navigation-section mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-navigation">
              <Link href="/">Home</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Awards</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-navigation Section End Here */}

      {/* Participate Section start here */}
      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className=" mb-5">
                <div className="page-title">
                  <h2 className="aword-heding">The Cometbid Technology Foundation Awards</h2>
                </div>
                <p className="aword-text">
                  {
                    "Congratulations to all past winners of The Cometbid Technology Foundation Awards"
                  }
                </p>
              </div>
              <div className="border-bottom-section">
                <div className="page-title">
                  <h3 className="fw-bold aword-titel">Past Winners by Category</h3>
                </div>
                <div className="page-description mt-3">
                  <ul className=" ps-3">
                    <li className="aword-text">
                      <Link href="/awards/lifetime" className="text-decoration-none text-primary">
                        Lifetime Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/project" className="text-decoration-none text-primary">
                        Project Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/technology" className="text-decoration-none text-primary">
                        Technology Award Winners
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="border-bottom-section">
                <div className="page-title">
                  <h3 className="fw-bold aword-titel">Past Winners by Year</h3>
                </div>
                <div className="page-description mt-3">
                  <ul className="ps-3 ">
                    <li className="aword-text">
                      <Link href="/awards/2022" className="text-primary text-decoration-none">
                        2022 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2021" className="text-primary text-decoration-none">
                        2021 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2016" className="text-primary text-decoration-none">
                        2016 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2015" className="text-primary text-decoration-none">
                        2015 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2014" className="text-primary text-decoration-none">
                        2014 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2013" className="text-primary text-decoration-none">
                        2013 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2012" className="text-primary text-decoration-none">
                        2012 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2011" className="text-primary text-decoration-none">
                        2011 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2010" className="text-primary text-decoration-none">
                        2010 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2009" className="text-primary text-decoration-none">
                        2009 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2008" className="text-primary text-decoration-none">
                        2008 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2007" className="text-primary text-decoration-none">
                        2007 Award Winners
                      </Link>
                    </li>
                    <li className="aword-text">
                      <Link href="/awards/2006" className="text-primary text-decoration-none">
                        2006 Award Winners
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      {/* Participate Section end here */}
    </>
  );
};

export default AwardsPage;
