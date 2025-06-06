import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cardimg1 from "../../../assets/Images/custmer-service.png";
import Cardimg2 from "../../../assets/Images/pepal-development.png";
import Cardimg3 from "../../../assets/Images/result.png";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import "./style.css";
import officeimg1 from "../../../assets/Images/officeimg.png";
import officeimg2 from "../../../assets/Images/office-img2.png";
import officeimg3 from "../../../assets/Images/office-img3.png";
import Arrow from "../../../assets/Images/arrow.svg";
import LiaLinkedinimg from "../../../assets/Images/LiaLinkedinimg.png";
import Manimg from "../../../assets/Images/image-man.png";
import Client1 from "../../../assets/Images/wg-ecd-tools.svg";
import Client2 from "../../../assets/Images/wg-adoptium.svg";
import Client3 from "../../../assets/Images/wg-jakarta.svg";
import Client4 from "../../../assets/Images/wg_iot.svg";
import ArrowRight from "../../../assets/Images/black-right.svg";
import blanckimg from "../../../assets/Images/blanck-img.png"
const cardData = [
  {
    id: 1,
    title: "Customer Service",
    text: "The primary focus of CometBid Leadership Group is our customers. Understanding your work environment, the commercial challenges your business needs to master, and building the solutions that will deliver the results you are seeking is core to what we provide for our customers. To achieve this, we have a clear view to put you and how we respond to your needs first - Always.",
    img: Cardimg1,
  },
  {
    id: 2,
    title: "PeopleDevelopment",
    text: "The workplace is constantly evolving at a fast pace, and the people working within your business need to regularly adapt with the rate of change. Our aim is to provide you with proven systems to grow the skills of your people, and enable you to be in control to be the driver of future ongoing internal development of your organisation.",
    img: Cardimg2,
  },
  {
    id: 3,
    title: "Sport Interactive",
    text: "CometBid Leadership Group recognises that every business culture wants to demonstrate a point of difference from the competition. The products and services we provide our customers are entirely adapted to reflect the unique purpose and results your business wants to achieve",
    img: Cardimg3,
  },
];

const cardDetaildata = [
  {
    id: 1,
    hedimg: "Director",
    title: "Greg Harris",
    text: "Greg Harris is a business People & Culture development specialist, having worked within and consulted to businesses across the financial, engineering, pharmaceutical, retail, public, and professional entertainment industries for the past 20 years.",
    img: officeimg1,
    icon: LiaLinkedinimg,
  },
  {
    id: 2,
    hedimg: "Consultant - Statistical Analyst Assistant",
    title: "Gihani Jayasinghe",
    text: "Gihani Jayasinghe is studying a Bachelor of Psychological Science (Honours) at the Institute for Social Neuroscience and has completed her undergraduate degree at Monash University.",
    img: officeimg2,
    icon: LiaLinkedinimg,
  },
  {
    id: 3,
    hedimg: "Principal Consultant",
    title: "Stuart Willingham",
    text: "Stuart Willingham is a business Leadership & Operational Excellence specialist with over 25 years’ experience, having worked within and advising to businesses across the Retail.",
    img: officeimg3,
    icon: LiaLinkedinimg,
  },
  {
    id: 4,
    hedimg: "Principal Consultant",
    title: "Stuart Willingham",
    text: "Stuart Willingham is a business Leadership & Operational Excellence specialist with over 25 years’ experience, having worked within and advising to businesses across the Retail.",
    img: officeimg3,
    icon: LiaLinkedinimg,
  },
  {
    id: 5,
    hedimg: "Principal Consultant",
    title: "Stuart Willingham",
    text: "Stuart Willingham is a business Leadership & Operational Excellence specialist with over 25 years’ experience, having worked within and advising to businesses across the Retail.",
    img: officeimg3,
    icon: LiaLinkedinimg,
  },
  {
    id: 6,
    hedimg: "Principal Consultant",
    title: "Stuart Willingham",
    text: "Stuart Willingham is a business Leadership & Operational Excellence specialist with over 25 years’ experience, having worked within and advising to businesses across the Retail.",
    img: officeimg3,
    icon: LiaLinkedinimg,
  },
  {
    id: 7,
    hedimg: "Principal Consultant",
    title: "Stuart Willingham",
    text: "Stuart Willingham is a business Leadership & Operational Excellence specialist with over 25 years’ experience, having worked within and advising to businesses across the Retail.",
    img: officeimg3,
    icon: LiaLinkedinimg,
  },
  {
    id: 8,
    hedimg: "Principal Consultant",
    title: "Stuart Willingham",
    text: "Stuart Willingham is a business Leadership & Operational Excellence specialist with over 25 years’ experience, having worked within and advising to businesses across the Retail.",
    img: officeimg3,
    icon: LiaLinkedinimg,
  },
  {
    id: 9,
    hedimg: "Principal Consultant",
    title: "Stuart Willingham",
    text: "Stuart Willingham is a business Leadership & Operational Excellence specialist with over 25 years’ experience, having worked within and advising to businesses across the Retail.",
    img: officeimg3,
    icon: LiaLinkedinimg,
  },
];

