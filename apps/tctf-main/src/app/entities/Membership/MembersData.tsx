"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Form, Modal, Pagination } from "react-bootstrap";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuSquareUserRound } from "react-icons/lu";
import "./style.css";

import ArrowSvg from "../../../assets/Images/arrow.svg";
import ArrowBlackSvg from "../../../assets/Images/black-right.svg";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import FilterSvg from "../../../assets/Images/lsicon_sort-a-to-z-filled.svg";
import SearchSvg from "../../../assets/Images/searchnormal1.svg";
import LogoSvg from "../../../assets/Images/project-logo.svg";
import CollabLogo1Svg from "../../../assets/Images/company-logo1.svg";
import CollabLogo2Svg from "../../../assets/Images/company-logo2.svg";

// Type assertions for image imports
const Logo: StaticImageData = LogoSvg as unknown as StaticImageData;
const CollabLogo1: StaticImageData = CollabLogo1Svg as unknown as StaticImageData;
const CollabLogo2: StaticImageData = CollabLogo2Svg as unknown as StaticImageData;

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const Filter: StaticImageData = FilterSvg as unknown as StaticImageData;
const Search: StaticImageData = SearchSvg as unknown as StaticImageData;

const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;

const projects = [
  {
    id: 1,
    title: "Serverless Image Processor",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    plan: "Monthly",
    tags: ["AWS", "Azure", "Oracle"],
    logo: Logo,
    collabLogos: [CollabLogo1, CollabLogo2, CollabLogo1, CollabLogo2],
  },
  {
    id: 2,
    title: "Serverless Image Processor",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    plan: "Monthly",
    tags: ["AWS", "Azure", "Oracle"],
    logo: Logo,
    collabLogos: [CollabLogo1, CollabLogo2, CollabLogo1, CollabLogo2],
  },
  {
    id: 3,
    title: "Serverless Image Processor",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    plan: "Monthly",
    tags: ["AWS", "Azure", "Oracle"],
    logo: Logo,
    collabLogos: [CollabLogo1, CollabLogo2, CollabLogo1, CollabLogo2],
  },
  {
    id: 4,
    title: "Serverless Image Processor",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    plan: "Monthly",
    tags: ["AWS", "Azure", "Oracle"],
    logo: Logo,
    collabLogos: [CollabLogo1, CollabLogo2, CollabLogo1, CollabLogo2],
  },
  {
    id: 5,
    title: "Serverless Image Processor",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    plan: "Monthly",
    tags: ["AWS", "Azure", "Oracle"],
    logo: Logo,
    collabLogos: [CollabLogo1, CollabLogo2, CollabLogo1, CollabLogo2],
  },
  {
    id: 6,
    title: "Serverless Image Processor",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    plan: "Monthly",
    tags: ["AWS", "Azure", "Oracle"],
    logo: Logo,
    collabLogos: [CollabLogo1, CollabLogo2, CollabLogo1, CollabLogo2],
  },
  {
    id: 7,
    title: "Serverless Image Processor",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    plan: "Monthly",
    tags: ["AWS", "Azure", "Oracle"],
    logo: Logo,
    collabLogos: [CollabLogo1, CollabLogo2, CollabLogo1, CollabLogo2],
  },
  {
    id: 8,
    title: "Serverless Image Processor",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    plan: "Monthly",
    tags: ["AWS", "Azure", "Oracle"],
    logo: Logo,
    collabLogos: [CollabLogo1, CollabLogo2, CollabLogo1, CollabLogo2],
  },
];

const ITEMS_PER_PAGE = 4;

