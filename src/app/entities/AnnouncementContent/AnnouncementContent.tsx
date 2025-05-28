import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";

import AltArrow from "../../../assets/Images/alt-arrow.svg";
import EventImage from "../../../assets/Images/event1.jpg";
import EventImage2 from "../../../assets/Images/event2.jpg";
import EventImage3 from "../../../assets/Images/event3.jpg";
import EventImage4 from "../../../assets/Images/event4.jpg";
import EventImage5 from "../../../assets/Images/event5.jpg";
import EventImage6 from "../../../assets/Images/event6.jpg";

const announcements = [
    {
        date: "November 15, 2022",
        title: "Cometbid Foundation Launches",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: EventImage,
    },
    {
        date: "April 1, 2025",
        title: "TechSpark 2025 Kickoff",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: EventImage2,
    },
    {
        date: "April 10, 2025",
        title: "DesignCon UX Meetup",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: EventImage3,
    },
    {
        date: "April 22, 2025",
        title: "E-Commerce Evolution",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: EventImage4,
    },
    {
        date: "April 22, 2025",
        title: "Cybersecurity Essentials",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: EventImage5,
    },
    {
        date: "April 28, 2025",
        title: "Green Tech Conference",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: EventImage6,
    },
];

const AnnouncementContent = () => {
    return (
        <>
            <section className="hero-section-common project-hero-section position-relative mt-80">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">Cometbid Foundation <span>Events</span></h1>
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
                            <Link href="/resources">Resources</Link>
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span>Events</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page-nevigation Section End Here */}

            {/* Announcements List Section Start Here */}
            <section className="announcements-list-section mt-5">
                <div className="container">
                    <div className="row">
                        {announcements.map((item, index) => (
                            <div className="col-md-6 col-lg-4 mb-3" key={index}>
                                <div className="announcements-list-item">
                                    <div className="announcements-image">
                                        <Image src={item.image} alt="Image" />
                                    </div>
                                    <div className="announcements-content">
                                        <div className="announcements-date">
                                            <p>{item.date}</p>
                                        </div>
                                        <div className="announcements-title">
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="announcements-description">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AnnouncementContent;