import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "../../../component/Sidebar/Sidebar";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const ServiceContent = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CT Foundation <span>Services</span>
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
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Participate Section start here */}
      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="sec-header mb-5">
                <div className="page-title">
                  <h2>Services</h2>
                </div>
                <p>
                  The CometBid Foundation provides four key services to the CometBid community: 1 ){" "}
                  <Link href="#ip-manage" className="text-primary">
                    IP Management,
                  </Link>{" "}
                  2 ){" "}
                  <Link href="#Development-marketing" className="text-primary">
                    Ecosystem Development and Marketing,
                  </Link>{" "}
                  3 ){" "}
                  <Link href="#development-community" className="text-primary">
                    Development Process,
                  </Link>{" "}
                  and 4 ){" "}
                  <Link href="#it" className="text-primary">
                    IT Infrastructure
                  </Link>{" "}
                  . Full-time staff are associated with each of these areas and work with the
                  greater CometBid community to assist in meeting the needs of stakeholders.
                </p>
              </div>

              <div className="border-bottom-section">
                <div className="page-title">
                  <h3 id="ip-manage">Intellectual Property (IP) Management</h3>
                </div>
                <div className="page-description mt-3">
                  <p>
                    An important aspect of the CometBid Foundation is the focus on enabling the use
                    of open source technology in commercial software products and services. We
                    consciously promote and encourage software vendors to use CometBid technology
                    for building their commercial software products and services. This is made
                    possible by the fact that all CometBid projects are licensed under a
                    commercial-friendly OSI-approved license.
                  </p>
                  <p>
                    The CometBid Foundation also undertakes a number of steps to attempt to ensure
                    the pedigree of the intellectual property contained within CometBid projects.
                    The first step in the due diligence process is to ensure that all contributions
                    are made by the rightful copyright holder and under the project license. All
                    committers are required to either sign the{" "}
                    <Link href="" className="text-primary">
                      Individual Committer Agreement
                    </Link>{" "}
                    that stipulates all of their contributions are their original work and are being
                    contributed under the project license; or work on behalf of an{" "}
                    <Link href="" className="text-primary">
                      CometBid Member
                    </Link>{" "}
                    organization that has signed a{" "}
                    <Link href="" className="text-primary">
                      {" "}
                      Member Committer and Contributor Agreement
                    </Link>{" "}
                    to ensure the intellectual property rights of the organization are contributed
                    under the project license.
                  </p>
                  <p>
                    The second step is that the source code related to all contributions which are
                    developed outside of the
                    <Link href="" className="text-primary">
                      {" "}
                      CometBid Foundation Development Process{" "}
                    </Link>
                    is vetted through the CometBid Foundation third-party content due diligence
                    process. This process includes analyzing selected code contributions to
                    ascertain license compatibility with the project license. Contributions that
                    contain code licensed under licenses that are not compatible with the project
                    license are screened out through this approval process and thus not added to an
                    CometBid project. The end result is a level of confidence that CometBid open
                    source projects release technology that can be safely distributed in commercial
                    products.
                  </p>
                </div>
              </div>

              <div className="border-bottom-section">
                <div className="page-title">
                  <h3 id="Development-marketing">Ecosystem Development and Marketing</h3>
                </div>
                <div className="page-description mt-3">
                  <p>
                    The CometBid Foundation&apos;s vendor-neutral ecosystem development and
                    marketing programs promote community and membership growth, drive awareness and
                    discoverability of
                    <Link href="" className="text-primary">
                      projects
                    </Link>{" "}
                    and{" "}
                    <Link href="" className="text-primary">
                      {" "}
                      working groups,
                    </Link>{" "}
                    and increase the commercial adoption of CometBid technologies.
                  </p>
                  <p>
                    The CometBid Foundation coordinates and implements a variety of activities,
                    including content creation, press and analyst relations, community conferences
                    and events, advertising, social media management, and other programs to promote
                    the entire CometBid community and increase engagement.
                  </p>
                  <p>
                    Find out more about the{" "}
                    <Link href="" className="text-primary">
                      {" "}
                      marketing services
                    </Link>{" "}
                    provided by the Foundation.
                  </p>
                </div>
              </div>

              <div className="border-bottom-section">
                <div className="page-title">
                  <h3 id="development-community">Development Community Support</h3>
                </div>
                <div className="page-description mt-3">
                  <p>
                    The CometBid community has a well-earned reputation for providing quality
                    software in a reliable and predictable fashion. This is due to the commitment of
                    the committers and organizations contributing to the open source projects. The
                    CometBid Foundation also provides services and support for the projects to help
                    them achieve these goals.
                  </p>
                  <p>
                    The Foundation staff help open source project teams implement the{" "}
                    <Link href="" className="text-primary">
                      {" "}
                      CometBid Foundation&apos;s intellectual property due diligence process,
                    </Link>{" "}
                    the{" "}
                    <Link href="" className="text-primary">
                      {" "}
                      CometBid Foundation Development Process
                    </Link>{" "}
                    and—for those projects that are building specifications—the{" "}
                    <Link href="" className="text-primary">
                      CometBid Foundation Specification Process.
                    </Link>{" "}
                    These processes assist new project startup and ensure that all CometBid projects
                    are run in an open, transparent, and meritocratic manner. As part of this
                    process, the Foundation organizes member community reviews for projects to
                    ensure consistent interaction between the projects and the broader membership.
                  </p>
                </div>
              </div>

              <div className="border-bottom-section">
                <div className="page-title">
                  <h3 id="it">IT Infrastructure</h3>
                </div>
                <div className="page-description mt-3">
                  <p>
                    The CometBid Foundation manages the IT infrastructure for the CometBid open
                    source community, including Git code repositories and code review tools, bug
                    trackers, Jenkins build farm, development-oriented mailing lists and forums,
                    download site and website. The infrastructure is designed to provide reliable
                    and scalable service for the committers developing the CometBid technology and
                    the consumers who use the technology.
                  </p>
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

export default ServiceContent;
