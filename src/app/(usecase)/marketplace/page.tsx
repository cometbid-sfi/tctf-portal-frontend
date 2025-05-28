import Image from "next/image";
import Link from "next/link";
import React from "react";

import AltArrow from "../../../assets/Images/alt-arrow.svg";
import MarketPlaceLogo from "../../../assets/Images/logo.svg";

const MarketPlace = () => {
    return (
        <>
            <section className="hero-section-common project-hero-section position-relative mt-80">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">CTF <span>Marketplaces</span></h1>
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
                            <span>Marketplaces</span>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page-nevigation Section End Here */}

            {/* Marketplaces section start here */}
            <section className="marketplaces-section mt-80">
                <div className="container">
                    <div className="sec-header mb-5 text-center">
                        <div className="page-title">
                            <h2>Marketplaces</h2>
                        </div>
                        <p>{"Find the open source extensions you need through one of our marketplaces."}</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <div className="yellow-box marketplace-box">
                                <div className="marketplace-logo">
                                    <Image src={MarketPlaceLogo} alt="Icon" />
                                </div>
                                <div className="marketplace-content">
                                    <h3>The Cometbid Technology Foundation</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="blue-card marketplace-box">
                                <div className="marketplace-logo">
                                    <Image src={MarketPlaceLogo} alt="Icon" />
                                </div>
                                <div className="marketplace-content">
                                    <h3>The Cometbid Technology Foundation</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="black-card marketplace-box">
                                <div className="marketplace-logo">
                                    <Image src={MarketPlaceLogo} alt="Icon" />
                                </div>
                                <div className="marketplace-content">
                                    <h3>The Cometbid Technology Foundation</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Marketplaces section end here */}
        </>
    );
};

export default MarketPlace;