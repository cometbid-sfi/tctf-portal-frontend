import Image from "next/image";
import React from "react";

import Logo from "../../../assets/Images/logo.svg";
import Link from "next/link";

const Subscribe = () => {
    return (
        <>
            <div className="subscribe-page">
                <div className="white-box">
                    <div className="center-logo mb-4">
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <h2>Almost finished...</h2>
                    <p>We need to confirm your email address.</p>

                    <p className="">To complete the subscription process, please click the link in the email we just sent you.</p>
                    <div className="address">
                        The CSF Team <br />
                        29-31 St James&apos; Quay <br />
                        Dublin 2 <br />
                        Ireland
                    </div>

                    <Link className="btn-return" href="/">Returan to our website</Link>
                </div>
            </div>
        </>
    );
};

export default Subscribe;