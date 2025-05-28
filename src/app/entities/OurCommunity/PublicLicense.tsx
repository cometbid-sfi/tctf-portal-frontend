import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./style.css";
import AltArrow from "../../../assets/Images/alt-arrow.svg";
import Sidebar from "@/component/Sidebar/Sidebar";

const services = [
    {
        id: 1,
        title: "Terms and Conditions of Use for the CometBid Foundation Website and Related Services",
        description: [
            "As used herein, the term “you” or “your” means the individual accessing any CT Foundation website or online resource that contains a reference or link to these Terms of Use, including in the first place at https://www.CT.org/ as well as those websites of its industry collaborations and any other website of the CT Group (“Website”), as well as any person or entity which has granted to such individual the authority to enter into this agreement on its behalf. By accessing, browsing, or using this Website, you acknowledge that you have read, understand, and agree to be bound by these terms.",
            "This Website and related services are made available by the CT Foundation AISBL , and/or its affiliated CT Foundation organisations, including CT Foundation Canada, CT.org Foundation, Inc, and CT Foundation Europe GmbH (collectively, “CT Foundation”). All software, documentation, information and/or other materials provided on and through this Website (“Content”) and all of the related services offered by the CT Foundation may be used solely under the following terms and conditions (“Terms of Use”).",
            "This Website and related services are not meant for or targeted to anyone under the age of 16. You must be at least 16 years of age, or the age of consent under your location’s applicable laws for using websites intended for adults if your location uses a different age, to use the Website or related services; otherwise, your parent or guardian must review and accept these Terms on your behalf. To learn how CT Foundation collects, processes, and shares personal information, please consult CT Foundation’s Website Privacy Policy.",
            "This Website may contain other proprietary notices and copyright information, the terms of which must be observed and followed. The Content on this Website may contain technical inaccuracies or typographical errors and may be changed or updated without notice. The CT Foundation may also make improvements and/or changes to the Content at any time without notice.",
            "Neither the CT Foundation nor its members (“Members”) assume any responsibility regarding the accuracy of the Content and use of the Content is at your own risk. Neither the CT Foundation nor its Members provide any assurances that any reported problems with any Content will be resolved. Except as otherwise expressly stated herein or in another applicable licence, by providing the Content, neither the CT Foundation nor the Members grant any licences to any copyrights, patents, or any other intellectual property rights in the Content.",
            "The CT Foundation and its Members do not want to receive confidential information from you through this Website and related services. Please note that, with the exception of the personal information submitted by you in the process of either creating or updating the personal information associated with your CT account or when executing an agreement with us such as the CT Contribution Agreement, any information or material submitted through the Website will be deemed NOT to be confidential and will be publicly available.",
            "You are prohibited from posting, transmitting, or storing to or from this Website or to any service offered by the CT Foundation (each referred to as a “Submission”) any unlawful, threatening, libellous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane material, or any other material that could give rise to any civil or criminal liability under the law. Further, all Submissions made by you to the Website must be in conformance to the CT Community Code of Conduct, which may be found here: https://www.CT.org/org/documents/Community_Code_of_Conduct.php and the CT Foundation Communication Channel Guidelines which may be found here: https://www.CT.org/org/documents/communication-channel-guidelines/ .",
            "Should the CT Foundation determine that a Submission violates these Terms of Use or should we be informed thereof by a third party, the CT Foundation reserves the right to remove any such Submissions made by you to the Website at its sole discretion.",
            "If your Submission has been removed for violation of these Terms of Use or for violation of any applicable law, we will inform you of the reasons thereof. Should you disagree with us, you may send an e-mail to transparency@CT-foundation.org within six months from the date we informed you of the removal of your Submission, stating the reasons why, in your opinion, your Submission should be reinstated. Your complaint will be logged in our systems, and we will review it and respond to you without undue delay.",
            "If you believe that Content residing or accessible on or through this Website or any User Data Services (“UDS”) infringes a copyright, please send a notice of copyright infringement to our designated agent pursuant to the procedures set forth here: https://www.CT.org/legal/copyright-infringement/ .",
            "If you repeatedly provide manifestly illegal Content or if you repeatedly issue infringement notices, or if you frequently send e-mails about alleged infringement Content that are manifestly unfounded, we will issue a warning to you, and subsequently we may bar you, for a reasonable period of time, from using our Website or UDS, or from issuing infringement notices. Examples of facts and circumstances we take into account before we decide to bar you as mentioned are the gravity and/or frequency of the misuses, including the nature of illegal content and its consequence.",
            "Should you disagree with our response or our reaction to the complaint you addressed to us via e-mail or via https://www.CT.org/legal/copyright, you may refer the matter to a certified out-of-court settlement body that is competent to address content moderating issues. Please note that no such out-of-court settlement bodies have been certified by the competent authorities yet. We will update these Terms of Use once more information becomes available.",
        ]
    },
];


const PublicLicense = () => {
    return (
        <>
            {/* Hero Section Start Here */}
            <section className="hero-section-common project-hero-section position-relative mt-80" >
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12">
                            <div className="hero-content text-center">
                                <h1 className="hero-title">CT Foundation - <span>Terms of Service</span></h1>
                                <p className="hero-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* Hero Section End Here */}

            {/* Page-nevigation Section Start Here */}
            <section className="page-navigation-section mt-5">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="page-navigation">
                            <Link href="/">Home</Link>
                            <span><Image src={AltArrow} alt="Icon" /></span>
                            <span>Terms of Service</span>
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
                                    <h2>CT Foundation Terms of Use</h2>
                                </div>
                                <p>{"This Privacy Policy explains how the CometBid Group (“Us”, “Our”, or “We”, as further identified below in section “Who We Are. Data Controllers and Our contact data”) collects and processes Personal Information (as defined below) from website visitors (“you” or “your”). All references to the “Website” in this Privacy Policy are deemed to refer to any CometBid Group website or online resource that contains a reference or link to this Privacy Policy, including in the first place the Website at https://www.CometBid.org/ as well as any other Website of the CometBid Group."}</p>
                                <p>{"The CometBid Group acts as the steward of Our open source projects, industry collaborations including working groups and interest groups, community, and ecosystem. We are committed to respecting your rights to privacy within Our global ecosystem. We promise to transparently share all aspects of how CometBid Group projects and Websites work in regards to privacy, terms, and Personal Information, and We are in full support of efforts to ensure your protection online, regardless of what laws are applicable and what your location may be. We recognize that different laws apply to protect your privacy, including but not limited to the laws of the United States, Canada, European Union, and We will aim to apply the same standards of privacy and protection of Personal Information to all individuals."}</p>
                            </div>

                            {services.map((committer) => (
                                <div className="border-bottom-section" key={committer.id}>
                                    <div className="page-title">
                                        <h3>{committer.title}</h3>
                                    </div>
                                    <div className="page-description mt-3">
                                        {committer.description.map((desc, i) => (
                                            <p key={i}>{desc}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}

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

export default PublicLicense;
