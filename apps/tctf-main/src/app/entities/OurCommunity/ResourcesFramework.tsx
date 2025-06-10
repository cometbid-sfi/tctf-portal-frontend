import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "../../../component/Sidebar/Sidebar";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const services = [
  {
    id: 1,
    title: "Committer Agreements",
    description: [
      "For CometBid projects (and the open source world in general), committers are the ones who hold the keys. Committers decide what code goes into the code base, they decide how a project builds, and they ultimately decide what gets delivered to the adopter community. Committer status is assigned following a demonstration of merit (generally a record of high-quality contribution to a project) and a successful committer election.",
      "The specific agreements required depends on the nature of the project. For committers on an open source software project (i.e., most CometBid Foundation projects), the traditional agreements are required. For committers on an open source specification project, additional working group agreements are required.",
      "Committer status is assigned on a project-by-project basis. That is, individuals have committer rights only on those projects for which they hold committer status. For all other projects, they are contributors.",
      "Our committer provisioning process is automated: new committers will—following their successful election—be contacted by email to engage in our agreement workflow (also referred to as our paperwork process), which guides them through signing those agreements that they need. The agreements are provided below for convenience.",
    ],
  },
  {
    id: 2,
    title: "Privacy and Trademarks",
    description: [
      "The CometBid Foundation's vendor-neutral ecosystem development and marketing programs promote community and membership growth, drive awareness and discoverability of projects and working groups, and increase the commercial adoption of CometBid technologies.",
      "The CometBid Foundation coordinates and implements a variety of activities, including content creation, press and analyst relations, community conferences and events, advertising, social media management, and other programs to promote the entire CometBid community and increase engagement.",
      "Find out more about the marketing services provided by the Foundation.",
    ],
  },
  {
    id: 3,
    title: "Committer Resources",
    description: [
      "The CometBid community has a well-earned reputation for providing quality software in a reliable and predictable fashion. This is due to the commitment of the committers and organizations contributing to the open source projects. The CometBid Foundation also provides services and support for the projects to help them achieve these goals.",
      "The Foundation staff help open source project teams implement the CometBid Foundation's intellectual property due diligence process, the CometBid Foundation Development Process and—for those projects that are building specifications—the CometBid Foundation Specification Process. These processes assist new project startup and ensure that all CometBid projects are run in an open, transparent, and meritocratic manner. As part of this process, the Foundation organizes member community reviews for projects to ensure consistent interaction between the projects and the broader membership.",
    ],
  },
];

