import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "../../../component/Sidebar/Sidebar";
import "./style.css";

const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const PrivacyContent = () => {
  return (
    <>
      <section className="hero-section-common project-hero-section position-relative mt-80">
        <div className="container">
          <div className="hero-content text-center box-main-text">
            <h1 className="hero-title">
              CT Foundation Privacy <span>Policy</span>
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
              <span>Privacy Policy</span>
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
                  <h2>Cometbid Foundation Website Privacy Policy</h2>
                </div>
                <p>
                  This Privacy Policy explains how the CometBid Group (“Us”, “Our”, or “We”, as
                  further identified below in section “Who We Are. Data Controllers and Our contact
                  data”) collects and processes Personal Information (as defined below) from website
                  visitors (“you” or “your”). All references to the “Website” in this Privacy Policy
                  are deemed to refer to any CometBid Group website or online resource that contains
                  a reference or link to this Privacy Policy, including in the first place the
                  Website at{" "}
                  <Link href="mailto:emea@CometBid.org" className="text-primary">
                    {" "}
                    https://www.CometBid.org/
                  </Link>{" "}
                  as well as any other Website of the CometBid Group.
                </p>

                <p>
                  The CometBid Group acts as the steward of Our open source projects, industry
                  collaborations including working groups and interest groups, community, and
                  ecosystem. We are committed to respecting your rights to privacy within Our global
                  ecosystem. We promise to transparently share all aspects of how CometBid Group
                  projects and Websites work in regards to privacy, terms, and Personal Information,
                  and We are in full support of efforts to ensure your protection online, regardless
                  of what laws are applicable and what your location may be. We recognize that
                  different laws apply to protect your privacy, including but not limited to the
                  laws of the United States, Canada, European Union, and We will aim to apply the
                  same standards of privacy and protection of Personal Information to all
                  individuals.
                </p>

                <div className="mt-5 page-title">
                  <h2 className="sevice-heding">
                    The Personal Information We Collect About You and Why
                  </h2>
                  <p className="sevice-text mt-4">
                    We collect and process your Personal Information only for the purposes set out
                    in this Privacy Policy. As a platform for open source innovation and
                    collaboration, your Personal Information can be submitted to Us, or collected by
                    Us, in different ways.
                  </p>
                  <p className="sevice-text">
                    “Personal Information” is any information or data that relates to an individual
                    which would enable that individual to be directly or indirectly identified. We
                    may handle, notably, the following Personal Information about you:
                  </p>
                  <ul>
                    <li className="sevice-text d-text-doted">
                      Contact/identification details (e.g. name, e-mail address, picture);
                    </li>
                    <li className="sevice-text  d-text-doted">
                      Technical data (e.g. IP address, user behavior, web cookies);
                    </li>
                    <li className="sevice-text  d-text-doted">
                      Records of your contributions to Our open source projects and/or industry
                      collaborations under the applicable specific agreements with Us.
                    </li>
                  </ul>
                  <p className="sevice-text">
                    We may collect, store and use your Personal Information above for the following
                    purpose(s):
                  </p>
                  <ol>
                    <li className="sevice-text  d-text-doted">
                      To send you newsletters or other direct marketing communications that you have
                      requested;
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To improve the Website and services;
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To deliver the content of the Website, to ensure the functionality of Our IT
                      systems, and to improve the optimization of the Website;
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To contact you for reasons related to the service you have signed up for or to
                      provide information you have requested;
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To provide you with the services that you requested;
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To enable you to store the data you request Us to store on CometBid Group
                      servers through services, including but not limited to, the CometBid User
                      Storage Service (USS);
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To provide access to the Website and services offered on the Website;
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To enable collaborative open source software development (e.g., to validate
                      and maintain permanent records of authorship related to your contributions);
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To record your contributions to public communication channels that We manage
                      or host (e.g., postings to a forum or a mailing list);
                    </li>
                    <li className="sevice-text  d-text-doted">
                      To prevent the misuse of the Website and the services and to detect fraudulent
                      activities.
                    </li>
                  </ol>
                  <p className="sevice-text">
                    When we collect, store and use your Personal Information for those purpose(s),
                    it is and will remain in connection with and subject to, either (a) your
                    acceptance, (b) the performance of Our services to you as a member or employee
                    of a member or (c) the pursuance of Our own interests or the service to Our
                    community.
                  </p>
                  <p className="sevice-text">
                    In some cases, We may not be able to provide Our services if you fail to provide
                    to us with some Personal Information.
                  </p>

                  <h2 className="sevice-heding mt-5">
                    Who We Are. Data Controllers and Our Contact Data
                  </h2>
                  <p className="sevice-text mt-4">
                    The CometBid Group is comprised of our four corporate entities, namely CometBid
                    Foundation AISBL, CometBid Foundation Europe GmbH, CometBid.org Foundation, Inc.
                    and CometBid Foundation Canada, which together are jointly responsible as joint
                    data controllers within the meaning of data protection legislation (the
                    “CometBid Group”).
                  </p>
                  <p className="sevice-text">
                    The CometBid Group has a joint controllership agreement in place among the four
                    corporate entities to document how the respective tasks and responsibilities in
                    the processing of Personal Information are structured and who fulfills which
                    data protection obligations. For more information about the joint controllership
                    agreement in place, please contact Us at{" "}
                    <Link href="mailto:emea@CometBid.org" className="text-primary">
                      privacy@CometBid.org
                    </Link>
                    .
                  </p>
                  <p className="sevice-text">
                    CometBid Foundation AISBL is your contact point. You may contact us either via
                    postal mail to:
                    <br />
                    “CometBid Foundation AISBL, Rond Point Schuman 11, 1040 Brussels, Belgium”
                    <br />
                    or via email to{" "}
                    <Link href="mailto:emea@CometBid.org" className="text-primary">
                      privacy@CometBid.org
                    </Link>
                    .
                    <br />
                    Contact details of all four companies may be found here. For more information
                    about these companies, please contact{" "}
                    <Link href="mailto:emea@CometBid.org" className="text-primary">
                      emea@CometBid.org
                    </Link>
                    .
                  </p>
                  <p className="sevice-text">
                    You can also assert your rights with respect to the processing of your Personal
                    Information in joint controllership vis-à-vis Us as jointly responsible. In case
                    you contact Us, We will coordinate in accordance with Our joint controllership
                    agreement in order to respond to your inquiry and to guarantee your rights as a
                    data subject.
                  </p>
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

export default PrivacyContent;
