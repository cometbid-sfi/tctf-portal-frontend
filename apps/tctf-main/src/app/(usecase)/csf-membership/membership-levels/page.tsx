import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import ArrowBlackSvg from "../../../../assets/Images/black-right.svg";
import ArrowLeftSvg from "../../../../assets/Images/arrow-left.svg";

// Create properly typed constants
const ArrowLeft: StaticImageData = ArrowLeftSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;

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
const MembershipLevels = () => {
  return (
    <>
      <div className="tab-content-inner">
        <div className="sec-header text-center mb-5">
          <div className="page-title">
            <h2>Membership at the Cometbid Foundation</h2>
          </div>
          <p>
            The Foundation offers three Account types: <span>Individual</span>, <span>Group</span>,
            and <span>Organization</span>.
          </p>
        </div>

        <div className="sec-body">
          <p>
            The Foundation also offers four levels of membership, irrespective of account type:{" "}
            <span>Strategic</span>, <span>Contributing</span>,<span>Associate</span>, and{" "}
            <span>Committer</span>.
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

      <div className="row mt-40">
        <div className="col-2 col-sm-4 text-start">
          <div className="page-button hide_mobile">
            <Link href="/csf-membership/benefits">
              <button className="btn btn-header">
                <Image src={ArrowLeft} alt="Icon" className="me-2" />
                Benefits
              </button>
            </Link>
          </div>
          <div className="page-button show_mobile">
            <Link href="/csf-membership/benefits">
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
            <Link href="/csf-membership/membership-fees">
              <button className="btn btn-header hide_mobile">
                Membership Fees <Image src={ArrowBlack} alt="Icon" />
              </button>
            </Link>
            <Link href="/csf-membership/membership-fees">
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

export default MembershipLevels;
