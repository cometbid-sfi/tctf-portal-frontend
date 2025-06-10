import Image from "next/image";
import Link from "next/link";
import React from "react";
// import "./style.css";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "@/component/Sidebar/Sidebar";
import "./style.css"
const topCommitters = [
  {
    id: 1,
    title: "Trademark Disclaimers",
    points: [
      "Content on this web site, including the names listed on this page, may make reference to the trademarks in the ",
      "following list. We disclaim any claim to trademark rights in their usage.",
      "Microsoft, Windows, Windows NT, and the Windows logo are trademarks of Microsoft Corporation in the United States, other countries, or both.",
      "UNIX is a registered trademark of The Open Group in the United States and other countries",
      "Linux is the registered trademark of Linus Torvalds in the U.S. and other countries.",
      "Android is a trademark of Google Inc",
      "Other company, product, and service names may be trademarks or service marks of others",
    
    ],
  },

  {
    id: 2,
    title: "Registered Trademarks",
    points: [
       "Adoptium®",
  "AsciiDoc®",
  "Capella®",
  "Che®",
  "Deeplearning4j®",
  "CometBid®",
  "CometBidCon®",
  "EE4J®",
  "GlassFish®",
  "Jakarta®",
  "Jetty®",
  "Keyple®",
  "MicroProfile®",
    ],
  },

  {
    id: 3,
    title: "Other Trademarks",
    points: [
       "Built on Cometbid™",
  "Cometbid Foundation Member™",
  "Cometbid Galileo™",
  "Cometbid Ganymede™",
  "Cometbid Indigo™",
  "Cometbid Kepler™",
  "Cometbid Luna™",
  "Cometbid Mars™",
  "Cometbid Neon™",
    ],
  },
  {
    id: 4,
    title: "Cometbid Foundation Working Groups",
    points: [
       "Adoptium™",
  "AsciiDoc®",
  "ECD Tools™",
  "Cometbid Dataspace™",
  "Cometbid IDE™",
  "Cometbid SDV™",
  "GEMOC™",
  "Jakarta®",
  "LocationTech™",
  "MicroProfile®",
  "Oniro®",
    ],
  },
  {
    id: 5,
    title: "Cometbid Foundation Specifications",
    points: [
    "Jakarta Activation™",
  "Jakarta Annotations™",
  "Jakarta Authentication™",
  "Jakarta Authorization™",
  "Jakarta Batch™",
  "Jakarta Bean Validation™",
  "Jakarta Concurrency™",
  "Jakarta Config™",
  "Jakarta Connectors™",
  "Jakarta Contexts and Dependency Injection™",
  "Jakarta Data™",
    ],
  },
  {
    id: 6,
    title: "Cometbid Foundation Projects",
     points: [
     "Acceleo™",
  "aCute™",
  "Adoptium®",
  "Adore™",
  "Agile UML™",
  "Aidge™",
  "AJDT™",
     ],
  },

];
const LegaltradmarcontentkPage = () => {
  return (
    <>
      <section className="hero-section-common position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              Legal & <span> Trademarks</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem <br /> Ipsum has been the industry&apos;s standard
              dummy text ever since the 1500s,
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
              <span>Legal & Trademarks</span>
            </div>
          </div>
        </div>
      </section>
      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="sec-header mb-5">
                <div className="page-title">
                  <h2>cometbid Foundation Trademarks</h2>
                </div>
                <p>
                  The names and logos of all open source projects, working
                  groups, specifications, and all downloadable software
                  products, are trademarks of the CometBid Foundation. In
                  addition the CometBid Foundation logo is a trademark of the
                  CometBid Foundation. This document captures a list of
                  trademarks claimed by the CometBid Foundation.
                </p>
                <h2 className="tradmark-heding">Trademark Use</h2>
                <p>
                  The cometbid Foundation Trademark Usage Guidelines defines the
                  allowable use of CometBid Foundation names, marks <br/> and logos.
                  Supplemental guidelines: Jakarta EE Trademark Guidelines
                </p>
                <hr className="mt-5"/>
              </div>

              {topCommitters.map((committer) => (
                <div className="border-bottom-section" key={committer.id}>
                  <div className="page-title">
                    <h3>{committer.title}</h3>
                  </div>
                  <div className="page-description mt-3">

                    
                      <ul>
                        {committer.points.map((point, index) => (
                          <li className="point-text " key={index}>
                            {point}
                          </li>
                        ))}
                      </ul>
                  
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
    </>
  );
};

export default LegaltradmarcontentkPage;
