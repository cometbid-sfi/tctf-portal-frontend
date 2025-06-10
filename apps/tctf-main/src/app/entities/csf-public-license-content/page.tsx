import Image from "next/image";
import Link from "next/link";
import React from "react";
 
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "@/component/Sidebar/Sidebar";
import "./style.css"

const legalSections  = [
  {
    title: "1. DEFINITIONS",
    points: [
      `"Contribution" means:`,
      "a) in the case of the initial Contributor, the initial content Distributed under this Agreement, and",
      "b) In the case of each subsequent Contributor:",
      "   i) changes to the Program, and",
      "   ii) additions to the Program;",
      "where such changes and/or additions to the Program originate from and are Distributed by that particular Contributor. A Contribution “originates” from a Contributor if it was added to the Program by such Contributor itself or anyone acting on such Contributor's behalf. Contributions do not include changes or additions to the Program that are not Modified Works. “Contributor” means any person or entity that Distributes the Program. “Licensed Patents” mean patent claims licensable by a Contributor which are necessarily infringed by the use or sale of its Contribution alone or when combined with the Program. “Program” means the Contributions Distributed in accordance with this Agreement. “Recipient” means anyone who receives the Program under this Agreement or any Secondary License (as applicable), including Contributors. “Derivative Works” shall mean any work, whether in Source Code or other form, that is based on (or derived from) the Program and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. “Modified Works” shall mean any work in Source Code or other form that results from an addition to, deletion from, or modification of the contents of the Program, including, for purposes of clarity any new file in Source Code form that contains any contents of the Program. Modified Works shall not include works that contain only declarations, interfaces, types, classes, structures, or files of the Program solely in each case in order to link to, bind by name, or subclass the Program or Modified Works thereof. “Distribute” means the acts of a) distributing or b) making available in any manner that enables the transfer of a copy. “Source Code” means the form of a Program preferred for making modifications, including but not limited to software source code, documentation source, and configuration files. “Secondary License” means either the GNU General Public License, Version 2.0, or any later versions of that license, including any exceptions or additional permissions as identified by the initial Contributor.",
    ]
  },
  {
    title: "2. GRANT OF RIGHTS",
    points: [
      "a) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, Distribute and sublicense the Contribution of such Contributor, if any, and such Derivative Works.",
      "b) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free patent license under Licensed Patents to make, use, sell, offer to sell, import and otherwise transfer the Contribution of such Contributor, if any, in Source Code or other form. This patent license shall apply to the combination of the Contribution and the Program if, at the time the Contribution is added by the Contributor, such addition of the Contribution causes such combination to be covered by the Licensed Patents. The patent license shall not apply to any other combinations which include the Contribution. No hardware per se is licensed hereunder.",
      "c) Recipient understands that although each Contributor grants the licenses to its Contributions set forth herein, no assurances are provided by any Contributor that the Program does not infringe the patent or other intellectual property rights of any other entity. Each Contributor disclaims any liability to Recipient for claims brought by any other entity based on infringement of intellectual property rights or otherwise. As a condition to exercising the rights and licenses granted hereunder, each Recipient hereby assumes sole responsibility to secure any other intellectual property rights needed, if any. For example, if a third party patent license is required to allow Recipient to Distribute the Program, it is Recipient's responsibility to acquire that license before distributing the Program.",
      "d) Each Contributor represents that to its knowledge it has sufficient copyright rights in its Contribution, if any, to grant the copyright license set forth in this Agreement.",
      "e) Notwithstanding the terms of any Secondary License, no Contributor makes additional grants to any Recipient (other than those set forth in this Agreement) as a result of such Recipient's receipt of the Program under the terms of a Secondary License (if permitted under the terms of Section 3)."
    ]
  },
 
];

const customSection  = {
  title: "3. COMMERCIAL DISTRIBUTION",
  points: [
    "Commercial distributors of software may accept certain responsibilities...",
    "If a Contributor includes the Program in a commercial product offering...",
    "The obligations in this section do not apply to any claims or Losses relating to any actual or alleged intellectual property infringement...",
    "If Contributor then makes performance claims, or offers warranties related to Product...",
    "Under this section, the Commercial Contributor would have to defend claims against the other Contributors..."
  ]
};
const CSFpubliclicenseNativePage = () => {
    return (
        <>
            <section className="hero-section-common project-hero-section position-relative mt-80">
                <div className="container">
                    <div className="hero-content text-center box-main-text">
                        <h1 className="hero-title">TCT Foundation Public &<span> License</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br/>
                         Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
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
                            <Link href="/about">Our Community</Link>
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span> Public License</span>
                        </div>
                    </div>
                </div>
            </section>
 <section className="participate-section mt-80">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        <div className="sec-header mb-5">
          <div className="page-title">
            <h2>CT Foundation Public License - v 2.0</h2>
          </div>
          <p>
            THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS CT PUBLIC LICENSE (“AGREEMENT”). ANY <br />
            USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT&apos;S ACCEPTANCE OF THIS <br />
            AGREEMENT.
          </p>
        </div>

        {/* Sections with ul-li style */}
        {legalSections.map((section, idx) => (
          <div key={idx} className="mb-5">
            <h3 className="fw-bold mb-3 legal-heding-csf">{section.title}</h3>
            <ul className="ps-3">
              {section.points.map((point, index) => (
                <li key={index} className="mb-2 legal-text-csf ">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Special section with map inside map (without ul-li) */}
        <div className="mb-5">
          <h3 className="fw-bold mb-3 legal-heding-csf">{customSection.title}</h3>
          {customSection.points.map((point, index) => (
            <div key={index} className="mb-3">
              {point.split(",").map((part, i) => (
                <p key={i} className="text-sm legal-text-csf">
                  {part.trim()}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-3">
        <Sidebar />
      </div>
    </div>
  </div>
</section>

        </>
    );
};
 
export default CSFpubliclicenseNativePage;
 