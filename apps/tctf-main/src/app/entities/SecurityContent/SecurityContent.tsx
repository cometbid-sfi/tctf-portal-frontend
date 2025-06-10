import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import "./style.css";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import ArrowRightSvg from "../../../assets/Images/black-right.svg";
import ArrowSvg from "../../../assets/Images/arrow.svg";
import StarSvg from "../../../assets/Images/object.svg";
import ReportsSvg from "../../../assets/Images/hacker-cracking.svg";
import WarningSvg from "../../../assets/Images/web-sec.svg";
import SettingSvg from "../../../assets/Images/settings.svg";
import ManagementSvg from "../../../assets/Images/management.svg";
import BrandingSvg from "../../../assets/Images/branding.svg";
import DevelopmentSvg from "../../../assets/Images/development.svg";
import SentEmailSvg from "../../../assets/Images/sent-email.svg";
import VideoSvg from "../../../assets/Images/dummy-image.svg";
import News2Svg from "../../../assets/Images/news1.svg";
import News3Svg from "../../../assets/Images/news2.svg";
import News4Svg from "../../../assets/Images/news3.svg";
import News5Svg from "../../../assets/Images/news4.svg";
import News6Svg from "../../../assets/Images/news5.svg";

// Type assertions for SVG imports
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const Star: StaticImageData = StarSvg as unknown as StaticImageData;
const Reports: StaticImageData = ReportsSvg as unknown as StaticImageData;
const Warning: StaticImageData = WarningSvg as unknown as StaticImageData;
const Setting: StaticImageData = SettingSvg as unknown as StaticImageData;
const Management: StaticImageData = ManagementSvg as unknown as StaticImageData;
const Branding: StaticImageData = BrandingSvg as unknown as StaticImageData;
const Development: StaticImageData = DevelopmentSvg as unknown as StaticImageData;
const SentEmail: StaticImageData = SentEmailSvg as unknown as StaticImageData;
const Video: StaticImageData = VideoSvg as unknown as StaticImageData;
const News2: StaticImageData = News2Svg as unknown as StaticImageData;
const News3: StaticImageData = News3Svg as unknown as StaticImageData;
const News4: StaticImageData = News4Svg as unknown as StaticImageData;
const News5: StaticImageData = News5Svg as unknown as StaticImageData;
const News6: StaticImageData = News6Svg as unknown as StaticImageData;

const boxes = [
  {
    id: 1,
    icon: Setting,
    title: "Vulnerability Management and Reporting (PSIRT & CVE Assignment)",
    description:
      "CT Foundation’s Project Security Incident Response Team (PSIRT) manages vulnerability reporting, triage, disclosure, and remediation, while also acting as a CVE Numbering Authority (CNA).",
  },
  {
    id: 2,
    icon: Management,
    title: "Repository Management and Infrastructure Security",
    description:
      "Best practices in repository management through self-service tools and the management of overall infrastructure security.",
  },
  {
    id: 3,
    icon: Branding,
    title: "Project Security Support",
    description:
      "Infrastructure support, OSS security audits, and guidance to help Projects improve their overall security posture.",
  },
  {
    id: 4,
    icon: Development,
    title: "Code and Artifacts Signing",
    description:
      "Supports code and artifact signing to verify the authenticity and integrity of software releases.",
  },
  {
    id: 5,
    icon: Development,
    title: "Security Advocacy and Communication",
    description:
      "Provides both inward (to all contributors) and outward (to the general technical public) communication to raise awareness and guide security best practices and achievements.",
  },
  {
    id: 6,
    icon: Development,
    title: "Developer Training",
    description:
      "Educational programs to help developers learn best practices, secure coding principles, and vulnerability management.",
  },
];

const news = [
  {
    id: 1,
    image: SentEmail,
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "Monday, May 5, 2025 - 13:19",
  },
  {
    id: 2,
    image: News2,
    title: "Migrating to Linear 101",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "Monday, May 5, 2025 - 13:19",
  },
  {
    id: 3,
    image: News3,
    title: "Building your API Stack",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "Monday, May 5, 2025 - 13:19",
  },
  {
    id: 4,
    image: News4,
    title: "How collaboration makes us better designers",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "Monday, May 5, 2025 - 13:19",
  },
  {
    id: 5,
    image: News5,
    title: "Our top 10 Javascript frameworks to use",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "Monday, May 5, 2025 - 13:19",
  },
  {
    id: 6,
    image: News6,
    title: "Podcast: Creating a better CX Community",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    date: "Monday, May 5, 2025 - 13:19",
  },
];

