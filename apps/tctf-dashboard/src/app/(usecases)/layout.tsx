"use client";

import "./responsive.css";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { RiDashboardLine, RiUserSettingsFill } from "react-icons/ri";
import { FaRegUser, FaQuestionCircle, FaProjectDiagram } from "react-icons/fa";
import { HiOutlineBell } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";
import { PiTreeStructure } from "react-icons/pi";
import { ImProfile } from "react-icons/im";
import { SiOpenproject } from "react-icons/si";
import { FiCalendar, FiLogOut } from "react-icons/fi";
import { RiProfileLine } from "react-icons/ri";
import { LuUserCog } from "react-icons/lu";
import { IoFileTrayStacked } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { TbUsersGroup, TbNews } from "react-icons/tb";
import { FiBox } from "react-icons/fi";
import { MdOutlineJoinFull } from "react-icons/md";
import { FaRegFilePowerpoint } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { LuMenu } from "react-icons/lu";
import { GrResources } from "react-icons/gr";
import { PiIntersectThreeBold } from "react-icons/pi";
import { MdOutlinePrivacyTip, MdContacts, MdFeaturedPlayList, MdGroupAdd } from "react-icons/md";

// svg images
import SidebarLogo from "../../assets/images/sidebar-logo.png";
import SidebarIcon from "../../assets/images/sidebar-icon.png";
import ToggleIcon from "../../assets/images/toggle-icon.png";
import NotificationIcon from "../../assets/images/Bell.png";
import CountryFlag from "../../assets/images/flag.png";
import Profile from "../../assets/images/user-profile.png";

// Import SVG files with type assertion
import ProfileIconSvg from "../../assets/images/User-Rounded.svg";
import RoleIconSvg from "../../assets/images/role.svg";
import SchedulesIconSvg from "../../assets/images/Calendar-Mark.svg";
import MembersIconSvg from "../../assets/images/Users-Group.svg";
import CookieIconSvg from "../../assets/images/Settings.svg";
import LogoutIconSvg from "../../assets/images/logout.svg";

declare var document: Document;

// Create properly typed constants
const ProfileIcon: StaticImageData = ProfileIconSvg as unknown as StaticImageData;
const RoleIcon: StaticImageData = RoleIconSvg as unknown as StaticImageData;
const SchedulesIcon: StaticImageData = SchedulesIconSvg as unknown as StaticImageData;
const MembersIcon: StaticImageData = MembersIconSvg as unknown as StaticImageData;
const CookieIcon: StaticImageData = CookieIconSvg as unknown as StaticImageData;
const LogoutIcon: StaticImageData = LogoutIconSvg as unknown as StaticImageData;

