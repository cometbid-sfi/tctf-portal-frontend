import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import StaffLongSvg from "../../../assets/Images/staff.svg";
import Sidebar from "../../../component/Sidebar/Sidebar";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const StaffLong: StaticImageData = StaffLongSvg as unknown as StaticImageData;

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

const Structure = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CT Foundation <span>Structure</span>
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
              <span>Structure</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Staff List Section Start Here */}
      <section className="staff-list-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="sec-header mb-5">
                <div className="page-title">
                  <h2>CTF Community Staff</h2>
                </div>
                <p>
                  {
                    "The CometBid Foundation is fortunate to have some very talented people working full-time on behalf of the CometBid community. Below is the list of our staff."
                  }
                </p>
                <p>
                  {
                    "CometBid email addresses all follow the firstname.lastname@cometbid-foundation.org convention."
                  }
                </p>
              </div>

              <div className="staff-list-wrapper">
                <div className="page-title">
                  <h3>Regional Board of Directors</h3>
                </div>
                <div className="row mt-5">
                  {staffMembers.map((staff, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="staff-card">
                        <div className="staff-img">
                          <Image src={staff.image} alt={staff.name} width={100} height={100} />
                        </div>
                        <div className="staff-info">
                          <h4>{staff.name}</h4>
                          <p>{staff.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="staff-list-wrapper">
                <div className="page-title">
                  <h3>CT Foundation Leadership</h3>
                </div>
                <div className="row mt-5">
                  {staffMembers.map((staff, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="staff-card">
                        <div className="staff-img">
                          <Image src={staff.image} alt={staff.name} width={100} height={100} />
                        </div>
                        <div className="staff-info">
                          <h4>{staff.name}</h4>
                          <p>{staff.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="staff-list-wrapper">
                <div className="page-title">
                  <h3>Supporting our Communities</h3>
                </div>
                <div className="row mt-5">
                  {staffMembers.map((staff, index) => (
                    <div className="col-md-3" key={index}>
                      <div className="staff-card">
                        <div className="staff-img">
                          <Image src={staff.image} alt={staff.name} width={100} height={100} />
                        </div>
                        <div className="staff-info">
                          <h4>{staff.name}</h4>
                          <p>{staff.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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

export default Structure;
