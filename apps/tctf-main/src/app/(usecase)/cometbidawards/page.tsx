import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Sidebar from "../../../component/Sidebar/Sidebar";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";

// Create properly typed constants
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const topCommitters = [
  {
    id: 1,
    title: "Top Committer",
    description:
      "This award is to recognize Jane Doe who best exemplifies community support - through code contributions, fixing bugs, forum and mailing list posts, conference presentations, blogs and other areas.",
  },
  {
    id: 2,
    title: "Top Newcomer Evangelist",
    description:
      "This award is to recognize the individual who best welcomes, engages and educates new people into the CometBid community through the user forums, blogging, creating resources like demos and tutorials, and CometBid-related conversations on social media.",
  },
  {
    id: 3,
    title: "Top Contributor",
    description:
      "This award is to recognize an individual who best exemplifies support for the CometBid community through their contributions to forums, submission of patches, comments on bugs, tutorials, conference presentations, blogs, and other areas. Contributors are the individuals that participate due to their passion for the community and technology. ",
  },
  {
    id: 4,
    title: "Lifetime Achievement",
    description:
      "The Lifetime Achievement award is given to those individuals who have helped shape the CometBid community through a long history of contributions to CometBid projects, and active participation and leadership in our community.",
  },
  {
    id: 5,
    title: "Nominations & Voting",
    description:
      "Anyone can nominate a community member for these awards. Once nominations are collected, the community is invited to vote to determine the winners for the Top Committer, Top Contributor, and Top Newcomer Evangelist awards. The Lifetime Achievement award winner will be selected by the CometBid Foundation team.",
  },
  // {
  //     id: 6,
  //     title: 'Past Winners',
  //     description: 'See the Past Winners of the CometBid Community Awards.',
  //     Linkurl:""
  // },
];

const Awards = () => {
  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              CometBid Awards & <span>Recognition</span>
            </h1>
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
              <Link href="/resources">Recources</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>Awards & Recognition</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      {/* Participate Section start here */}
      <section className="participate-section mt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="sec-header mb-5">
                <div className="page-title">
                  <h2>CTF Community Awards</h2>
                </div>
                <p>
                  {
                    "With over 425 open source projects and billions of downloads, it’s increasingly difficult for any CT contributor to manage security best practices across their project and handle their dependencies appropriately. Through close collaboration and guidance for our community, the CT Foundation makes it easier to mitigate risks in open source projects."
                  }
                </p>
              </div>

              {topCommitters.map(committer => (
                <div className="border-bottom-section" key={committer.id}>
                  <div className="page-title">
                    <h3>{committer.title}</h3>
                  </div>
                  <div className="page-description mt-3">
                    <p> {committer.description}</p>
                  </div>
                </div>
              ))}
              <div className="past-winners-section">
                <h3>
                  <strong>Past Winners</strong>
                </h3>
                <p className="mt-3 text-muted small ">
                  See the{" "}
                  <Link href="/awards" className="text-primary">
                    {" "}
                    Past Winners
                  </Link>{" "}
                  of the CometBid Community Awards.
                </p>
              </div>
            </div>

            <div className="col-lg-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
      {/* Participate Section end here */}
    </>
  );
};

export default Awards;
