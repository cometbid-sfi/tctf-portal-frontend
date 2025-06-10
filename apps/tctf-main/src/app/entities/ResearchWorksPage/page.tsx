"use client";
import Link from "next/link";
import React, { useState } from "react";
import "./style.css";
import Image, { StaticImageData } from "next/image";
import ArrowSvg from "../../../assets/Images/arrow.svg";
import StarSvg from "../../../assets/Images/object.svg";
import HqdefaultSvg from "../../../assets/Images/dummy-image.svg";
import HorizonSvg from "../../../assets/Images/horizon-eu.png";
import IteaSvg from "../../../assets/Images/itea4.png";
import ChipsSvg from "../../../assets/Images/chips-ju.png";
import BmbfSvg from "../../../assets/Images/bmbf.png";
import SettingSvg from "../../../assets/Images/setting.svg";
import ArrowUpSvg from "../../../assets/Images/open.png";
import ArrowDownSvg from "../../../assets/Images/close.png";
import LeafSvg from "../../../assets/Images/accordion-leaf.svg";
import GuidanceSvg from "../../../assets/Images/accordion-guidance.svg";
import BriefcaseSvg from "../../../assets/Images/accordion-briefcase.svg";
import StackSvg from "../../../assets/Images/accordion-stack.svg";
import PuzzleSvg from "../../../assets/Images/accordion-puzzle.svg";
import Caplan from "../../../assets/Images/office-boy1.jpg";
import Gomes from "../../../assets/Images/offece-boy2.jpg";
import Jahn from "../../../assets/Images/office-boy3.jpg";
import Krief from "../../../assets/Images/office-boy4.jpg";
import researchersimgSvg from "../../../assets/Images/oss-chart.png";
import CheckBlackSvg from "../../../assets/Images/checkBlack.png";
import CodeSvg from "../../../assets/Images/code.svg";
import ComputerSvg from "../../../assets/Images/computer.svg";
import ShareSvg from "../../../assets/Images/share.svg";

// Type assertions for SVG imports
const Leaf: StaticImageData = LeafSvg as unknown as StaticImageData;
const Setting: StaticImageData = SettingSvg as unknown as StaticImageData;
const Star: StaticImageData = StarSvg as unknown as StaticImageData;
const Horizon: StaticImageData = HorizonSvg as unknown as StaticImageData;
const Itea: StaticImageData = IteaSvg as unknown as StaticImageData;
const Chips: StaticImageData = ChipsSvg as unknown as StaticImageData;
const Bmbf: StaticImageData = BmbfSvg as unknown as StaticImageData;
const ArrowUp: StaticImageData = ArrowUpSvg as unknown as StaticImageData;
const ArrowDown: StaticImageData = ArrowDownSvg as unknown as StaticImageData;
const CheckBlack: StaticImageData = CheckBlackSvg as unknown as StaticImageData;
const researchersimg: StaticImageData = researchersimgSvg as unknown as StaticImageData;

const Hqdefault: StaticImageData = HqdefaultSvg as unknown as StaticImageData;

const Guidance: StaticImageData = GuidanceSvg as unknown as StaticImageData;
const Briefcase: StaticImageData = BriefcaseSvg as unknown as StaticImageData;
const Stack: StaticImageData = StackSvg as unknown as StaticImageData;
const Puzzle: StaticImageData = PuzzleSvg as unknown as StaticImageData;
const Code: StaticImageData = CodeSvg as unknown as StaticImageData;
const Computer: StaticImageData = ComputerSvg as unknown as StaticImageData;
const Share: StaticImageData = ShareSvg as unknown as StaticImageData;
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;

const communityMembers = [
  {
    id: 1,
    name: "415+",
    designation: "Projects",
  },
  {
    id: 2,
    name: "450+",
    designation: "Lines of code",
  },
  {
    id: 3,
    name: "2000+",
    designation: "Team Members",
  },
  {
    id: 4,
    name: "350+",
    designation: "Committers",
  },
  {
    id: 5,
    name: "30+",
    designation: "Staff Member",
  },
  {
    id: 6,
    name: "21+",
    designation: "Collaborations",
  },
];

