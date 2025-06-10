import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ArrowLeftSvg from "../../../../assets/Images/arrow-left.svg";

// Create properly typed constants
const ArrowLeft: StaticImageData = ArrowLeftSvg as unknown as StaticImageData;

const MemberPortal = () => {
  return (
    <>
      <div className="tab-content-inner">
        <div className="sec-header text-center mb-5">
          <div className="page-title">
            <h2>Member Portal</h2>
            <p>
              The CSF member portal provides Member organizations with insights into their
              participation in the CSF community. Find out about industry collaborations and
              projects your organization is involved in and access resources curated for Members.
            </p>
          </div>
        </div>

        <div className="sec-body">
          <p className="text-center">
            Additionally, this portal allows members to update key data related to their membership,
            including their logo, corporate description, and key contacts.
          </p>
        </div>
      </div>

      <div className="row mt-40">
        <div className="col-2 col-sm-4 text-start">
          <div className="page-button hide_mobile">
            <Link href="/csf-membership/resources">
              <button className="btn btn-header">
                <Image src={ArrowLeft} alt="Icon" className="me-2" />
                Resources
              </button>
            </Link>
          </div>
          <div className="page-button show_mobile">
            <Link href="/csf-membership/resources">
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
      </div>
    </>
  );
};

export default MemberPortal;
