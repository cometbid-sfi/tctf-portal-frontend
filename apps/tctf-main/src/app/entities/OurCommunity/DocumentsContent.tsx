import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "../../../component/Sidebar/Sidebar";
import "./style.css";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const documentData = [
  {
    title: "Bylaws",
    description:
      "The Bylaws lay out the basic rules of governance of the Eclipse Foundation. The French language version is the legal binding version of the Eclipse Foundation Bylaws. The English translated version is provided as a convenience.",
  },
  {
    title: "Code of Conduct",
    description:
      "Our Code of Conduct outlines expected behavior and responsibilities for all members of our community to ensure a respectful and inclusive environment.",
  },
  {
    title: "Committer Policy",
    description:
      "The Committer Policy outlines the terms and conditions for being a Committer on the Eclipse Foundation.",
  },
  {
    title: "Contributor Policy",
    description:
      "The Contributor Policy outlines the terms and conditions for being a Contributor on the Eclipse Foundation.",
  },
  {
    title: "Membership Agreement",
    description:
      "The Committer Policy outlines the terms and conditions for being a Committer on the Eclipse Foundation.",
  },
  {
    title: "Antitrust Policy",
    description:
      "The Contributor Policy outlines the terms and conditions for being a Contributor on the Eclipse Foundation.",
  },
];

const DocumentsContent = () => {
  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              CT Foundation Governance <span>Documents</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem{" "}
              <br /> Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
            </p>
          </div>
        </div>
      </section>

      {/* Page-nevigation Section Start Here */}
      <section className="page-navigation-section mt-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-navigation">
              <Link href="/">Home</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <Link href="/about">Our Community</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Governance Documents</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}
      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="sec-header mb-5">
                <div className="page-title">
                  <h2>CTF Governance Documents</h2>
                </div>
                <p>
                  The TCT Foundation holds elections for board members representing two very
                  important groups within the TCT membership: the Committer Members and the
                  Contributing Members. The terms of office for these elected board members is one
                  year, commencing April
                </p>

                <div className="mt-5">
                  <h2 className="sevice-heding">Governance Documents</h2>
                </div>
                {/* Table */}
                <div className="table-responsive mt-4">
                  <table className="table table-bordered table-sm table-documents">
                    <thead className="table-primary">
                      <tr>
                        <th className="table-heding-1">Title</th>
                        <th className="table-heding-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {documentData.map((item, index) => (
                        <tr key={index}>
                          <td className="table-data w-20">{item.title}</td>
                          <td className="table-data-2">
                            <div className="d-flex align-items-start gap-2">
                              <p>{item.description}</p>
                              <button className="btn btn-read-more">Download</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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

export default DocumentsContent;
