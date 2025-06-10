import React from "react";

import Blockchain from "../../../assets/Images/blockchain.svg";
import CloudNative from "../../../assets/Images/cloudnative.svg";
import Edge from "../../../assets/Images/edge.svg";
import Financial from "../../../assets/Images/financial.svg";
import Robotics from "../../../assets/Images/robotics.svg";
import Automotive from "../../../assets/Images/automotive.svg";
import AgroTech from "../../../assets/Images/agrotech.svg";
import Asciidoc from "../../../assets/Images/asciidoc-logo.png";
import Dataspace from "../../../assets/Images/dataspace-logo.png";
import Jakarta from "../../../assets/Images/jakarta-ee-logo (1).png";
import Microprofile from "../../../assets/Images/microprofile-logo.png";
import Orc from "../../../assets/Images/orc-logo.png";
import Osgi from "../../../assets/Images/osgi-alliance-logo.svg";
import Sparkplug from "../../../assets/Images/sparkplug-logo.png";
import AltArrow from "../../../assets/Images/alt-arrow.svg";

import "./style.css";
import Image from "next/image";
import Link from "next/link";
const OurServies = [
    {
        id: 1,
        image: Blockchain,
        title: "Community Driven",
        description: "Our specification process is designed to be inclusive of everyone from the largest corporations to motivated individuals."
    },
    {
        id: 2,
        image: CloudNative,
        title: "Flexible",
        description: "Specifications allow implementations to have the highest degree of flexibility and interchangeability for adjustments, enhancements, replacements, and upgrades."
    },
    {
        id: 3,
        image: Edge,
        title: "Ecosystem Enablement",
        description: "Our specification processes enable independent implementations under both proprietary and open source licensing models."
    },
    {
        id: 4,
        image: Financial,
        title: "Investment Protection",
        description: "Specifications reduce the risk of vendor lock-in by ensuring implementations meet compatibility and interoperability requirements."
    },
    {
        id: 5,
        image: Robotics,
        title: "Vendor Neutral",
        description: "Open and transparent development processes allow individuals and organizations to collaborate on specifications. Well-documented governance policies and processes ensure that the results are developed and delivered in a vendor neutral manner."
    },
    {
        id: 6,
        image: Automotive,
        title: "Open Source",
        description: "The EFSP complies with the Open Standards Requirement for Software established by the Open Source Initiative, ensuring that all CometBid Foundation specifications can be implemented in open source."
    },
    {
        id: 7,
        image: AgroTech,
        title: "Proven",
        description: "The EFSP is built on more than 17 years of open source stewardship and used by multi-billion-dollar ecosystems."
    },

    {
        id: 8,
        image: AgroTech,
        title: "Compatibility and Branding",
        description: "The EFSP allows for the development of a compatibility brand. Established compatibility brands clearly identify the compatibility, interoperability, and sustainability of production-ready open source and commercial implementations."
    }
]

const boxes = [
    {
        id: 1,
        icon: Asciidoc,
        // count: "01",
        title: "Vendor Neutral Governance",
        description: "The CometBid Foundation enables individuals and organisations to collaborate under a vendor-neutral governance model"
    },
    {
        id: 2,
        icon: Dataspace,
        // count: "02",
        title: "Collaboration Management",
        description: "The CometBid Foundation enables individuals and organisations to collaborate under a vendor-neutral governance model"
    },
    {
        id: 3,
        icon: Jakarta,
        // count: "03",
        title: "Branding and Compatibility",
        description: "Building scalable and robust technology solutions for diverse industry needs."
    },
    {
        id: 4,
        icon: Microprofile,
        // count: "04",
        title: "Specification Development",
        description: "Fostering an inclusive environment for developers, businesses, and researchers."
    },
    {
        id: 5,
        icon: Orc,
        // count: "05",
        title: "Vendor Neutral Governance",
        description: "The CometBid Foundation enables individuals and organisations to collaborate under a vendor-neutral governance model"
    },
    {
        id: 6,
        icon: Osgi,
        // count: "06",
        title: "Collaboration Management",
        description: "The CometBid Foundation enables individuals and organisations to collaborate under a vendor-neutral governance model"
    },
    {
        id: 7,
        icon: Sparkplug,
        // count: "07",
        title: "Branding and Compatibility",
        description: "Building scalable and robust technology solutions for diverse industry needs."
    },

];

const pagescomponent = () => {
    return (
        <>
            <section className="hero-section-common project-hero-section position-relative mt-80">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9">
                            <div className="hero-content text-center">
                                <h1 className="hero-title">
                                    {" "}
                                    <span>Specifications</span>
                                </h1>
                                <p className="hero-description">
                                    The CometBid Foundation Specification Process EFSPprovides
                                    an open and transparent framework for the development of
                                    community-driven, open source-friendly specifications.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              <section className="page-navigation-section mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-navigation">
              <Link href="/">Home</Link>
              <span><Image src={AltArrow} alt="Icon" /></span>
              <Link href="/project">Projects</Link>
              <span><Image src={AltArrow} alt="Icon" /></span>
              <span>Specifications</span>
            </div>
          </div>
        </div>
      </section>

            <section className="participate-section mt-80">
                <div className="container">
                    <div className="sec-header text-center mb-5">
                        <div className="page-title">
                            <h2>Specifications</h2>
                        </div>
                        <p>The CometBid Foundation facilitates the development of code-first, open specifications that enable the compatibility, interoperability, and sustainability of both proprietary and open source independent implementations.
                            Specifications at the CometBid Foundation are developed through the CometBid Foundation Specification Process EFSP. The EFSP provides a defined, structured, and trusted legal framework and governance process for the development of royalty-free open specifications based on mature open source processes. The EFSP allows the community to develop specifications in a vendor neutral, community-driven way.

                            All specifications produced under the EFSP are designed to enable independent implementations in any open source or commercial application.</p>
                    </div>

                </div>
            </section>
            <section className="our-services mt-80">
                <div className="container">
                    <div className="why-choose-us-subtitle mb-2">
                        {/* Our Services <Image src={Plan} alt="Icon" /> */}
                    </div>
                    <div className="page-title mb-5">
                        <h2>A Proven Approach</h2>
                    </div>

                    <div className="row">
                        {OurServies && OurServies.map((item, index) => (
                            <div className="col-md-6 col-lg-4 mb-3" key={index}>
                                <div className="our-services-item">
                                    <div className="our-services-icon img">
                                        <Image src={item.image} alt="Icon" className="Iconimg" />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="collaborating-section mt-80  callabratingBox">
                <div className="container">
                    <div className="sec-header text-center mb-5">
                        <div className="page-title">
                            <h2>Current Initiatives </h2>
                        </div>
                    </div>
                    <div className="row">
                        {boxes.map((box) => (
                            <div className="col-lg-6 mb-4" key={box.id}>
                                <div className="border-box">
                                    <div className="box-inner">
                                        <div className="box-icon">
                                            <Image src={box.icon} alt="Icon" className="boxiconimg" />
                                            {/* <div className="count">{box.count}</div> */}
                                        </div>
                                        <div className="box-content">
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
        </>
    );
};
export default pagescomponent;
