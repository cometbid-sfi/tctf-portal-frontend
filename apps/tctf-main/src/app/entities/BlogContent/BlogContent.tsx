"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";


import "./style.css";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import News2 from "../../../assets/Images/news1.svg";
import News3 from "../../../assets/Images/news2.svg";
import News4 from "../../../assets/Images/news3.svg";
import News5 from "../../../assets/Images/news4.svg";
import News6 from "../../../assets/Images/news5.svg";
import SentEmail from "../../../assets/Images/sent-email.svg";
import User from "../../../assets/Images/project-image.svg";
import { Pagination } from "react-bootstrap";
const news = [
    {
        id: 1,
        image: SentEmail,
        title: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Design",
        author: "Natalia Loungou"
    },
    {
        id: 2,
        image: News2,
        title: "Migrating to Linear 101",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Product",
        author: "Natalia Loungou"
    },
    {
        id: 3,
        image: News3,
        title: "Building your API Stack",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Software Engineering",
        author: "Natalia Loungou"
    },
    {
        id: 4,
        image: News4,
        title: "How collaboration makes us better designers",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Design",
        author: "Natalia Loungou"
    },
    {
        id: 5,
        image: News5,
        title: "Our top 10 Javascript frameworks to use",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Software Engineering",
        author: "Natalia Loungou"
    },
    {
        id: 6,
        image: News6,
        title: "Podcast: Creating a better CX Community",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Product",
        author: "Natalia Loungou"
    },
    {
        id: 7,
        image: SentEmail,
        title: "UX review presentations",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Design",
        author: "Natalia Loungou"
    },
    {
        id: 8,
        image: News2,
        title: "Migrating to Linear 101",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Product",
        author: "Natalia Loungou"
    },
    {
        id: 9,
        image: News3,
        title: "Building your API Stack",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Software Engineering",
        author: "Natalia Loungou"
    },
    {
        id: 10,
        image: News4,
        title: "How collaboration makes us better designers",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Design",
        author: "Natalia Loungou"
    },
    {
        id: 11,
        image: News5,
        title: "Our top 10 Javascript frameworks to use",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        date: "Monday, May 5, 2025 - 13:19",
        type: "Software Engineering",
        author: "Natalia Loungou"
    },
    
]

const BlogContent = () => {

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
            <section className="hero-section-common blog-hero-section position-relative mt-80">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">CTF <span>Blog Posts</span></h1>
                        <p className="hero-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
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
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span>Blog & Video</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page-nevigation Section End Here */}

            {/* Blog List Section Start Here */}
            <section className="blog-list-section mt-5">
                <div className="container">
                    <div className="row">
                        {currentNews.map((newItem) => (
                            <div className="col-lg-4 mb-4" key={newItem.id}>
                                <div className="news-box">
                                    <div className="news-box-image">
                                        <Image src={newItem.image} alt="Icon" width={400} height={200} />
                                    </div>
                                    <div className="news-box-content">
                                        <span>{newItem.type}</span>
                                        <Link href="#" className="blog-link">
                                            <h3>{newItem.title}</h3> <FiArrowUpRight />
                                        </Link>
                                        <p>{newItem.description}</p>
                                    </div>
                                    <div className="post-author">
                                        <div className="post-author-image">
                                            <Image src={User} alt="Icon" width={40} height={40} />
                                        </div>
                                        <div>
                                            <p>{newItem.author}</p>
                                            <span>{newItem.date}</span>
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

export default BlogContent;