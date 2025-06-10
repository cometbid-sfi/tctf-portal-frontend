// app/footer-menu/page.tsx
import { Suspense } from "react";
import FooterMenu from "./footermenucontent";

export default function FooterMenuPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FooterMenu />
        </Suspense>
    );
}
