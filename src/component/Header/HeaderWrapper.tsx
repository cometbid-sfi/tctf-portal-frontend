"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
    const pathname = usePathname();
    const showHeader = pathname !== "/subscribe" && pathname !== "/subscribe/confirm";

    return showHeader ? <Header /> : null;
}