export default function SetLayout({ children }: { children: React.ReactNode }) {
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdowns((prev: Record<string, boolean>) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarShow(false);
      }
    }

    if (typeof window !== "undefined" && isSidebarShow) {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "hidden";
        document.addEventListener("mousedown", handleClickOutside);
      }
    } else if (typeof window !== "undefined") {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    }

    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [isSidebarShow]);

  const toggleSidebar = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const sidebar = document.querySelector(".page-inner");
      if (sidebar) {
        sidebar.classList.toggle("active");
      }
    }
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="page-content">
        <div className="page-inner">
          {isSidebarShow && <div className="overlay"></div>}
          <div ref={sidebarRef} className={`sidebar ${isSidebarShow ? "show-sidebar" : ""}`}>
            <div className="sidebar-header">
              <div className="sidebar-brand">
                <Link href="/dashboard">
                  <Image src={isSidebarOpen ? SidebarIcon : SidebarLogo} alt="logo" />
                </Link>
              </div>
              <div className="plan">
                <p>
                  Organization membership plan <Link href="/dashboard">Monthley</Link>
                </p>
              </div>
            </div>
            <div className="sidebar-menu-scroll">
              <div className="sidebar-menu">
                <ul className="nav-list">
                  <li
                    className=""
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="dashboard-tooltip"
                    data-tooltip-content="Dashboard"
                    data-tooltip-variant="dark"
                  >
                    <Link href="/dashboard">
                      <div className="menu-icon">
                        <RiDashboardLine />
                      </div>{" "}
                      <div className="menu-name">Dashboard</div>
                    </Link>
                  </li>
                  <li className="dropdown">
                    <button
                      className="dropdown-btn"
                      onClick={() => toggleDropdown("events")}
                      data-tooltip-id="events-tooltip"
                      data-tooltip-content="Personal Information"
                      data-tooltip-variant="dark"
                    >
                      <div className="menu-gap d-flex align-items-center">
                        <div className="menu-icon">
                          <FaRegUser />
                        </div>{" "}
                        <div className="menu-name">Personal Information</div>
                      </div>
                      {!isSidebarOpen &&
                        (openDropdowns["events"] ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                    </button>
                    {openDropdowns["events"] && (
                      <ul className="dropdown-menu">
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="profle-tooltip"
                          data-tooltip-content="My Profile"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/personal-information/myprofile">
                            <div className="menu-icon">
                              <ImProfile />
                            </div>{" "}
                            <div className="menu-name">My Profile</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="roles-tooltip"
                          data-tooltip-content="My Roles"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/personal-information/myrole">
                            <div className="menu-icon">
                              <MdOutlineSettingsSuggest />
                            </div>{" "}
                            <div className="menu-name">My Roles</div>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="notifications-tooltip"
                    data-tooltip-content="Notifications"
                    data-tooltip-variant="dark"
                  >
                    <Link href="/notifications">
                      {" "}
                      <div className="menu-icon">
                        <HiOutlineBell />
                      </div>{" "}
                      <div className="menu-name">Notifications</div>
                      {/* <div className="count-notification">3</div> */}
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="members-tooltip"
                    data-tooltip-content="Members"
                    data-tooltip-variant="dark"
                  >
                    <Link href="/members">
                      {" "}
                      <div className="menu-icon">
                        <LuUsers />
                      </div>{" "}
                      <div className="menu-name">Members</div>
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="schedules-tooltip"
                    data-tooltip-content="Schedules"
                    data-tooltip-variant="dark"
                  >
                    <Link href="/schedules">
                      {" "}
                      <div className="menu-icon">
                        <FiCalendar />
                      </div>{" "}
                      <div className="menu-name">Schedules</div>
                    </Link>
                  </li>
                  <hr className="menu-divider" />
                  <li className="dropdown">
                    <button
                      className="dropdown-btn"
                      onClick={() => toggleDropdown("Collaborations")}
                      data-tooltip-id="YourCollaborations-tooltip"
                      data-tooltip-content="Your Collaborations"
                      data-tooltip-variant="dark"
                    >
                      <div className="menu-gap d-flex align-items-center">
                        <div className="menu-icon">
                          <TbUsersGroup />
                        </div>{" "}
                        <div className="menu-name">Your Collaborations</div>
                      </div>
                      {!isSidebarOpen &&
                        (openDropdowns["Collaborations"] ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                    </button>
                    {openDropdowns["Collaborations"] && (
                      <ul className="dropdown-menu">
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="Collaborations-tooltip"
                          data-tooltip-content="Collaborations"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/collaborations/your-collaboration">
                            <div className="menu-icon">
                              <FaRegUser />
                            </div>{" "}
                            <div className="menu-name">Collaborations</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="StartWorkingGroup-tooltip"
                          data-tooltip-content="Start Working Group"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/collaborations/start-working-group">
                            <div className="menu-icon">
                              <FiBox />
                            </div>
                            <div className="menu-name">Start Working Group</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="StartInterestGroup-tooltip"
                          data-tooltip-content="Start Interest Group"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/collaborations/start-interest-group">
                            <div className="menu-icon">
                              <PiIntersectThreeBold />
                            </div>
                            <div className="menu-name">Start Interest Group</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="JoinWorkingGroup-tooltip"
                          data-tooltip-content="Join Working Group"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/collaborations/join-working-group">
                            <div className="menu-icon">
                              <MdOutlineJoinFull />
                            </div>
                            <div className="menu-name">Join Working Group</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="JoinInterestGroup-tooltip"
                          data-tooltip-content="Join Interest Group"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/collaborations/join-interest-group">
                            <div className="menu-icon">
                              <MdGroupAdd />
                            </div>
                            <div className="menu-name">Join Interest Group</div>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="dropdown">
                    <button
                      className="dropdown-btn"
                      onClick={() => toggleDropdown("projects")}
                      data-tooltip-id="your-projects-tooltip"
                      data-tooltip-content="Your Projects"
                      data-tooltip-variant="dark"
                    >
                      <div className="menu-gap d-flex align-items-center">
                        <div className="menu-icon">
                          <FaRegFilePowerpoint />
                        </div>{" "}
                        <div className="menu-name">Your Projects</div>
                      </div>
                      {!isSidebarOpen &&
                        (openDropdowns["projects"] ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                    </button>
                    {openDropdowns["projects"] && (
                      <ul className="dropdown-menu">
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="projects-tooltip"
                          data-tooltip-content="Projects"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/projects">
                            <div className="menu-icon">
                              <MdFeaturedPlayList />
                            </div>
                            <div className="menu-name">Projects</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="start-projects-tooltip"
                          data-tooltip-content="Start Projects"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/projects/start-project">
                            <div className="menu-icon">
                              <FaProjectDiagram />
                            </div>
                            <div className="menu-name">Start Projects</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="join-projects-tooltip"
                          data-tooltip-content="Join Projects"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/projects/join-project">
                            <div className="menu-icon">
                              <SiOpenproject />
                            </div>
                            <div className="menu-name">Join Projects</div>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="dropdown">
                    <button
                      className="dropdown-btn"
                      onClick={() => toggleDropdown("Organization")}
                      data-tooltip-id="YourOrganization-tooltip"
                      data-tooltip-content="Your Organization Profile"
                      data-tooltip-variant="dark"
                    >
                      <div className="menu-gap d-flex align-items-center">
                        <div className="menu-icon">
                          <RiProfileLine />
                        </div>
                        <div className="menu-name">Your Organization Profile</div>
                      </div>
                      {!isSidebarOpen &&
                        (openDropdowns["Organization"] ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                    </button>
                    {openDropdowns["Organization"] && (
                      <ul className="dropdown-menu">
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="OrganizationProfile-tooltip"
                          data-tooltip-content="Organization Profile"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/organization/organization-profile">
                            <div className="menu-icon">
                              <CgProfile />
                            </div>
                            <div className="menu-name">Organization Profile</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="ManageRoles-tooltip"
                          data-tooltip-content="Manage Roles"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/organization/manage-roles">
                            <div className="menu-icon">
                              <RiUserSettingsFill />
                            </div>
                            <div className="menu-name">Manage Roles</div>
                          </Link>
                        </li>
                        <li
                          onClick={() => setIsSidebarShow(false)}
                          data-tooltip-id="OrganizationStructure-tooltip"
                          data-tooltip-content="Organization Structure"
                          data-tooltip-variant="dark"
                        >
                          <Link href="/organization/organization-structure">
                            <div className="menu-icon">
                              <PiTreeStructure />
                            </div>
                            <div className="menu-name">Organization Structure</div>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <hr className="menu-divider" />
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="Account-tooltip"
                    data-tooltip-content="Account Settings"
                    data-tooltip-variant="dark"
                  >
                    <Link href="/account-settings/account-details">
                      {" "}
                      <div className="menu-icon">
                        <LuUserCog />
                      </div>{" "}
                      <div className="menu-name">Account Settings</div>
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="Privacy-tooltip"
                    data-tooltip-content="Privacy Settings"
                    data-tooltip-variant="dark"
                  >
                    <Link href="/privacy-settings">
                      {" "}
                      <div className="menu-icon">
                        <MdOutlinePrivacyTip />
                      </div>{" "}
                      <div className="menu-name">Privacy Settings</div>
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="Activity-tooltip"
                    data-tooltip-content="Activity Logs"
                    data-tooltip-variant="dark"
                  >
                    <Link href="/activity-logs">
                      {" "}
                      <div className="menu-icon">
                        <IoFileTrayStacked />
                      </div>{" "}
                      <div className="menu-name">Activity Logs</div>
                    </Link>
                  </li>
                  {isSidebarOpen && <Tooltip id="Activity-tooltip" place="right" />}
                </ul>
              </div>
              <div className="sidebar-footer sidebar-menu">
                <ul className="nav-list">
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="faq-tooltip"
                    data-tooltip-content="FAQs"
                    data-tooltip-variant="dark"
                  >
                    <Link href="https://cometbid-web.netlify.app/faq">
                      <div className="menu-icon">
                        <FaQuestionCircle />
                      </div>
                      <div className="menu-name">FAQs</div>
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="Resources-tooltip"
                    data-tooltip-content="Resources"
                    data-tooltip-variant="dark"
                  >
                    <Link href="https://cometbid-web.netlify.app/project/resources">
                      <div className="menu-icon">
                        <GrResources />
                      </div>
                      <div className="menu-name">Resources</div>
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="News-tooltip"
                    data-tooltip-content="News and blogs"
                    data-tooltip-variant="dark"
                  >
                    <Link href="https://cometbid-web.netlify.app/news">
                      <div className="menu-icon">
                        <TbNews />
                      </div>
                      <div className="menu-name">News and blogs</div>
                    </Link>
                  </li>
                  <li
                    onClick={() => setIsSidebarShow(false)}
                    data-tooltip-id="Contact-tooltip"
                    data-tooltip-content="Contact us"
                    data-tooltip-variant="dark"
                  >
                    <Link href="https://cometbid-web.netlify.app/about/contact-us">
                      <div className="menu-icon">
                        <MdContacts />
                      </div>
                      <div className="menu-name">Contact us</div>
                    </Link>
                  </li>
                  <li
                    data-tooltip-id="Logout-tooltip"
                    data-tooltip-content="Logout"
                    data-tooltip-variant="dark"
                  >
                    <button className="dropdown-btn">
                      <div className="menu-gap d-flex align-items-center">
                        <div className="menu-icon">
                          <FiLogOut />
                        </div>{" "}
                        <div className="menu-name">Logout</div>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>

              {isSidebarOpen && (
                <>
                  <Tooltip id="dashboard-tooltip" place="right" />
                  <Tooltip id="events-tooltip" place="right" style={{ zIndex: "999" }} />
                  <Tooltip id="profle-tooltip" place="right" />
                  <Tooltip id="roles-tooltip" place="right" />
                  <Tooltip id="notifications-tooltip" place="right" />
                  <Tooltip id="members-tooltip" place="right" />
                  <Tooltip id="schedules-tooltip" place="right" />
                  <Tooltip id="YourCollaborations-tooltip" place="right" />
                  <Tooltip id="Collaborations-tooltip" place="right" />
                  <Tooltip id="StartWorkingGroup-tooltip" place="right" />
                  <Tooltip id="StartInterestGroup-tooltip" place="right" />
                  <Tooltip id="JoinWorkingGroup-tooltip" place="right" />
                  <Tooltip id="JoinInterestGroup-tooltip" place="right" />
                  <Tooltip id="your-projects-tooltip" place="right" />
                  <Tooltip id="projects-tooltip" place="right" />
                  <Tooltip id="start-projects-tooltip" place="right" />
                  <Tooltip id="join-projects-tooltip" place="right" />
                  <Tooltip id="YourOrganization-tooltip" place="right" />
                  <Tooltip id="OrganizationProfile-tooltip" place="right" />
                  <Tooltip id="ManageRoles-tooltip" place="right" />
                  <Tooltip id="OrganizationStructure-tooltip" place="right" />
                  <Tooltip id="Account-tooltip" place="right" />
                  <Tooltip id="Privacy-tooltip" place="right" />
                  <Tooltip id="Resources-tooltip" place="right" />
                  <Tooltip id="faq-tooltip" place="right" />
                  <Tooltip id="News-tooltip" place="right" />
                  <Tooltip id="Contact-tooltip" place="right" />
                  <Tooltip id="Logout-tooltip" place="right" />
                </>
              )}
            </div>
          </div>
          <div className="main-content">
            <div className="page-header">
              <div className="page-header-content">
                <div className="sec-hide">
                  <button className="btn-trigger" onClick={() => setIsSidebarShow(!isSidebarShow)}>
                    <LuMenu />
                  </button>
                </div>
                <div className="content-left d-flex align-items-center">
                  <div className="toggle-sidebar">
                    <button type="button" className="btn-toggle" onClick={toggleSidebar}>
                      <Image src={ToggleIcon} alt="icon" />
                    </button>
                  </div>
                  <div className="user-info">
                    <div className="user-name">
                      <p className="d-flex align-items-center">
                        Welcome back, <span className="user-name-color">Matthew Doe</span>
                      </p>
                      <span className="user-role"> (Member Representative)</span>
                    </div>
                  </div>
                </div>
                <div className="content-right d-flex align-items-center">
                  <button className="btn-downgrade">Downgrade</button>
                  <div
                    className="notification"
                    ref={notificationRef}
                    onMouseEnter={() => setIsNotificationOpen(true)}
                    onMouseLeave={() => setIsNotificationOpen(false)}
                  >
                    <button type="button" className="btn-notification">
                      <Image src={NotificationIcon} alt="icon" />
                    </button>
                    <span className="notification-count">3</span>
                    {isNotificationOpen && (
                      <div className="notification-dropdown">
                        <p className="notification-title ms-4">Notifications</p>
                        <ul>
                          <li>
                            <Link href="/notifications">
                              <div className="notification-dropdown-item active">
                                <div className="notification-info">
                                  <div className="notification-image">
                                    <Image src={Profile} alt="icon" />
                                  </div>
                                  <div className="notification-content">
                                    <p className="notification-message">
                                      This is an unread message waiting to be read. Part of
                                      demonstrating the notification messages.
                                    </p>
                                    <p className="notification-time">2 hours ago</p>
                                  </div>
                                </div>
                                <div className="notification-unread"></div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/notifications">
                              <div className="notification-dropdown-item active">
                                <div className="notification-info">
                                  <div className="notification-image">
                                    <Image src={Profile} alt="icon" />
                                  </div>
                                  <div className="notification-content">
                                    <p className="notification-message">
                                      This is an unread message waiting to be read. Part of
                                      demonstrating the notification messages.
                                    </p>
                                    <p className="notification-time">2 hours ago</p>
                                  </div>
                                </div>
                                <div className="notification-unread"></div>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link href="/notifications">
                              <div className="notification-dropdown-item">
                                <div className="notification-info">
                                  <div className="notification-image">
                                    <Image src={Profile} alt="icon" />
                                  </div>
                                  <div className="notification-content">
                                    <p className="notification-message">
                                      This is an unread message waiting to be read. Part of
                                      demonstrating the notification messages.
                                    </p>
                                    <p className="notification-time">2 hours ago</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </li>
                        </ul>
                        <div className="notification-footer">
                          <p>2 of 4 unread notifications</p>
                          <Link href="/notifications">See all notifications</Link>
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className="country-flag"
                    title="Marshall Islands"
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Marshall Islands"
                    data-tooltip-variant="dark"
                  >
                    <Image src={CountryFlag} alt="icon" width={40} height={40} />
                  </button>
                  <Tooltip id="my-tooltip" />
                  <div
                    className="user-info-2"
                    ref={dropdownRef}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    <button className="user-profile">
                      <Image src={Profile} alt="icon" width={40} height={40} />
                    </button>
                    {isOpen && (
                      <div className="profile-dropdown">
                        <ul>
                          <li>
                            <Link href="/personal-information/myprofile">
                              <Image src={ProfileIcon} alt="icon" /> My Profile
                            </Link>
                          </li>
                          <li>
                            <Link href="/personal-information/myrole">
                              <Image src={RoleIcon} alt="icon" /> My Roles
                            </Link>
                          </li>
                          <li>
                            <Link href="/schedules">
                              <Image src={SchedulesIcon} alt="icon" /> My Schedules
                            </Link>
                          </li>
                          <li>
                            <Link href="/members">
                              <Image src={MembersIcon} alt="icon" /> Manage Members
                            </Link>
                          </li>
                          <li>
                            <Link href="/privacy-settings">
                              <Image src={CookieIcon} alt="icon" /> Manage Cookies
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
                </div>
              </div>
            </div>
            {children}
            <div className="page-footer">
              <div className="footer-inner">
                <div className="copyright">
                  <p>Copyright @ The Cometbid Software Foundation. All Rights Reserved.</p>
                </div>
                <div className="policy">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of use</a>
                  <a href="#">Copyright Agent</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
