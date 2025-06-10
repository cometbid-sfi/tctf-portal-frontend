"use client";

import "./style.css";
import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Table } from "react-bootstrap";

import ArrowSvg from "../../../assets/Images/arrow.svg";
import ArrowBlackSvg from "../../../assets/Images/black-right.svg";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";

import ParticipateSvg from "../../../assets/Images/participate.svg";
import StrategicSvg from "../../../assets/Images/strategic.svg";
import InnovationSvg from "../../../assets/Images/innovation.svg";

import Client1Svg from "../../../assets/Images/wg-ecd-tools.svg";
import Client2Svg from "../../../assets/Images/wg-adoptium.svg";
import Client3Svg from "../../../assets/Images/wg-jakarta.svg";
import Client4Svg from "../../../assets/Images/wg_iot.svg";

import ArrowRightSvg from "../../../assets/Images/black-right.svg";
import ArrowLeftSvg from "../../../assets/Images/arrow-left.svg";

// Type assertions for image imports
const Client1: StaticImageData = Client1Svg as unknown as StaticImageData;
const Client2: StaticImageData = Client2Svg as unknown as StaticImageData;
const Client3: StaticImageData = Client3Svg as unknown as StaticImageData;
const Client4: StaticImageData = Client4Svg as unknown as StaticImageData;

const Participate: StaticImageData = ParticipateSvg as unknown as StaticImageData;
const Strategic: StaticImageData = StrategicSvg as unknown as StaticImageData;
const Innovation: StaticImageData = InnovationSvg as unknown as StaticImageData;

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;
const ArrowLeft: StaticImageData = ArrowLeftSvg as unknown as StaticImageData;

const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;

const community = [
  {
    icon: Participate,
    title: "Participate in a thriving developer community",
    description: "and provide contributions to CSF projects and Industry Collaborations.",
  },
  {
    icon: Strategic,
    title: "Protect your strategic investments",
    description:
      "Code is probably one of your important asset. Lets help support and advance these important technologies your business relies upon.",
  },
  {
    icon: Innovation,
    title: "Share costs and innovation",
    description:
      "while focusing resources on rapidly building differentiated features that customers value most.   ",
  },
  {
    icon: Innovation,
    title: "Benefit from strong governance",
    description:
      "Solid intellectual property management, and inclusive Open source community development.",
  },
  {
    icon: Innovation,
    title: "Prosper by sharing",
    description: "Your experience and best practices on Open source with Industry peers.",
  },
  {
    icon: Innovation,
    title: "Promote accomplishments",
    description: "and good corporate citizenship through contributions to projects.",
  },
];

const resources = [
  {
    icon: Participate,
    title: "Membership Prospectus",
    description: "Learn about CSF membership, and how you can become a member.",
  },
  {
    icon: Strategic,
    title: "Overview Presentation",
    description: "A presentation of the CSF and community for new and prospective member.",
  },
];

const ProjectResources = [
  {
    id: 1,
    title: "Development Process",
    description:
      "The CSF community has a well-earned reputation for providing high-quality software, reliably and predictably. The Cometbid Foundation provides services and support to help projects consistently achieve their goals. Our staff assists new projects in implementing the development process, a set of procedures and rules that form our best practices.",
  },
  {
    id: 2,
    title: "IP Management",
    description:
      "We focus on enabling the use of open source technology in commercial software products and services. All projects are licensed under an OSI approved license including the CometBid Public License (EPL). In addition, the Cometbid Foundation's due diligence process helps to validate the pedigree of the intellectual property contained in our projects.",
  },
  {
    id: 3,
    title: "Ecosystem Development and Marketing",
    description:
      "The Cometbid Foundation's vendor-neutral marketing programs promote growth and engagement, drive awareness and discoverability of projects and collaborations and increase the commercial adoption of technologies. The Foundation coordinates and implements a variety of activities, including content creation, press and analyst relations, community conferences and events, advertising, social media management, and other programs to promote the entire CSF community and increase engagement.",
  },
  {
    id: 4,
    title: "IT Infrastructure",
    description:
      "The Cometbid Foundation provides vendor-neutral, reliable and scalable services for our technology developers and users. IT infrastructure services delivered to the community include source code repositories, build infrastructure, development-oriented mailing lists and newsgroups, a downloads site, and project and working group websites.",
  },
];

