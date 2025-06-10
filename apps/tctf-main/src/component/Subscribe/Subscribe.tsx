import React from "react";
import Image from "next/image";

import Arrow from "../../assets/Images/arrow.svg"

const Subscribe = () => {
    return (
        <>
            {/* Subscribe Section Start Here */}
            <section className="subscribe-section mt-80">
                <div className="container">
                    <div className="bg-image">
                        <div className="page text-center">
                            <div className="hide_mobile">
                                <div className="page-title">
                                    <h2>Subscribe to the CSF Community<br /> Newsletter</h2>
                                </div>
                            </div>
                            <div className="show_mobile">
                                <div className="page-title">
                                    <h2>Subscribe to the CSF Community Newsletter</h2>
                                </div>
                            </div>
                            <div className="hide_mobile">
                                <div className="page-description">
                                    Gain access to original technical articles, project news, and information on community initiatives in <br /> our monthly newsletter
                                </div>
                            </div>
                            <div className="show_mobile">
                                <div className="page-description">
                                    Gain access to original technical articles, project news, and information on community initiatives in our monthly newsletter
                                </div>
                            </div>
                            <div className="border-button mt-32">
                                <button className="btn btn-primary">SUBSCRIBE TODAY <Image src={Arrow} alt="Icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Subscribe Section End Here */}
        </>
    );
};

export default Subscribe;