import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import ParticipateSvg from "../../../../assets/Images/participate.svg";
import StrategicSvg from "../../../../assets/Images/strategic.svg";
import ArrowBlackSvg from "../../../../assets/Images/black-right.svg";
import ArrowLeftSvg from "../../../../assets/Images/arrow-left.svg";

// Create properly typed constants for all SVG imports
const Participate: StaticImageData = ParticipateSvg as unknown as StaticImageData;
const Strategic: StaticImageData = StrategicSvg as unknown as StaticImageData;
const ArrowLeft: StaticImageData = ArrowLeftSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;

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

const Resources = () => {
  return (
    <>
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
              Serving our community is the number one priority of the Cometbid Foundation.To keep
              our community connected, we send out a monthly newsletter to member companies and
              member committers. Check out some past issues of our member newsletter
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-40">
        <div className="col-2 col-sm-4 text-start">
          <div className="page-button hide_mobile">
            <Link href="/csf-membership/become-member">
              <button className="btn btn-header">
                <Image src={ArrowLeft} alt="Icon" className="me-2" />
                Become Member
              </button>
            </Link>
          </div>
          <div className="page-button show_mobile">
            <Link href="/csf-membership/become-member">
              <button className="btn btn-pagination">
                <Image src={ArrowLeft} alt="Icon" />
              </button>
            </Link>
          </div>
        </div>
        <div className="col-8 col-sm-4 text-center">
          <Link href="/choose-account">
            <button className="btn-blue">Become a Member</button>
          </Link>
        </div>
        <div className="col-2 col-sm-4 text-end">
          <div className="page-button justify-content-end">
            <Link href="/csf-membership/member-portal">
              <button className="btn btn-header hide_mobile">
                Member Portal <Image src={ArrowBlack} alt="Icon" />
              </button>
            </Link>
            <Link href="/csf-membership/member-portal">
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

export default Resources;