const SecurityContent = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Report a <span>Vulnerability</span>
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
              <span>Report a Vulnerability</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Participate Section start here */}
      <section className="participate-section mt-80">
        <div className="container">
          <div className="sec-header mb-5">
            <div className="page-title">
              <h2>Security at the CT Foundation</h2>
            </div>
            <p>
              {
                "With over 425 open source projects and billions of downloads, it’s increasingly difficult for any CT contributor to manage security best practices across their project and handle their dependencies appropriately. Through close collaboration and guidance for our community, the CT Foundation makes it easier to mitigate risks in open source projects."
              }
            </p>
            <p>
              {
                "Transparency and trust are foundational and lead to an improved software security posture throughout the CT community. Our security initiatives are designed to empower contributors with the knowledge and tools to manage OSS security risks effectively. This includes vulnerability management and reporting, project security support, best practices for repository management, developer training, self-service tools, and security advocacy."
              }
            </p>
          </div>
        </div>
      </section>
      {/* Participate Section end here */}

      {/* Report a Vulnerability Section Start Here  */}
      <section className="join-community-section mt-80">
        <div className="container">
          <div className="bg-image">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="join-community-content">
                  <div className="why-choose-us-subtitle mb-2">
                    Success Story <Image src={Star} alt="Icon" />
                  </div>
                  <div className="page-title">
                    <h2>Report a Vulnerability</h2>
                  </div>
                  <div className="page-description">
                    The CTF community has a well-earned reputation for providing high-quality
                    software, reliably and predictably. The Cometbid Foundation provides services
                    and support to help projects consistently achieve their goals. Our staff assists
                    new projects in implementing the development process, a set of procedures and
                    rules that form our best practices.
                  </div>
                  <div className="border-button mt-32">
                    <Link href="/choose-account">
                      <button className="btn btn-primary">
                        Become a member <Image src={Arrow} alt="Icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  <div className="report-image">
                    <Image src={Reports} alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Report a Vulnerability Section End Here  */}

      {/* Vulnerabilities and Advisories Section start here */}
      <section className="advisory-section mt-80">
        <div className="container">
          <div className="sec-header mb-5">
            <div className="page-title">
              <h2>Known Vulnerabilities and Advisories</h2>
            </div>
            <p>
              {
                "Projects can communicate security information to users through security advisories. They describe a vulnerability (or a class of vulnerabilities) and the solutions to mitigate risks. They usually contain information on which product versions are affected and which contain a fix, including workarounds if available."
              }
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="yellow-box card-advisory">
                <div className="card-advisory-icon">
                  <Image src={Warning} alt="Icon" />
                </div>
                <div className="card-advisory-content">
                  To see the vulnerabilities affecting CT sites and Projects, refer to the CometBid
                  Known Vulnerabilities page.
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blue-card card-advisory">
                <div className="card-advisory-icon">
                  <Image src={Warning} alt="Icon" />
                </div>
                <div className="card-advisory-content">
                  To see the vulnerabilities affecting CT sites and Projects, refer to the CometBid
                  Known Vulnerabilities page.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Vulnerabilities and Advisories Section end here */}

      {/* Key Services and Benefits Section start here */}
      <section className="advisory-section mt-80">
        <div className="container">
          <div className="sec-header mb-5">
            <div className="page-title">
              <h2>Key Services and Benefits</h2>
            </div>
            <p>
              {
                "The CometBid Foundation’s software security services ensure the integrity, authenticity, and compliance of Projects, empowering development teams with expert guidance, secure infrastructure, and essential training. By prioritising OSS security at every development stage, we help maintain the trustworthiness of our open source ecosystem, enabling projects to thrive while reducing risks and vulnerabilities."
              }
            </p>
          </div>
          <div className="row">
            {boxes.map(box => (
              <div className="col-lg-6 mb-4" key={box.id}>
                <div className="benefits-box">
                  <div className="benefits-box-inner">
                    <div className="benefits-box-icon">
                      <Image src={box.icon} alt="Icon" />
                    </div>
                    <div className="benefits-box-content">
                      <h3>{box.title}</h3>
                      <p>{box.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Key Services and Benefits Section end here */}

      {/* Report a Vulnerability Section Start Here  */}
      <section className="join-community-section mt-80">
        <div className="container">
          <div className="bg-image">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="row">
                  <div className="report-image">
                    <Image src={SentEmail} alt="Icon" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="join-community-content">
                  <div className="page-title">
                    <h2>About CT Foundation Security Team</h2>
                  </div>
                  <div className="page-description">
                    The CometBid Technology Foundation (CTF) Security Team is the part of the
                    CometBid Management Organization (CMO) tasked with software security and
                    vulnerability coordination and management on behalf of the CometBid community.
                    It is composed of a small number of security experts.
                  </div>
                  <div className="border-button mt-32">
                    <Link href="/choose-account">
                      <button className="btn btn-primary">
                        Become a member <Image src={Arrow} alt="Icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Report a Vulnerability Section End Here  */}

      {/* Insights & Resources Section start here */}
      <section className="insights-section mt-80">
        <div className="container">
          <div className="sec-header mb-5">
            <div className="page-title">
              <h2>Insights & Resources</h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="video-box">
                <Image src={Video} alt="Icon" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="insights-content">
                <div className="page-title">
                  <h2>CT Foundation Security Training</h2>
                </div>
                <div className="page-description">
                  Sharpen your security skills with our developer security training videos.
                </div>
                <div className="page-button mt-32">
                  <Link href="/announcements">
                    <button className="btn btn-header">View Full Playlist</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Insights & Resources Section end here */}

      {/* News & Events Section start here */}
      <section className="news-section mt-80">
        <div className="container">
          <div className="sec-header mb-5">
            <div className="page-title">
              <h2>News & Events</h2>
            </div>
          </div>
          <div className="row">
            {news.map(newItem => (
              <div className="col-lg-4 mb-4" key={newItem.id}>
                <div className="news-box">
                  <div className="news-box-image">
                    <Image src={newItem.image} alt="Icon" />
                  </div>
                  <div className="news-box-content">
                    <span>{newItem.date}</span>
                    <h3>{newItem.title}</h3>
                    <p>{newItem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="page-button mt-32 justify-content-center">
            <button className="btn btn-header">
              View More <Image src={ArrowRight} alt="Icon" />
            </button>
          </div>
        </div>
      </section>
      {/* News & Events Section end here */}
    </>
  );
};

export default SecurityContent;
