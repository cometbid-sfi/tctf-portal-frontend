import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaQuoteRight } from "react-icons/fa";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import JoinTeamSvg from "../../../assets/Images/join-team.svg";
import GroupMemberSvg from "../../../assets/Images/groupMember.svg";
import PositionsSvg from "../../../assets/Images/positions.svg";
import Review1Svg from "../../../assets/Images/project-image.svg";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const JoinTeam: StaticImageData = JoinTeamSvg as unknown as StaticImageData;
const GroupMember: StaticImageData = GroupMemberSvg as unknown as StaticImageData;
const Positions: StaticImageData = PositionsSvg as unknown as StaticImageData;
const Review1: StaticImageData = Review1Svg as unknown as StaticImageData;

const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: Review1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nisi. Quisquam, repellat, quia laboriosam natus quae blanditiis repellendus quas vero",
  },
  {
    id: 2,
    name: "John Doe",
    image: Review1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nisi. Quisquam, repellat, quia laboriosam natus quae blanditiis repellendus quas vero",
  },
  {
    id: 3,
    name: "John Doe",
    image: Review1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nisi. Quisquam, repellat, quia laboriosam natus quae blanditiis repellendus quas vero",
  },
];

const CareersOpportunities = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CT Foundation - <span>Careers and Opportunities</span>
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
              <Link href="/about">Our Community</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Careers</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Careers Opportunities Section Start Here */}
      <section className="careers-opportunities-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="careers-opportunities-content">
                <div className="page-title">
                  <h2>Why you should join the team</h2>
                </div>
                <div className="careers-description">
                  Join a collaborative team built around the core values of service, respect,
                  professionalism, and collegiality. We work together to make a difference for our
                  members and open source communities. The CometBid Foundation is global and offers
                  fully remote positions, with staff located in Europe, Canada, and the United
                  States. We understand the importance of work-life balance and support this with
                  many worker-based programs, including Friday flex-time, a right-to-disconnect
                  policy, and “Corporate Recharge” days. And of course, we offer highly competitive
                  compensation along with a comprehensive benefits package.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="careers-graphic">
                <Image src={JoinTeam} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="careers-opportunities-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="careers-graphic">
                <Image src={GroupMember} alt="Image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="careers-opportunities-content">
                <div className="page-title">
                  <h2>What we do at the CometBid Foundation</h2>
                </div>
                <div className="careers-description">
                  Open source is one of the key drivers of innovation today. It touches all sectors
                  of the economy and has a major impact on the software systems that each of us
                  interact with every day. As a Belgian international nonprofit association, the
                  CometBid Foundation is one of the largest open source foundations in the world and
                  acts as a steward for some of the most interesting and important projects in a
                  wide range of technology areas. Each of our team members plays a direct and
                  proactive role in the success of CometBid and its projects and initiatives, and as
                  our team is “dynamic, challenging, and impactful”. Come be a part of our highly
                  motivated and effective team!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="careers-opportunities-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="careers-opportunities-content">
                <div className="page-title">
                  <h2>Current Positions</h2>
                </div>
                <div className="table-box">
                  <div className="table-box-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="table-box-item-content">
                        <h4>Software Engineer</h4>
                        <p>Location: Remote</p>
                      </div>
                      <div className="table-box-item-link">
                        <Link href="/apply_form">View Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="table-box-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="table-box-item-content">
                        <h4>Software Engineer</h4>
                        <p>Location: Remote</p>
                      </div>
                      <div className="table-box-item-link">
                        <Link href="/apply_form">View Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="table-box-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="table-box-item-content">
                        <h4>Software Engineer</h4>
                        <p>Location: Remote</p>
                      </div>
                      <div className="table-box-item-link">
                        <Link href="/apply_form">View Details</Link>
                      </div>
                    </div>
                  </div>
                  <div className="table-box-item">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="table-box-item-content">
                        <h4>Software Engineer</h4>
                        <p>Location: Remote</p>
                      </div>
                      <div className="table-box-item-link">
                        <Link href="/apply_form">View Details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="careers-graphic">
                <Image src={Positions} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Careers Opportunities End Here */}

      {/* Review Section Start Here */}
      <section className="review-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title text-center w-100">
              <h2>Hear it from our Team</h2>
            </div>
          </div>
          <div className="row">
            {reviews.map(review => (
              <div className="col-md-4" key={review.id}>
                <div className="review-item">
                  <div className="review-item-content">
                    <div className="review-icon">
                      <FaQuoteRight />
                    </div>
                    <div className="review-item-content-image">
                      <Image src={review.image} alt="Image" />
                    </div>
                  </div>
                  <div className="review-content">
                    <p>{review.content}</p>
                    <h6>{review.name}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Review Section End Here */}
    </>
  );
};

export default CareersOpportunities;
