import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import Sidebar from "../../../component/Sidebar/Sidebar";
import "./style.css";
import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import OwnerImageSvg from "../../../assets/Images/profile-long.svg";
import OwnerImage2Svg from "../../../assets/Images/staff.svg";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;
const OwnerImage: StaticImageData = OwnerImageSvg as unknown as StaticImageData;
const OwnerImage2: StaticImageData = OwnerImage2Svg as unknown as StaticImageData;

const owners = [
  {
    name: "Florian Bankoley",
    designation: "Chief Digital Officer",
    image: OwnerImage,
    bio: [
      "Since May 2024, Florian Bankoley Chief Digital Officer – Bosch Mobility Company. Prior to this, Florian was member of the Board of Management at Bosch Digital. In this role, he is responsible, among others, for Business Consulting & Solutions, Digital Industry 4.0, Software Development, Data Analytics, SAP Delivery. Until December 2022, he has been Executive Vice President Business Interface in the Service Area Global Information Systems and Services of Robert Bosch GmbH.",
      "Florian Bankoley was born on March 11th, 1980 and spent the first half of his childhood in Lomé/Togo. He started his studies in economics at the University of Bayreuth/Germany before completing his Master's degree in European Management at the ESCP business school after stations in Paris, Oxford and Berlin. Florian Bankoley is married and has two children.",
    ],
  },
  {
    name: "Bryan Che",
    designation: "Huawei Technologies Co., LTD.",
    image: OwnerImage2,
    bio: [
      "Bryan Che is Chief Strategy Officer at Huawei. There, he leads Huawei’s vision and strategy across its overall businesses and portfolio, which spans mobile and consumer electronics, telecommunications, enterprise IT, and cloud.",
      "Bryan has tremendous experience building new enterprise businesses and open source technologies. Prior to joining Huawei in China, Bryan spent over 15 years at Red Hat in the US, where he was the general manager of their cloud business and also led overall product strategy across the company. As an American expat employed in China who has traveled 3 million miles to over 40 countries, Bryan has worked extensively with many customers and partners around the world.",
    ],
  },
  {
    name: "Florian Bankoley",
    designation: "Chief Digital Officer",
    image: OwnerImage,
    bio: [
      "Since May 2024, Florian Bankoley Chief Digital Officer – Bosch Mobility Company. Prior to this, Florian was member of the Board of Management at Bosch Digital. In this role, he is responsible, among others, for Business Consulting & Solutions, Digital Industry 4.0, Software Development, Data Analytics, SAP Delivery. Until December 2022, he has been Executive Vice President Business Interface in the Service Area Global Information Systems and Services of Robert Bosch GmbH.",
      "Florian Bankoley was born on March 11th, 1980 and spent the first half of his childhood in Lomé/Togo. He started his studies in economics at the University of Bayreuth/Germany before completing his Master's degree in European Management at the ESCP business school after stations in Paris, Oxford and Berlin. Florian Bankoley is married and has two children.",
    ],
  },
  {
    name: "Bryan Che",
    designation: "Huawei Technologies Co., LTD.",
    image: OwnerImage2,
    bio: [
      "Bryan Che is Chief Strategy Officer at Huawei. There, he leads Huawei’s vision and strategy across its overall businesses and portfolio, which spans mobile and consumer electronics, telecommunications, enterprise IT, and cloud.",
      "Bryan has tremendous experience building new enterprise businesses and open source technologies. Prior to joining Huawei in China, Bryan spent over 15 years at Red Hat in the US, where he was the general manager of their cloud business and also led overall product strategy across the company. As an American expat employed in China who has traveled 3 million miles to over 40 countries, Bryan has worked extensively with many customers and partners around the world.",
    ],
  },
];

const RegionalContent = () => {
  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              CT Foundation Board <span>of Directors</span>
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
              <span>Board of Directors</span>
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
                {owners.map((owner, index) => (
                  <div className="owner-sec" key={index}>
                    <div className="owner-sec-header">
                      <h2>{owner.name}</h2>
                      <p>{owner.designation}</p>
                    </div>
                    <div className="owner-sec-inner">
                      <div className="owner-img">
                        <Image src={owner.image} alt={`${owner.name} Image`} />
                      </div>
                      <div className="owner-info">
                        {owner.bio.map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
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

export default RegionalContent;
