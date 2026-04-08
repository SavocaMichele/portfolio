import type {Metadata} from "next";
import React from "react";
import Header from "@/components/Layout/Header";
import ScrollObserver from "../components/Layout/inc/ScrollObserver";
import { Analytics } from "@vercel/analytics/next"

import "@/styles/app.scss";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Michele Savoca | Web Developer",
    description: "Personal portfolio of Michele Savoca, a passionate web developer specializing in React, Next.js and Laravel. Explore my projects, skills, and experience in building modern web applications.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={"no-js"} suppressHydrationWarning>
            <head>
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
            </body>
        </html>
    );
}
