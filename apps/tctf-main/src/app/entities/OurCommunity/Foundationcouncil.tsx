"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import { Pagination } from "react-bootstrap";
import Sidebar from "../../../component/Sidebar/Sidebar";
import "./style.css";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const councilMembers = [
  { name: "Chris Aniszczyk", affiliation: "Linux Foundation", role: "appointed (2008)" },
  { name: "Mikaël Barbero", affiliation: "Cometbid Foundation", role: "appointed (2016)" },
  { name: "Melanie Bats", affiliation: "OBEO", role: "Strategic Developer" },
  { name: "Wayne Beaton", affiliation: "Cometbid Foundation", role: "appointed (2007)" },
  { name: "Jay Billings", affiliation: "", role: "appointed (2016)" },
  { name: "Boris Bokowski", affiliation: "Google LLC", role: "appointed (2007)" },
  { name: "Chuck Bridgham", affiliation: "", role: "Webtools PMC" },
  { name: "Ian Bull", affiliation: "CometbidSource", role: "appointed (2012)" },
  // ...continue for all other members
];

const newsPerPage = 4;

const FoundationcouncilPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = councilMembers.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(councilMembers.length / newsPerPage);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              {" "}
              Foundation <span>Councils</span>
            </h1>
            <p className="hero-description">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem{" "}
              <br /> Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </section>

      <section className="page-navigation-section mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-navigation">
              <Link href="/">Home</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <Link href="/project">Resources</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Foundation Councils</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info Alert */}
      <section className="mt-4">
        <div className="container"></div>
      </section>

      {/* Main Content */}
      <section className="mt-5">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-9 page-title">
              <h2 className="fw-bold mb-4 mailing-heding mt-5 ">CometBid Foundation Councils</h2>
              <p className="mb-3 small maling-list-text-dicription Councils-text">
                As defined by the Cometbid Foundation Development Process, the open source projects
                in Cometbid are guided and co-ordinated by the Architecture Council. The
                Architecture Council is responsible for (i) monitoring, guiding, and influencing the
                software architectures used by Projects, (ii) new project mentoring, and (iii)
                maintaining and revising the Cometbid Foundation Development Process subject to the
                approval of the Board. More explanation of the Architecture Council can be found in
                the Cometbid Foundation Development Process and in the Architecture Council&apos;s
                wiki page.
              </p>

              {/* Table */}
              <div className="table-responsive mt-4">
                <p className="Councils-text">Architecture Council</p>
                <p className="text-end Councils-text">
                  Architecture Council members and the projects they are mentoring.
                </p>
                <table className="table table-bordered table-sm">
                  <thead className="table-primary">
                    <tr>
                      <th>Name</th>
                      <th>Affiliation</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentNews.map((member, index) => (
                      <tr key={index}>
                        <td className="table-data-text">{member.name}</td>
                        <td className="table-data-text">{member.affiliation || "-"}</td>
                        <td className="table-data-text">{member.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="pagination-section d-flex justify-content-center mt-4">
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

            {/* Right Column - Sidebars */}
            <div className="col-md-3">
              <div className="sidebar-title mt-5">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FoundationcouncilPage;
