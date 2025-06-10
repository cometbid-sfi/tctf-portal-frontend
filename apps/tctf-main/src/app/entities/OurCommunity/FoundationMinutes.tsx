import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
// import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "../../../component/Sidebar/Sidebar";
import "./style.css";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const FoundationMinutesPage = () => {
  return (
    <>
      <section className="hero-section-common position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              Meeting <span> Minutes</span>
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
              <Link href="/legal-trademark">Legal Framework</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Meeting Minutes</span>
            </div>
          </div>
        </div>
      </section>
      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              {/* Section 1: Meeting Minutes Overview */}
              <div className="border-bottom-section">
                <div className="page-title">
                  <h2>Meeting Minutes</h2>
                </div>
                <div className="page-description mt-3">
                  <ul>
                    <li className="point-text">
                      {" "}
                      <Link href="" className="text-primary">
                        {" "}
                        Board of Directors Meetings
                      </Link>
                    </li>
                    <li className="point-text">
                      {" "}
                      <Link href="" className="text-primary">
                        General Assembly Meetings
                      </Link>
                    </li>
                    <li className="point-text">
                      {" "}
                      <Link href="" className="text-primary">
                        Members Meetings
                      </Link>
                    </li>
                    <li className="point-text">
                      {" "}
                      <Link href="" className="text-primary">
                        Council Meetings
                      </Link>
                    </li>
                    <li className="point-text">
                      {" "}
                      <Link href="" className="text-primary">
                        Working Groups
                      </Link>
                    </li>
                    <li className="point-text">
                      {" "}
                      <Link href="" className="text-primary">
                        Meeting minutes archive
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 2: Board of Directors Meetings */}
              <div className="border-bottom-section mt-5">
                <div className="page-title">
                  <h2>Board of Directors Meetings</h2>
                </div>
                <div className="page-description mt-3">
                  <ul className="Minutes-text-description">
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        April 9, 2025 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        February 19, 2025 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        January 22, 2025 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        December 18, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        November 20, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        October 21, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        September 18, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        July 17, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        June 25-26, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        May 15, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        April 10, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        February 21, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        January 17, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        December 20, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        October 16, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        September 20, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        July 19, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        June 27-28, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        May 17, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        April 18, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        February 15, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        January 18, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        December 14, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        October 24, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        September 21, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        July 20, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        June 28-29, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        May 25, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        April 20, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        March 23-24, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        February 16, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        December 15, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        November 17, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        October 20-21, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        September 15, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        July 21, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        June 15-17, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        May 19, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        April 21, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        March 24-25, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        February 17, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        January 20, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Abridged Minutes -{" "}
                      <Link href="" className="text-primary">
                        January 13, 2021 (pdf)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 3: General Assembly Meetings */}
              <div className="border-bottom-section mt-5">
                <div className="page-title">
                  <h2>Cometbid Foundation General Assembly Meetings</h2>
                </div>
                <div className="page-description mt-3">
                  <ul className="Minutes-text-description">
                    <li className="point-text">
                      Minutes Meeting of the Extraordinary Meeting of the General Assembly -{" "}
                      <Link href="" className="text-primary">
                        July 30, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Minutes Meeting of the Annual General Assembly -{" "}
                      <Link href="" className="text-primary">
                        April 8, 2024 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Minutes Meeting of the Extraordinary Meeting of the General Assembly -{" "}
                      <Link href="" className="text-primary">
                        July 26, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Minutes Meeting of the Annual General Assembly -{" "}
                      <Link href="" className="text-primary">
                        April 4, 2023 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Minutes Meeting of the Annual General Assembly -{" "}
                      <Link href="" className="text-primary">
                        July 20, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Minutes (2nd) Extraordinary Meeting of the General Assembly -{" "}
                      <Link href="" className="text-primary">
                        February 16, 2022 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Minutes Extraordinary Meeting of the General Assembly -{" "}
                      <Link href="" className="text-primary">
                        December 15, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Minutes Meeting of the Annual General Assembly -{" "}
                      <Link href="" className="text-primary">
                        September 8, 2021 (pdf)
                      </Link>
                    </li>
                    <li className="point-text">
                      Minutes Extraordinary Meeting of the General Assembly -{" "}
                      <Link href="" className="text-primary">
                        January 13, 2021 (pdf)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Council and Working Groups */}
              <div className="border-bottom-section mt-5">
                <div className="page-title">
                  <h2>Council Meetings</h2>
                </div>
                <p className=" mt-3 Minutes-text-description">
                  Council Meeting minutes are categorized on the council page.
                </p>
                <ul className="mb-4 ps-3">
                  <li>
                    <Link href="" className="text-primary">
                      Architecture Council/Meetings
                    </Link>
                  </li>
                  <li>
                    <Link href="" className="text-primary">
                      Planning Council Meetings
                    </Link>
                  </li>
                </ul>
                <div className="page-title">
                  <h2>Working Groups</h2>
                </div>
                <p className="Minutes-text-description mt-3">
                  Each Cometbid Foundation Working Group’s Steering Committee posts its meeting
                  minutes on its respective working group mailing list, each of which is archived.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-3 mt-2">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoundationMinutesPage;
