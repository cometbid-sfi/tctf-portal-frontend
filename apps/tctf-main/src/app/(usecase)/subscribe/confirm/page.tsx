import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import CheckLogoSvg from "../../../../assets/Images/featured.svg";

// Type assertions for image imports
const CheckLogo: StaticImageData = CheckLogoSvg as unknown as StaticImageData;

const Confirmed = () => {
  return (
    <>
      {/* <div className="subscribe-page mt-80">
                <div className="white-box">
                    <div className="center-logo mb-4">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <h2>Confirm Humanity</h2>
                    <p>Before you can subscribe, we need to confirm your email address.</p>

                    

                    <Link className="btn-return" href="/">Subscribe</Link>
                </div>
            </div> */}

      <div className="subscribe-page">
        <div className="white-box text-center">
          {/* <div className="center-logo mb-4">
                        <Image src={Logo} alt="Logo" />
                    </div> */}
          <Image className="check-image" src={CheckLogo} alt="Logo" />
          <h2>Your subscription to our list has been confirmed.</h2>
          <p>Thank you for subscribing! Look out for news and updates</p>

          <br />

          <Link className="btn-return" href="/">
            Continue to Website
          </Link>
        </div>
      </div>
    </>
  );
};

export default Confirmed;