const community = [
  {
    icon: Manimg,
    title: "Jamie Cooke",
    text: "CEO, Drummonds Golf",
    description:
      "We have no regrets! After using your product my business skyrocketed! I made back the purchase price in just 48 hours! I couldn't have asked for more than this.",
  },
  {
    icon: Manimg,
    title: "Jamie Cooke",
    text: "CEO, Drummonds Golf",
    description:
      "We have no regrets! After using your product my business skyrocketed! I made back the purchase price in just 48 hours! I couldn't have asked for more than this.",
  },
  {
    icon: Manimg,
    title: "Jamie Cooke",
    text: "CEO, Drummonds Golf",
    description:
      "We have no regrets! After using your product my business skyrocketed! I made back the purchase price in just 48 hours! I couldn't have asked for more than this.",
  },
];
const cardDetaildatacard = [
  {
    id: 1,
    hedimg: "CTF Leadership Group",
    title: "What are the Benefits of Measuring Behaviour Within Your Organisation?",
    text: "What Are the Benefits of Measuring Behaviour Within Your Organisation?",
    img: blanckimg,
    // icon: LiaLinkedinimg,
  },
  {
    id: 2,
    hedimg: "CTF Leadership Group",
    title: "Coaching Benefits",
    text: "The Coaching Framework Change is hard, yet it can be a critical step toward fulfilling a person’s full potential and achieving their goals, both at work and at home. This is where coaching comes intoRead more…",
    img: blanckimg,
    // icon: LiaLinkedinimg,
  },
  {
    id: 3,
    hedimg: "CTF Leadership Group",
    title: "What is Ripple?",
    text: "What is Ripple? The best way to promote a great culture in your business is to ‘develop and engage’ team members through your leaders",
    img: blanckimg,
    // icon: LiaLinkedinimg,
  },

];
const CTFLeadershipPage = () => {
  return (
    <>
      <section className="hero-section-common position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center mt-5">
            <h1 className="hero-title">
              CTF Leadership Training and <span> Workshops</span>
            </h1>
            <p className="hero-description">
              CometBid Leadership Group is a business People & Culture solutions
              practice. Our objective is to acquire an <br /> extensive
              understanding of your business, before partnering with you to
              customize an effective solution <br /> that will achieve results
              for your organisation through your people.
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
              <Link href="/project">Our Community</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>TCTF Trainings</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}
      <div className="container">
        <div className="page-title mt-5 text-center">
          <h2>
            Why should you attend CTF Leadership <br /> Trainings and Workshops?
          </h2>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {cardData.map((card) => (
            <div
              className="col-md-6 col-lg-4 mb-3 ali text-center"
              key={card.id}
            >
              <div className="border-box-common card-box">
                <div className="box-icon-csf">
                  <Image src={card.img} alt="Icon" className="imglogo" />
                </div>
                <div className="box-content-text text-center">
                  <h3 className="card-heading">{card.title}</h3>
                  <p className="card-text card-titel">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="page-title mt-5 text-center">
          <h2>
            Meet the Friendly faces behind CTF&apos;s <br /> Leadership Trainings,
            Groups and Workshops
          </h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {cardDetaildata.map((card) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center"
              key={card.id}
            >
              <div
                className="custom-card bg-white shadow-lg rounded-3 p-4 w-100 position-relative overflow-hidden card-box-office"
                style={{ minHeight: "480px" }}
              >
                {/* Top Image */}
                <div className="custom-card-img-box mb-4">
                  <Image
                    src={card.img}
                    alt="Card Image"
                    className="custom-card-img"
                  />
                </div>

                {/* Text Content */}
                <div className="custom-card-content">
                  <span className="custom-card-subheading text-primary">
                    {card.hedimg}
                  </span>
                  <h3 className="custom-card-heading mt-2">{card.title}</h3>
                  <p className="custom-card-text mt-2">{card.text}</p>
                </div>

                {/* Bottom Right Icon */}
                <div className="custom-card-icon">
                  <Image src={card.icon} alt="Icon" className="img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <section className="banner-section banner-leadership-workshops-section mt-4">
          <div className="hero-content text-center">
            <h1 className=" box-text-heding">
              People Development Programs and Platforms
            </h1>
            <div className="border-button mt-32">
              <Link href="/">
                <button className="btn btn-primary">
                  Click Here <Image src={Arrow} alt="Icon" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="page-title mt-5 text-center">
          <h2>What clients say ...</h2>
        </div>
      </div>
      <div className="project-resources-section mt-80">
        <div className="container">
          <div className="tab-content-inner">
            <div className="sec-header text-center mb-5">
              <div className="page-title">
                {/* <h2>Why become a Member of CSF Community?</h2> */}
              </div>
              {/* <p>Take an active role in supporting sustainable commercializable open source technologies that benefit all.</p> */}
            </div>

            <div className="sec-body">
              <div className="row">
                {community.map((item, index) => (
                  <div className="col-md-6 col-lg-4 mb-3" key={index}>
                    <div className="border-box-common">
                      <div className="box-icon-csf">
                        <Image src={item.icon} alt="Icon" />
                      </div>
                      <div className="box-content-text">
                        <h3>{item.title}</h3>
                        <span>{item.text}</span>
                        <p className="mt-4">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="latest-news-section mt-80">
        <div className="container">
          {/* <div className="page-header">
                                                <div className="page-title">
                                                    <h2>Featured Collaborations</h2>
                                                </div>
                                            </div> */}
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client1} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client2} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client3} alt="Icon" />
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="client-logo">
                <Image src={Client4} alt="Icon" />
              </div>
            </div>
          </div>
          <div className="btn-center">
            <Link href="/">
              <button className="btn btn-header">
                View All <Image src={ArrowRight} alt="Icon" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="page-title mt-5 text-center">
          <h2>CTF Leadership Group</h2>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {cardDetaildatacard.map((card) => (
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center" key={card.id}>
              <div className="custom-card bg-white shadow-lg rounded-3 p-4 w-100 position-relative overflow-hidden card-box-office">
                {/* Top Image */}
                <div className="custom-card-img-box mb-4">
                  <Image src={card.img} alt="Card Image" className="custom-card-img" />
                </div>

                {/* Text Content */}
                <div className="custom-card-content">
                  <span className="custom-card-subheading text-primary">{card.hedimg}</span>
                  <h3 className="custom-card-heading mt-2">{card.title}</h3>
                  <p className="custom-card-text mt-2">{card.text}</p>
                </div>

                {/* Bottom Right Icon */}
                {/* <div className="custom-card-icon">
            <Image src={card.icon} alt="Icon" className="img-fluid" />
          </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CTFLeadershipPage;
