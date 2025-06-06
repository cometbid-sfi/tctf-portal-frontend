"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./style.css";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import projectmanagement from "../../../assets/Images/material-symbols_info-rounded.jpg"
import { Pagination } from "react-bootstrap";

const forumData = [
    {
        title: 'AspectJ',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'Java Development Tools (JDT)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'Objectteams',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'PHP Development Tools (PDT)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'CometBid Web Tools Platform Project (WTP)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'ServerTools (WTP)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'CometBid Advanced Scripting Environment (EASE)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'CometBid Common Security Infrastructure',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'C / C++ IDE (CDT)',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },
    {
        title: 'Project Proposals',
        description: 'Come here to participate in technical discussions related to the AspectJ Development Tools (AJDT) project which adds support for aspect-oriented programming to the CometBid JDT. Want to know more? [project home]',
        messages: '71,693',
        topics: '25,167',
        date: 'Wed, 15 January 2025',
        user: 'CometBid User',
        icon: projectmanagement
    },


];

const newsPerPage = 6;


const ForumsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentfrom = forumData.slice(indexOfFirstNews, indexOfLastNews);
    const totalPages = Math.ceil(forumData.length / newsPerPage);
    
    const handlePageChange = (pageNumber: any) => {
      setCurrentPage(pageNumber);
    };
    return (
        <>
            <section className="hero-section-common project-hero-section position-relative mt-80">
                <div className="container">
                    <div className="hero-content text-center box-main-text">
                        <h1 className="hero-title">CometBid Community <span>Forums</span></h1>
                        <p className="hero-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                        </p>
                    </div>
                </div>
            </section>

            {/* Page-nevigation Section Start Here */}
            <section className="page-navigation-section mt-5">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="page-navigation">
                            <Link href="/">Home</Link>
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <Link href="/resources">Recources</Link>
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span>Forums</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page-nevigation Section End Here */}
            <section className="forums-section">
                <div className="container">
                    <div className="page-title mt-5 ">
                        <h2>
                            CometBid Community Forums
                        </h2>
                        <p>
                            These forums have been closed. They were a way of communicating with the community of people developing and using CometBid-based tools hosted at CometBid.org.
                            All contributions you make to our web site are governed by our Terms Of Use. Your interactions with the CometBid Foundation web properties and any information you may provide us about yourself are governed by our Privacy Policy.
                        </p>
                    </div>
                </div>
            </section>
            <section className="forum-table-section py-5">
                <div className="container">
                    <div className="table-responsive">
                        <table className="table align-middle forum-table border main-table">
                            <thead className="table-light">
                                <tr>
                                    <th className="table-heding">Forum</th>
                                    <th className="table-heding">Messages</th>
                                    <th className="table-heding">Topics</th>
                                    <th className="table-heding-last-massage">Last Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentfrom.map((forum, index) => (
                                    <tr key={index}>
                                        {/* Forum Column with Icon + Name + Description */}
                                        <td>
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="forum-icon mt-1">
                                                    <Image
                                                        src={forum.icon}
                                                        alt={`${forum.title} Icon`}
                                                        width={30}
                                                        height={30}
                                                    />
                                                </div>
                                                <div className="forum-info">
                                                    <h6 className="mb-1 fw-semibold info-text"><Link href="" >{forum.title}</Link></h6>
                                                    <p className="mb-0 small text-muted info-text-dicription">
                                                        {forum.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Messages */}
                                        <td>
                                            <span className="number">{forum.messages}</span>
                                        </td>

                                        {/* Topics */}
                                        <td>
                                            <span className="number">{forum.topics}</span>
                                        </td>

                                        {/* Last Message */}
                                        <td className="last-message">
                                            <div className="small">
                                                <span className="day-name">{forum.date}</span> <br />
                                                <span className="text-muted text-cp-name">By: {forum.user}</span>
                                            </div>
                                        </td>
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
            </section>


        </>
    );
};

export default ForumsPage;