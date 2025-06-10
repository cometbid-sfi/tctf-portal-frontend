import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Table } from "react-bootstrap";

import ArrowBlackSvg from "../../../../assets/Images/black-right.svg";
import ArrowLeftSvg from "../../../../assets/Images/arrow-left.svg";

// Create properly typed constants
const ArrowLeft: StaticImageData = ArrowLeftSvg as unknown as StaticImageData;
const ArrowBlack: StaticImageData = ArrowBlackSvg as unknown as StaticImageData;

const MembershipLevels = () => {
  return (
    <>
      <div className="tab-content-inner">
        <div className="sec-header text-center mb-5">
          <div className="page-title">
            <h2>Membership Fees</h2>
          </div>
          <p>
            The Membership Annual Fee Comparison Chart based on membership levels is provided below
            for illustration purposes only. Please see the CSF Membership Agreement for full
            details. Note that CSF Working Group Membership fees are separate and in addition to
            general CometBid Foundation Membership fees.
          </p>
        </div>

        <div className="sec-body">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <Table bordered responsive className="table-border table-membership">
                <thead>
                  <tr>
                    <th></th>
                    <th colSpan={4}>Annual Cometbid Foundation Membership Fees*</th>
                  </tr>
                  <tr>
                    <th>Annual Corporate Revenue</th>
                    <th>Strategic</th>
                    <th>Contributor</th>
                    <th>Associate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>&gt;$1billion</td>
                    <td>$30 000</td>
                    <td>$200</td>
                    <td>$100</td>
                  </tr>
                  <tr>
                    <td>$100million - $1billion</td>
                    <td>$18 000</td>
                    <td>$150</td>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <td>$20million - $100million</td>
                    <td>$12 000</td>
                    <td>$100</td>
                    <td>$20</td>
                  </tr>
                  <tr>
                    <td>$20million - $1million</td>
                    <td>$6 000</td>
                    <td>$50</td>
                    <td>$12</td>
                  </tr>
                  <tr>
                    <td>&gt;$1million</td>
                    <td>$4 000</td>
                    <td>$20</td>
                    <td>$0</td>
                  </tr>
                  <tr>
                    <td>Govt, Govt Agencies, Research Organizations, NGOs, etc.</td>
                    <td>$4 000</td>
                    <td>$20</td>
                    <td>$12</td>
                  </tr>
                  <tr>
                    <td>Academic, Publishing Organizations, User Groups, etc.</td>
                    <td>$4 000</td>
                    <td>$20</td>
                    <td>$12</td>
                  </tr>
                </tbody>
              </Table>
              <div className="note">
                There is no cost or fees attached to being a Committer member of the Foundation.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-40">
        <div className="col-2 col-sm-4 text-start">
          <div className="page-button hide_mobile">
            <Link href="/csf-membership/membership-levels">
              <button className="btn btn-header">
                <Image src={ArrowLeft} alt="Icon" className="me-2" />
                Membership Levels
              </button>
            </Link>
          </div>
          <div className="page-button show_mobile">
            <Link href="/csf-membership/membership-levels">
              <button className="btn btn-pagination">
                <Image src={ArrowLeft} alt="Icon" />
              </button>
            </Link>
          </div>
        </div>
        <div className="col-8 col-sm-4 text-center">
          <Link href="/choose-account">
            <button className="btn-blue">Become a Member</button>
          </Link>
        </div>
        <div className="col-2 col-sm-4 text-end">
          <div className="page-button justify-content-end">
            <Link href="/csf-membership/become-member">
              <button className="btn btn-header hide_mobile">
                Become a Member <Image src={ArrowBlack} alt="Icon" />
              </button>
            </Link>
            <Link href="/csf-membership/become-member">
              <button className="btn btn-pagination show_mobile">
                <Image src={ArrowBlack} alt="Icon" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipLevels;
