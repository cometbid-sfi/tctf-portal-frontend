"use client";

import React, { useState } from "react";
import "./sidebar.css";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const sidebarSections = [
  {
    title: "About Us",
    items: [{ label: "Foundation", link: "/about" }],
  },
  {
    title: "Member & Supporters",
    items: [
      { label: "Explore our Members", link: "/explore-members" },
      { label: "Our Partners", link: "/our-partner" },
      { label: "Support", link: "/support" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Events", link: "/announcements" },
      { label: "Collaborations", link: "/collaborations" },
      { label: "CSF Membership", link: "/csf-membership/benefits" },
    ],
  },
  {
    title: "Our team",
    items: [
      { label: "Contact Us", link: "/contact-us " },
      { label: "Awards & Recognition", link: "/cometbidawards" },
    ],
  },
  {
    title: "Governance",
    items: [
      { label: "Terms of Service", link: "/about/terms-use" },
      { label: "Compliance", link: "/about/compliance" },
      { label: "code of conduct", link: "/CodeofConduct" },
      { label: "Report a Vulnerability", link: "/security" },
      { label: "Mailing List", link: "/mailing-list" },
    ],
  },
  {
    title: "Our Brand",
    items: [
      { label: "About Working Groups", link: "/collaborations/about-working-group" },
      { label: "Legal Trademark", link: "/legal-trademark" },
      { label: "Research Works", link: "/research-works" },
    ],
  },
  {
    title: "Announcement",
    items: [
      { label: "Forums", link: "/forums" },
      { label: "Blog & Video", link: "/blog-video" },
      { label: "CSF Public License", link: "/about/csf-public-license" },
    ],
  },
];

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <>
      <div className="common-sidebar">
        <div className="sidebar-content">
          <h4 className="sidebar-title">About Us</h4>
          <ul className="sidebar-list">
            <li>
              <Link href="/about">Foundation</Link>
            </li>
          </ul>

          {sidebarSections.slice(1).map((section, index) => (
            <div
              className={`dropdown-button ${openDropdown === index ? "active" : ""}`}
              key={index}
            >
              <button className="btn sidebar-dropdown" onClick={() => toggleDropdown(index)}>
                {section.title} <IoIosArrowDown />
              </button>
              {openDropdown === index && (
                <div className="dropdown-content">
                  <ul className="sidebar-list">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Link href={item.link}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
