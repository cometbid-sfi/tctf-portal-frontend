import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

import ParticipateSvg from "../../../../assets/Images/participate.svg";
import StrategicSvg from "../../../../assets/Images/strategic.svg";
import InnovationSvg from "../../../../assets/Images/innovation.svg";
import ArrowBlackSvg from "../../../../assets/Images/black-right.svg";
import Link from "next/link";

// Create properly typed constants for all SVG imports
const Participate: StaticImageData = ParticipateSvg as unknown as StaticImageData;
const Strategic: StaticImageData = StrategicSvg as unknown as StaticImageData;
const Innovation: StaticImageData = InnovationSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;

type CommunityItem = {
  icon: StaticImageData;
  title: string;
  description: string;
};

const community: CommunityItem[] = [
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

const Benefits = () => {
  return (
    <>
      <div className="sec-header text-center mb-5">
        <div className="page-title">
          <h2>Why become a Member of CSF Community?</h2>
        </div>
        <p>
          Take an active role in supporting sustainable commercializable open source technologies
          that benefit all.
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

      <div className="row mt-40">
        <div className="col-2 col-sm-4 text-start">
          <div className="page-button hide_mobile"></div>
        </div>
        <div className="col-8 col-sm-4 text-center">
          <Link href="/choose-account">
            <button className="btn-blue">Become a Member</button>
          </Link>
        </div>
        <div className="col-2 col-sm-4 text-end">
          <div className="page-button justify-content-end">
            <Link href="/csf-membership/membership-levels">
              <button className="btn btn-header hide_mobile">
                Membership Levels <Image src={ArrowBlack} alt="Icon" />
              </button>
            </Link>
            <Link href="/csf-membership/membership-levels">
              <button className="btn btn-pagination show_mobile">
                <Image src={ArrowBlack} alt="Icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
