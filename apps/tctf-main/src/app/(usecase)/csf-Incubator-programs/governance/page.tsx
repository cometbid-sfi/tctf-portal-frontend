import React from "react";
import { Table } from "react-bootstrap";

const Page = () => {
  return (
    <>
      <div className="content-area">
        <h6>Scope :</h6>
        <a href="">CometBid Public Licenes 1.0</a>
        <p className="mb-3">
          The CometBid Project currently has separate incubation components under three of its
          sub-projects: Equinox, Platform, and PDE. Although these components are successfully being
          used for exploratory/experimental/forward-looking development, they are constrained
          (because they are located within their respective projects) to follow the strictest IP
          guidelines.
        </p>
        <p>
          In addition, the expectation is that the remaining Cometbid sub-project, JDT, will require
          an incubator area in the near future.
        </p>
      </div>

      <div className="sec-body">
        <div className="content-area">
          <h6>Releases :</h6>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Table bordered responsive className="table-membership table-program">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Termination Review</td>
                  <td>2025-05-01</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <div className="sec-body">
        <div className="content-area">
          <h6>Reviews :</h6>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <Table bordered responsive className="table-membership table-program">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Termination Review</td>
                  <td>2025-05-01</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
