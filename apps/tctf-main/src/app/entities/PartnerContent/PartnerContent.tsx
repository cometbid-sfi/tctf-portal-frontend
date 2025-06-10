import Image, { StaticImageData } from "next/image";
import React from "react";

import Client1Svg from "../../../assets/Images/wg-ecd-tools.svg";
import Client2Svg from "../../../assets/Images/wg-adoptium.svg";
import Client3Svg from "../../../assets/Images/wg-jakarta.svg";
import Client4Svg from "../../../assets/Images/wg_iot.svg";
import Link from "next/link";

// Type assertions for image imports
const Client1: StaticImageData = Client1Svg as unknown as StaticImageData;
const Client2: StaticImageData = Client2Svg as unknown as StaticImageData;
const Client3: StaticImageData = Client3Svg as unknown as StaticImageData;
const Client4: StaticImageData = Client4Svg as unknown as StaticImageData;

const clients = [
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
  {
    name: "WG ECD Tools",
    image: Client1,
    link: "https://www.wg-ecd-tools.org/",
  },
  {
    name: "WG Adoptium",
    image: Client2,
    link: "https://www.wg-adoptium.org/",
  },
  {
    name: "WG Jakarta",
    image: Client3,
    link: "https://www.wg-jakarta.org/",
  },
  {
    name: "WG IoT",
    image: Client4,
    link: "https://www.wg-iot.org/",
  },
];
const headings = [
  { id: "our-sponsors", title: "Our Sponsors" },
  { id: "corporate-sponsorship", title: "Corporate Sponsorship" },
  { id: "sponsor-collaboration", title: "Sponsor a Collaboration" },
  { id: "become-donor", title: "Become a Donor" },
];
const PartnerContent = () => {
  return (
    <>
      {/* Hero Section Start Here */}
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12">
              <div className="hero-content text-center">
                <h1 className="hero-title">
                  Our <span>Partners</span>
                </h1>
                <p className="hero-description">
                  Unlock premium features to boost productivity and streamline your workflow. <br />
                  Choose the account that suits you best!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End Here */}

      {/* Partners List Section start here */}
      {headings.map((heading, i) => (
        <section className="partner-list-section mt-80" id={heading.id} key={i}>
          <div className="container">
            <div className="row">
              {/* Heading */}
              <div className="col-12 mb-3">
                <h3 className="fs-4 fw-bold mb-3 mt-4">{heading.title}</h3>
              </div>

              {/* Only 8 Clients per Heading */}
              {clients.slice(i * 8, i * 8 + 8).map((client, index) => (
                <div className="col-md-6 col-lg-3 mb-3" key={index}>
                  <div className="partner-list-item">
                    <Link href={client.link}>
                      <div className="client-logo-partner">
                        <Image src={client.image} alt={`${client.name} Logo`} />
                      </div>
                      <div className="client-name">
                        <h4>{client.name}</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Partners List Section end here */}
    </>
  );
};

export default PartnerContent;