const ResourcrsFramework = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-10">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CT Foundation Legal Resources & <span>Framework</span>
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
              <span>Legal Resources</span>
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
                  <h2>CometBid Foundation Legal Resources</h2>
                </div>
                <p>
                  {
                    "The CometBid Foundation provides four key services to the CometBid community: 1) IP Management, 2) Ecosystem Development and Marketing, 3) Development Process, and 4) IT Infrastructure. Full-time staff are associated with each of these areas and work with the greater CometBid community to assist in meeting the needs of stakeholders."
                  }
                </p>
                <ul className="url-list">
                  <li>
                    <Link href="/legal-resources">Getting Started</Link>
                  </li>
                  <li>
                    <Link href="/legal-resources">Agreement and Licenses</Link>
                  </li>
                  <li>
                    <Link href="/legal-resources">Privacy and Trademarks</Link>
                  </li>
                  <li>
                    <Link href="/legal-resources">Committer Agreements</Link>
                  </li>
                  <li>
                    <Link href="/legal-resources">Committer Resources</Link>
                  </li>
                </ul>
              </div>

              <div className="border-bottom-section">
                <div className="page-title">
                  <h3>Getting Started</h3>
                </div>
                <div className="page mt-3">
                  <ul>
                    <li>
                      The <Link href="/legal-resources"> Guide to the Legal Documents</Link>{" "}
                      provides an in-depth look at the many legal documents related to the CometBid
                      open source community. This content is of value to committers, contributors,
                      redistributors of CometBid content, developers of CometBid-based products and
                      users of CometBid technologies.
                    </li>
                    <li>
                      Unless otherwise noted in the project documentation,{" "}
                      <Link href="/legal-resources">the CometBid Public License</Link> (EPL) is the
                      default license for CometBid Foundation projects (please see the CometBid
                      Public License Frequently Asked Questions).
                    </li>
                    <li>
                      The{" "}
                      <Link href="/legal-resources">
                        CometBid Foundation Legal Frequently Asked Questions
                      </Link>{" "}
                      answers some of the commonly asked questions about CometBid.org licensing,
                      contributions, working as a committer, and cryptography.
                    </li>
                    <li>
                      <Link href="/legal-resources">Third Party Content Licenses</Link> provides a
                      list of licenses that are approved for third party content used by CometBid
                      projects; or
                    </li>
                    <li>For other questions, email: license@CometBid-foundation.org.</li>
                  </ul>
                </div>
              </div>
              <div className="border-bottom-section">
                <div className="page-title">
                  <h3>Agreements and Licenses</h3>
                </div>
                <div className="page mt-3">
                  <ul>
                    <li>
                      Web Site Terms of Use: By accessing, browsing or using this web site, you
                      acknowledge that you have read, understood, and agree to be bound by the terms
                      and conditions contained in this agreement.
                    </li>
                    <li>
                      CometBid Public License (EPL): The default license for CometBid Foundation
                      projects.
                    </li>
                    <li>
                      CometBid Distribution License (EDL): The BSD license used by some CometBid
                      Foundation projects which implement permissive dual-licensing along with the
                      EPL. Other than for example code or build scripts.
                    </li>
                    <li>
                      CometBid Contributor Agreement: If you are contributing code or documentation
                      to CometBid Foundation projects you are required to complete this agreement.
                    </li>
                    <li>
                      Developer Certificate of Origin: If you are contributing code or documentation
                      to CometBid Foundation projects, and using the git signed-off-by mechanism,
                      you are agreeing to this certificate.
                    </li>
                    <li>
                      Copyright Agent: Contact information for the CometBid Foundation&#39;s
                      Copyright Agent.
                    </li>
                    <li>
                      CometBid Foundation Software User Agreement: By downloading binaries or
                      accessing CometBid Foundation source code repositories, you acknowledge that
                      you have read, understood, and agree to be bound by the terms and conditions
                      contained in this agreement.
                    </li>
                    <li>
                      Approved Licenses for Non-Code, Example, and Other Content: The Board of
                      Directors has approved the use of certain licenses for specific types of
                      content on CometBid.org.
                    </li>
                    <li>
                      CometBid Foundation Adoptium Marketplace Publisher Agreement: The license
                      agreement Adoptium Working Group Members must agree to before publishing links
                      in the Adoptium Marketplace from which publisher makes Java SE distributions
                      in binary form.
                    </li>
                    <li>
                      CometBid Foundation Open VSX Publisher Agreement: The license agreement
                      CometBid Open VSX Registry publishers must agree to before publishing
                      extensions for VS Code compatible editors on open-vsx.org. You may read the
                      Open VSX Registry FAQ here.
                    </li>
                    <li>
                      CometBid Foundation Specification License: The license used by CometBid
                      Foundation specifications created under the CometBid Foundation Specification
                      Process.
                    </li>
                    <li>
                      CometBid Foundation TCK License: The binary license used by Technology
                      Compatibility Kits to demonstrate compatibility with their corresponding
                      Specifications.
                    </li>
                    <li>
                      CometBid Foundation Quality Verification Suite License: The license that
                      governs the use and redistribution of the CometBid Quality Verification Suite
                      (QVS) in binary form.
                    </li>
                    <li>
                      CometBid Foundation User Group Trademark License Agreement: Guidelines and
                      agreements for user groups that are based on CometBid Foundation projects
                      and/or working groups.
                    </li>
                  </ul>
                </div>
              </div>

              {services.map(committer => (
                <div className="border-bottom-section" key={committer.id}>
                  <div className="page-title">
                    <h3>{committer.title}</h3>
                  </div>
                  <div className="page-description mt-3">
                    {committer.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                </div>
              ))}
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

export default ResourcrsFramework;