const sections = [
  {
    title: "Individual Account",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam:",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
      "Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.",
      "Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.",
      "Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
      "Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.",
    ],
    linkText: "View Existing Group accounts",
    linkHref: "#",
  },
  {
    title: "Group Account",
    description:
      "Business account description goes here. This section provides details about business accounts and their benefits.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
      "Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.",
      "Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.",
      "Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
      "Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.",
    ],
    linkText: "View Existing Group accounts",
    linkHref: "#",
  },
  {
    title: "Organization Account",
    description:
      "Business account description goes here. This section provides details about business accounts and their benefits.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
      "Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.",
      "Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.",
      "Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
      "Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.",
    ],
    linkText: "View Existing Group accounts",
    linkHref: "#",
  },
  {
    title: "Strategic Members",
    description:
      "Business account description goes here. This section provides details about business accounts and their benefits.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
      "Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.",
      "Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.",
      "Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
      "Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.",
    ],
    linkText: "View Existing Group accounts",
    linkHref: "#",
  },
  {
    title: "Contributing Members",
    description:
      "Business account description goes here. This section provides details about business accounts and their benefits.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
      "Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.",
      "Quisque nec mauris sit amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.",
      "Pellentesque arcu mauris, malesuada quis ornare accumsan, blandit sed diam.",
      "Aenean velit odio, elementum in tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate justo hendrerit.",
    ],
    linkText: "View Existing Contributing Members",
    linkHref: "#",
  },
  {
    title: "Associate Members",
    description:
      "Business account description goes here. This section provides details about business accounts and their benefits.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
      "Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.",
    ],
    linkText: "View Existing Associate Members",
    linkHref: "#",
  },
  {
    title: "Committer Members",
    description:
      "Business account description goes here. This section provides details about business accounts and their benefits.",
    listItems: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Duis vulputate commodo lectus, ac blandit elit tincidunt id.",
      "Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit, et lacinia ipsum quam nec dui.",
    ],
    linkText: "Learn more about Committer Membership",
    linkHref: "#",
  },
];