const faqs = [
  {
    img: Leaf,
    question: "A path to sustainability",
    answer: "Guidance on transforming research into long-term, impactful open source platforms.",
  },
  {
    img: Guidance,
    question: "Open collabration guidance",
    answer:
      "Benefit from trusted governance models, robust IP management, and commercial-friendly licensing practices, backed by the Comitbid Foundation's globally recognised expertise and deep European roots. ",
  },
  {
    img: Briefcase,
    question: "Open source project lifecycle support",
    answer:
      "Expertise in managing the entire lifecycle of open source projects, from creation to long-term maintenance. ",
  },
  {
    img: Stack,
    question: "Expertise in community building",
    answer:
      "Proven strategies to build and grow diverse communities of contributors, adopters, and collaborators to your project. ",
  },
  {
    img: Puzzle,
    question: "Access to the Comitbid Foundation ecosystem",
    answer:
      "Leverage a global network of developers, tools, and open source technologies, with the Comitbid Foundation’s leadership in connecting European research initiatives to global innovation. ",
  },
];

const teamMembers = [
  { img: Caplan, name: "Cairo Caplan, PhD", role: "Testing Engineer" },
  { img: Gomes, name: "André Gomes, PhD", role: "Research Project Manager" },
  {
    img: Jahn,
    name: "Marco Jahn, PhD",
    role: "Senior Research Project Manager",
  },
  {
    img: Krief,
    name: "Philippe Krief, PhD",
    role: "Director, Research Relations",
  },
];

const boxes = [
  {
    id: 1,
    icon: Code,
    // count: "01",
    description:
      "Develop, evolve, and sustain open source projects that encapsulate research outcomes.",
  },
  {
    id: 2,
    icon: Computer,
    // count: "02",
    description:
      "Use proven governance and IP management frameworks to ensure code is always ready for research or commercial translation.",
  },
  {
    id: 3,
    icon: Share,
    // count: "03",
    description:
      "Disseminate research findings effectively through open source, fostering adoption and impact.",
  },
];

