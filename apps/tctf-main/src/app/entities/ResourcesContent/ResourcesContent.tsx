import Image, { StaticImageData } from "next/image";
import React from "react";

import ParticipateSvg from "../../../assets/Images/participate.svg";
import StrategicSvg from "../../../assets/Images/strategic.svg";

// Type assertions for SVG imports
const Participate: StaticImageData = ParticipateSvg as unknown as StaticImageData;
const Strategic: StaticImageData = StrategicSvg as unknown as StaticImageData;

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
  {
    icon: Strategic,
    title: "Membership Application Form",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: Strategic,
    title: "Membership Application Form",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: Strategic,
    title: "Membership Application Form",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: Strategic,
    title: "Membership Application Form",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    icon: Strategic,
    title: "Membership Application Form",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];
const ResourcesContent = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Resources <span>Hub</span>
                </h1>
                <p className="hero-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br />
                  varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End Here */}

      {/* Resources Content Section Start Here */}
      <section className="resources-content-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2>Recources</h2>
            </div>
          </div>
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
      </section>
      {/* Resources Content Section End Here */}
    </>
  );
};

export default ResourcesContent;
