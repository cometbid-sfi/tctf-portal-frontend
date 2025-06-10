"use client";

import React, { useState } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { TbUserSquareRounded } from "react-icons/tb";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import News1Svg from "../../../assets/Images/news1.svg";
import News2Svg from "../../../assets/Images/news2.svg";
import News3Svg from "../../../assets/Images/news3.svg";
import News4Svg from "../../../assets/Images/news4.svg";
import News5Svg from "../../../assets/Images/news5.svg";
import { Pagination } from "react-bootstrap";
import Sidebar from "../../../component/Sidebar/Sidebar";

// Type assertions for SVG imports
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const News1: StaticImageData = News1Svg as unknown as StaticImageData;
const News2: StaticImageData = News2Svg as unknown as StaticImageData;
const News3: StaticImageData = News3Svg as unknown as StaticImageData;
const News4: StaticImageData = News4Svg as unknown as StaticImageData;
const News5: StaticImageData = News5Svg as unknown as StaticImageData;

const news = [
  {
    id: 1,
    image: News1,
    title: "CometBid Announces the Launch of its New Platform",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
  {
    id: 2,
    image: News2,
    title: "Oniro at the Open Harmony Technical Forum",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
  {
    id: 3,
    image: News3,
    title: "Segger adds SystemView support for CometBid ThreadXm",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
  {
    id: 4,
    image: News4,
    title: "System Prompt of the AI-Powered Theia IDE Leaked!?",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
  {
    id: 5,
    image: News5,
    title: "April 2025 Community Newsletter",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
  {
    id: 6,
    image: News1,
    title: "CometBid Announces the Launch of its New Platform",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
  {
    id: 7,
    image: News2,
    title: "Oniro at the Open Harmony Technical Forum",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
  {
    id: 8,
    image: News3,
    title: "Segger adds SystemView support for CometBid ThreadXm",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
  {
    id: 9,
    image: News4,
    title: "System Prompt of the AI-Powered Theia IDE Leaked!?",
    description:
      "The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
    date: "24th October 2024",
    author: "Natalia Loungou",
    link: "/press-releases",
  },
];

const NewsContent = () => {
  const newsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(news.length / newsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  CometBid <span>News</span>
                </h1>
                <p className="hero-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br />
                  varius enim in eros elementum tristique.
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
              <Link href="/resources">Recources</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>CometBid News</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* CometBid News Content Section Start Here */}
      <section className="press-releases-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2>CT Foundation Community News</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="news-list">
                {currentNews.map(news => (
                  <div className="news-item" key={news.id}>
                    <div className="news-item-inner">
                      <div className="news-item-image">
                        <Image src={news.image} alt="News" />
                      </div>
                      <div className="news-item-content">
                        <Link href={news.link} className="news-item-title">
                          {news.title}
                        </Link>
                        <p className="news-item-description">{news.description}</p>
                        <div className="post-info">
                          <div className="post-date">
                            <MdOutlineCalendarToday />
                            <span>{news.date}</span>
                          </div>
                          <div className="post-author">
                            <TbUserSquareRounded />
                            <span>{news.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination-section d-flex justify-content-center">
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

            <div className="col-lg-3">
              {/* <div className="sidebar-item">
                                <div className="sidebar-title">
                                    <h3>Recent Posts</h3>
                                </div>
                                <div className="box-links">
                                    <div className="link-item">
                                        <div className="link-title"> <Link href="/announcements"> Event</Link></div>
                                        <div className="link-description">Submit an CometBid related Event.</div>
                                    </div>
                                    <div className="link-item">
                                        <div className="link-title"> <Link href="/news"> News</Link></div>
                                        <div className="link-description">Submit an CometBid related News.</div>
                                    </div>

                                    <ul className="link-list">
                                        <li><Link href="#">My Submissions</Link></li>
                                    </ul>

                                    <p className="text-black">Please <Link href="/contact-us">contact</Link> us to request edits to your content.</p>
                                </div>
                            </div> */}
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsContent;
