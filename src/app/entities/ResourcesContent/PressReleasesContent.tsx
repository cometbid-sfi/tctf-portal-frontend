import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { TbUserSquareRounded } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import News1 from "../../../assets/Images/news1.svg"
import News2 from "../../../assets/Images/news2.svg"
import News3 from "../../../assets/Images/news3.svg"
import News4 from "../../../assets/Images/news4.svg"
import News5 from "../../../assets/Images/news5.svg"

const newsData = [
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
        description:"The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
        date: "24th October 2024",
        author: "Natalia Loungou",
        link: "/press-releases",
    },
    {
        id: 3,
        image: News3,
        title: "Segger adds SystemView support for CometBid ThreadXm",
        description:"The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
        date: "24th October 2024",
        author: "Natalia Loungou",
        link: "/press-releases",
    },
    {
        id: 4,
        image: News4,
        title: "System Prompt of the AI-Powered Theia IDE Leaked!?",
        description:"The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
        date: "24th October 2024",
        author: "Natalia Loungou",
        link: "/press-releases",
    },
    {
        id: 5,
        image: News5,
        title: "April 2025 Community Newsletter",
        description:"The CometBid Safe Open Vehicle Core project aims to develop an open-source core stack for Software Defined Vehicles (SDVs), specifically targeting embedded high-performance Electronic Control Units (ECUs).",
        date: "24th October 2024",
        author: "Natalia Loungou",
        link: "/press-releases",
    },
];


const PressReleases = () => {
    return (
        <>
            {/* Hero Section Start Here */}
            <section className="hero-section-common project-hero-section position-relative mt-80">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12">
                            <div className="hero-content text-center">
                                <h1 className="hero-title">CTF <span>Press Releases</span></h1>
                                <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br />varius enim in eros elementum tristique.</p>
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
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <Link href="/recourses">Recourses</Link>
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span>Press Releases</span>
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
                            <h2>CometBid News</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="news-list">
                                {newsData.map((news) => (
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

                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-item">
                                <div className="sidebar-title">
                                    <h3>Recent Posts</h3>
                                </div>
                                <div className="box-links">
                                    <div className="link-item">
                                        <div className="link-title">Event</div>
                                        <div className="link-description">Submit an CometBid related Event.</div>
                                    </div>
                                    <div className="link-item">
                                        <div className="link-title">News</div>
                                        <div className="link-description">Submit an CometBid related News.</div>
                                    </div>

                                    <ul className="link-list">
                                        <li><Link href="#">My Submissions</Link></li>
                                    </ul>

                                    <p className="text-black">Please <Link href="/contact">contact</Link> us to request edits to your content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PressReleases;