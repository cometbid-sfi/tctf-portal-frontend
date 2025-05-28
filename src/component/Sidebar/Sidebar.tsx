"use client"

import React, { useState } from "react";
import "./sidebar.css";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const sidebarSections = [
    {
        title: 'About Us',
        items: [{ label: 'Foundation', link: '#' }],
    },
    {
        title: 'Member & Supporters',
        items: [
            { label: 'Our Members', link: '#' },
            { label: 'Corporate Sponsors', link: '#' },
            { label: 'In-Kind Supporters', link: '#' },
        ],
    },
    {
        title: 'Services',
        items: [
            { label: 'IP Management', link: '#' },
            { label: 'Ecosystem Development', link: '#' },
            { label: 'Development Support', link: '#' },
        ],
    },
    {
        title: 'Our team',
        items: [
            { label: 'Contact Us', link: '#' },
            { label: 'Careers', link: '#' },
        ],
    },
    {
        title: 'Governance',
        items: [
            { label: 'Board of Directors', link: '#' },
            { label: 'Councils', link: '#' },
            { label: 'Annual Report', link: '#' },
            { label: 'Governance Structure', link: '#' },
            { label: 'Meeting Agenda', link: '#' },
        ],
    },
    {
        title: 'Our Brand',
        items: [
            { label: 'Logos & Artwork', link: '#' },
            { label: 'Trademark Policy', link: '#' },
            { label: 'Style Guide', link: '#' },
        ],
    },
    {
        title: 'Announcement',
        items: [
            { label: 'Press Releases', link: '#' },
            { label: 'PR Calendar', link: '#' },
            { label: '2024 Conference', link: '#' },
        ],
    },
];

const Sidebar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index: any) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };
    return (
        <>
            <div className="common-sidebar">
                <div className="sidebar-content">
                    <h4 className="sidebar-title">About Us</h4>
                    <ul className="sidebar-list">
                        <li><Link href="#">Foundation</Link></li>
                    </ul>

                    {sidebarSections.slice(1).map((section, index) => (
                        <div
                            className={`dropdown-button ${openDropdown === index ? 'active' : ''}`}
                            key={index}
                        >
                            <button
                                className="btn sidebar-dropdown"
                                onClick={() => toggleDropdown(index)}
                            >
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