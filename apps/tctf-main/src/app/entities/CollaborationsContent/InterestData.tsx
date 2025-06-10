"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Form, Modal, Pagination } from "react-bootstrap";
import "./style.css";

import ArrowSvg from "../../../assets/Images/arrow.svg";
import ArrowBlackSvg from "../../../assets/Images/black-right.svg";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import FilterSvg from "../../../assets/Images/lsicon_sort-a-to-z-filled.svg";
import SearchSvg from "../../../assets/Images/searchnormal1.svg";
import ProjectImageSvg from "../../../assets/Images/project-image.svg";

// Type assertions for image imports
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const Filter: StaticImageData = FilterSvg as unknown as StaticImageData;
const Search: StaticImageData = SearchSvg as unknown as StaticImageData;
const ProjectImage: StaticImageData = ProjectImageSvg as unknown as StaticImageData;

const projects = [
  {
    id: 1,
    title: "Serverless Image Processor",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["AWS", "Azure", "Oracle"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 2,
    title: "AI Chatbot Assistant",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["Machine Learning", "NLP", "Python"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 3,
    title: "Blockchain Secure Ledger",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["Blockchain", "Ethereum", "Security"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 4,
    title: "IoT Smart Home System",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["IoT", "Raspberry Pi", "Automation"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 5,
    title: "Cloud-Based CRM System",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["Cloud", "SaaS", "Business"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 6,
    title: "Cloud-Based CRM System",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["Cloud", "SaaS", "Business"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 7,
    title: "Serverless Image Processor",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["AWS", "Azure", "Oracle"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 8,
    title: "AI Chatbot Assistant",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["Machine Learning", "NLP", "Python"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 9,
    title: "Blockchain Secure Ledger",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["Blockchain", "Ethereum", "Security"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
  {
    id: 10,
    title: "IoT Smart Home System",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    tags: ["IoT", "Raspberry Pi", "Automation"],
    status: "Active",
    image: ProjectImage,
    links: [
      { text: "Read", href: "#" },
      { text: "Read Report", href: "#" },
      { text: "View Members", href: "#" },
    ],
  },
];

const InterestData = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const projectsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} centered className="custom-modal">
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
                <div className="filter-name">Collaboration Name : </div>
                <button className="btn">
                  <Image src={Filter} alt="Icon" />
                </button>
              </div>
            </div>
            <div className="filter-item">
              <div className="project-filter-title">
                <h4>Filter by : </h4>
              </div>
              <div className="project-filter-content">
                <div className="filter-name mb-3">Collaboration Name : </div>
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
            <button className="apply-filter-btn" onClick={handleClose}>
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
                  Explore Our Industry <span>Collaborations</span>
                </h1>
                <div className="hide_mobile">
                  <p className="hero-description">
                    CSF Community collaborations allow organizations to combine the best practices
                    of open source
                    <br /> development with a set of services required for open innovation, enabling
                    organizations to foster industry collaborations.
                  </p>
                </div>
                <div className="show_mobile">
                  <p className="hero-description">
                    CSF Community collaborations allow organizations to combine the best practices
                    of open source development with a set of services required for open innovation,
                    enabling organizations to foster industry collaborations.
                  </p>
                </div>
                <div className="border-button d-flex gap-3 justify-content-center flex-wrap">
                  <Link href="/choose-account">
                    <button className="btn btn-primary">
                      Become a Member <Image src={Arrow} alt="Icon" />
                    </button>
                  </Link>
                  <Link href="/collaborations">
                    <button className="btn btn-yellow">
                      About Collaborations <Image src={ArrowBlack} alt="Icon" />
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
              <Link href="/collaborations">Collaborations</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Interest Groups</span>
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
              <h3>Interest Groups</h3>
            </div>
            <div className="show_mobile">
              <div className="page-button">
                <button className="btn-filter" onClick={handleShow}>
                  Filter By
                </button>
              </div>
            </div>
            <div className="hide_mobile">
              <div className="page-button">
                <Link href="/collaborations/working-group">
                  <button className="btn btn-header">
                    Working Group <Image src={ArrowBlack} alt="Icon" />
                  </button>
                </Link>
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
                    <div className="filter-name">Collaboration Name : </div>
                    <button className="btn">
                      <Image src={Filter} alt="Icon" />
                    </button>
                  </div>
                </div>
                <div className="filter-item">
                  <div className="project-filter-title">
                    <h4>Filter by : </h4>
                  </div>
                  <div className="project-filter-content">
                    <div className="filter-name mb-3">Collaboration Name : </div>
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
              <div className="row">
                {currentProjects.map(project => (
                  <div className="col-md-6 col-lg-6" key={project.id}>
                    <div className="project-item">
                      <div className="project-image">
                        <Image src={project.image} alt={project.title} />
                        <div className="project-status">{project.status}</div>
                      </div>
                      <div className="project-content">
                        <div className="project-description">
                          <p className="mb-3">{project.description}</p>
                        </div>
                        <div className="resource-list mb-3">
                          <p className="mb-2">Resources:</p>
                          <ul>
                            <li>
                              <Link href="#">Working Group Charter</Link>
                            </li>
                            <li>
                              <Link href="#">Participation Agreement</Link>
                            </li>
                            <li>
                              <Link href="#">Sponsorship Agreement</Link>
                            </li>
                            <li>
                              <Link href="#">Working Group Members</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="tag-list mb-3">
                          <p className="mb-0">Tags:</p>
                          <ul>
                            {project.tags.map((tag, index) => (
                              <li key={index}>{tag}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="btn-list">
                          <button className="btn-outline mb-3">Contact us about membership</button>
                          <button className="btn-blue-color">
                            My Organization is ready to join now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pagination-section">
                <Pagination>
                  <Pagination.Prev
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  />
                  {Array.from({ length: totalPages }).map((_, index) => (
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
    </>
  );
};

export default InterestData;
