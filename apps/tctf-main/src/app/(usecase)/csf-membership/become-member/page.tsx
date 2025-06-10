import React from "react";

import ArrowBlackSvg from "../../../../assets/Images/black-right.svg";
import ArrowLeftSvg from "../../../../assets/Images/arrow-left.svg";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// Create properly typed constants
const ArrowLeft: StaticImageData = ArrowLeftSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;

const BecomeMember = () => {
  return (
    <>
      <div className="tab-content-inner">
        <div className="sec-header text-center mb-5">
          <div className="page-title">
            <h2>How to Become a Member</h2>
          </div>
        </div>

        <div className="sec-body">
          <p>
            In order for your organisation to become a member, you must complete and sign the
            following documents through our Member Enrolment Portal:
          </p>

          <div className="content-item">
            <div className="item-lists">
              <ul>
                <li>
                  Membership Application Form (you will need to indicate which class of membership
                  you are joining. Most organisations join as Contributing members.)
                </li>
                <li>Membership Agreement</li>
                <li>Member Committer and Contributor Agreement (optional, but recommended)</li>
              </ul>
            </div>
            <div className="item-description">
              If you would prefer, you may instead download, complete, and sign the documents email
              to us for processing. Note: Membership in an CometBid Working Group requires the
              execution of the respective Working Group's Participation Agreement. For more
              information, review the list of the current CometBid Working Groups and their
              respective Participation Agreement
            </div>
          </div>

          <div className="content-item">
            <div className="item-title">What is the Member Enrolment Portal?</div>
            <div className="item-description">
              The simplest way to complete and sign the documents is by creating an CometBid account
              (if you don&#39;t already have one) and using our Membership Enrolment Portal. This
              portal will walk you through the documents above and ensure you provide all the
              necessary information. Once complete, our staff will review the submission and send
              you the appropriate agreements for electronic signature.
            </div>
          </div>
          <div className="content-item">
            <div className="item-title">What if I have questions?</div>
            <div className="item-description">
              Our governance page lists all of our key governance documents, including the CometBid
              Foundation Bylaws, IP Policy, Antitrust Policy, Affiliates Guidelines, etc. And feel
              free to email us with any additional questions you have.
            </div>
          </div>
          <div className="content-item">
            <div className="item-title">For Committer Members</div>
            <div className="item-description">
              If you are a Committer who is not already a Member by virtue of your employer being a
              Member, you are welcome to join as an individual Committer Member. The steps involved
              in becoming a committer are described here; individual Committer Members should
              download and email us the Membership Agreement.
            </div>
          </div>
          <div className="content-item">
            <div className="item-title">Cometbid Foundation AISBL</div>
            <div className="item-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
              eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit
              tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris molestie elit,
              et lacinia ipsum quam nec dui. Quisque nec mauris sit amet elit iaculis pretium sit
              amet quis magna. Aenean velit odio, elementum in tempus ut, vehicula eu diam.
              Pellentesque rhoncus aliquam mattis. Ut vulputate eros sed felis sodales nec vulputate
              justo hendrerit. Vivamus varius pretium ligula, a aliquam odio euismod sit amet.
              Quisque laoreet sem sit amet orci ullamcorper at ultricies metus viverra. Pellentesque
              arcu mauris, malesuada quis ornare accumsan, blandit sed diam.
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-40">
        <div className="col-2 col-sm-4 text-start">
          <div className="page-button hide_mobile">
            <Link href="/csf-membership/membership-fees">
              <button className="btn btn-header">
                <Image src={ArrowLeft} alt="Icon" className="me-2" />
                Membership Fees
              </button>
            </Link>
          </div>
          <div className="page-button show_mobile">
            <Link href="/csf-membership/membership-fees">
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
            <Link href="/csf-membership/resources">
              <button className="btn btn-header hide_mobile">
                Resources <Image src={ArrowBlack} alt="Icon" />
              </button>
            </Link>
            <Link href="/csf-membership/resources">
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

export default BecomeMember;
