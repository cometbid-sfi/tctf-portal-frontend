"use client";

// Add this line at the top of your file after "use client"
/* eslint-disable no-undef */

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.css";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

// Svg Images
import LogoSvg from "../../assets/Images/logo.svg";
import ProfileIconSvg from "../../assets/Images/user-round.svg";
import LogoutIconSvg from "../../assets/Images/logout.svg";
import SponsoreImageSvg from "../../assets/Images/placeholderImage.svg";

// Type assertions for image imports
const Logo: StaticImageData = LogoSvg as unknown as StaticImageData;
const ProfileIcon: StaticImageData = ProfileIconSvg as unknown as StaticImageData;
const LogoutIcon: StaticImageData = LogoutIconSvg as unknown as StaticImageData;
const SponsoreImage: StaticImageData = SponsoreImageSvg as unknown as StaticImageData;

const Header = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 991);
      }
    };

    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  const handleNavItem = (menu: string) => {
    if (isMobile) {
      setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
    } else {
      setActiveMegaMenu(menu);
    }
  };

  const closeActiveMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  const renderMegaMenu = (
    title: string,
    sections: { title: string; items: { name: string; link: string }[] }[],
  ) => (
    <div className={styles.megaMenu}>
      <div className={styles.megaMenuClose} onClick={closeActiveMegaMenu}>
        X
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={3}>
            <h4 className={styles.megaMenuTitle}>{title}</h4>
            <p className={styles.megaMenuDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate
              eu pharetra nec, mattis ac neque...
            </p>
          </Col>
          {sections.map((section, index) => (
            <Col md={6} lg={2} key={index}>
              <h4 className={styles.menuTitle}>{section.title}</h4>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i} onClick={closeActiveMegaMenu}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          <Col md={6} lg={3}>
            <h4 className={styles.sponsoreTitle}>Sponsored Ad</h4>
            <div className={styles.sponsoreAd}>
              <Image src={SponsoreImage} alt="ad" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return (
    <>
      <Navbar
        expand="lg"
        className={styles.headerSec}
        onMouseLeave={() => !isMobile && setActiveMegaMenu(null)}
      >
        <Container fluid>
          <div className="d-flex align-items-center w-100 justify-content-between">
            <Navbar.Brand>
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setActiveMegaMenu(null)} />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="my-2 my-lg-0 justify-content-center flex-grow-1 pe-3" navbarScroll>
                <Link
                  href="#"
                  className="nav-link"
                  onClick={e => {
                    if (isMobile) e.preventDefault();
                    handleNavItem("projects");
                  }}
                  onMouseEnter={() => !isMobile && handleNavItem("projects")}
                >
                  Projects
                </Link>
                <Link
                  href="#"
                  className="nav-link"
                  onClick={e => {
                    if (isMobile) e.preventDefault();
                    handleNavItem("collaborations");
                  }}
                  onMouseEnter={() => !isMobile && handleNavItem("collaborations")}
                >
                  Collaborations
                </Link>
                <Link
                  href="#"
                  className="nav-link"
                  onClick={e => {
                    if (isMobile) e.preventDefault();
                    handleNavItem("resources");
                  }}
                  onMouseEnter={() => !isMobile && handleNavItem("resources")}
                >
                  Resources
                </Link>
                <Link
                  href="#"
                  className="nav-link"
                  onClick={e => {
                    if (isMobile) e.preventDefault();
                    handleNavItem("partners");
                  }}
                  onMouseEnter={() => !isMobile && handleNavItem("partners")}
                >
                  Our Partners
                </Link>
                <Link
                  href="#"
                  className="nav-link"
                  onClick={e => {
                    if (isMobile) e.preventDefault();
                    handleNavItem("community");
                  }}
                  onMouseEnter={() => !isMobile && handleNavItem("community")}
                >
                  Our Community
                </Link>
              </Nav>
            </Navbar.Collapse>
            <div className={styles.navRight}>
              {/* Search Icon */}
              <div className="user-info-2 search-icon cursor-pointer" onClick={toggleModal}>
                <ImSearch />
                {/* <Image src={searchIcon} alt="search" /> */}
              </div>
              {/* Modal */}
              <div
                className="user-info-2"
                onMouseEnter={() => setIsProfileOpen(true)}
                onMouseLeave={() => setIsProfileOpen(false)}
              >
                {/* <Image src={userIcon} alt="user" /> */}
                <FaUser />
                {isProfileOpen && (
                  <div className="profile-dropdown">
                    <ul>
                      <li>
                        <Link href="https://cometbid-software.netlify.app/dashboard">
                          <Image src={ProfileIcon} alt="icon" /> My Profile
                        </Link>
                      </li>
                      <li>
                        <Link href="/activity-logs">
                          <Image src={LogoutIcon} alt="icon" /> Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <Link href="/donate">
                <Button variant="primary" className={styles.donate}>
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        </Container>

        {/* Mega Menus */}
        {activeMegaMenu === "projects" &&
          renderMegaMenu("Projects", [
            {
              title: "Technologies",
              items: [
                { name: "Agro-tech", link: "/project/agro-tech" },
                { name: "Blockchain", link: "/project/blockchain" },
                { name: "Cloud Native", link: "/project/cloud-native" },
                { name: "Edge & IoT", link: "/project/edge-iot" },
                { name: "Financial", link: "/project/financial" },
                { name: "Robotics", link: "/project/robotics" },
                { name: "Automotive & Mobility", link: "/project/automotive-mobility" },
              ],
            },
            {
              title: "Projects",
              items: [
                { name: "Project Finder", link: "/project/project-list" },
                { name: "Project Activity", link: "/project/project-activity" },
                { name: "Project Resources", link: "/project/resources" },
                { name: "Specifications", link: "/specifications" },
                { name: "Contribute", link: "/project/contribute" },
              ],
            },
          ])}

        {activeMegaMenu === "collaborations" &&
          renderMegaMenu("Collaborations", [
            {
              title: "Industry Collaborations",
              items: [
                { name: "About Industry Collaborations", link: "/collaborations" },
                { name: "Current Collaborations", link: "/collaborations/working-group" },
                { name: "About Working Groups", link: "/collaborations/about-working-group" },
                { name: "About Interest Groups", link: "/collaborations/about-interest-group" },
              ],
            },
            {
              title: "Research Collaborations",
              items: [{ name: "Research Works", link: "/research-works" }],
            },
          ])}

        {activeMegaMenu === "resources" &&
          renderMegaMenu("Resources", [
            {
              title: "What's Happening?",
              items: [
                // { name: "Blogs", link: "/" },
                { name: "News", link: "/news" },
                { name: "Events", link: "/announcements" },
                { name: "Newsletter", link: "/newsletter" },
                { name: "Press Releases", link: "/resources/press-releases" },
                { name: "Awards & Recognition", link: "/cometbidawards" },
              ],
            },
            {
              title: "Developer Resources",
              items: [
                { name: "Forum", link: "/forums" },
                { name: "Mailing Lists", link: "/mailing-list" },
                { name: "Blogs & Videos", link: "/blog-video" },
                { name: "Marketplaces", link: "/marketplace" },
              ],
            },
          ])}

        {activeMegaMenu === "partners" &&
          renderMegaMenu("Our Partners", [
            {
              title: "Membership",
              items: [
                { name: "Our Members", link: "/explore-members" },
                { name: "Member Benefits", link: "/csf-membership/benefits" },
                { name: "Membership Levels", link: "/csf-membership/membership-levels" },
                { name: "Membership Fees", link: "/csf-membership/membership-fees" },
                { name: "Membership Application", link: "/csf-membership/become-member" },
                { name: "Member Resources", link: "/csf-membership/resources" },
                { name: "Member Portal", link: "/csf-membership/member-portal" },
              ],
            },
            {
              title: "Partnership",
              items: [
                { name: "Sponsor", link: "/our-partner/#our-sponsors" },
                { name: "Corporate Sponsorship", link: "/our-partner/#corporate-sponsorship" },
                { name: "Sponsor a Collaboration", link: "/our-partner/#sponsor-collaboration" },
                { name: "Become a Donor", link: "/our-partner/#become-donor" },
              ],
            },
          ])}

        {activeMegaMenu === "community" &&
          renderMegaMenu("Our Community", [
            {
              title: "About",
              items: [
                { name: "About the Community", link: "/about" },
                { name: "Board & Governance", link: "/about/governance" },
                { name: "Staff", link: "/about/staff" },
                { name: "Services", link: "/about/services" },
              ],
            },
            {
              title: "Legal",
              items: [
                { name: "Legal Policies", link: "/about/legal-policies" },
                { name: "Privacy Policy", link: "/about/privacy-policy" },
                { name: "Terms of Use", link: "/about/terms-use" },
                { name: "Compliance", link: "/about/compliance" },
                { name: "CSF Public License", link: "/about/csf-public-license" },
              ],
            },
            {
              title: "More",
              items: [
                { name: "Press Releases", link: "/resources/press-releases" },
                { name: "Careers", link: "/about/careers" },
                { name: "Logos & Artwork", link: "/about/logos-artwork" },
                { name: "Contact Us", link: "/contact-us" },
                { name: "Support", link: "/support" },
              ],
            },
          ])}
      </Navbar>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="justify-content-end d-flex">
              <button className="close-button" onClick={toggleModal}>
                &times;
              </button>
            </div>
            <input type="text" placeholder="Search..." className="search-input" autoFocus />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
