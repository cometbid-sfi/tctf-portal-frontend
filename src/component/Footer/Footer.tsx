"use client";

import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaGoogle } from "react-icons/fa";
import './Footer.css';
import Link from "next/link";
import { useRouter } from "next/navigation";
const Footer = () => {

    const router = useRouter();

    const handleNavigation = (title: string) => {
        router.push(`/footer-menu?title=${encodeURIComponent(title)}`);
    };

    const [showBanner, setShowBanner] = useState(false);

    const handleNavigationCookise = () => {
        setShowBanner(true);
    };

    const onClose = () => {
        setShowBanner(false);
    };
    return (
        <>
            <div className="footer mt-80" id="footer-sec">
                <div className="container-fluid">
                    <div className="footer-content">
                        <div className="company-info w-20">
                            <div className="company-logo">
                                <h3>The Cometbid <br /> Technology Foundation</h3>
                            </div>
                            <div className="about-us">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristiqu. </p>
                            </div>
                            <hr className="footer-hr" />
                            <div className="social-media">
                                <h4>Follow Us</h4>
                                <ul>
                                    <li><a href="#"><FaFacebookF /></a></li>
                                    <li><a href="#"><FaTwitter /></a></li>
                                    <li><a href="#"><FaGithub /></a></li>
                                    <li><a href="#"><FaGoogle /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="quick-links w-15">
                            <h4>Our Community</h4>
                            <ul>
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="/announcements">Upcoming Events</Link></li>
                                <li><Link href="/project">Projects</Link></li>
                                <li><Link href="/collaborations">Collaborations</Link></li>
                                <li><Link href="/csf-membership/benefits">Membership</Link></li>
                                <li><Link href="/csf-leadership">CSF Training</Link></li>
                                <li><Link href="/our-partner">Corporate Sponsorship</Link></li>
                            </ul>
                        </div>
                        <div className="quick-links w-15">
                            <h4>Learn</h4>
                            <ul>
                                <li><Link href="/faq">FAQ</Link></li>
                                {/* <li><Link href="/announcements">Our Blogs</Link></li> */}
                                <li><Link href="/csf-Incubator-programs/overview">CSF Incubator programs</Link></li>
                                <li><Link href="/brand-guidelines">Brand Guidelines</Link></li>
                                <li><Link href="/logo-specifications">Logo Specifications</Link></li>
                            </ul>
                        </div>
                        <div className="quick-links w-15">
                            <h4>Legal</h4>
                            <ul>
                                <li><Link href="/about/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/about/terms-use">Terms of Use</Link></li>
                                <li><Link href="/about/compliance">Compliance</Link></li>
                                <li><Link href="/CodeofConduct">Code of Conduct</Link></li>
                                <li><Link href="/legal-trademark">Legal & Trademark</Link></li>
                                <li onClick={handleNavigationCookise} style={{ cursor: "pointer" }}>Manage Cookies</li>
                            </ul>
                        </div>
                        <div className="quick-links w-15">
                            <h4>More</h4>
                            <ul>
                                <li><Link href="/security">Report a Vulnerability</Link></li>
                                <li><Link href="https://www.bugzilla.org/">Report Bugs</Link></li>
                                <li><Link href="/mailing-list">Mailing Lists</Link></li>
                                <li><Link href="/contact-us">Contact Us</Link></li>
                                <li><Link href="/support">Support</Link></li>
                            </ul>
                        </div>
                        <div className="quick-links w-20">
                            <h4>Subscribe to our Newsletter</h4>

                            <div className="subscribe-form">
                                <input type="email" placeholder="Enter your email address" />
                                <Link href="/subscribe"><button type="submit">Subscribe</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showBanner && (
                <div className="cookie-banner">
                    <div className="cookie-banner__text">
                        <p>
                            Some CometBid Foundation pages use cookies to better serve you when you return to the site. You can set your browser to notify you before you receive a cookie or turn off cookies. If you do so, however, some areas of some sites may not function properly. To read CometBid Foundation Privacy Policy click here.
                            <a href="#">Click Here.</a>
                        </p>
                    </div>
                    <div className="cookie-banner__actions">
                        <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={onClose}>
                            Decline
                        </button>
                        <button className="cookie-banner__btn cookie-banner__btn--allow" onClick={onClose}>
                            Allow Cookies
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Footer;