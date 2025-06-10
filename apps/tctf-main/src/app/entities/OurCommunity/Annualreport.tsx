import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import SaidpicSvg from "../../../assets/Images/c-pic.jpg";
import StaffLongSvg from "../../../assets/Images/staff.svg";
import Client1Svg from "../../../assets/Images/wg-ecd-tools.svg";
import Client2Svg from "../../../assets/Images/wg-adoptium.svg";
import Client3Svg from "../../../assets/Images/wg-jakarta.svg";
import Client4Svg from "../../../assets/Images/wg_iot.svg";

// Type assertions for image imports
const Client1: StaticImageData = Client1Svg as unknown as StaticImageData;
const Client2: StaticImageData = Client2Svg as unknown as StaticImageData;
const Client3: StaticImageData = Client3Svg as unknown as StaticImageData;
const Client4: StaticImageData = Client4Svg as unknown as StaticImageData;

const StaffLong: StaticImageData = StaffLongSvg as unknown as StaticImageData;
const Saidpic: StaticImageData = SaidpicSvg as unknown as StaticImageData;
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const clients = [
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
];

const staffMembers = [
  {
    name: "Zane Sorell",
    title: "Executive Director",
    image: StaffLong,
  },
  {
    name: "Ava Thompson",
    title: "Operations Manager",
    image: StaffLong,
  },
  {
    name: "Liam Patel",
    title: "Finance Officer",
    image: StaffLong,
  },
  {
    name: "Zane Sorell",
    title: "Executive Director",
    image: StaffLong,
  },
  {
    name: "Zane Sorell",
    title: "Executive Director",
    image: StaffLong,
  },
  {
    name: "Ava Thompson",
    title: "Operations Manager",
    image: StaffLong,
  },
  {
    name: "Liam Patel",
    title: "Finance Officer",
    image: StaffLong,
  },
  {
    name: "Zane Sorell",
    title: "Executive Director",
    image: StaffLong,
  },
];
const ReportPage = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Community <span>Report</span>
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
              <span>Community Report</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Board Governance Section Start Here */}
      <section className="board-governance-section mt-5">
        <div className="container">
          <div className="row">
            <div className="page-title">
              <h2>2024 Annual Community Report</h2>
            </div>
            <div className="careers-description">
              Except where otherwise noted, this report covers the period 1 April 2023 to 31 March
              2024.
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section mt-5">
        <div className="container">
          <div className="section-row">
            <div className="section-box">Executive Director&apos;s Summary</div>
            <div className="section-box">Who We Are</div>
            <div className="section-box">Key Initiatives</div>
            <div className="section-box">Projects</div>
            <div className="section-box">Industry Collaborations</div>
            <div className="section-box">Membership</div>
            <div className="section-box">Operations</div>
          </div>
        </div>
      </section>

      <section className="executive-summary-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="summary-image text-center mt-4 mt-lg-0">
                <Image src={Saidpic} alt="Executive Summary" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 sec-header">
              <div className="page-title mt-5">
                <h2>Executive Director’s Summary</h2>
                <p className="mt-3">
                  As we celebrate the 20th anniversary of the Cometbid Foundation, I am filled with
                  gratitude and admiration for the vibrant community that has been instrumental in
                  our journey. Your unwavering dedication and support have been the cornerstone of
                  our success, and as we reflect on the past two decades, it is clear that our
                  collective achievements are a testament to the power of collaboration and shared
                  vision.
                </p>
                <p>
                  This year, we proudly mark two decades of innovation, growth, and community-driven
                  progress. Our anniversary is not just a milestone, but a celebration of the people
                  who have made this journey possible — our committers, contributors, members, and
                  staff who have contributed their time, expertise, and passion to the
                  Foundation&apos;s mission.
                </p>
                <p>
                  In this report, we are excited to highlight the significant strides we have made
                  in expanding our presence and initiatives in Europe. Our European community has
                  shown remarkable growth, embodying the Foundation&apos;s commitment to fostering
                  global innovation and collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="staff-list-section py-5 ">
        <div className="container">
          <div className="sec-header mb-5 ">
            <div className="page-title mb-3">
              <h2>Who We Are</h2>
            </div>
            <p className="mb-4">
              The long-term success of the foundation is driven by our dedication to nurturing open
              source projects and communities while fostering commercially viable ecosystems around
              these projects. Our core mission focuses on:
            </p>

            <ul className="freedom-list mb-4 ps-3 text-start d-inline-block  ">
              <li>
                Ensuring user freedoms by providing vendor neutral governance and stewardship of our
                projects;
              </li>
              <li>
                Empowering developers and their communities with programs, infrastructure, and
                events;
              </li>
              <li>Enabling collaboration through our projects and industry collaborations.</li>
            </ul>

            <p>
              The Cometbid Foundation is led by our{" "}
              <Link href="/executive-team" className="text-primary text-decoration-underline">
                executive team
              </Link>{" "}
              and the{" "}
              <Link href="/board-of-directors" className="text-primary text-decoration-underline">
                board of directors
              </Link>
              .
            </p>
          </div>

          <div className="staff-list-wrapper">
            <div className="row g-4">
              {staffMembers.map((staff, index) => (
                <div className="col-12 col-sm-6 col-lg-3" key={index}>
                  <div className="staff-card border rounded shadow-sm bg-white text-center p-3 h-100 d-flex flex-column align-items-center">
                    <div
                      className="staff-img mb-3 rounded-circle overflow-hidden"
                      style={{ width: "120px", height: "120px" }}
                    >
                      <Image
                        src={staff.image}
                        alt={staff.name}
                        width={120}
                        height={120}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="staff-info mt-auto">
                      <h5 className="mb-1">{staff.name}</h5>
                      <p className="text-muted mb-0">{staff.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="marketplaces-section mt-80">
        <div className="container">
          <div className="sec-header mb-5 text-center">
            <div className="page-title">
              <h2>Key Numbers</h2>
            </div>
            <p>{"Find the open source extensions you need through one of our marketplaces."}</p>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="yellow-box marketplace-box">
                <div className="marketplace-logo">
                  <h1 className="text-dark">15</h1>
                </div>
                <div className="marketplace-content">
                  <h3>
                    hosted events with close to 14,000 <br /> attendees
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="blue-card marketplace-box">
                <div className="marketplace-logo">
                  <h1 className="text-dark">100,000+</h1>
                </div>
                <div className="marketplace-content">
                  <h3>
                    developers informed through our
                    <br /> community newsletter
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-3">
              <div className="black-card marketplace-box">
                <div className="marketplace-logo">
                  <h1 className="text-dark">4</h1>
                </div>
                <div className="marketplace-content">
                  <h3>key industry studies</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="key-numbers-section py-5">
        <div className="container">
          <div className="row g-4 text-center">
            {/* Previous cards */}
            <div className="col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm border border-secondary-subtle">
                <div className="card-body">
                  <h2 className="text-dark fw-bold">30</h2>
                  <p className="mb-0">new projects in the past year</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm border border-secondary-subtle">
                <div className="card-body">
                  <h2 className="text-dark fw-bold">419</h2>
                  <p className="mb-0">Cometbid Foundation projects overall</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm border border-secondary-subtle">
                <div className="card-body">
                  <h2 className="text-dark fw-bold">14</h2>
                  <p className="mb-0">European research projects supported</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm border border-secondary-subtle">
                <div className="card-body">
                  <h2 className="text-dark fw-bold">2,000+</h2>
                  <p className="mb-0">committers</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm border border-secondary-subtle">
                <div className="card-body">
                  <h2 className="text-dark fw-bold">117</h2>
                  <p className="mb-0">organisations participating in commits</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm border border-secondary-subtle">
                <div className="card-body">
                  <h2 className="text-dark fw-bold">495M</h2>
                  <p className="mb-0">lines of code</p>
                </div>
              </div>
            </div>
          </div>

          {/* New text content section */}
          <div className="row mt-5">
            <div className="col-lg-12 mx-auto">
              <div className="p-4 rounded membership-text ">
                <p>
                  The Cometbid Foundation&apos;s open source projects have experienced a remarkable
                  year, showcasing significant achievements and advancements.{" "}
                  <strong>OpenVSX</strong>, a vibrant marketplace for VS Code extensions, has become
                  a hub for developers seeking reliable and community-vetted tools, fostering
                  innovation and collaboration within the ecosystem.{" "}
                  <strong>Cometbid Temurin</strong> has established itself as a cornerstone in the
                  Java ecosystem, with its widespread adoption underscoring its reliability and
                  excellence. Meanwhile, <strong>ThreadX</strong> is breaking new ground as the
                  world&apos;s inaugural safety-certified open source real-time operating system.
                </p>
                <p>
                  As is our regular practice, we also consolidated and/or terminated 25 open source
                  projects. This includes the <strong>Cometbid SOA</strong> top-level project, which
                  was terminated, and the PMC disbanded after we moved the remaining two viable
                  subprojects to the purview of other existing top-level projects. On behalf of the
                  community, the EMO thanks the SOA PMC for their service. By consolidating,
                  especially with more mature Cometbid projects, we ensure that both the committers
                  of those projects, as well as the downstream users of those projects are better
                  served. Terminating projects that are no longer viable or active helps preserve
                  the Cometbid “brand” and, more importantly, puts focus on the many exceptional
                  projects under the Cometbid umbrella.
                </p>
                <p>
                  In this same period, we received proposals for{" "}
                  <strong>30 new open source projects</strong>, covering a broad range of technology
                  areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-list-section mt-80" id="our-sponsors">
        <div className="container">
          <div className="row">
            {/* Heading */}
            <div className="col-12 mb-3 page-title ">
              <h2>Membership</h2>
              <>
                <p className="membership-text">
                  We are a member-supported organisation, and we appreciate all our members&apos;
                  commitment and contributions. Thank You!
                </p>
                <p className="membership-text">
                  As of 31 March 2024, the Cometbid Foundation has 14 strategic members.
                </p>
              </>
            </div>

            {/* Show first 8 clients only */}
            {clients.slice(0, 8).map((client, index) => (
              <div className="col-md-6 col-lg-3 mb-3" key={index}>
                <div className="partner-list-item">
                  <Link href={client.link} target="_blank" rel="noopener noreferrer">
                    <div className="client-logo-partner">
                      <Image
                        src={client.image}
                        alt={`${client.name} Logo`}
                        width={150}
                        height={100}
                        objectFit="contain"
                      />
                    </div>
                    <div className="client-name">
                      <h4>{client.name}</h4>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportPage;
