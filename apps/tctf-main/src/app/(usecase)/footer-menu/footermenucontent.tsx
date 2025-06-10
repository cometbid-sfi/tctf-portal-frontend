// FooterMenu.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AltArrow from "../../../assets/Images/alt-arrow.svg";

const FooterMenu = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get("title") || "Page";

    return (
        <>
            <section className="banner-section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">{title}</h1>
                    </div>
                </div>
            </section>

            <section className="page-navigation-section mt-5">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="page-navigation">
                            <Link href="/">Home</Link>
                            <span><Image src={AltArrow} alt="Arrow" /></span>
                            <span>{title}</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FooterMenu;
