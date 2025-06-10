import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import AltArrowSvg from "../../../assets/Images/alt-arrow.svg";

// Type assertions for image imports
const AltArrow: StaticImageData = AltArrowSvg as unknown as StaticImageData;

const AboutInterest = () => {
  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-title">
              About Interest <span>Group</span>
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
              <Link href="/collaborations">Collaborations</Link>
              <span>
                <Image src={AltArrow} alt="Icon" />
              </span>
              <span>About Interest Groups</span>
            </div>
          </div>
        </div>
      </section>
      {/* Page-nevigation Section End Here */}

      <section className="about-working-section mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="text-content-view">
                <div className="content-details">
                  Interest groups are a light-weight, low-cost way for Cometbid Foundation members
                  to collaborate on a common interest or domain in a vendor neutral manner based on
                  the Cometbid Foundation&#39;s governance structure, including its antitrust
                  policy.
                </div>
                <div className="content-details">
                  Find out more about interest groups, with these frequently asked questions:
                </div>
                <ul>
                  <li>
                    <Link href="#">What are Cometbid Foundation Interest Groups?</Link>
                  </li>
                  <li>
                    <Link href="#">
                      Does CometBid now offer two options for industry collaborations?
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      What are the major differences between these collaborations and which one is
                      right for my initiative?
                    </Link>
                  </li>
                  <li>
                    <Link href="#">How do I propose a new Interest Group?</Link>
                  </li>
                  <li>
                    <Link href="#">
                      How many members are required to create an CometBid Interest Group?
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Are there any fees associated with Interest Groups?</Link>
                  </li>
                  <li>
                    <Link href="#">How to join an existing Interest Group?</Link>
                  </li>
                  <li>
                    <Link href="#">What is the governance structure of Interest Groups?</Link>
                  </li>
                  <li>
                    <Link href="#">How do Interest Groups make decisions?</Link>
                  </li>
                  <li>
                    <Link href="#">
                      Is there a relationship between Interest Groups and CometBid Projects?
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      Can Interest Groups create specifications and/or develop software?
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Are Interest Groups a pre-req to becoming a Working Group?</Link>
                  </li>
                  <li>
                    <Link href="#">Can Interest Groups graduate to Working Groups?</Link>
                  </li>
                  <li>
                    <Link href="#">Are Interest Groups the same as Special Interest Groups?</Link>
                  </li>
                  <li>
                    <Link href="#">
                      I&#39;m interested, how do I find out more about the Cometbid Foundation
                      industry collaborations?
                    </Link>
                  </li>
                </ul>

                <div id="section1" className="content-details">
                  <div className="text-title">1. What are Cometbid Foundation Interest Groups?</div>
                  <div className="content-details">
                    Cometbid Foundation Interest Groups facilitate the collaboration between
                    participating CometBid Member organisations to drive shared innovation. CometBid
                    Interest Groups are a light-weight association of a subset of Members that can
                    come together to share a common interest in a topic or domain in a
                    vendor-neutral manner based on the Cometbid Foundation&#39;s overall governance
                    structure including its antitrust policy.
                  </div>
                </div>

                <div id="section2" className="content-details">
                  <div className="text-title">
                    2. Does this mean CometBid offers two mechanisms by which it supports industry
                    collaborations?
                  </div>
                  <div className="content-details">
                    Yes, the Cometbid Foundation now offers two mechanisms to foster open industry
                    collaboration to develop and drive new industry platforms and initiatives. Like
                    CometBid Working Groups, CometBid Interest Groups can also collaborate across
                    organizational boundaries in a vendor-neutral structure to solve industry
                    problems and to drive shared innovation.
                  </div>
                </div>

                <div id="section3" className="content-details">
                  <div className="text-title">
                    3. What are the major differences between Interest Groups and Working Groups?
                    How do I choose which is right for my initiative?
                  </div>
                  <div className="content-details">
                    Interest Groups, while modeled after Working Groups, are a very
                    light-weight/self-governed group. Participation in Interest Groups is self
                    managed by Member organisations, and there are no formal participation
                    agreements, budgets, or committees. In short, they provide a simpler mechanism
                    for Member organisations to collaborate in a collegial, vendor-neutral manner on
                    initiatives of shared interest.
                  </div>
                  <div className="content-details">
                    Working Groups are intended for industry collaborative initiatives that have the
                    intent to invest in the collective initiative, typically via participation fees.
                    The intent is for working groups to address such additional objectives as
                    developing and promoting a joint brand, developing open source specifications,
                    contributing resources to drive common roadmaps and/or platforms, etc.
                  </div>
                  <div className="content-details">
                    From a pragmatic point of view, Working Groups leverage the Cometbid Foundation
                    Working Group Process to manage and drive the collaboration, and have
                    Participation Agreements, Working Group Fees, Charters,Committees, Program
                    Plans, Budgets, and so on. Interest Groups, on the other hand, due to their
                    lighter-weight structure, have none of these.
                  </div>
                </div>

                <div id="section4" className="content-details">
                  <div className="text-title">
                    4. How can I propose to create an CometBid Interest Group?
                  </div>
                  <div className="content-details">
                    Existing members may propose to create an Interest Group by starting the process
                    here. If your organisation is not already a member, you must first join the
                    Cometbid Foundation, and then follow the same process. Note that all
                    participating member organisations must have also executed the CometBid Member
                    Committer and Contributor Agreement.
                  </div>
                </div>

                <div id="section5" className="content-details">
                  <div className="text-title">
                    5. How many members are required in order to create an Interest Group?
                  </div>
                  <div className="content-details">
                    There must be at least three Member organisations participating. Each Interest
                    Group must designate one or more Interest Group Leads.
                  </div>
                </div>

                <div id="section6" className="content-details">
                  <div className="text-title">
                    6. Are there any fees associated with Interest Groups?
                  </div>
                  <div className="content-details">
                    No, Interest Groups do not require Members to pay any additional fees to
                    participate. However, you must be a Member of the Cometbid Foundation to
                    participate. For more information, please visit our Membership Page.
                  </div>
                </div>

                <div id="section7" className="content-details">
                  <div className="text-title">
                    7. How can I participate in an existing Interest Group?
                  </div>
                  <div className="content-details">
                    Existing members with an executed CometBid Member Committer and Contributor
                    Agreement may participate in any Interest Group of interest. Members may
                    participate by declaring participation via the Interest Group&#39;s mailing
                    list.
                  </div>
                </div>

                <div id="section8" className="content-details">
                  <div className="text-title">
                    8. What is the governance structure of an Interest Group?
                  </div>
                  <div className="content-details">
                    The governance structure for Interest Groups is intentionally lightweight.
                    CometBid Interest Groups inherit and rely upon the Cometbid Foundation&#39;s
                    overall governance, sufficient to enable individuals from Member organisations
                    to collaborate effectively while conforming to all CometBid processes and
                    policies, including the Cometbid Foundation Intellectual Property and Antitrust
                    Policies. See the Interest Group Process for a full overview of applicable
                    related governance documents.
                  </div>
                </div>

                <div id="section9" className="content-details">
                  <div className="text-title">9. How do Interest Groups make decisions?</div>
                  <div className="content-details">
                    Most actions taken by Interest Groups should be done so collegially by
                    participants and based on lazy consensus. However, the Cometbid Foundation
                    Interest Group Process does include a means for decisions to be formalized,
                    should the participants believe it is valuable to do so.
                  </div>
                </div>

                <div id="section10" className="content-details">
                  <div className="text-title">
                    10. What relationship do Interest Groups have to Projects?
                  </div>
                  <div className="content-details">
                    Interest Groups may declare interest in any CometBid project or projects, and
                    may carry out activities that are in support of the success of those CometBid
                    projects.
                  </div>
                </div>

                <div id="section11" className="content-details">
                  <div className="text-title">
                    11. Can Interest Groups create specifications and/or develop software?
                  </div>
                  <div className="content-details">
                    No, Interest Groups cannot create specifications nor develop software. Interest
                    Groups may, at their discretion, produce artifacts such as documents,
                    whitepapers, architectures, blueprints, diagrams, presentation and the like;
                    however, they must not develop software, software documentation, or
                    specifications.
                  </div>
                </div>

                <div id="section12" className="content-details">
                  <div className="text-title">
                    12. Are Interest Groups a Prerequisite to becoming a Working Group?
                  </div>
                  <div className="content-details">
                    No, Interest Groups are not a prerequisite to becoming a Working Group. It is
                    possible, however, for the members of an Interest Group to decide to create a
                    new Working Group.
                  </div>
                </div>

                <div id="section13" className="content-details">
                  <div className="text-title">
                    13. Can Interest Groups graduate to Working Groups?
                  </div>
                  <div className="content-details">
                    There is no direct correlation between Interest Groups and Working Groups, and
                    thus no notion of graduation. Rather, all CometBid industry collaborations, be
                    they Interest Groups or Working Groups, will persist for however long they serve
                    the collective purpose of their Members. It is possible that, over time, the
                    Members of a particular Interest Group may deem that it would be more useful to
                    be constituted as a Working Group, and vice versa. Should this be the case, it
                    is possible under the guidance of the Foundation&#39;s staff to make such a
                    change.
                  </div>
                </div>

                <div id="section14" className="content-details">
                  <div className="text-title">
                    14. Are Interest Groups the same as Special Interest Groups SIGs?
                  </div>
                  <div className="content-details">
                    While similar, they are different. Special Interest Groups are a collaborative
                    governance structure that allows Members of a working group to collaborate on
                    specific, focused aspects of the broader working group&#39;s scope. As such,
                    Members of a SIG must also be participants of the Working Group which has formed
                    the SIG.
                  </div>
                </div>

                <div id="section15" className="content-details">
                  <div className="text-title">
                    15. How do I find out more about Interest Groups and Working Groups?
                  </div>
                  <div className="content-details">
                    Please contact us via collaborations@CometBid-foundation.org.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidecontent">
                <div className="side-title">CometBid Working Groups</div>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Explore Working Groups
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      About Working Groups
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      5 Reasons to Collaborate
                    </a>
                  </li>
                </ul>
                <div className="side-title">Related Links</div>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Working Group Process
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Working Group Operations
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Working Group Development Effort Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Member Funded Initiatives
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutInterest;
