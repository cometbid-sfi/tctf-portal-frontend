import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import Community from "../../../assets/Images/community.svg";
import News2 from "../../../assets/Images/news1.svg";
import News3 from "../../../assets/Images/news2.svg";
import News4 from "../../../assets/Images/news3.svg";
import News5 from "../../../assets/Images/news4.svg";
import News6 from "../../../assets/Images/news5.svg";
const newsletterItems = [
    {
        id: 1,
        image: Community,
        title: 'New Report: Challenges Facing Open Source Software in the Automotive Ecosystem',
        description: 'This report outlines the key obstacles automotive companies and technology professionals encounter when adopting OSS for SDV development, and where they turn to foundations for support.',
        link: '/'
    },
    {
        id: 2,
        image: News2,
        title: 'Case Study: Leveraging Open Source to Accelerate SDV Innovation',
        description: 'Discover how one company integrated open source components to reduce time-to-market and improve software reliability in their automotive stack.',
        link: '/'
    },
    {
        id: 3,
        image: News3,
        title: 'Event Recap: Open Source Summit 2025 – Key Takeaways',
        description: 'Highlights from the global OSS conference, including panels on automotive standards, cybersecurity, and ecosystem collaboration.',
        link: '/'
    },
    {
        id: 4,
        image: News4,
        title: 'Whitepaper: Best Practices for Managing OSS Compliance in Automotive',
        description: 'A deep dive into compliance challenges and tools to streamline license management across automotive software development lifecycles.',
        link: '/'
    },
    {
        id: 5,
        image: News5,
        title: 'Webinar Replay: The Role of OSS in Future-Ready Automotive Platforms',
        description: 'Industry leaders discuss how open source is reshaping vehicle software architecture and what to expect over the next decade.',
        link: '/'
    },
    {
        id: 6,
        image: News6,
        title: 'Interview: Inside the Open Source Strategy of a Leading EV Manufacturer',
        description: 'An in-depth interview with the CTO of a top electric vehicle company on how they balance innovation, community, and IP in OSS.',
        link: '/'
    },
];

const NewsletterContent = () => {
    return (
        <>
            {/* Hero Section Start Here */}
            <section className="hero-section-common blog-hero-section position-relative mt-80">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">CTF <span>Newsletter</span></h1>
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
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span>Newsletter</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page-nevigation Section End Here */}

            {/* Community Newsletter Section Start Here */}
            <section className="community-newsletter-section mt-5">
                <div className="container">
                    <div className="page-title">
                        <h3>April 2025 Community Newsletter</h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="community-card">
                                <h4>Raising the Security Bar: CT Foundation Rapid Security Reviews Launching in 2025</h4>
                                <p>Supported by Our Member Organizations, the Cometbid Foundation Provides the Community With Intellectual Property, Mentorship, Marketing, Event and IT Services.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="community-image">
                                <Image src={Community} alt="Icon" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="community-card">
                                <h4>Raising the Security Bar: CT Foundation Rapid Security Reviews Launching in 2025</h4>
                                <p>Supported by Our Member Organizations, the Cometbid Foundation Provides the Community With Intellectual Property, Mentorship, Marketing, Event and IT Services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Community Newsletter Section End Here */}

            {/* Community Updates Section Start Here */}
            <section className="community-updates-section mt-80">
                <div className="container">
                    <div className="page-title">
                        <h3>Community Updates</h3>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-9">
                            <div className="newsletter-list">
                                {newsletterItems.map(item => (
                                    <div className="newsletter-item" key={item.id}>
                                        <div className="newsletter-item-left">
                                            <Image src={item.image} alt="Icon" />
                                        </div>
                                        <div className="newsletter-item-right">
                                            <Link href={item.link}>{item.title}</Link>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="sidebar-item">
                                <div className="sidebar-title">
                                    <h3>More Updates</h3>
                                </div>
                                <div className="box-links">
                                    <ul className="link-list">
                                        <li><Link href="/press-releases">New Project Proposals</Link></li>
                                        <li><Link href="/press-releases">New Project Release</Link></li>
                                        <li><Link href="/press-releases">Upcoming Events</Link></li>
                                    </ul>
                                    <p className="text-black">Please <Link href="/contact">contact</Link> us to request edits to your content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Community Updates Section End Here */}
        </>
    );
};

export default NewsletterContent;