const MembersData = () => {
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const displayedProjects = projects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  return (
    <>
      <Modal show={show2} onHide={handleClose2} centered className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="filter-modal-wrapper">
            <div className="filter-item">
              <div className="project-filter-title">
                <h4>Short by : </h4>
              </div>
              <div className="project-filter-content d-flex align-items-center gap-2">
                <div className="filter-name">Account Name : </div>
                <button className="btn">
                  <Image src={Filter} alt="Icon" />
                </button>
              </div>
            </div>
            <div className="filter-item">
              <div className="project-filter-title">
                <h4>Filter by : </h4>
              </div>
              <div className="project-filter-content mb-3">
                <div className="filter-name mb-3">Account type : </div>
                <div className="search-input">
                  <input type="text" placeholder="Search " />
                  <button className="btn">
                    <Image src={Search} alt="Icon" />
                  </button>
                </div>
              </div>
              <div className="project-filter-content mb-3">
                <div className="filter-name mb-3">Project : </div>
                <div className="search-input">
                  <input type="text" placeholder="Search " />
                  <button className="btn">
                    <Image src={Search} alt="Icon" />
                  </button>
                </div>
              </div>
              <div className="project-filter-content mb-3">
                <div className="filter-name mb-3">Collaboration : </div>
                <div className="search-input">
                  <input type="text" placeholder="Search " />
                  <button className="btn">
                    <Image src={Search} alt="Icon" />
                  </button>
                </div>
              </div>
            </div>
            <div className="filter-item">
              <div className="project-filter-title">
                <h4>Location </h4>
              </div>
              <div className="project-filter-content">
                <Form>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Country" />
                      </Form.Group>
                    </div>
                    <div className="col-lg-6">
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Select aria-label="Default select example">
                          <option>State</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="col-lg-12">
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Select aria-label="Default select example">
                          <option>Country</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            <div className="filter-item">
              <div className="project-filter-title">
                <h4>Start Date : </h4>
              </div>
              <div className="project-filter-content">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Start Date" />
                  </Form.Group>
                  <Form.Group className="3" controlId="exampleForm.ControlInput2">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control type="date" placeholder="End Date" />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <div className="filter-item">
              <div className="project-filter-title">
                <h4>Status : </h4>
              </div>
              <div className="project-filter-content">
                <Form.Select aria-label="Default select example" className="form-select">
                  <option>Select</option>
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                  <option value="3">Pending</option>
                </Form.Select>
              </div>
            </div>
            <div className="filter-item">
              <div className="project-filter-title">
                <h4>Tags : </h4>
              </div>
              <div className="project-filter-content">
                <Form.Select aria-label="Default select example" className="form-select">
                  <option>Select</option>
                  <option value="1">AWS</option>
                  <option value="2">Azure</option>
                  <option value="3">GCP</option>
                  <option value="4">Oracle</option>
                  <option value="5">Other</option>
                </Form.Select>
              </div>
            </div>
            <button className="apply-filter-btn" onClick={handleClose2}>
              Apply Filter
            </button>
          </div>
        </Modal.Body>
      </Modal>

      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Explore Our <span>Members</span>
                </h1>
                <p className="hero-description">
                  Meet and invite CSF Members to join your team to network and build <br />a teach
                  community that thrives.
                </p>
                <div className="border-button d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/choose-account">
                    <button className="btn btn-primary">
                      Become a Member <Image src={Arrow} alt="Icon" />
                    </button>
                  </Link>
                  <Link href="/collaborations">
                    <button className="btn btn-yellow">
                      Industry Collaborations <Image src={ArrowBlack} alt="Icon" />
                    </button>
                  </Link>
                </div>
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
              <Link href="/csf-membership/benefits">CSF Membership</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <Link href="/collaborations">Explore our Members</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Project List Section Start Here */}
      <section className="project-list-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h3>Organization Memberships</h3>
            </div>
            <div className="show_mobile">
              <div className="page-button">
                <button className="btn-filter" onClick={handleShow2}>
                  Filter By
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 hide_mobile">
              <div className="project-filter">
                <div className="filter-item">
                  <div className="project-filter-title">
                    <h4>Short by : </h4>
                  </div>
                  <div className="project-filter-content d-flex align-items-center gap-2">
                    <div className="filter-name">Account Name : </div>
                    <button className="btn">
                      <Image src={Filter} alt="Icon" />
                    </button>
                  </div>
                </div>
                <div className="filter-item">
                  <div className="project-filter-title">
                    <h4>Filter by : </h4>
                  </div>
                  <div className="project-filter-content mb-3">
                    <div className="filter-name mb-3">Account type : </div>
                    <div className="search-input">
                      <input type="text" placeholder="Search " />
                      <button className="btn">
                        <Image src={Search} alt="Icon" />
                      </button>
                    </div>
                  </div>
                  <div className="project-filter-content mb-3">
                    <div className="filter-name mb-3">Project : </div>
                    <div className="search-input">
                      <input type="text" placeholder="Search " />
                      <button className="btn">
                        <Image src={Search} alt="Icon" />
                      </button>
                    </div>
                  </div>
                  <div className="project-filter-content mb-3">
                    <div className="filter-name mb-3">Collaboration : </div>
                    <div className="search-input">
                      <input type="text" placeholder="Search " />
                      <button className="btn">
                        <Image src={Search} alt="Icon" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="filter-item">
                  <div className="project-filter-title">
                    <h4>Location </h4>
                  </div>
                  <div className="project-filter-content">
                    <Form>
                      <div className="row">
                        <div className="col-lg-6">
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Country" />
                          </Form.Group>
                        </div>
                        <div className="col-lg-6">
                          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Select aria-label="Default select example">
                              <option>State</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                        <div className="col-lg-12">
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Select aria-label="Default select example">
                              <option>Country</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="filter-item">
                  <div className="project-filter-title">
                    <h4>Start Date : </h4>
                  </div>
                  <div className="project-filter-content">
                    <Form>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Start Date</Form.Label>
                        <Form.Control type="date" placeholder="Start Date" />
                      </Form.Group>
                      <Form.Group className="3" controlId="exampleForm.ControlInput2">
                        <Form.Label>End Date</Form.Label>
                        <Form.Control type="date" placeholder="End Date" />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
                <div className="filter-item">
                  <div className="project-filter-title">
                    <h4>Status : </h4>
                  </div>
                  <div className="project-filter-content">
                    <Form.Select aria-label="Default select example" className="form-select">
                      <option>Select</option>
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                      <option value="3">Pending</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="filter-item">
                  <div className="project-filter-title">
                    <h4>Tags : </h4>
                  </div>
                  <div className="project-filter-content">
                    <Form.Select aria-label="Default select example" className="form-select">
                      <option>Select</option>
                      <option value="1">AWS</option>
                      <option value="2">Azure</option>
                      <option value="3">GCP</option>
                      <option value="4">Oracle</option>
                      <option value="5">Other</option>
                    </Form.Select>
                  </div>
                </div>
                <button className="apply-filter-btn">Apply Filter</button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="table-type-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="table-type-title">Details</div>
                  <div className="table-type-title">Collaborations</div>
                </div>
              </div>

              {displayedProjects.map(project => (
                <div key={project.id} className="item-border-table">
                  <div className="item-inner">
                    <div className="left-item">
                      <div className="project-logo">
                        <Image src={project.logo} alt="Icon" />
                      </div>
                      <div className="project-details">
                        <div className="project-title">
                          <h3>{project.title}</h3>
                        </div>
                        <div className="project-description">
                          <p className="mb-2">{project.description}</p>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-2">
                          <div className="project-date small-item">
                            <FaRegCalendarAlt />
                            <p>{project.date}</p>
                          </div>
                          <div className="project-plan small-item">
                            <LuSquareUserRound />
                            <p>{project.plan}</p>
                          </div>
                        </div>
                        <div className="tag-list mb-3">
                          <p className="mb-0 tag-title">Tags:</p>
                          <ul>
                            {project.tags.map((tag, index) => (
                              <li key={index}>{tag}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="project-buttons d-flex gap-3">
                          <button className="blue-btn">Invite</button>
                          <button className="btn-yellow">View Project</button>
                        </div>
                      </div>
                    </div>
                    <div className="right-item">
                      <div className="collaboration-logo-list">
                        {project.collabLogos.map((logo, index) => (
                          <Image key={index} src={logo} alt="Icon" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pagination-section">
                <Pagination>
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                      key={index}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Section End Here */}

      {/* <Subscribe /> */}
    </>
  );
};

export default MembersData;
