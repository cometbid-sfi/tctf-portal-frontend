"use client";

import React, { useRef, useState } from "react";
import "./style.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import HeroImageSvg from "../../../assets/Images/hero.svg";
import ArrowSvg from "../../../assets/Images/arrow.svg";
import ProjectImageSvg from "../../../assets/Images/project.svg";
import ArrowBlackSvg from "../../../assets/Images/arrow-black.svg";

import ArrowWhiteSvg from "../../../assets/Images/arrow-white.svg";
import CollaborationsSvg from "../../../assets/Images/collaborations.svg";
import MemberSvg from "../../../assets/Images/member.svg";
import ArrowRightSvg from "../../../assets/Images/black-right.svg";
import AnnounceIconSvg from "../../../assets/Images/announcement.svg";

import BlogImageSvg from "../../../assets/Images/dummy-image.svg";
import CalendarSvg from "../../../assets/Images/calendar.svg";
import UserSvg from "../../../assets/Images/user.svg";
import ArrowLeftSvg from "../../../assets/Images/arrow-left.svg";
import StarSvg from "../../../assets/Images/object.svg";
import CheckBlackSvg from "../../../assets/Images/checkBlack.png";
import ArrowUpSvg from "../../../assets/Images/open.png";

import ArrowDownSvg from "../../../assets/Images/close.png";
import FaqImageSvg from "../../../assets/Images/faq.svg";
import SettingSvg from "../../../assets/Images/setting.svg";
import GoogleLogoSvg from "../../../assets/Images/google.svg";
import MicrosoftLogoSvg from "../../../assets/Images/microsoft.svg";
import MetaLogoSvg from "../../../assets/Images/meta.svg";
import ShopifyLogoSvg from "../../../assets/Images/shopify.svg";

// Type assertions for image imports
const HeroImage: StaticImageData = HeroImageSvg as unknown as StaticImageData;
const ProjectImage: StaticImageData = ProjectImageSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;
const Arrow: StaticImageData = ArrowSvg as unknown as StaticImageData;
const ArrowWhite: StaticImageData = ArrowWhiteSvg as unknown as StaticImageData;

const Collaborations: StaticImageData = CollaborationsSvg as unknown as StaticImageData;
const Member: StaticImageData = MemberSvg as unknown as StaticImageData;

const ArrowRight: StaticImageData = ArrowRightSvg as unknown as StaticImageData;
const AnnounceIcon: StaticImageData = AnnounceIconSvg as unknown as StaticImageData;

const BlogImage: StaticImageData = BlogImageSvg as unknown as StaticImageData;
const Calendar: StaticImageData = CalendarSvg as unknown as StaticImageData;
const User: StaticImageData = UserSvg as unknown as StaticImageData;
const ArrowLeft: StaticImageData = ArrowLeftSvg as unknown as StaticImageData;
const Star: StaticImageData = StarSvg as unknown as StaticImageData;
const CheckBlack: StaticImageData = CheckBlackSvg as unknown as StaticImageData;

const ArrowUp: StaticImageData = ArrowUpSvg as unknown as StaticImageData;
const ArrowDown: StaticImageData = ArrowDownSvg as unknown as StaticImageData;
const FaqImage: StaticImageData = FaqImageSvg as unknown as StaticImageData;

const Setting: StaticImageData = SettingSvg as unknown as StaticImageData;
const GoogleLogo: StaticImageData = GoogleLogoSvg as unknown as StaticImageData;
const MicrosoftLogo: StaticImageData = MicrosoftLogoSvg as unknown as StaticImageData;
const MetaLogo: StaticImageData = MetaLogoSvg as unknown as StaticImageData;
const ShopifyLogo: StaticImageData = ShopifyLogoSvg as unknown as StaticImageData;

const blogPosts = [
  {
    id: 1,
    image: "/path-to-blog-image1.jpg",
    date: "October 19, 2022",
    author: "Admin",
    title: 'De Finibus Bonorum et Malorum", written by Cicero',
    link: "#",
  },
  {
    id: 2,
    image: "/path-to-blog-image2.jpg",
    date: "November 10, 2022",
    author: "John Doe",
    title: 'De Finibus Bonorum et Malorum", written by Cicero',
    link: "#",
  },
  {
    id: 3,
    image: "/path-to-blog-image3.jpg",
    date: "December 05, 2022",
    author: "Jane Smith",
    title: 'De Finibus Bonorum et Malorum", written by Cicero',
    link: "#",
  },
  {
    id: 4,
    image: "/path-to-blog-image4.jpg",
    date: "January 15, 2023",
    author: "Bob Johnson",
    title: 'De Finibus Bonorum et Malorum", written by Cicero',
    link: "#",
  },
];

