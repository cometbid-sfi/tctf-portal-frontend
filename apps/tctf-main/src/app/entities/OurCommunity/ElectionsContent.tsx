import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "../../../component/Sidebar/Sidebar";
import "./style.css";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const ElectionsContent = () => {
  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              CT Foundation <span>Elections</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem{" "}
              <br /> Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
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
              <Link href="/about">Our Community</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Elections</span>
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
                  <h2>TCT Foundation Elections</h2>
                </div>
                <p>
                  The TCT Foundation holds elections for board members representing two very
                  important groups within the TCT membership: the Committer Members and the
                  Contributing Members. The terms of office for these elected board members is one
                  year, commencing April
                </p>

                <div className="mt-5">
                  <h2 className="sevice-heding">
                    Duties and Responsibilities of an TCT Foundation Director
                  </h2>
                  <ul>
                    <li className="sevice-text">
                      Directors have a fiduciary responsibility to the TCT Foundation. In brief,
                      this means that they must base their decisions on the needs of the TCT
                      Foundation before those of either themselves or their employer.
                    </li>
                    <li className="sevice-text">
                      In terms of time requirements, the Board meets once a month for a one-hour
                      conference call. It also meets face-to-face three times per year, typically in
                      April, June, and October.
                    </li>
                    <li className="sevice-text">
                      Expenses incurred by Directors who are employed by a Member Company are to be
                      covered by the Member company. Directors who are self-employed or employed by
                      a non-Member may have their expenses covered by the TCT Foundation.
                    </li>
                  </ul>
                </div>
                <div className="mt-5">
                  <h2 className="sevice-heding">2025 Board Elections</h2>
                  <ul>
                    <li className="sevice-text">
                      We are pleased to announce the results of the 2025 TCT Foundation Contributing
                      Member and Committer Member elections for representatives to our Board.
                    </li>
                    <li className="sevice-text">
                      Please see the announcement <Link href="/announcement">here</Link>.
                    </li>
                    <li className="sevice-text">
                      Expenses incurred by Directors who are employed by a Member Company are to be
                      covered by the Member company. Directors who are self-employed or employed by
                      a non-Member may have their expenses covered by the TCT Foundation.
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
    </>
  );
};

export default ElectionsContent;