const CsfData = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CSF <span>Membership</span>
                </h1>
                <p className="hero-description">
                  Supported by Our Member Organizations, the Cometbid Foundation Provides the
                  Community
                  <br /> With Intellectual Property, Mentorship, Marketing, Event and IT Services.
                </p>
                <div className="border-button d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/choose-account">
                    <button className="btn btn-primary">
                      Become a Member <Image src={Arrow} alt="Icon" />
                    </button>
                  </Link>
                  <Link href="/csf-membership/explore-members">
                    <button className="btn btn-yellow">
                      Explore Our Member <Image src={ArrowBlack} alt="Icon" />
                    </button>
                  </Link>
                </div>
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
              <Link href="/collaborations">CSF Membership</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      <section className="membership-section mt-80">
        <div className="container">
          <Tabs
            defaultActiveKey="1"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 membership-tabs"
          >
            <Tab eventKey="Benefits and Services" title="Benefits and Services">
              <div className="tab-content-inner">
                <div className="sec-header text-center mb-5">
                  <div className="page-title">
                    <h2>Why become a Member of CSF Community?</h2>
                  </div>
                  <p>
                    Take an active role in supporting sustainable commercializable open source
                    technologies that benefit all.
                  </p>
                </div>

                <div className="sec-body">
                  <div className="row">
                    {community.map((item, index) => (
                      <div className="col-md-6 col-lg-4 mb-3" key={index}>
                        <div className="border-box-common">
                          <div className="box-icon-csf">
                            <Image src={item.icon} alt="Icon" />
                          </div>
                          <div className="box-content-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="project-resources-section mt-80">
                  <div className="container">
                    <div className="sec-header text-center mb-5">
                      <div className="page-title">
                        <h2>Key Services of the CSF Community</h2>
                      </div>
                    </div>
                    <div className="row">
                      {ProjectResources &&
                        ProjectResources.map((item, index) => (
                          <div className="col-md-6 col-lg-6 mb-3" key={index}>
                            <div className="project-resources-item">
                              <h3>{item.title}</h3>
                              <p>{item.description}</p>
                              <button className="btn">
                                Learn More <FaArrowRightLong />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Membership Levels" title="Membership Levels">
              <div className="tab-content-inner">
                <div className="sec-header text-center mb-5">
                  <div className="page-title">
                    <h2>Membership at the Cometbid Foundation</h2>
                  </div>
                  <p>
                    The Foundation offers three Account types: <span>Individual</span>,{" "}
                    <span>Group</span>, and <span>Organization</span>.
                  </p>
                </div>

                <div className="sec-body">
                  <p>
                    The Foundation also offers four levels of membership, irrespective of account
                    type: <span>Strategic</span>, <span>Contributing</span>,<span>Associate</span>,
                    and <span>Committer</span>.
                  </p>

                  {sections.map((section, index) => (
                    <div className="content-item" key={index}>
                      <div className="item-title">{section.title}</div>
                      <div className="item-description">{section.description}</div>
                      <div className="item-lists">
                        <ul>
                          {section.listItems.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <Link className="item-link" href={section.linkHref}>
                        {section.linkText}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Tab>
            <Tab eventKey="Membership Fees" title="Membership Fees">
              <div className="tab-content-inner">
                <div className="sec-header text-center mb-5">
                  <div className="page-title">
                    <h2>Membership Fees</h2>
                  </div>
                  <p>
                    The Membership Annual Fee Comparison Chart based on membership levels is
                    provided below for illustration purposes only. Please see the CSF Membership
                    Agreement for full details. Note that CSF Working Group Membership fees are
                    separate and in addition to general CometBid Foundation Membership fees.
                  </p>
                </div>

                <div className="sec-body">
                  <div className="row justify-content-center">
                    <div className="col-lg-11">
                      <Table bordered responsive className="table-border table-membership">
                        <thead>
                          <tr>
                            <th></th>
                            <th colSpan={4}>Annual Cometbid Foundation Membership Fees*</th>
                          </tr>
                          <tr>
                            <th>Annual Corporate Revenue</th>
                            <th>Strategic</th>
                            <th>Contributor</th>
                            <th>Associate</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>&gt;$1billion</td>
                            <td>$30 000</td>
                            <td>$200</td>
                            <td>$100</td>
                          </tr>
                          <tr>
                            <td>$100million - $1billion</td>
                            <td>$18 000</td>
                            <td>$150</td>
                            <td>$50</td>
                          </tr>
                          <tr>
                            <td>$20million - $100million</td>
                            <td>$12 000</td>
                            <td>$100</td>
                            <td>$20</td>
                          </tr>
                          <tr>
                            <td>$20million - $1million</td>
                            <td>$6 000</td>
                            <td>$50</td>
                            <td>$12</td>
                          </tr>
                          <tr>
                            <td>&gt;$1million</td>
                            <td>$4 000</td>
                            <td>$20</td>
                            <td>$0</td>
                          </tr>
                          <tr>
                            <td>Govt, Govt Agencies, Research Organizations, NGOs, etc.</td>
                            <td>$4 000</td>
                            <td>$20</td>
                            <td>$12</td>
                          </tr>
                          <tr>
                            <td>Academic, Publishing Organizations, User Groups, etc.</td>
                            <td>$4 000</td>
                            <td>$20</td>
                            <td>$12</td>
                          </tr>
                        </tbody>
                      </Table>
                      <div className="note">
                        There is no cost or fees attached to being a Committer member of the
                        Foundation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Become a Member" title="Become a Member">
              <div className="tab-content-inner">
                <div className="sec-header text-center mb-5">
                  <div className="page-title">
                    <h2>How to Become a Member</h2>
                  </div>
                </div>

                <div className="sec-body">
                  <p>
                    In order for your organisation to become a member, you must complete and sign
                    the following documents through our Member Enrolment Portal:
                  </p>

                  <div className="content-item">
                    <div className="item-lists">
                      <ul>
                        <li>
                          Membership Application Form(you will need to indicate which class of
                          membership you are joining. Most organisations join as Contributing
                          members.)
                        </li>
                        <li>Membership Agreement</li>
                        <li>
                          Member Committer and Contributor Agreement(optional, but recommended)
                        </li>
                      </ul>
                    </div>
                    <div className="item-description">
                      If you would prefer, you may instead download, complete, and sign the
                      documents and email to us for processing. Note: Membership in an CometBid
                      Working Group requires the execution of the respective Working Group&#39;s
                      Participation Agreement. For more information, review the list of the current
                      CometBid Working Groups and their respective Participation Agreement
                    </div>
                  </div>

                  <div className="content-item">
                    <div className="item-title">What is the Member Enrolment Portal?</div>
                    <div className="item-description">
                      The simplest way to complete and sign the documents is by creating an CometBid
                      account (if you don&#39;t already have one) and using our Membership Enrolment
                      Portal. This portal will walk you through the documents above and ensure you
                      provide all the necessary information. Once complete, our staff will review
                      the submission and send you the appropriate agreements for electronic
                      signature.
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="item-title">What if I have questions?</div>
                    <div className="item-description">
                      Our governance page lists all of our key governance documents, including the
                      CometBid Foundation Bylaws, IP Policy, Antitrust Policy, Affiliates
                      Guidelines, etc. And feel free to email us with any additional questions you
                      have.
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="item-title">For Committer Members</div>
                    <div className="item-description">
                      If you are a Committer who is not already a Member by virtue of your employer
                      being a Member, you are welcome to join as an individual Committer Member. The
                      steps involved in becoming a committer are described here; individual
                      Committer Members should download and email us the Membership Agreement.
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="item-title">Cometbid Foundation AISBL</div>
                    <div className="item-description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
                      vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac
                      blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor
                      mauris molestie elit, et lacinia ipsum quam nec dui. Quisque nec mauris sit
                      amet elit iaculis pretium sit amet quis magna. Aenean velit odio, elementum in
                      tempus ut, vehicula eu diam. Pellentesque rhoncus aliquam mattis. Ut vulputate
                      eros sed felis sodales nec vulputate justo hendrerit. Vivamus varius pretium
                      ligula, a aliquam odio euismod sit amet. Quisque laoreet sem sit amet orci
                      ullamcorper at ultricies metus viverra. Pellentesque arcu mauris, malesuada
                      quis ornare accumsan, blandit sed diam.
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Resources" title="Resources">
              <div className="tab-content-inner">
                <div className="sec-header text-center mb-5">
                  <div className="page-title">
                    <h2>Resources</h2>
                  </div>
                </div>

                <div className="sec-body">
                  <div className="row">
                    {resources.map((item, index) => (
                      <div className="col-lg-6 mb-3" key={index}>
                        <div className="border-box-common">
                          <div className="box-icon-csf">
                            <Image src={item.icon} alt="Icon" />
                          </div>
                          <div className="box-content-text">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="sec-header text-center mt-80 mb-5">
                  <div className="page-title">
                    <h2>Keeping Members Connected</h2>
                    <p>
                      Serving our community is the number one priority of the Cometbid Foundation.To
                      keep our community connected, we send out a monthly newsletter to member
                      companies and member committers. Check out some past issues of our member
                      newsletter
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="Member Portal" title="Member Portal">
              <div className="tab-content-inner">
                <div className="sec-header text-center mb-5">
                  <div className="page-title">
                    <h2>Member Portal</h2>
                    <p>
                      The CSF member portal provides Member organizations with insights into their
                      participation in the CSF community. Find out about industry collaborations and
                      projects your organization is involved in and access resources curated for
                      Members.
                    </p>
                  </div>
                </div>

                <div className="sec-body">
                  <p className="text-center">
                    Additionally, this portal allows members to update key data related to their
                    membership, including their logo, corporate description, and key contacts.
                  </p>
                </div>
              </div>
            </Tab>
          </Tabs>
          <div className="btn-center justify-content-between">
            <div className="page-button hide_mobile">
              <button className="btn btn-header">
                <Image src={ArrowLeft} alt="Icon" className="me-2" />
                Membership Levels
              </button>
            </div>
            <div className="page-button show_mobile">
              <button className="btn btn-pagination">
                <Image src={ArrowLeft} alt="Icon" />
              </button>
            </div>
            <button className="btn-blue">Become a Member</button>
            <div className="page-button">
              <button className="btn btn-header hide_mobile">
                Membership Levels <Image src={ArrowBlack} alt="Icon" />
              </button>
              <button className="btn btn-pagination show_mobile">
                <Image src={ArrowBlack} alt="Icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section Start Here  */}
      <section className="latest-news-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2>Featured Collaborations</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client1} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client2} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client3} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client4} alt="Icon" />
              </div>
            </div>
          </div>
          <div className="btn-center">
            <button className="btn btn-header">
              View All <Image src={ArrowRight} alt="Icon" />
            </button>
          </div>
        </div>
      </section>
      {/* Brand Section End Here  */}

      {/* <Subscribe /> */}
    </>
  );
};

export default CsfData;