const faqs = [
  {
    question:
      "How do I update our address andor member representative and other contact information?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Offending belonging promotion provision an be oh consulted ourselves it",
  },
  {
    question: "How do I edit our Membership Pages?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
  {
    question: "Why can't I see the changes I have made?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
  {
    question: "How do I promote my organization products and services?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
  {
    question: "How do I get involved in CSF Projects?",
    answer:
      "Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. ",
  },
];

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
const HomePage = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <>
      {/* Hero Section Start Here  */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-subtitle">THE COMMUNITY FOR</div>
                <h1 className="hero-title">
                  <span>Open</span> Collaboration <br /> and <span>Innovation</span>
                </h1>
                <div className="hide_mobile">
                  <p className="hero-description">
                    Supporting statement for your product&apos;s tagline. This text <br /> should
                    communicate your unique selling PERRORE to the reader.
                  </p>
                </div>
                <div className="show_mobile">
                  <p className="hero-description">
                    Supporting statement for your product&apos;s tagline. This text should
                    communicate your unique selling PERRORE to the reader.
                  </p>
                </div>
                <div className="border-button">
                  <Link href="/about">
                    <button className="btn btn-primary">
                      Learn More <Image src={Arrow} alt="Icon" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <Image src={HeroImage} alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End Here  */}

      {/* CSF Community Section Start Here  */}
      <section className="csf-community-section">
        <div className="container">
          <div className="page-title">
            <h2>CSF Community</h2>
          </div>
          <div className="border-line"></div>
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="about-community">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="community-card color-1">
                <div className="community-image">
                  <Image src={ProjectImage} alt="Hero Image" />
                </div>
                <div className="community-title">Our Project</div>
                <Link href="/project" className="community-button">
                  <Image src={ArrowBlack} alt="Icon" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="community-card color-2">
                <div className="community-image">
                  <Image src={Collaborations} alt="Hero Image" />
                </div>
                <div className="community-title">Our Collaborations</div>
                <Link href="/collaborations" className="community-button">
                  <Image src={ArrowWhite} alt="Icon" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="community-card color-3">
                <div className="community-image">
                  <Image src={Member} alt="Hero Image" />
                </div>
                <div className="community-title">Become a Member</div>
                <Link href="/choose-account" className="community-button">
                  <Image src={ArrowWhite} alt="Icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CSF Community Section End Here  */}

      {/* Announcements Section Start Here  */}
      <section className="announcements-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2 className="mb-0">Announcements</h2>
            </div>
            <div className="page-button hide_mobile">
              <Link href="/announcements">
                <button className="btn btn-header">
                  View More <Image src={ArrowRight} alt="Icon" />
                </button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="announcement-image">
                <Image src={AnnounceIcon} alt="Hero Image" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-8">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="card-border">
                    <div className="announcement-date">February 27, 2024</div>
                    <div className="announcement-title">
                      de Finibus Bonorum et Malorum&quot;, written by Cicero in 45 BC
                    </div>
                    <div className="announcement-description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="card-border">
                    <div className="announcement-date">February 27, 2024</div>
                    <div className="announcement-title">
                      de Finibus Bonorum et Malorum&quot;, written by Cicero in 45 BC
                    </div>
                    <div className="announcement-description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="card-border">
                    <div className="announcement-date">February 27, 2024</div>
                    <div className="announcement-title">
                      de Finibus Bonorum et Malorum&quot;, written by Cicero in 45 BC
                    </div>
                    <div className="announcement-description">
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="show_mobile">
            <div className="page-button mt-1 justify-content-center">
              <button className="btn btn-header">
                View More <Image src={ArrowRight} alt="Icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Announcements Section End Here  */}

      {/* Latest News & Popular Blogs Section Start Here */}
      <section className="latest-news-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2>
                Latest News <br />& Popular Blogs
              </h2>
            </div>
            <div className="page-button">
              <button ref={prevRef} className="slide-btn left-slide">
                <Image src={ArrowLeft} alt="Icon" />
              </button>
              <button ref={nextRef} className="slide-btn right-slide active">
                <Image src={ArrowRight} alt="Icon" />
              </button>
            </div>
          </div>
          <div className="row">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              // onBeforeInit={(swiper) => {
              //     swiper.params.navigation.prevEl = prevRef.current;
              //     swiper.params.navigation.nextEl = nextRef.current;
              // }}
            >
              {blogPosts.map(post => (
                <SwiperSlide key={post.id}>
                  <div className="blog-card">
                    <div className="blog-image">
                      <Image src={BlogImage} alt="blog-image" width={300} height={200} />
                    </div>
                    <div className="blog-content">
                      <div className="blog-info d-flex justify-content-between">
                        <div className="upload-date min-text">
                          <Image src={Calendar} alt="Icon" width={16} height={16} />
                          {post.date}
                        </div>
                        <div className="upload-by min-text">
                          <Image src={User} alt="Icon" width={16} height={16} />
                          By {post.author}
                        </div>
                      </div>
                      <div className="blog-title">
                        <Link href={post.link}>{post.title}</Link>
                      </div>
                      <Link href="/announcements" className="blog-button">
                        Read More <Image src={ArrowRight} alt="Icon" width={16} height={16} />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* Latest News & Popular Blogs Section End Here */}

      {/* Why Choose Us Section Start Here */}
      <section className="why-choose-us-section mt-80">
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
                      <span className="dot">
                        <Image src={CheckBlack} alt="Icon" />
                      </span>
                      <span className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </span>
                    </li>
                    <li>
                      <span className="dot">
                        <Image src={CheckBlack} alt="Icon" />
                      </span>
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
              <div className="why-choose-us-image">
                <Image src={BlogImage} alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us-section mt-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="why-choose-us-image">
                <Image src={BlogImage} alt="Icon" />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
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
                      <span className="dot">
                        <Image src={CheckBlack} alt="Icon" />
                      </span>
                      <span className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                      </span>
                    </li>
                    <li>
                      <span className="dot">
                        <Image src={CheckBlack} alt="Icon" />
                      </span>
                      <span className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.{" "}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section End Here */}

      {/* FAQs Section Start Here  */}
      <section className="faqs-section mt-80">
        <div className="container">
          <div className="page-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="faq-section">
                <div className="">
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border rounded-lg faq-item">
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-100 flex justify-between px-4 py-3 text-left bg-white hover:bg-gray-200"
                        >
                          <span className="font-medium">{faq.question}</span>
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
            <div className="col-lg-4">
              <div className="faq-image">
                <Image src={FaqImage} alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs Section End Here  */}

      {/* Join the CSF Community Section Start Here  */}
      <section className="join-community-section mt-80">
        <div className="container">
          <div className="bg-image">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="join-community-content">
                  <div className="why-choose-us-subtitle mb-2">
                    Success Story <Image src={Star} alt="Icon" />
                  </div>
                  <div className="page-title">
                    <h2>Join our community of growing number 415+ of members today!</h2>
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
          </div>
        </div>
      </section>
      {/* Join the CSF Community Section End Here  */}

      {/* Brand Section Start Here  */}
      <section className="latest-news-section mt-80">
        <div className="container">
          <div className="page-header">
            <div className="page-title">
              <h2>
                Trusted by most popular <br /> brands
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="brand-logo">
                <Image src={GoogleLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="brand-logo">
                <Image src={MicrosoftLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="brand-logo">
                <Image src={MetaLogo} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="brand-logo">
                <Image src={ShopifyLogo} alt="Icon" />
              </div>
            </div>
          </div>
          <div className="btn-center">
            <Link href="/our-partner">
              <button className="btn btn-header">
                View All <Image src={ArrowRight} alt="Icon" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* Brand Section End Here  */}

      {/* Subscribe Section Start Here */}
      {/* <section className="subscribe-section mt-80">
                <div className="container">
                    <div className="bg-image">
                        <div className="page text-center">
                            <div className="hide_mobile">
                                <div className="page-title">
                                    <h2>Subscribe to the CSF Community<br /> Newsletter</h2>
                                </div>
                            </div>
                            <div className="show_mobile">
                                <div className="page-title">
                                    <h2>Subscribe to the CSF Community Newsletter</h2>
                                </div>
                            </div>
                            <div className="hide_mobile">
                                <div className="page-description">
                                    Gain access to original technical articles, project news, and information on community initiatives in <br /> our monthly newsletter
                                </div>
                            </div>
                            <div className="show_mobile">
                                <div className="page-description">
                                    Gain access to original technical articles, project news, and information on community initiatives in our monthly newsletter
                                </div>
                            </div>
                            <div className="border-button mt-32">
                                <button className="btn btn-primary">SUBSCRIBE TODAY <Image src={Arrow} alt="Icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
      {/* Subscribe Section End Here */}
    </>
  );
};

export default HomePage;