const ResearchWorkspage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Research
                  <span> Works</span>
                </h1>
                <div className="hide_mobile">
                  <p className="hero-description">
                    Exploring innovative ideas through dedicated research. A step towards knowledge,
                    growth, and discovery.
                  </p>
                </div>
                <div className="show_mobile">
                  {/* <p className="hero-description">CSF Community collaborations allow organizations to combine the best practices of open source development with a set of services required for open innovation, enabling organizations to foster industry collaborations.</p> */}
                </div>
                <div className="border-button">
                  <Link href="/project/project-list">
                    <button className="btn btn-primary">
                      Research all projects <Image src={Arrow} alt="Icon" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-resources-section mt-80">
        <div className="container">
          <div className="sec-header text-center mb-5">
            <div className="page-title">
              <h2>
                The world&#39;s <span className="custom-text">leading open source foundation</span>{" "}
                for publicly funded research projects.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-us-content">
                <div className="why-choose-us-subtitle mb-2">
                  Why Choose Us <Image src={Star} alt="Icon" />
                </div>
                <div className="page-title">
                  <h2>
                    How the <br />
                    CSF Community Works
                  </h2>
                </div>
                <div className="choose-description">
                  <ul>
                    <li>
                      <span className="dot"></span>
                      <span className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </span>
                    </li>
                    <li>
                      <span className="dot"></span>
                      <span className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="why-choose-us-image ">
                <Image src={Hqdefault} alt="Icon" className="rounded-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-community mt-80 ">
        <div className="container">
          <div className="bg-image">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="join-community-content">
                  <div className="why-choose-us-subtitle mb-2">
                    Success Story <Image src={Star} alt="Icon" />
                  </div>
                  <div className="page-title">
                    <h2>
                      Transforming research <br />
                      into
                      <br />
                      open source innovation
                    </h2>
                  </div>
                  <div className="page-description">
                    Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been
                    the industrys standardever
                  </div>
                  <div className="border-button mt-32">
                    <Link href="/choose-account">
                      <button className="btn btn-primary">
                        Become a member <Image src={Arrow} alt="Icon" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row">
                  {communityMembers.map((member, index) => (
                    <div className="col-md-6 col-lg-6" key={index}>
                      <div className="border-card">
                        <div className="community-card-image">
                          <Image src={Setting} alt="Icon" />
                        </div>
                        <div className="content">
                          <h3>{member.name}</h3>
                          <p>{member.designation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="typewriter-wrapper">
              <div className="bouncing-typewriter">
                <span>research &gt;</span> it&#39;s_in_our_code
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="why-choose-us-content">
                <div className="why-choose-us-subtitle mb-2">
                  Why Choose Us <Image src={Star} alt="Icon" />
                </div>
                <div className="page-title">
                  <h2>
                    How the <br /> CSF Community Works
                  </h2>
                </div>
                <div className="choose-description">
                  <ul>
                    <li>
                      <span className="dot"></span>
                      <span className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&#39;s standard dummy text ever since the
                        1500s.
                      </span>
                    </li>
                    <li>
                      <span className="dot"></span>
                      <span className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="why-choose-us-image grid-2x2">
                <Image src={Horizon} alt="Icon" className="rounded-5" />
                <Image src={Itea} alt="Icon" className="rounded-5" />
                <Image src={Chips} alt="Icon" className="rounded-5" />
                <Image src={Bmbf} alt="Icon" className="rounded-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqs-section mt-80">
        <div className="container">
          <div className="page-title">
            <h2>What we offer</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="faq-section">
                <div className="">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border rounded-lg faq-item">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-100 flex justify-between px-4 py-3 text-left bg-white hover:bg-gray-200"
                        >
                          <span className="font-medium questionimg faq-question-wrap ">
                            <Image src={faq.img} alt="Image" /> {faq.question}
                          </span>
                          {openIndex === index ? (
                            <Image src={ArrowUp} alt="Icon" />
                          ) : (
                            <Image src={ArrowDown} alt="Icon" />
                          )}
                        </button>
                        {openIndex === index && (
                          <div className="px-4 py-3 text-gray-700 bg-white border-t faq-content">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-team-section py-5 mt-5">
        <div className="container mt-3">
          <div className="team-heading  mb-5">
            <h2>Meet the team</h2>
          </div>

          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                <div className="team-member-card">
                  <Image src={member.img} alt="Avatar" className="team-image" />
                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <Image src={researchersimg} alt="Sample" className="img-fluid  imgreresearch rounded" />
          </div>

          <div className="col-lg-6">
            <h2 className="section-heading">
              OSS bridges the gap between researchers, industry, and SMEs
            </h2>
            <div className="container py-4">
              <div className="row">
                {/* Item 1 */}
                <div className="col-12 mb-4 d-flex">
                  <div className="d-flex gap-3 align-items-start">
                    <Image src={CheckBlack} alt="Check Icon" width={30} height={30} />
                    <p className="mb-0">
                      Large industrial organisations contribute concrete requirements through
                      real-world use cases.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-12 mb-4 d-flex">
                  <div className="d-flex gap-3 align-items-start">
                    <Image src={CheckBlack} alt="Check Icon" width={30} height={30} />
                    <p className="mb-0">
                      Researchers develop innovative prototypes to address these requirements.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="col-12 mb-4 d-flex">
                  <div className="d-flex gap-3 align-items-start">
                    <Image src={CheckBlack} alt="Check Icon" width={30} height={30} />
                    <p className="mb-0">
                      Small and medium-sized software vendors industrialise these innovations,
                      building sustainable business models around products and services adopted by
                      industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row align-items-start">
          {/* Left Text Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-heading">Research translation made simple</h2>
            <p className="Researchtext">
              By adhering to the open collaboration best practices, development processes, and
              intellectual property management practices, researchers gain confidence that their
              innovations are secure, open, and ready for commercial use. All contributions are
              licensed under a business-friendly open source license.
            </p>
          </div>

          {/* Right Box Section */}
          <div className="col-lg-6">
            <h2 className="section-heading">The Comitbid Foundation empowers research teams to:</h2>

            {boxes.map(box => (
              <div className="mb-4" key={box.id}>
                <div className="border-box p-3 d-flex align-items-start gap-3">
                  <Image src={box.icon} alt="Icon" className="boxiconimg" width={40} height={40} />
                  <div>
                    {/* <h3 className="mb-1">{box.title}</h3> */}
                    <p className="mb-0">{box.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResearchWorkspage;
