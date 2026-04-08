import type {Metadata} from "next";
import React from "react";
import Header from "@/components/Layout/Header";
import ScrollObserver from "../components/Layout/inc/ScrollObserver";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import {
    siteDescription,
    siteName,
    siteTitle,
    siteUrlObject,
    socialImageAlt,
    socialImagePath,
} from "@/config/site";

import "@/styles/app.scss";

export const metadata: Metadata = {
    metadataBase: siteUrlObject,
    title: siteTitle,
    description: siteDescription,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/",
        siteName,
        type: "website",
        locale: "en_US",
        images: [
            {
                url: socialImagePath,
                alt: socialImageAlt,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteTitle,
        description: siteDescription,
        images: [
            {
                url: socialImagePath,
                alt: socialImageAlt,
            },
        ],
    },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={"no-js"} suppressHydrationWarning>
            <head>
                <meta name="apple-mobile-web-app-title" content="Portoflio" />
                <link rel="manifest" href="/site.webmanifest?v=20260408" />

                <script type="application/javascript" dangerouslySetInnerHTML={{
                    __html: `
                        document.documentElement.classList.remove('no-js'); document.documentElement.classList.add('js');

                        (function () {
                            const appearance = localStorage.getItem("appearance") || "system";
                            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

                            if (
                                appearance === "dark" ||
                                (appearance === "system" && prefersDark)
                            ) {
                                document.documentElement.classList.add("dark");
                            } else {
                                document.documentElement.classList.remove("dark");
                            }
                        })();
                    `
                }} />

                <Script id="theme-init" strategy="beforeInteractive">
                    {`
                        const theme = localStorage.getItem('theme');

                        if (theme === 'dark') {
                            document.documentElement.classList.add('dark');
                        }
                    `}
                </Script>
            </head>
            <body>
                <Header />
                <ScrollObserver />

                <main>{children}</main>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
