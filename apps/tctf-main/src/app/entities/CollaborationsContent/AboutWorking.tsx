import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";

// Type assertions for image imports
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const AboutWorking = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              About Working <span>Group</span>
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
              <Link href="/collaborations">Collaborations</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>About Working Groups</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      <section className="about-working-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="text-content-view">
                <div className="text-title">
                  Fostering open industry collaboration to develop new industry platforms
                </div>
                <div className="content-details">
                  Companies, organizations, and individuals looking to drive innovation and
                  efficiencies within industry are increasingly looking to external sources to
                  advance new ideas. Commonly referred to as “open innovation,” this paradigm
                  encourages collaboration across organizational boundaries, and is often practiced
                  in the open source community. Working groups allow organizations to combine the
                  best practices of open source development with a set of services required for open
                  innovation, enabling organizations to foster industry collaborations.
                </div>
                <div className="content-details">
                  At the Cometbid Foundation, working groups provide a vendor-neutral governance
                  structure that allows members of the foundation to collaborate on solving industry
                  problems and to drive shared innovation through the related Cometbid Foundation
                  open source projects. The collaboration promotes and augments CometBid
                  technologies to meet the needs of specific industries and communities, including
                  through the development and implementation of joint marketing programs to increase
                  awareness, adoption, and contributions. Find out more about the relationship
                  between working groups and projects.
                </div>
                <div className="content-details">
                  Through working groups, member organizations can collaborate to:
                </div>
                <ul>
                  <li>
                    help improve the supply chain of software development tools, frameworks, and
                    runtimes in a particular industry
                  </li>
                  <li>develop specifications in open source</li>
                  <li>
                    create new technology platforms that increases interoperability among
                    organizations and technologies
                  </li>
                  <li>
                    drive the industry adoption and support of strategic open source projects and
                    technologies, including developer advocacy, marketing outreach, brand promotion,
                    compatibility program, etc.
                  </li>
                </ul>
                <div className="content-details">
                  Participation in a working group is only open to Cometbid Foundation members.
                </div>
                <div className="text-title">Services for Working Groups</div>
                <div className="content-details">
                  The Cometbid Foundation provides working groups with vendor-neutral governance ,
                  ecosystem development and marketing services, collaborative management,
                  specification development and branding and compatibility.
                </div>
                <div className="content-details">
                  The foundation also provides intellectual property management and licensing,
                  shared IT infrastructure, and development processes for the projects complemented
                  and promoted by the working groups.
                </div>
                <div className="text-sub-title">Vendor-Neutral Governance</div>
                <div className="content-details">
                  Good governance controlling how decisions are made, policies are set and disputes
                  resolved is important for any successful collaboration.
                </div>
                <div className="content-details">
                  The Cometbid Foundation, a not-for-profit corporation, is governed by a set of
                  Bylaws, agreements, and policies, including antitrust and intellectual property
                  management policies, that ensure a vendor-neutral governance model for working
                  group collaborations.
                </div>
                <div className="content-details">
                  All entities in a working group participate based strictly on their contributions
                  and merit. Working groups are able to define rights based on membership within a
                  working group. This ensures that no one individual or organization has any special
                  status or veto.
                </div>
                <div className="text-sub-title">Ecosystem Development and Marketing</div>
                <div className="content-details">
                  Working groups are most effective when a diverse group of organizations get
                  involved and collaborate. The Cometbid Foundation provides marketing expertise,
                  processes, and platforms to enable working group members to jointly grow the
                  awareness of and participation in working groups and their projects.
                </div>
                <div className="content-details">
                  Our team of marketing professionals support working groups with brand development,
                  press and analyst relations, content creation e.g. white papers, case studies,
                  eBooks, event coordination, advertising, social media management, and other
                  working group-specific activities. Find out more about the marketing services
                  provided by the Foundation.
                </div>
                <div className="text-sub-title">Collaborative management</div>
                <div className="content-details">
                  There is a tight coupling between working groups and open source projects hosted
                  at the Cometbid Foundation that is very valuable to the open source community.
                  Working groups can help coordinate the efforts of otherwise separate open source
                  projects by providing things like shared vision and a roadmap; and determine how
                  to leverage working group resources to best serve the open source community. The
                  Foundation helps set up shared responsibilities, manages budgets and provides
                  governance for these shared initiatives.
                </div>
                <div className="content-details">
                  The CometBid Marketplace and OpenVSX registry are concrete examples of
                  cross-project initiatives that working groups have built with the collaborative
                  management offered by the Cometbid Foundation.
                </div>
                <div className="text-sub-title">Specification Development</div>
                <div className="content-details">
                  A specification provides definitions, descriptions of semantic behavior, data
                  formats, protocols, and/or other referenced specifications, along with technical
                  artifacts, intended to enable the development and verify compatibility of
                  independent implementations.
                </div>
                <div className="content-details">
                  The Cometbid Foundation Specification Process (EFSP) defines a general framework
                  for the development of specifications in open source at the Cometbid Foundation.
                  All specification development occurs under the purview of a working group that —
                  through their designated specification committee — plays a critical role in the
                  general governance, and management of the intellectual property flows that are
                  particular to specifications.
                </div>
                <div className="text-sub-title">Branding and Compatibility</div>
                <div className="content-details">
                  Working groups can build on the value of their specifications and develop a
                  trusted ecosystem of implementers and consumers, by creating a branding and
                  compatibility program. . Products that implement specifications and pass the
                  corresponding Technology Compatibility Kit (TCK) can be branded as compatible
                  implementations. Consumers can trust that branded products are truly compatible.
                </div>
                <div className="text-sub-title">Join a Working Group</div>
                <div className="content-details">
                  Explore our working groups to learn more about their vision and scope, and how to
                  join.
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidecontent">
                <div className="side-title">CometBid Working Groups</div>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Explore Working Groups
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      About Working Groups
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      5 Reasons to Collaborate
                    </a>
                  </li>
                </ul>
                <div className="side-title">Related Links</div>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Working Group Process
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Working Group Operations
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Working Group Development Effort Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Member Funded Initiatives
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWorking;
