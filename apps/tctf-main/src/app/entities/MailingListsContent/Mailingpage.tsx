"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import MaterialSvg from "../../../assets/Images/material-symbols_info-rounded.jpg";
import "./style.css";
import { Pagination } from "react-bootstrap";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const Material: StaticImageData = MaterialSvg as unknown as StaticImageData;

const mailingLists = [
  { name: "2-dev", description: "2 developer discussions" },
  { name: "2-Security", description: "2 security list" },
  { name: "4diac-dev", description: "4diac developer discussions" },
  { name: "4diac-security", description: "4diac Security list" },
];
const newsPerPage = 4;

const MailingListContentPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = mailingLists.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(mailingLists.length / newsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              {" "}
              Mailing <span>Lists</span>
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
              <span>Mailing List</span>
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
            <div className="col-lg-9">
              <div className="d-flex align-items-start bg-light p-3  info-box ">
                <Image
                  src={Material}
                  alt="info-icon"
                  className="me-2 mt-1"
                  width={24}
                  height={24}
                />
                <small className="text-muted info-text">
                  Some of the services that support the smooth operation of our websites are still
                  in the process of being restored. As a result, certain features—such as images and
                  committer paperwork—may be temporarily unavailable. Our team is actively working
                  to resolve these issues and restore full functionality as soon as possible. Thank
                  you for your patience and understanding.
                </small>
              </div>
              <h2 className="fw-bold mb-4 mailing-heding mt-5">CometBid Mailing Lists</h2>
              <p className="mb-3 small maling-list-text-dicription">
                Below is a listing of all the public mailing lists at CometBid.com. When posting
                emails to our mailing lists, please remember that these lists are public, avoid
                posting personal or private information.If you are having trouble using our mailing
                lists, please contact webmaster@cometbid-foundation.org.
              </p>

              {/* Table */}
              <div className="table-responsive mt-4">
                <table className="table table-bordered table-sm">
                  <thead className="table-primary  ">
                    <tr>
                      <th className="table-heding-1">Lists</th>
                      <th className="table-heding-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentNews.map((list, index) => (
                      <tr key={index}>
                        <td className="table-data">
                          {" "}
                          <Link href={`/maling/${list.name}`}>{list.name}</Link>
                        </td>
                        <td className="table-data-2">{list.description}</td>
                      </tr>
                    ))}

                    {/* Repeat or map other rows here */}
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
            <div className="col-lg-3">
              {/* Mailing List Card */}
              <div className="border p-3 mb-4">
                <h6 className="fw-semibold mb-2 mailing-list-card-text">Mailing List</h6>
                <hr />

                <ul className="list-unstyled mb-0">
                  <li className="text-decoration-none text-dark d-block mb-2">
                    <Link
                      href="/mailing-list"
                      className="text-decoration-none text-dark d-block mb-2 link-text"
                    >
                      View all Mailing List
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mailing-list"
                      className="text-decoration-none text-dark d-block mb-2 link-text"
                    >
                      View Archived Mailing List
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/privacy-policy"
                      className="text-decoration-none text-dark d-block mb-2 link-text"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/terms-use"
                      className="text-decoration-none text-dark d-block link-text"
                    >
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Login Box */}
              <div className="border p-3 text-center">
                <h6 className="fw-semibold text-start login-box">Login To Subscribe</h6>
                <hr />
                <p className="mb-3 text-box">
                  To subscribe to a mailing list, you
                  <br />
                  must have an CometBid.org account.
                </p>
                <button className="w-100 btn-login-text">
                  <Link href="/login">Login</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MailingListContentPage;
